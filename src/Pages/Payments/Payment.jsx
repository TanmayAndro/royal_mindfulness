import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Box } from '@mui/material';

export const Payment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loadRazorpay = () => {
      const options = {
        key: 'rzp_test_DvWTm5aBJqDqJc', 
        amount: 1000, // Example amount in paise (10000 paise = ₹100)
        currency: 'INR',
        name: 'RoyalMindFulness',
        description: 'Test Transaction',
        handler: function (response) {
            console.log(response)
          navigate('/success');
        },
        modal: {
          ondismiss: function () {
            navigate('/error');
          }
        },
        prefill: {
          name: 'Anant', 
          email: 'anant@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new (window).Razorpay(options);

      rzp.open();

      rzp.on('payment.failed', function (response) {
        navigate('/error');
      });
    };

    loadRazorpay();
  }, [navigate]);

  return (
   <Grid>
    <Box sx={{ display:'flex', justifyContent: 'center', alignitems:' center', FontSize:'24px' , fontFamily:'lato'}}>
        Please Wait while we redirect you to Payment Gateway.....
    </Box>
   </Grid>
  );
};
