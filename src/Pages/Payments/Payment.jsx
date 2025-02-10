// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Grid, Box, CircularProgress } from "@mui/material";
// import axios from "axios";

// export const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { sessionId, sessionTime, sessionDate } = location.state || {};

//   useEffect(() => {
//     if (!sessionId || !sessionTime || !sessionDate) {
//       alert(
//         "Unable to load payment. Please check the session page. You might have missed something."
//       );
//       navigate("/error");
//       return;
//     }

//     const loadRazorpay = () => {
//       const options = {
//         key: "rzp_test_FRJjPt3hhMIY1I", // Replace with your Razorpay key
//         amount: 1000, // Amount in paise (e.g., 1000 = ₹10)
//         currency: "INR",
//         name: `RoyalMindFulness`,
//         description: "Test Transaction",
//         handler: function (response) {
//           console.log("Payment Response", response);
//           verifyPayment(response);
//         },
//         modal: {
//           ondismiss: function () {
//             navigate("/error");
//           },
//         },
//         prefill: {
//           name: "Anant",
//           email: "anant@example.com",
//           contact: "9999999999",
//         },
//         theme: {
//           color: "#1470af",
//         },
//       };

//       const rzp = new window.Razorpay(options);

//       rzp.open();

//       rzp.on("payment.failed", function (response) {
//         console.error("Payment Failed:", response);
//         navigate("/error");
//       });
//     };

//     loadRazorpay();
//   }, [navigate, sessionId, sessionTime, sessionDate]);

//   const verifyPayment = async (response) => {
//     const token =
//       "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMSwiZXhwIjoxNzM4OTI4NTM1fQ.jzUKAUSNUwdk6Wrpy58S7XQtyLgdsG0z-mSyflmNWc0 "; // Replace with a dynamically fetched token

//     try {
//       const res = await axios.post(
//         "https://be-royal-mindfulness.onrender.com/payments/verify_payment?payment_id=pay_PsPdRtpyOngMDU&amount=10&session_id=2&session_date=2025-02-06&session_time=12 : 00 PM",
//         // {
//         //   payment_id: response.razorpay_payment_id,
//         //   amount: 1000,
//         //   session_id: sessionId,
//         //   session_date: sessionDate,
//         //   session_time: sessionTime,
//         // },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Payment Verified:", res.data);
//       navigate("/success");
//     } catch (error) {
//       console.error(
//         "Error verifying payment:",
//         error.response?.data || error.message
//       );
//       navigate("/error");
//     }
//   };

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       style={{ height: "100vh" }}
//     >
//       <Box textAlign="center">
//         <CircularProgress />
//         <Box mt={2} fontSize="24px" fontFamily="lato">
//           Please wait while we redirect you.....
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Box, CircularProgress } from "@mui/material";
import axios from "axios";

export const Payment = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { sessionId, sessionTime, sessionDate } = location.state || {};

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    setToken(token);

    if (!sessionId || !sessionTime || !sessionDate) {
      alert(
        "Unable to load payment. Please check the session page. You might have missed something."
      );
      navigate("/error");
      return;
    }

    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        initializeRazorpay();
      };
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, [navigate, sessionId, sessionTime, sessionDate]);

  const initializeRazorpay = () => {
    const options = {
      key: "rzp_test_FRJjPt3hhMIY1I",
      amount: 1000,
      currency: "INR",
      name: `RoyalMindFulness`,
      description: "Test Transaction",
      handler: function (response) {
        console.log("Payment Response", response);
        verifyPayment(response);
      },
      modal: {
        ondismiss: function () {
          navigate("/error");
        },
      },
      // prefill: {
      //   name: "Anant",
      //   email: "anant@example.com",
      //   contact: "9999999999",
      // },
      theme: {
        color: "#1470af",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    rzp.on("payment.failed", function (response) {
      console.error("Payment Failed:", response);
      navigate("/error");
    });
  };

  // const headers = {
  //   Authorization: `Bearer ${token}`,
  //   "Content-Type": "application/json",
  // };

  const verifyPayment = async (response) => {
    try {
      const userToken = localStorage.getItem("user_token");

      console.log("soem", userToken);

      if (!userToken) {
        console.error("Token is missing in localStorage.");
        navigate("/error");
        return;
      }

      const headers = {
        token: `${userToken.trim()}`,
        "Content-Type": "application/json",
      };

      console.log("Sending Headers:", headers);

      const res = await axios.post(
        `https://be-royal-mindfulness.onrender.com/payments/verify_payment`,
        {
          payment_id: response.razorpay_payment_id,
          amount: 1000,
          session_id: sessionId,
          session_date: sessionDate,
          session_time: sessionTime,
        },
        { headers }
      );

      console.log("Payment DATA:", res.data);
      navigate("/success");
    } catch (error) {
      console.error("Error verifying payment:", error);
      console.error("Response Data:", error.response?.data);
      console.error("Status Code:", error.response?.status);
      console.error("Headers:", error.response?.headers);
      navigate("/error");
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Box textAlign="center">
        <CircularProgress />
        <Box mt={2} fontSize="24px" fontFamily="lato">
          Please wait while we verify Payment..
        </Box>
      </Box>
    </Grid>
  );
};
