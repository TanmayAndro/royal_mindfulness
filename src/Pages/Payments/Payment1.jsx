PAyment// import React, { useEffect } from "react";
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
//         "https://deedee-unchainable-optionally.ngrok-free.dev/payments/verify_payment?payment_id=pay_PsPdRtpyOngMDU&amount=10&session_id=2&session_date=2025-02-06&session_time=12 : 00 PM",
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

// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Grid, Box, CircularProgress } from "@mui/material";
// import axios from "axios";

// export const Payment = () => {
//   const [token, setToken] = useState("");
//   const [isProcessing, setIsProcessing] = useState(false); // New state to prevent multiple calls
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { sessionId, sessionTime, sessionDate } = location.state || {};

//   useEffect(() => {
//     const token = localStorage.getItem("user_token");
//     setToken(token);

//     if (!sessionTime || !sessionDate) {
//       alert(
//         "Unable to load payment. Please check the session page. You might have missed something."
//       );
//       navigate("/error");
//       return;
//     }

//     const loadRazorpayScript = () => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       script.onload = () => {
//         initializeRazorpay();
//       };
//       document.body.appendChild(script);
//     };

//     loadRazorpayScript();
//   }, [navigate, sessionId, sessionTime, sessionDate]);

//   const initializeRazorpay = () => {
//     const options = {
//       key: "rzp_test_FRJjPt3hhMIY1I",
//       amount: 1000,
//       currency: "INR",
//       name: `RoyalMindFulness`,
//       description: "Test Transaction",

//       handler: function (response) {
//         if (isProcessing) return; // Prevent multiple calls
//         setIsProcessing(true);
//         console.log("Payment Response", response);
//         verifyPayment(response);
//       },

//       modal: {
//         ondismiss: function () {
//           navigate("/error");
//         },
//       },

//       theme: {
//         color: "#1470af",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();

//     rzp.on("payment.failed", function (response) {
//       console.error("Payment Failed:", response);
//       navigate("/error");
//     });
//   };

//   const verifyPayment = async (response) => {
//     try {
//       const userToken = localStorage.getItem("user_token");

//       if (!userToken) {
//         console.error("Token is missing in localStorage.");
//         navigate("/error");
//         return;
//       }

//       const headers = {
//         token: `${userToken.trim()}`,
//         "Content-Type": "application/json",
//       };

//       const res = await axios.post(
//         `https://deedee-unchainable-optionally.ngrok-free.dev/payments/verify_payment`,
//         {
//           payment_id: response.razorpay_payment_id,
//           booking_start_date: sessionDate,
//           booking_start_time: sessionTime,
//         },
//         { headers: headers }
//       );

//       console.log("Payment DATA:", res.data);
//       navigate("/success");
//     } catch (error) {
//       console.error("Error verifying payment:", error);
//       navigate("/error");
//     } finally {
//       setIsProcessing(false);
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
//           Please wait while we verify Payment..
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Box, CircularProgress } from "@mui/material";
import axios from "axios";

export const Payment = () => {
  const isProcessing = useRef(false);
  const hasVerified = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { payload, token } = location.state || {};
  const sessionDate = payload?.from_date;
  const sessionTime = payload?.from_time;

  useEffect(() => {
    if (!token || !payload || !sessionDate || !sessionTime) {
      alert("Missing payment/session info, redirecting...");
      navigate("/error");
      return;
    }

    const loadRazorpayScript = () => {
      if (document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
        initializeRazorpay();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = initializeRazorpay;
      script.onerror = () => {
        alert("Failed to load payment gateway");
        navigate("/error");
      };
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, [navigate, payload, sessionDate, sessionTime, token]);

  const initializeRazorpay = () => {
    const options = {
      key: "rzp_test_FRJjPt3hhMIY1I",
      amount: 1000, // paise
      currency: "INR",
      name: "RoyalMindFulness",
      description: "Trainer Booking Payment",
      handler: (response) => {
        if (isProcessing.current || hasVerified.current) return;
        isProcessing.current = true;
        hasVerified.current = true;
        verifyPayment(response);
      },
      modal: {
        ondismiss: () => {
          navigate("/error");
        },
      },
      theme: {
        color: "#1470af",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    rzp.on("payment.failed", (response) => {
      alert("Payment failed. Please try again.");
      navigate("/error");
    });
  };

  // Check if slot is already booked before booking
  const checkExistingBooking = async () => {
    try {
      const headers = { token: token.trim() };
      const res = await axios.get(
        `https://deedee-unchainable-optionally.ngrok-free.dev/trainer_bookings/check_booking?from_date=${sessionDate}&from_time=${sessionTime}`,
        { headers }
      );
      // Expected: { exists: true/false }
      return res.data.exists;
    } catch (error) {
      console.error("Error checking existing booking:", error);
      return false; // On error, allow booking attempt (optional: you can choose to block)
    }
  };

  // Verify payment, then check & book trainer
  const verifyPayment = async (paymentResponse) => {
    try {
      const headers = {
        token: token.trim(),
        "Content-Type": "application/json",
      };

      // Verify payment first
      const verifyRes = await axios.post(
        `https://deedee-unchainable-optionally.ngrok-free.dev/payments/verify_payment`,
        {
          payment_id: paymentResponse.razorpay_payment_id,
          booking_start_date: sessionDate,
          booking_start_time: sessionTime,
        },
        { headers }
      );

      console.log("Payment Verified:", verifyRes.data);

      // Now check if slot is booked already
      const alreadyBooked = await checkExistingBooking();

      if (alreadyBooked) {
        alert(
          "This slot is already booked. Your payment will be refunded shortly."
        );
        navigate("/error");
        return;
      }

      // Slot free, proceed to book trainer
      await bookTrainer();
      alert("Booking successful!");
      navigate("/success");
    } catch (error) {
      console.error("Payment verification or booking error:", error);
      alert("Payment verification or booking failed. Please try again.");
      navigate("/error");
    } finally {
      isProcessing.current = false;
    }
  };

  // Call backend to create booking
  const bookTrainer = async () => {
    try {
      const headers = { token: token.trim() };
      const res = await axios.post(
        "https://deedee-unchainable-optionally.ngrok-free.dev/trainer_bookings",
        payload,
        { headers }
      );
      console.log("Booking API response:", res.data);
    } catch (error) {
      console.error("Booking API error:", error);
      alert("Booking failed after payment. Please contact support.");
      throw error;
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
          Please wait while we process your payment...
        </Box>
      </Box>
    </Grid>
  );
};
