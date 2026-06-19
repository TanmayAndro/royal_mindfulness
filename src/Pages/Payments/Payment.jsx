import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Box, CircularProgress } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";

export const Payment = () => {
  const isProcessing = useRef(false);
  const hasVerified = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { payload, token } = location.state || {};
  const sessionDate = payload?.from_date;
  const sessionTime = payload?.from_time;
  const PAYMENT_AMOUNT_PAISE = process.env.REACT_APP_PAYMENT_AMOUNT_USD; 

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
      key: process.env.REACT_APP_RAZORPAY_KEY, // ✔ Razorpay key from env, 
      amount: PAYMENT_AMOUNT_PAISE, // ✔ Amount in paise
      currency: "USD",             // ✔ Should be INR
      name: "RoyalMindFulness",
      description: "Trainer Booking Payment",

      handler: (response) => {
        if (isProcessing.current || hasVerified.current) return;
        isProcessing.current = true;
        hasVerified.current = true;
        verifyPayment(response);
      },

      modal: {
        ondismiss: () => navigate("/error"),
      },

      theme: { color: "#1470af" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    rzp.on("payment.failed", (response) => {
      alert("Payment failed. Please try again.");
      navigate("/error");
    });
  };

  // -------------------------------------------------------
  // 🔵 Step 2: Verify Payment
  // -------------------------------------------------------
  const verifyPayment = async (paymentResponse) => {
    try {
      const userToken = localStorage.getItem("user_token");

      if (!userToken) {
        alert("User token missing! Please log in again.");
        return navigate("/error");
      }

      const headers = {
        Authorization: `token ${userToken.trim()}`,
        "Content-Type": "application/json",
      };

      const body = {
        payment_id: paymentResponse.razorpay_payment_id,
        amount: PAYMENT_AMOUNT_PAISE,             // ✔ MUST MATCH Razorpay amount
        booking_start_date: sessionDate,
        booking_start_time: sessionTime,
        time_zone:payload.timezone,
        mobile_number:payload.phone_number,
        address:payload.address

      };    
      
      const verifyRes = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/payments/verify_payment`,
        body,
        { headers }
      );

      console.log("Payment verified:", verifyRes.data);

      await bookTrainer();
      navigate("/success");

    } catch (error) {
      console.error("❌ Payment verification failed:", error);
      alert("Payment verification or booking failed.");
      navigate("/error");
    } finally {
      isProcessing.current = false;
    }
  };

  // -------------------------------------------------------
  // 🔵 Step 3: Book Trainer
  // -------------------------------------------------------
  const bookTrainer = async () => {
    try {
      const headers = { token: token.trim() };

      const res = await axios.post(
        // "https://deedee-unchainable-optionally.ngrok-free.dev/trainer_bookings",
        `${process.env.REACT_APP_BASE_URL}/trainer_bookings`,
        payload,
        { headers }
      );

      console.log("Booking API response:", res.data);

      const bookingId = res.data?.booking?.id;
      const booking_start_date = res.data?.booking?.booking_start_date;
      const booking_start_time = res.data?.booking?.booking_start_time;

      if (bookingId && booking_start_date && booking_start_time) {
        await sendMeetingLink(bookingId, booking_start_date, booking_start_time);
      }

    } catch (error) {
      console.error("Booking API error:", error);
      alert("Booking failed after payment.");
      throw error;
    }
  };

  // -------------------------------------------------------
  // 🔵 Step 4: Send Meeting Link
  // -------------------------------------------------------
  const sendMeetingLink = async (bookingId, booking_start_date, booking_start_time) => {
    try {
      const meetingLink = `https://meet.jit.si/session-${bookingId}`;

      localStorage.setItem("meeting_link", meetingLink);

      const bookingDate = dayjs(booking_start_date).format("YYYYMMDD");
      const bookingTime = dayjs(booking_start_time, "HH:mm:ss").format("HHmmss");
      const roomTime = `${bookingDate}_${bookingTime}`;

      const appId = "vpaas-magic-cookie-40823772f4724e1e9143d917b98679dc";
      const roomName = `${appId}/${roomTime}`;

      const headers = {
        token: token.trim(),
        "Content-Type": "application/json",
      };

      await axios.post(
        // "https://deedee-unchainable-optionally.ngrok-free.dev/trainer_bookings/send_meeting_link",
        `${process.env.REACT_APP_BASE_URL}/trainer_bookings/send_meeting_link`,
        { booking_id: bookingId, meeting_link: roomName },
        { headers }
      );

      console.log("Meeting link sent:", meetingLink);

    } catch (error) {
      console.error("Meeting link error:", error);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
      <Box textAlign="center">
        <CircularProgress />
        <Box mt={2} fontSize="24px" fontFamily="Inter">
          Please wait while we process your payment...
        </Box>
      </Box>
    </Grid>
  );
};

