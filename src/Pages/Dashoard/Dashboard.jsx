import React from 'react';
import { Grid, Box, styled } from '@mui/material';
import Profile from './Profile';
import PaymentHistory from './PaymentHistory';
import TopPerformers from './TopPerformers';
import UserBatchPerformance from './UserBatchPerformance';
import Header from './Header';
import Calendar from './Calendar';


const CalenderMain = styled(Box)({
    "@media (max-width:1199px)": {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
    }
})

const GridContainer = styled(Grid)({
    "@media (max-width:1050px)": {
        paddingLeft: '1px',
    }
})
const ProfilePaymentGrid = styled(Grid)({
    "@media (max-width:1270px)": {
        marginRLeft: 'auto',
    },
    "@media (max-width:1199px)": {
        display: 'flex',
        justifyContent: 'center'
    }
})
const BoxGrid = styled(Grid)({
    paddingTop: "16px",
    marginBottom: "10px",

    "@media (max-width:1199px)": {
        PaddingBottom: '0px'
    },
    "@media (max-width:899px)": {
        justifyContent:"center",
        alignItems:"center"
    }

})

const Dashboard = () => {
    return (
      
        <Grid container spacing={2} mt='auto' sx={{ backgroundColor: '#ebdfd7', display:'flex' , justifyContent:"center"  }} >
            <GridContainer item xs={12} md={10} sm={12} >
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Header />
                </Box>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} sm={12} lg={8}>
                        <CalenderMain > 
                            <Calendar />
                        </CalenderMain>
                    </Grid>
                    <ProfilePaymentGrid item xs={12} md={12} lg={4} sm={12} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <Profile />
                         <Box mt={2} ml={1} style={{ marginTop: '0px' }}>
                            <PaymentHistory />
                        </Box> 
                    </ProfilePaymentGrid> 
                </Grid>

                <BoxGrid container spacing={2} mt={0.5} md={12} sm={12} lg={12}  >
                    <Grid className='innergrid'item xs={12} md={12} lg={6}>
                        <TopPerformers />
                    </Grid>
                    <Grid className='innergrid' item xs={12} md={12} lg={6}>
                        <UserBatchPerformance />
                    </Grid>
                </BoxGrid> 
            </GridContainer> 
        </Grid>
    );
};

export default Dashboard;








