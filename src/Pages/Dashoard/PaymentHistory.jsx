import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  CardContent,
  Divider,
  styled,
  Link,
} from "@mui/material";
import moment from 'moment';

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const config = require("../../config")

const CalendarWrapper = styled(Box)({
  position: 'relative',
  top: '100%',
  left: 0,
  zIndex: 1000,
  background: 'white',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  padding: '10px',
});

const SortByDateBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
});

const SortByText = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "16px",
  marginRight: "8px",
});

const PaymentHistory = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    setSelectedDate(formattedDate);
    setShowCalendar(false);
  };
  


  return (
    <MainCard>
      <CardContent>
        <Box>
          <PaymentText>{config.Payment_History_List}</PaymentText>
        </Box>
        
        <SortByDateBox onClick={() => setShowCalendar(!showCalendar)}>
          <SortByText>{config.Sort_By_Dates}</SortByText>
          <KeyboardArrowDownIcon
            style={{ width: "16px", height: "16px", cursor: "pointer" }}
          />
        </SortByDateBox>
        {showCalendar && (
          <CalendarWrapper>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
            />
          </CalendarWrapper>
        )}
      </CardContent>
      <DividerLine color="#E5E7EB" />
      <CardContent style={{ float: "left", margin: "0px", padding: "0px" }}>
        <List>
          <ListItem>
            <ListItemText
              secondary={
                <>
                  <DateText>{config.Payment_Dates}</DateText>
                  <TypoText
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {config.Amount_Heading}: ${config.Amount}
                  </TypoText>
                  <br />
                  <TypoText
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {config.Payment_Method}: {config.Credit_Card}
                  </TypoText>
                  <br />
                  <TypoText
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {config.Transaction_Id}: {config.User_Transaction_Id}
                  </TypoText>
                  <br />
                  <TypoText component="span" variant="body2" color="green">
                    {config.Status}: {config.Success}
                  </TypoText>
                </>
              }
            />
          </ListItem>
        </List>
      </CardContent>
      <DividerLine color="#E5E7EB" />
      <CardContent style={{ float: "left", margin: "0px", padding: "0px" }}>
        <List>
          <ListItem>
            <ListItemText
              secondary={
                <>
                  <DateText>{config.Payment_Dates}</DateText>
                  <TypoText
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {config.Amount_Heading}: ${config.Amount}
                  </TypoText>
                  <br />
                  <TypoText
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {config.Payment_Method}: {config.Credit_Card}
                  </TypoText>
                  <br />
                  <TypoText
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {config.Transaction_Id}: {config.User_Transaction_Id}
                  </TypoText>
                  <br />
                  <TypoText component="span" variant="body2" color="green">
                    {config.Status}: {config.Success}
                  </TypoText>
                </>
              }
            />
          </ListItem>
        </List>
        <LinkButton component="button" variant="body2">
          View List
        </LinkButton>
      </CardContent>
    </MainCard>
  );
};

const MainCard = styled(Card)({
  width: "312px",
  padding: "2px",
  borderRadius: "20px",
  margin: "2px 0px 6px 14px",
  "@media (max-width:900px)": {
    width: "270px",
    margin: "0px",
    borderRadius: "18px",
    padding: "0px 0px",
    height: "auto",
    marginLeft: "-6px",
  },
  "@media (max-width:1240px)": {
    width: "290px",
  },
});
const PaymentText = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 600,
  "@media (max-width:900px)": {
    fontSize: "14px",
    fontWeight: 500,
  },
});

const DividerLine = styled(Divider)({
  width: "100%",
  height: "5px",
  marginTop: "4px",
  "@media (max-width:900px)": {
    height: "4px",
    marginTop: "2px",
  },
});
const DateText = styled(Typography)({
  fontSize: "16px",
  marginBottom: "0px",
  "@media (max-width:900px)": {
    fontSize: "14px",
  },
});
const TypoText = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "13.92px",
  textAlign: "center",
  "@media (max-width:900px)": {
    fontSize: "11px",
    fontWeight: 350,
    lineHeight: "12.92px",
  },
});
const LinkButton = styled(Link)({
  float: "inline-end",
  padding: "0px 0px 0px 40px",
  width: "500px",
  textDecoration: "none",
  fontSize: "14px",
  cursor: "pointer",
  "@media (max-width:900px)": {
    width: "450px",
    padding: "0px 0px 0px 0px",
    fontSize: "13px",
  },
  "@media (max-width:1250px)": {
    padding: "0px 10px 0px 0px",
  },
});

export default PaymentHistory;
