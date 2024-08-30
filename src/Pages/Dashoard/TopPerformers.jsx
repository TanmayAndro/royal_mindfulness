import React from 'react';
import { Paper, Typography, Grid, Box, Avatar, styled } from '@mui/material';
import { profile_img } from '../../assests';

const performers = [
    { name: 'Nivaan', team: 'Jr. Knights', attendance: '90%', badge: 'Blue Badge', avatar: 'path/to/avatar1.jpg', bgColor: '#FF6F61' },
    { name: 'Navya', team: 'Gladiators', attendance: '80%', badge: 'Pink Badge', avatar: 'path/to/avatar2.jpg', bgColor: '#003366' },
    { name: 'Anugrah', team: 'Spartans', attendance: '70%', badge: 'Orange Badge', avatar: 'path/to/avatar3.jpg', bgColor: '#FFB6C1' },
];
const MainPaperBox = styled(Paper)({
    padding: 8,
    paddingBottom: 0,
    borderRadius: 14,
    "@media (max-width:1100px)": {
        paddingBottom: '20px',
    },
    "@media (max-width:1250px)": {
        padding: 6,
        paddingBottom: '8px',
    }
})
const PaperBox = styled(Paper)({
    padding: '20px',
    borderRadius: 16,
    textAlign: 'center',
    "@media (max-width:1250px)": {
        padding: '0px 10px',
        height: '90px'
    },
    "@media (max-width:1250px)": {
        padding: '14px',
    }
})
const TypoContent = styled(Typography)({
    fontWeight: 'semiblod',
    marginBottom: '28px',
    "@media (max-width:1100px)": {
    },
})
const GridContainer = styled(Grid)({
    "@media (max-width:1020px)": {
        fontSize: '12px',
        width: 'unset'
    }
})
const BadgeButtonBox = styled(Box)({
    borderRadius: '10px',
    "@media (max-width: 1020px)": {
        padding: '0px',
        margin: '0px'
    }

})
const TopPerformers = () => {
    return (
        <MainPaperBox >
            <TypoContent variant="h6"  >Top Performers</TypoContent>
            <Grid container spacing={2} justifyContent="space-around" flexWrap={'wrap'}>
                {performers.map((performer, index) => (
                    <GridContainer item xs={12} sm={4} md={4} mb={3} key={index}>
                        <PaperBox sx={{ backgroundColor: performer.bgColor }}>
                            <Avatar src={profile_img} sx={{ width: 56, height: 56, margin: '0 auto 8px' }} />
                            <Typography variant="p" color="white">{performer.name}</Typography>
                            <Typography variant="body2" color="white">{performer.team}</Typography>
                            <Typography variant="p" color="white" mt={1}>{performer.attendance} Attendance</Typography>
                            <BadgeButtonBox mt={2} py={1} bgcolor="rgba(255, 255, 255, 0.3)" >
                                <Typography variant="body2" color="white" style={{ cursor: 'pointer' }}>{performer.badge}</Typography>
                            </BadgeButtonBox>
                        </PaperBox>
                    </GridContainer>
                ))}
            </Grid>
        </MainPaperBox>
    );
};

export default TopPerformers;

