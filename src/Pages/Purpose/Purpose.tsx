import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Typography,
    boxClasses,
    styled,
  } from "@mui/material";
   import Img from "../../Assests/p1.js.webp";
  import React, { useState } from "react";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { purposeDetail, purposeHeading } from "../../config";
import { FaLeftLong } from "react-icons/fa6";
  const config=require('../../config')
 
  
  
  function Purpose() {
    const [expanded, setExpanded] = useState<string | false>(false);
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };
  
    return (
      <>
        <Box sx={{marginTop:'1rem'}} className="imagebox">
        <img src={Img} alt="Purpose" className="image" />
        <Typography sx={mainStyle.imgHead}>Purpose</Typography>
        </Box>
        <Container style={mainStyle.mainBox}>         
          <Box sx={mainStyle.content}>
            <Typography style={mainStyle.boxtypo}>
             {purposeHeading}
            </Typography>
            <Typography sx={mainStyle.typodetail}>
              {purposeDetail}
            </Typography>
          </Box>
        
  
          <Box sx={{ marginBottom: "80px" }}>
        {config.purposeData.map((purposeData:{question: string, answer:string}, i:number)=>(
            <AccordianStyle 
            key={i}
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)} 
            >
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />} 
              aria-controls={`panel${i}bh-content`}
              id={`panel${i}bh-header`}
              >
                <Typography style={mainStyle.acordiantypo}>
                {purposeData.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={mainStyle.acordiantypodetail}>
                {purposeData.answer}
                </Typography>
              </AccordionDetails>
            </AccordianStyle>
             ))}
          </Box>

        </Container>
      </>
      
    );
  }
  
  const AccordianStyle = styled(Accordion)({
    "&.MuiAccordion-root": {
      boxShadow: "-1px 3px 10px 0px rgba(0, 0, 0, 0.10)",
      marginBottom: "26px",
      borderColor: "transparent",
      padding: "10px 24px",
      maxWidth: "971px",
      marginLeft: "auto",
      marginRight: "auto",
      "&.MuiAccordian-rounded": {
        borderRadius: "8px",
      },
      "&::before": {
        backgroundColor: "#fff",
        boxShadow: "-1px 3px 10px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  });
  
  const mainStyle = {
    mainBox: {
      minHeight: "100vh",
      width: "80%",
      marginTop: "40px"
      
    },

    content:{
      dispaly:'flex',
      justifyContent:'center',
      marginBottom:'40px',
      marginTop:'40px'
    },
    imgHead:{
      display:'flex',
      position:'absolute',
      top:"50%",
      left:'44%',
      fontSize:'42px',
      
      "@media (max-width:1024px)": {
        left:'40%',
      },
      "@media (max-width:430px)": {
        left:'30%',
      },
    
    },

    boxtypo: {
      textAlign: "center" as "center",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "32px",
      marginBottom: "8px",
      fontFamily: "Lato",
      letterSpacing: "-0.12px",
      color: "rgba(30, 41, 59, 1)",
      "@media (max-width:1024px)": {
        fontSize: "40px",
      },
    },
    typodetail: {
      color: "rgba(30, 41, 59, 1)",
      marginTop:"20px",
      "@media (max-width:1024px)": {
        fontSize: "25px",
      },
    },
    acordiantypo: {
      fontFamily: "Inter",
      color: "#1e293b",
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "21px",
      "@media (max-width:1024px)": {
        fontSize: "19px",
      },
    },
    acordiantypodetail: {
      color: "#334155",
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "400",
      "@media (max-width:1024px)": {
        fontSize: "17px",
      },
    },
    imagebox : {
     marginTop:'rem',
    width:"100%",  
    },
    
    image:{
      marginTop:'10rem',
    }

  };
  
  export default Purpose;
  