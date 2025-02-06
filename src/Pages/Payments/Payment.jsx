import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";

export const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { sessionId, sessionTime, sessionDate } = location.state || {};

  useEffect(() => {
    const loadRazorpay = () => {
      const options = {
        key: "rzp_test_FRJjPt3hhMIY1I",
        amount: 1000,
        currency: "INR",
        name: "RoyalMindFulness",
        description: "Test Transaction",
        handler: function (response) {
          console.log(response);
          navigate("/success");
        },
        modal: {
          ondismiss: function () {
            navigate("/error");
          },
        },
        prefill: {
          name: "Anant",
          email: "anant@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.open();

      rzp.on("payment.failed", function (response) {
        navigate("/error");
      });
    };

    loadRazorpay();
  }, [navigate]);

  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignitems: " center",
          FontSize: "24px",
          fontFamily: "lato",
          height: "100vh",
        }}
      >
        Please Wait while we redirect you to Payment Gateway.....
      </Box>
    </Grid>
  );
};
