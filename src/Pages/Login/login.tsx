import React, { useRef, useState } from "react";
import "./login.css";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Dialog,
  IconButton,
  styled,
  Button,
  TextField,
  Grid,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { facebook_logo, google_logo } from "../../assests";
import { Link } from "react-router-dom";
import Login_register_firstPart from "../../Components/login_register_firstPart";
import axios from "axios";
import { loginApi } from "../../API/ApiConfig";
import { APPID } from "../../API/ApiConfig";
import AlertComponent from "../../Components/alert";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { trackEvent } from "../../analitics/analytics";
import emailIcon from "../../Assests/emailIcon.png";
import FacebookLogin from "@greatsumini/react-facebook-login";
import FacebookIcon from "@mui/icons-material/Facebook";
const config = require("../../config");

interface GoogleUserData {
  email: string;
  familyName: string;
  givenName: string;
  emailVerified: boolean;
}

interface LoginProps {
  closeModal?: () => void;
  switchToRegister?: () => void;
}

 

const Login: React.FC<LoginProps> = ({ closeModal, switchToRegister }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loader state
  const [errorData, setErrorData] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [fbLoading, setFbLoading] = useState(false);

  const fetchLogin = async (email: string, password: string) => {
    const data = {
      user: {
        email: email,
        password: password,
      },
    };
    setLoading(true);
    try {
      const response = await axios.post(
        "https://deedee-unchainable-optionally.ngrok-free.dev/" + loginApi,
        data,
      );
      localStorage.setItem("user_token", response.data.meta.token);

      localStorage.setItem(
        "meet_link",
        response.data.data.attributes.meeting_link,
      );
      localStorage.setItem(
        "first_name",
        response.data.data.attributes.first_name,
      );
      localStorage.setItem(
        "last_name",
        response.data.data.attributes.last_name,
      );
      localStorage.setItem(
        "last_name",
        response.data.data.attributes.phone_number,
      );
      localStorage.setItem("email", response.data.data.attributes.email);
      localStorage.setItem("user_id", response.data.data.id);
      localStorage.setItem("is_teacher", response.data.meta.is_teacher);

      const redirect = localStorage.getItem("redirectAfterLogin");

      if (response.status === 201) {
        saveLoginData(response.data);

        if (closeModal) {
          closeModal();
        }
        navigate("/");
      }

      if (redirect === "calendly") {
        localStorage.removeItem("redirectAfterLogin");
        window.open("https://calendly.com/royalmindfulness/30min", "_blank");
        navigate("/");
      } else if (redirect === "rozerpay") {
        localStorage.removeItem("redirectAfterLogin");
        window.open(
          "https://pages.razorpay.com/pl_RJ40RFXQGpJ4w5/view",
          "_blank",
        );
        navigate("/");
      } else {
        navigate("/");
      }
    } catch (err: any) {
      setErrorData(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const [data, setData] = useState({
    email: "",
    emailError: false,
    password: "",
    passwordError: false,
    emailErrorMessage: "",
  });

  const [userGoogleData, setUserGoogleData] = useState({
    email: "",
    familyName: "",
    givenName: "",
    emailVerified: false,
  });

  const [forgotEmailError, setForgotEmailError] = useState({
    error: false,
    message: "",
  });

  const [enablePasswordField, setenablePasswordField] = useState(true);
  const handleVisiblPassword = () => {
    return enablePasswordField ? "password" : "text";
  };

  const handleForgotEmailChange = (value: string) => {
    setForgotEmail(value);
    if (!value) {
      setForgotEmailError({ error: true, message: "Enter a value" });
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ) {
      setForgotEmailError({ error: true, message: "Enter a valid email" });
    } else {
      setForgotEmailError({ error: false, message: "" });
    }
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  const handleForgotPasswordSubmit = async () => {
    if (!forgotEmail) {
      setForgotEmailError({ error: true, message: "Enter a value" });
      return;
    }

    try {
      const response = await axios.post(
        // `${process.env.REACT_APP_BASE_URL}/forgot_password`,
        "https://deedee-unchainable-optionally.ngrok-free.dev/forgot_password",
        {
          email: forgotEmail,
        },
      );

      setForgotEmail("");
      setIsSuccessModalOpen(true);
      if (response.status === 200) {
        if (closeModal) {
          closeModal();
        }
        navigate("/");
      }
    } catch (error: any) {
      setForgotEmail("");
      console.error("Error sending password reset email:", error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  const handlePassword = (value: string) => {
    setData({ ...data, password: value });

    // Standard password validation:
    const minLength = value.length >= 8;
    const hasNumber = /\d/.test(value);
    const hasSpecial = /[@$!%*?&^#()\-_=+{}[\]|;:'",.<>/\\]/.test(value);

    if (!value.trim()) {
      setData({
        ...data,
        password: value,
        passwordError: true,
      });
      return false;
    }

    if (!minLength || !hasNumber || !hasSpecial) {
      setData({
        ...data,
        password: value,
        passwordError: true,
      });
      return false;
    }

    setData({
      ...data,
      password: value,
      passwordError: false,
    });

    return true;
  };

  const handleEmail = (value: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value) {
      setData((prev) => ({
        ...prev,
        email: value,
        emailError: true,
        emailErrorMessage: "Enter a value",
      }));
      return false;
    } else if (!emailPattern.test(value)) {
      setData((prev) => ({
        ...prev,
        email: value,
        emailError: true,
        emailErrorMessage: "Enter a valid email",
      }));
      return false;
    } else {
      setData((prev) => ({
        ...prev,
        email: value,
        emailError: false,
        emailErrorMessage: "",
      }));
      return true;
    }
  };

  const handleValidtion = () => {
    const resultPassword = handlePassword(data.password);
    const resultEmail = handleEmail(data.email);

    if (resultEmail && resultPassword) {
      fetchLogin(data.email, data.password);
    }
  };

  const handleClose = () => {
    setErrorData("");
  };

  /** ======================Google Login  ====================== */

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      const decoded: any = jwtDecode(credentialResponse.credential);

      const timestamp = Date.now();
      const safeName = `${decoded.given_name}-${decoded.family_name}`
        .replace(/\s+/g, "-")
        .toLowerCase();

      const meetingRoom = `deedee-user-${safeName}-${timestamp}`;
      const meet_link = `https://meet.jit.si/${meetingRoom}`;

      const userData = {
        email: decoded.email,
        family_name: decoded.family_name,
        given_name: decoded.given_name,
        email_verified: decoded.email_verified,
        meeting_link: meet_link,
        provider: "google",
      };

      const response = await axios.post(
        "https://deedee-unchainable-optionally.ngrok-free.dev/google_login",
        { user: userData },
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        },
      );

      // ✅ fallback meeting link
      localStorage.setItem("meet_link", meet_link);

      saveLoginData(response.data);

      if (closeModal) {
        closeModal();
      }
    } catch (error: any) {
      console.error("❌ Google login failed:", error);

      alert(
        error?.response?.data?.message ||
          "Google login failed, please try again.",
      );
    }
  };
   


/** ============Facebook auth login=============== */

// ✅ FINAL handleFacebookLogin - ALL USERS PRODUCTION READY
 

  const handleFacebookLogin = (): void => {
    // Safety checks
    if (fbLoading || loading) {
      console.log("⏳ Already loading...");
      return;
    }

    if (!window.FB) {
      console.log("🔄 Loading Facebook SDK...");
      loadFacebookSDK();
      return;
    }

    if (typeof (window.FB as any).login !== 'function') {
      console.log("❌ FB.login not ready, retrying...");
      setTimeout(handleFacebookLogin, 1000);
      return;
    }

    console.log("🚀 Starting Facebook login...");
    setFbLoading(true);

    // FB Login call
    (window.FB as any).login(
      (response: any) => {
        console.log("📱 FB Response:", response);
        
        if (response.authResponse) {
          const accessToken = response.authResponse.accessToken;
          console.log("✅ Access Token:", accessToken.substring(0, 20) + "...");
          handleFacebookSuccess({ accessToken });
        } else {
          console.log("❌ Cancelled/Error:", response.status);
          setFbLoading(false);
          if (response.status === 'not_authorized') {
            alert("Please allow email permission.");
          }
        }
      },
      { scope: 'email' }
    );
  };

  // ✅ FB SDK Loader (called automatically)
  const loadFacebookSDK = (): void => {
    if (document.getElementById('facebook-jssdk')) {
      console.log("✅ FB SDK already loading...");
      setTimeout(handleFacebookLogin, 1500);
      return;
    }

    console.log("📥 Loading FB SDK...");
    
    // Load SDK
    const script = document.createElement('script') as HTMLScriptElement;
    script.id = 'facebook-jssdk';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    
    script.onload = () => {
      console.log("✅ FB SDK loaded");
      window.fbAsyncInit = () => {
        (window.FB as any).init({
          appId: APPID,  // Tumhara ApiConfig se
          cookie: true,
          xfbml: true,
          version: '20.0'  // Stable version
        });
        console.log("✅ FB SDK Initialized:", APPID);
        setTimeout(handleFacebookLogin, 500);
      };
    };
    
    document.head.appendChild(script);
  };

  const handleFacebookSuccess = async (fbResponse: any) => {
    try {
      const accessToken = fbResponse.accessToken;

      // ✅ FIXED: v20.0 Graph API + ALL fields (name bhi milega)
      const fbUserRes = await axios.get(
        `https://graph.facebook.com/v20.0/me?fields=id,name,email,first_name,last_name&access_token=${accessToken}`,  // ✅ v20.0 + all fields
        { timeout: 10000 }
      );

      const profile = fbUserRes.data;
      console.log("✅ Facebook Profile (COMPLETE):", profile);

      // ✅ Email validation
      if (!profile.email) {
        alert("Facebook email not available. Please use another method.");
        return;
      }

      // ✅ Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(profile.email)) {
        alert("Invalid email format from Facebook.");
        return;
      }

      // ✅ Generate meeting link (your logic - perfect)
      const timestamp = Date.now();
      const emailHash = btoa(profile.email).slice(0, 8);
      const meetingRoom = `deedee-${emailHash}-${timestamp}`;
      const meet_link = `https://meet.jit.si/${meetingRoom}`;

      // ✅ COMPLETE userData (name bhi add kiya backend ke liye)
      const userData = {
        email: profile.email.toLowerCase().trim(),
        given_name: profile.first_name || '',           // ✅ Backend expects this
        family_name: profile.last_name || '',           // ✅ Backend expects this  
        email_verified: true,
        meeting_link: meet_link,
        provider: "facebook",
        // ✅ Extra fields for your app
        id: profile.id,
        name: profile.name,
      };

      console.log("✅ Complete userData for backend:", userData);

      const apiResponse = await axios.post(
        "https://deedee-unchainable-optionally.ngrok-free.dev/google_login",
        { user: userData },
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
          timeout: 15000,
        }
      );


      // ✅ Local storage (your exact logic)
      localStorage.setItem("meet_link", meet_link);
      localStorage.setItem("user_email", profile.email);
      localStorage.setItem("first_name", profile.first_name || '');
      localStorage.setItem("last_name", profile.last_name || '');

      // ✅ Your existing saveLoginData
      saveLoginData(apiResponse.data);

      if (closeModal) {
        closeModal();
      }

    } catch (error: any) {
      console.error("❌ Facebook login failed:", error);
      
      const errorMsg = 
        error?.response?.data?.message ||
        (error.message && error.message.includes("timeout")) 
          ? "Facebook response timeout. Please retry." 
          : "Facebook login failed. Please try again.";

      alert(errorMsg);
    }
  };


  /** ====================== Store Login Data ====================== */

  const saveLoginData = (data: any) => {
    try {
      // ✅ TOKEN
      const token = data?.meta?.token || data?.token || "";
      if (token) {
        localStorage.setItem("user_token", token);
      }

      // ✅ USER OBJECT (handle all cases)
      const attributes = data?.data?.attributes || {};
      const user = data?.user || {};

      // ✅ BASIC USER INFO
      localStorage.setItem(
        "first_name",
        attributes.first_name || user.first_name || "",
      );

      localStorage.setItem("last_name", attributes.last_name || "");

      localStorage.setItem("email", attributes.email || user.email || "");

      localStorage.setItem("user_id", data?.data?.id || user.id || "");

      // ✅ PHONE NUMBER (FIXED BUG)
      if (attributes.phone_number) {
        localStorage.setItem("phone_number", attributes.phone_number);
      }

      // ✅ TEACHER FLAG (IMPORTANT)
      if (data?.meta?.is_teacher !== undefined) {
        localStorage.setItem("is_teacher", data.meta.is_teacher);
      }

      // ✅ MEETING LINK (backend OR frontend fallback)
      const meetingLink =
        attributes.meeting_link || localStorage.getItem("meet_link");

      if (meetingLink) {
        localStorage.setItem("meet_link", meetingLink);
      }

      // ✅ OPTIONAL EXTRA FIELDS (future safe)
      if (attributes.meeting_link) {
        localStorage.setItem("meeting_link_backend", attributes.meeting_link);
      }

      // ✅ REDIRECT LOGIC (UNCHANGED)
      const redirect = localStorage.getItem("redirectAfterLogin");

      if (redirect === "calendly") {
        localStorage.removeItem("redirectAfterLogin");
        window.open("https://calendly.com/royalmindfulness/30min", "_blank");
      } else if (redirect === "rozerpay") {
        localStorage.removeItem("redirectAfterLogin");
        window.open(
          "https://pages.razorpay.com/pl_RJ40RFXQGpJ4w5/view",
          "_blank",
        );
      }

      // ✅ FINAL NAVIGATION
      navigate("/");
    } catch (error) {
      console.error("❌ Error in saveLoginData:", error);
    }
  };
  return (
    <>
      <MainGrid container>
        {errorData != "" && (
          <AlertComponent
            errorData={errorData}
            handleClose={handleClose}
            type={"error"}
          />
        )}
        <Login_register_firstPart />

        <SecondGrid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {isForgotPassword ? (
            <MainBox>
              <Typography style={AllStyle.heading}>Enter Your Email</Typography>
              <SecondBox style={AllStyle.secondBox}>
                <Typography style={AllStyle.textStyle}>Email</Typography>
                <InputField
                  placeholder="Enter your email"
                  error={forgotEmailError.error}
                  variant="outlined"
                  value={forgotEmail}
                  onChange={(e) => handleForgotEmailChange(e.target.value)}
                  helperText={data.emailError && data.emailErrorMessage}
                />
                <ButtonStyle
                  variant="contained"
                  style={AllStyle.btnStyle}
                  onClick={handleForgotPasswordSubmit}
                >
                  Submit
                </ButtonStyle>
                <Typography
                  style={{
                    ...AllStyle.boldStyle,
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                  onClick={() => setIsForgotPassword(false)}
                >
                  Back to Login
                </Typography>
              </SecondBox>
            </MainBox>
          ) : (
            <MainBox>
              <Typography style={AllStyle.heading}>
                {config.main_heading_login}
              </Typography>
              <SecondBox style={AllStyle.secondBox}>
                {/* <Typography style={AllStyle.smallHeading}>
        {config.welcomeHeading}
        </Typography> */}

                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Box>
                    {/* GOOGLE LOGIN */}
                    <GoogleLogin
                      onSuccess={handleGoogleSuccess}
                      onError={() => {
                        console.log("❌ Google Login Failed");
                        alert("Google login failed, please try again.");
                      }}
                    />

                     {/* <FacebookLogin
                      appId={APPID}
                      fields="id,name,email"
                      onSuccess={(response) => {
                        console.log("Facebook Login Success:", response);
                        handleFacebookSuccess(response);
                      }}
                      onFail={(error) => {
                        console.log("Facebook Login Failed:", error);
                      }}
                      render={({ onClick }) => (
                        <Button
                          onClick={onClick}
                          variant="outlined"
                          startIcon={<FacebookIcon />}
                          sx={{
                            textTransform: "none",
                            borderColor: "#dadce0",
                            color: "#3b5998",
                            backgroundColor: "#fff",
                            padding: "6px 12px",
                            fontSize: "14px",
                            marginTop: "10px",
                            "&:hover": {
                              backgroundColor: "#f5f7fb",
                              borderColor: "#bebfc4",
                            },
                          }}
                        >
                          Continue with Facebook
                        </Button>
                      )}
                    /> */}

                   <FacebookLogin
                      appId={APPID}
                      fields="id,name,email,first_name,last_name"  // ✅ Tumhare saare fields
                      scope="email"                                // ✅ Basic permission only
                      onSuccess={(response) => {
                        console.log("✅ Facebook Login Success:", response);
                        handleFacebookSuccess(response);
                      }}
                      onFail={(error) => {
                        console.error("❌ Facebook Login Failed:", error);
                      }}
                      render={({ onClick }) => (
                        <Button
                          onClick={onClick}
                          variant="outlined"
                          startIcon={<FacebookIcon />}
                          sx={{
                            textTransform: "none",
                            borderColor: "#dadce0",
                            color: "#3b5998",
                            backgroundColor: "#fff",
                            padding: "6px 12px",
                            fontSize: "14px",
                            marginTop: "10px",
                            "&:hover": {
                              backgroundColor: "#f5f7fb",
                              borderColor: "#bebfc4",
                            },
                          }}
                        >
                          Continue with Facebook
                        </Button>
                      )}
                    />

                  </Box>
                </Box>
                <Box
                  sx={{ width: { md: "65%" } }}
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#CBD5E1",
                    marginBlock: "16px",
                  }}
                ></Box>

                <Typography style={AllStyle.textStyle}>
                  {config.email}
                </Typography>
                <InputField
                  placeholder={config.placeHolderEmail}
                  error={data.emailError}
                  variant="outlined"
                  data-test-id="emailtest"
                  value={data.email}
                  onChange={(e) => {
                    handleEmail(e.target.value);
                  }}
                  helperText={data.emailError && data.emailErrorMessage}
                />
                <Typography style={AllStyle.textStyle}>
                  {config.password}
                </Typography>
                <InputField
                  error={data.passwordError}
                  helperText={
                    data.passwordError &&
                    "Password must be 8+ chars, include 1 number & 1 special character"
                  }
                  style={{ marginBottom: "1rem" }}
                  placeholder={config.placeHolderPassword}
                  data-test-id="txtInputPassword"
                  type={handleVisiblPassword()}
                  // fullWidth={true}
                  value={data.password}
                  variant="outlined"
                  onChange={(e: any) => {
                    handlePassword(e.target.value);
                  }}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setenablePasswordField(!enablePasswordField);
                        }}
                        edge="end"
                      >
                        {enablePasswordField ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    ),
                  }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => {
                    handleValidtion();
                  }}
                  disabled={loading}
                  startIcon={loading && <CircularProgress size={20} />}
                >
                  {loading ? "Logging in..." : config.labelTitle}
                </Button>

                <Typography
                  style={{
                    ...AllStyle.boldStyle,
                    display: "flex",
                    justifyContent: "end",
                    lineHeight: "19.2px",
                    cursor: "pointer",
                    marginTop: "5%",
                    marginBottom: "5%",
                  }}
                  onClick={() => setIsForgotPassword(true)}
                >
                  Forgot password ?
                </Typography>
                <Typography
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#0A2239",
                    lineHeight: "19.2px",
                  }}
                >
                  {config.haveAccount}{" "}
                  <span
                    onClick={switchToRegister}
                    style={{
                      ...AllStyle.boldStyle,
                      cursor: "pointer",
                      lineHeight: "24px",
                      textDecoration: "none",
                    }}
                  >
                    {config.labelTitleSignUp}
                  </span>
                </Typography>
              </SecondBox>
            </MainBox>
          )}
        </SecondGrid>
      </MainGrid>
      <Dialog
        open={isSuccessModalOpen}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") return;
        }}
        disableEscapeKeyDown
        PaperProps={{
          style: {
            borderRadius: "15px",
            boxShadow: "29px",
          },
        }}
      >
        <Box
          sx={{
            padding: "3rem",
            textAlign: "center",
            boxShadow: 24,
            borderRadius: "10px",
          }}
        >
          <img
            src={emailIcon}
            style={{ height: "50px", width: "50px", marginBottom: "10px" }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: "19px",
              mb: 2,
            }}
          >
            Check Your email
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 400, fontSize: "16px" }}>
            We have sent instruction on how to reset your password
          </Typography>
          <Button
            variant="contained"
            onClick={handleCloseSuccessModal}
            sx={{
              mt: 3,
              textTransform: "none",
              fontWeight: "bold",
              width: { xs: "100%", sm: "130px" },
              height: "40px",
              backgroundColor: "#1470AF",
              borderRadius: "34px",
              "&:hover": { backgroundColor: "#1470AF" },
            }}
          >
            Okay
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export const SecondBox = styled(Box)({
  maxWidth: "360px",

  marginTop: "40px",
  "@media (max-width:390px)": {
    paddingInline: "10px",
  },
  "@media (max-width:320px)": {
    justifyContent: "center",
  },
});

export const ButtonStyle = styled(Button)({
  minWidth: "360px",
  "@media (max-width:380px)": {
    minWidth: "200px",
  },
});

export const FirstBOx = styled(Grid)({
  display: "flex",

  "@media (max-width:899px)": {
    display: "none",
  },
});

export const AllStyle = {
  smallHeading: {
    color: "#0A2239",
    marginBottom: "30px",
    fontWeight: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    lineHeight: "24px",
  },
  errorTextStyle: {
    color: "#DC2626",
    fontSize: "12px",

    fontWeight: 400,
    lineHeight: "18px",
  },
  textStyle: {
    fontSize: "14px",
    fontWeight: 700,
    marginBottom: "4px",
    color: "#0A2239",

    lineHeight: "22px",
  },

  boldStyle: {
    color: "#1470AF",
    fontSize: "16px",

    fontWeight: 700,
  },
  btnStyle: {
    borderRadius: "8px",
    height: "56px",
    lineHeight: "24px",
    background: "#1470AF",
    textTransform: "inherit" as "inherit",
    color: "white",

    fontSize: "16px",
    fontWeight: 700,
    marginBottom: "10px",
  },
  popup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    color: "#0F172A",
    borderRadius: "4px",
    width: "362px",
    height: "42px",
    fontWeight: 400,
    textAlign: "center",

    fontSize: "16px",
    lineHeight: "24px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  heading: {
    color: "#0A2239",
    textAlign: "center" as "center",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "32px",
    marginBottom: "8px",

    letterSpacing: "-0.12px",
  },

  secondBox: {
    flexDirection: "column" as "column",
    display: "flex",
    flexWrap: "Wrap" as "wrap",
  },
};

export const DiologStyle = styled(Dialog)({
  "& .MuiDialog-paperWidthSm": {
    maxWidth: "500px",
    minWidth: "500px",
    borderRadius: "8px 8px 32px 8px",
  },
  "@media (max-width:722px)": {
    "& .MuiDialog-paperWidthSm": {
      minWidth: "unset",
      borderRadius: "8px 8px 32px 8px",
    },
  },
});
export const MainGrid = styled(Grid)({
  // minHeight: "calc(100vh - 180px)",
  // maxHeight: "calc(100vh - 180px)",
  // height: "100vh",
  "@media (max-width:899px)": {
    maxHeight: "unset",
    height: "100%",
  },
  "@media (max-width:722px)": {
    marginTop: "20px",
  },
});
export const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginBlock: "auto",
  alignItems: "center",
  paddingBlock: "5px",

  "@media (max-width:959px)": {
    paddingTop: "25px",
    paddingBottom: "55px",
  },
  "@media (max-width:320px)": {
    alignItems: "center",
  },
});
export const SecondGrid = styled(Grid)({
  //overflowY: "scroll",
  // height: "calc(100vh - 180px)",
  // "&::-webkit-scrollbar": {
  //   width: "4px",
  // },
  // "&::-webkit-scrollbar-track": {
  //   "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  //   borderRadius: "10px",
  // },
  // "&::-webkit-scrollbar-thumb": {
  //   backgroundColor: "#848FAC80",
  //   borderRadius: "10px",
  // },
  "@media (max-width:899px)": {
    height: "unset",
    overflowY: "unset",
  },
  "@media (max-width:450px)": {
    paddingInline: "20px",
  },
});
export const InputField = styled(TextField)(
  ({ disabled, textstyle, textColor }: any) => ({
    marginBottom: "16px",

    "& input::placeholder": {
      color: "#94A3B8",

      fontSize: "16px",
      opacity: 1,
      fontWeight: 400,
      lineHeight: "19px",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#CBD5E1",
      },
      "&.Mui-focused fieldset": {
        borderWidth: "1px",
        borderColor: "#CBD5E1",
      },
    },
    "& .MuiInputBase-root": {
      color: textColor ?? "#334155",
    },
    "& .MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline": {
      borderColor: "#CBD5E1",
      borderWidth: "1px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#CBD5E1",
      borderWidth: "1px",
      borderRadius: "8px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "12px 8px",
    },
    "& .MuiInputBase-input[type='date']": {
      lineHeight: "19.2px",
      textTransform: "uppercase",
      color: textstyle === true ? "#94A3B8" : "#334155",
    },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: disabled ? "#F87171" : "#DC2626",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#DC2626",
      fontSize: "12px",

      fontWeight: 400,
      lineHeight: "18px",
    },
    "& .MuiFormHelperText-contained": {
      marginLeft: "0px",
      marginRight: "0px",
    },
    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #CBD5E1",
    },
  }),
);
export default Login;
