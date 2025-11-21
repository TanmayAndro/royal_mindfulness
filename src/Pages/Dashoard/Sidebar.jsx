
import React from 'react';
import { styled, List, ListItem, ListItemText, ListItemIcon, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';



const TopBox = styled(Box)(({ theme }) => ({
    height: '88%',
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    paddingTop: '9rem',
    "@media (max-width:899px)": {
        backgroundColor: 'transparent',
        height: '5px',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: '0px',
        // height: '10px',
        // // width: 'auto',
        padding: '0px',
        textalign: 'center',
        borderRadius: '2px',
        // border: '1px solid black',
        // margin: '0px',
        backgroundColor: 'black',
        color: ' white',
        // borderRadius: '52px',
        gap: '20px',
        padding: '19px',
        // marginTop: '3px'
    },
    // "@media (max-width:900px)": {
    //     // paddingTop: '9rem',
    //     // borderRadius: '52px',
    //     // gap: '20px',
    //     // padding: '19px'
    // }
}));
const ListBox = styled(Box)(({ theme }) => ({
    marginTop: '4px',
    left: '40.4px',
    gap: '1px',
    opacity: '0px',
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    "@media (max-width:899px)": {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        opacity: '1'
    },
}));

const ListItemCustom = styled(ListItem)(({ theme }) => ({
    display: 'flex',
    padding: '10px 0px 15px 15px',
    alignItems: 'center',
    "@media (max-width:899px)": {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 'auto',
        padding: '0px 10px 12px 10px',
        color: "black",
        // float: "inline-end"
    },
    "@media (max-width:899px)": {
        // padding: '0px 0px 0px 0px',
        '&:first-of-type': {
            color: 'white',
            backgroundColor: 'black',
            padding: '15px 0px 11px 6px',
            height: '40px'
        },

    },
    "@media (max-width:1050px)": {
        gap: 0,
        // padding: '3px 6px 18px 0px',
    },
    "@media (max-width:1100px)": {
        padding: '10px 8px 18px 6px',
    },
}));
const ListItemTextCustom = styled(ListItemText)({
    display: 'block',
    "@media (max-width:899px)": {
        display: 'none'
    },
    "@media (max-width:1050px)": {
        fontSize: "3px",
    },
    "@media (max-width:1100px)": {
        fontSize: '8px'
    }
});
const ListItemIconBox = styled(ListItemIcon)({
    color: 'inherit',
    "@media (min-width:400px)": {
        fontSize: '16px',
        // color: 'red'
    },
    "@media (max-width:901px)": {
        minWidth: '33px'
    }, "@media (max-width:1030px)": {
        minWidth: '38px'
    }
})

const Sidebar = () => {
    return (
        <TopBox>
            <List>
                <ListBox>
                    <ListItemCustom button sx={{ color: 'primary.main', backgroundColor: '#ebdfd7', borderBottomLeftRadius: '25px', borderTopLeftRadius: '25px' }}>
                        <ListItemIconBox >
                            <DashboardIcon />
                        </ListItemIconBox>
                        <ListItemTextCustom primary="Dashboard" sx={{ fontWeight: '600' }} />
                    </ListItemCustom>
                    <ListItemCustom button>
                        <ListItemIconBox >
                            <CalendarTodayIcon />
                        </ListItemIconBox>
                        <ListItemTextCustom primary="Attendance" />
                    </ListItemCustom>
                    <ListItemCustom button>
                        <ListItemIconBox>
                            <AccountBalanceIcon />
                        </ListItemIconBox>
                        <ListItemTextCustom primary="Sessions" />
                    </ListItemCustom>
                    <ListItemCustom button>
                        <ListItemIconBox >
                            <PersonIcon />
                        </ListItemIconBox>
                        <ListItemTextCustom primary="Trainer" />
                    </ListItemCustom>
                    <ListItemCustom button>
                        <ListItemIconBox >
                            <FitnessCenterIcon />
                        </ListItemIconBox>
                        <ListItemTextCustom primary="Exercise Plan" />
                    </ListItemCustom>
                    <ListItemCustom button>
                        <ListItemIconBox>
                            <AssignmentIcon />
                        </ListItemIconBox>
                        <ListItemTextCustom primary="Registrations" />
                    </ListItemCustom>
                    <ListItemCustom button>
                        <ListItemIconBox>
                            <SettingsIcon />
                        </ListItemIconBox>
                        <ListItemTextCustom primary="Settings" />
                    </ListItemCustom>
                </ListBox>
            </List>
            {/* <OuterImgBox>
                <ImgBox>
                    <Box sx={{ display: 'flex', height: '62px' }}>
                        <AvatarImg src={img} />
                        <Icon />
                    </Box>
                    <ScheduleEvent variant="caption">Schedule an event</ScheduleEvent>
                </ImgBox>
            </OuterImgBox> */}
        </TopBox>
    );
};

export default Sidebar;
