
import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import comparision2 from "../../Assests/comparision2.png";
import CommonButtons from "./CommonButtons";
import WaveDivider from "./WaveDivider";
import { useNavigate } from "react-router-dom";

const item = {
  name1: "Mental Fitness Trainer",
  name2: "for Building Inner Strength",
  text: "1-on-1 training, live sessions, free consultation",
  image: comparision2,
};

const BannerSection = () => {
  const navigate = useNavigate();


  const handelConsulation = (clickedOn: "calendly" | "rozerpay") => {
// window.open("https://calendly.com/royalmindfulness/30min", "_blank");
  // Already logged in → open directly
  if (clickedOn === "calendly") {
    window.open("https://calendly.com/royalmindfulness/30min", "_blank");
  } else if (clickedOn === "rozerpay") {
    navigate("/book-now");
  }
};



  return (
    <>
  <Paper  elevation={0} sx={{ position: "relative", marginBottom:-1 }}>
  <Box
  component="img"
  src={item.image}
  alt={item.name1}
  loading="eager"
  fetchpriority="high"
  sx={{
    width: "100%",
    height: {
      xs: "320px",  // ✅ Smaller, fits well on 320–480px devices
      sm: "280px",  // ✅ For tablets up to ~768px
      md: "500px",  // ✅ For desktop
    },
    objectFit: "cover",
    borderRadius: "0px",
    aspectRatio: "16/9",
    background:
      "linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 52.39%), rgba(0, 0, 0, 0.16)",
    "@media (max-width:480px)": {
      objectPosition: "center top", // ✅ Keeps focus area visible on small screens
    },
    "@media (min-width:481px) and (max-width:768px)": {
      objectPosition: "center center",
    },
  }}
/>


      <Overlay>
        <Typography
          component="h3"
          sx={{
            fontSize: { xs: "24px", sm: "36px", md: "60px" },
            fontWeight: 700,
            fontFamily:'Mona Sans',
            color: "white",
            textAlign: "left",
            mb: 1,
            lineHeight: 1.2,
          }}
        >
          {item.name1}
          &nbsp;
          {item.name2}
        </Typography>

        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "16px", sm: "20px", md: "28px" },
            textAlign: "left",
            mb: 2,
          }}
        >
          {item.text}
        </Typography>

        <Box sx={{ textAlign: "left" }}>
             <Box sx={{display:'flex',flexDirection:'row',gap:2}}>
                        <CommonButtons
                      label="Book a free consultation"
                      width="150px"
                      height="50px"
                      
                      sx={{ backgroundColor: '#1470AF', color: 'white', lineHeight: "1.2"}}
                      variant="contained"
                      onClick={() => handelConsulation("calendly")}
                    />
          
                      <CommonButtons
                      label="Hire Trainer"
                      width="150px"
                      height="50px"
                      sx={{ backgroundColor: '#1470AF', color: 'white' }}
                      variant="contained"
                      onClick={() =>handelConsulation("rozerpay") }
                    />
                    </Box>
          
          <Box sx={{width:"390px",paddingLeft:"10px"}}>
               <Typography sx={{color:"#fffc",paddingTop:"5px"}}> (No Credit card required)</Typography>
          </Box>
         
         
        </Box>
      </Overlay>
      <WaveDivider fill="lightblue" />
    </Paper>
     
     </>
  );
};

const Overlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "5%",
  transform: "translateY(-50%)",
  zIndex: 1,
  width: "90%",
  maxWidth: "600px",
  [theme.breakpoints.down("sm")]: {
    left: "5%",
    width: "90%",
  },
}));

export default BannerSection;
