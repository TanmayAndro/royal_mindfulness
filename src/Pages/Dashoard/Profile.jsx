import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  Box,
  styled,
  Avatar,
  TextField,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { FaRegEdit } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { profile_img } from "../../assests";
import { userprofile } from "../../API/ApiConfig";
import AlertComponent from "../../Components/alert";
import { InputField, AllStyle } from "../Login/login";

const config = require("../../config");

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [open, setOpen] = useState(false);
  const [errorData, setErrorData] = useState("");
  const [successData, setSuccessData] = useState("");
  const [editableData, setEditableData] = useState({});
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getuserinfo();
  }, []);

  const getuserinfo = () => {
    const token = localStorage.getItem("user_token");
    const userId = id;
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/${userprofile}/${userId}`, {
        headers: { token: token },
      })
      .then((response) => {
        setUserData(response.data.data.attributes);
        setEditableData(response.data.data.attributes);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const validateProfileData = () => {
    const errors = {};
    if (
      !editableData.first_name ||
      editableData.first_name.length > 20
    ) {
      errors.first_name = "First name is required.";
    }

    if (!editableData.last_name || editableData.last_name.length > 20) {
      errors.last_name = "Last name is required.";
    }

    if (!editableData.email) {
      errors.email = "Email is required.";
    }


    setErrors(errors);

    return Object.keys(errors).length === 0;
  };


const validateField = (name, value) => {
  let error = "";
  
  switch (name) {
    case "first_name":
      if (!value) {
        error = "First name is required";
      } else if (value.length > 20) {
        error = "First name should not exceed 20 characters";
      }
      break;
    case "last_name":
      if (!value) {
        error = "Last name is required";
      } else if (value.length > 20) {
        error = "Last name should not exceed 20 characters";
      }
      break;
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Invalid email address";
      }
      break;
    default:
      break;
  }

  return error;
};


const handleInputChange = (e) => {
  const { name, value } = e.target;
  
 
  setEditableData((prevData) => ({
    ...prevData,
    [name]: value,
  }));


  const error = validateField(name, value);
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: error,
  }));
};


  const handleSave = () => {
    if (validateProfileData()) {
      delete editableData.unique_id;
      const formattedData = {
        user: {
          ...editableData,
        },
      };
    }
  };
  const handleAlertClose = () => {
    setErrorData("");
  };

  if (!userData) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Box>
      {errorData != "" && (
        <AlertComponent
          errorData={errorData}
          handleClose={handleAlertClose}
          type={"error"}
        />
      )}
      {successData != "" && (
        <AlertComponent
          errorData={successData}
          handleClose={handleAlertClose}
          type={"success"}
        />
      )}
      <MainCard>
        <CardContent>
          <FirstBox>
            <IMGBox src={profile_img} alt="Profile" />
            <Box>
              {/* <ProfileName variant="h6"><b>{config.Alex_Meian}</b></ProfileName> */}
              <ProfileName variant="h6">
                <b>
                  {userData.first_name} {userData.last_name}
                </b>
              </ProfileName>
              <SubHeading>{config.Product_Manager}</SubHeading>
            </Box>
            <Box>
              <FaRegEdit
                cursor="pointer"
                size={22}
                onClick={() => setOpen(true)}
              />
            </Box>
          </FirstBox>
          <EmailInfoBox>
            <IoMailOutline style={{ width: "16px", height: "16px" }} />
            {/* <InfoContent>{config.email}: {config.profile_email}</InfoContent> */}
            <InfoContent>
              {config.email}: {userData.email}
            </InfoContent>
          </EmailInfoBox>
          <PhoneBox>
            <MdPhone style={{ width: "16px", height: "16px" }} />
            {/* <InfoContent>{config.Phone}: {config.Phone_Number}</InfoContent> */}
            <InfoContent>
              {config.Phone}: {userData.Phone_Number}
            </InfoContent>
          </PhoneBox>
          <AddressBox>
            <AiOutlineHome style={{ width: "16px", height: "16px" }} />
            <InfoContent>
              {config.Address}: {config.Profile_Address}
            </InfoContent>
          </AddressBox>
        </CardContent>
      </MainCard>
      
      <StyledDialog open={open} onClose={handleClose}>
  <DialogTitle>Edit Profile</DialogTitle>
  <DialogContent>
    <Typography style={AllStyle.textStyle}>
      {config.first_name}
    </Typography>
    <InputField
      name="first_name"
      placeholder={config.first_name_placeholder}
      variant="outlined"
      margin="dense"
      fullWidth
      value={editableData.first_name || ""}
      onChange={handleInputChange}
      error={!!errors.first_name}
      helperText={errors.first_name}
    />
    <Typography style={AllStyle.textStyle}>
      {config.last_name}
    </Typography>
    <InputField
      name="last_name"
      placeholder={config.last_name_placeholder}
      variant="outlined"
      margin="dense"
      fullWidth
      value={editableData.last_name || ""}
      onChange={handleInputChange}
      error={!!errors.last_name}
      helperText={errors.last_name}
    />
    <Typography style={AllStyle.textStyle}>
      {config.email}
    </Typography>
    <InputField
      name="email"
      placeholder={config.placeHolderEmail}
      variant="outlined"
      margin="dense"
      fullWidth
      value={editableData.email || ""}
      onChange={handleInputChange}
      InputProps={{ readOnly: true }}
      error={!!errors.email}
      helperText={errors.email}
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} color="secondary">
      Cancel
    </Button>
    <Button
      onClick={handleSave}
      sx={{
        backgroundColor: "green",
        color: "white",
        "&:hover": {
          backgroundColor: "darkgreen",
        },
      }}
    >
      Save
    </Button>
  </DialogActions>
</StyledDialog>

    </Box>
  );
};
export default Profile;

const MainCard = styled(Card)({
  margin: "2px 0px 6px 20px",
  borderRadius: "20px",
  width: "318px",
  "@media (max-width:900px)": {
    width: "270px",
    margin: "1px 0px 4px 0px",
    borderRadius: "18px",
  },
  "@media (max-width:1240px)": {
    width: "290px",
  },
});

const IMGBox = styled(Avatar)({
  width: "84px",
  height: "84px",
  borderRadius: "50px",
  "@media (max-width:900px)": {
    width: "70px",
    height: "70px",
    borderRadius: "40px",
  },
});
const FirstBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});
const ProfileName = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "14px",
  fontWeight: 700,
  marginTop: "20px",
  "@media (max-width:1000px)": {
    fontSize: "13px",
    fontWeight: 600,
    marginTop: "18px",
  },
  "@media (max-width:1100px)": {
    marginTop: "10px",
  },
  "@media (max-width:1250px)": {
    marginTop: "10px",
  },
});
const SubHeading = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "18px",
  "@media (max-width:1000px)": {
    fontSize: "11px",
    fontWeight: 300,
    lineHeight: "14px",
  },
});
const EmailInfoBox = styled(Box)({
  marginTop: "10px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});
const InfoContent = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "16px",
  "@media (max-width:900px)": {
    fontSize: "11px",
    fontWeight: 350,
    lineHeight: "12px",
  },
});
const PhoneBox = styled(Box)({
  gap: "8px",
  marginTop: "10px",
  display: "flex",
});
const AddressBox = styled(Box)({
  marginTop: "10px",
  display: "flex",
  gap: "8px",
});
const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "12px",
    width: "400px",
    fontFamily: "Poppins",
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.down('sm')]: {
      width: "300px",        
      borderRadius: "8px"
    },
  },
}));
