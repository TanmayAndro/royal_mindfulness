// import { Box, Typography } from "@mui/material";
// import React from "react";
// import bgImg from "../../../Assests/HowitWorksVector.png";

// export const HowItWorks = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           position: "relative",
//           width: "100%",
//           height: "100%",
//           padding: { xs: "3rem", sm: "4rem" },
//           overflow: "hidden",
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         {/* Left Content */}
//         <Box
//           sx={{
//             zIndex: 1,
//             maxWidth: { xs: "80%", md: "600px" },
//             marginLeft: { xs: "0px", md: "30px" },
//             width: "100%",
//           }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight="bold"
//             mb={8}
//             sx={{ fontSize: { xs: "50px", md: "80px" } }}
//           >
//             How it works
//           </Typography>

//           <Box mb={8}>
//             <Typography
//               variant="h6"
//               fontWeight="bold"
//               sx={{
//                 backgroundColor: "#DFEEF9",
//                 display: "inline-block",
//                 px: 1,
//                 fontSize: "25px",
//                 color: "#40ABF8",
//               }}
//             >
//               Get a Free Consultation
//             </Typography>
//             <Typography
//               variant="body2"
//               mt={1}
//               sx={{
//                 fontSize: "16px",
//                 color: "#9A9A9A",
//                 marginTop: "1rem",
//               }}
//             >
//               Start with a free 15-minute consultation where we understand your
//               mental fitness goals, lifestyle, and needs — no obligations, just
//               clarity.
//             </Typography>
//           </Box>

//           <Box mb={8}>
//             <Typography
//               variant="h6"
//               fontWeight="bold"
//               sx={{
//                 backgroundColor: "#FFECF0",
//                 display: "inline-block",
//                 px: 1,
//                 fontSize: "25px",
//                 color: "#FF426D",
//               }}
//             >
//               We Match You with a Mental Fitness Trainer
//             </Typography>
//             <Typography
//               variant="body2"
//               mt={1}
//               sx={{
//                 fontSize: "16px",
//                 color: "#9A9A9A",
//                 marginTop: "1rem",
//               }}
//             >
//               Based on your consultation, our system assigns you a certified
//               mental fitness trainer — not chosen randomly, but carefully
//               aligned with your personal goals.
//             </Typography>
//           </Box>

//           <Box mb={8}>
//             <Typography
//               variant="h6"
//               fontWeight="bold"
//               sx={{
//                 backgroundColor: "#F1E9FA",
//                 display: "inline-block",
//                 px: 1,
//                 fontSize: "25px",
//                 color: "#9A54DF",
//               }}
//             >
//               Start Daily Training Sessions
//             </Typography>
//             <Typography
//               variant="body2"
//               mt={1}
//               sx={{
//                 fontSize: "16px",
//                 color: "#9A9A9A",
//                 marginTop: "1rem",
//               }}
//             >
//               You get live, guided training sessions (e.g., Antar Mouna, Yoga
//               Nidra, breathwork, journaling) tailored to help you build a
//               stronger, more resilient mind.
//             </Typography>
//           </Box>
//         </Box>

//         {/* Right Decorative Image */}
//         <Box
//           component="img"
//           src={bgImg}
//           alt="Decorative"
//           sx={{
//             display: { xs: "none", md: "block" },
//             position: "absolute",
//             right: "-20%",
//             top: "50%",
//             transform: "translateY(-50%)",
//             height: { md: "120%" },
//             pointerEvents: "none",
//             zIndex: 0,
//           }}
//         />
//       </Box>






//     </>
//   );
// };

import { Box, Typography } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import bgImg from "../../../Assests/HowitWorksVector.png";
import CommonButtons from "../CommonButtons";
import WaveDivider from "../WaveDivider";
import CommonButton from "../CommonButtons";
import { useNavigate } from "react-router-dom";


export const HowItWorks = () => {
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState("auto");
  const navigate = useNavigate();
       const handelConsulation = (clickedOn: "calendly" | "rozerpay") => {

  //  navigate("/book-now");  

   

  // // Already logged in → open directly
  if (clickedOn === "calendly") {
    window.open("https://calendly.com/royalmindfulness/30min", "_blank");
  } else if (clickedOn === "rozerpay") {
   navigate("/book-now");
  }
};
  

  useEffect(() => {
    if (leftRef.current) {
      setLeftHeight(leftRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          justifyContent: "space-between",
          padding: { xs: "2rem", md: "4rem" },
          gap: { xs: "2rem", md: "3rem" },
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1, zIndex: 2 }} ref={leftRef}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={6}
            sx={{ fontSize: { xs: "40px", md: "60px" } }}
          >
            How it works
          </Typography>

          {/* Step 1 */}
          <Box mb={6}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                backgroundColor: "#DFEEF9",
                display: "inline-block",
                px: 1,
                fontSize: "22px",
                color: "#40ABF8",
              }}
            >
              Get a Free Consultation
            </Typography>
            <Typography
              variant="body2"
              mt={1}
              sx={{
                fontSize: "16px",
                color: "#9A9A9A",
                marginTop: "1rem",
              }}
            >
              Start with a free 15-minute consultation where we understand your
              mental fitness goals, lifestyle, and needs — no obligations, just
              clarity.
            </Typography>
          </Box>

          {/* Step 2 */}
          <Box mb={6}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                backgroundColor: "#FFECF0",
                display: "inline-block",
                px: 1,
                fontSize: "22px",
                color: "#FF426D",
              }}
            >
              We Match You with a Mental Fitness Trainer
            </Typography>
            <Typography
              variant="body2"
              mt={1}
              sx={{
                fontSize: "16px",
                color: "#9A9A9A",
                marginTop: "1rem",
              }}
            >
              Based on your consultation, our system assigns you a certified
              mental fitness trainer — not chosen randomly, but carefully aligned
              with your personal goals.
            </Typography>
          </Box>

          {/* Step 3 */}
          <Box mb={6}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                backgroundColor: "#F1E9FA",
                display: "inline-block",
                px: 1,
                fontSize: "22px",
                color: "#9A54DF",
              }}
            >
              Start Daily Training Sessions
            </Typography>
            <Typography
              variant="body2"
              mt={1}
              sx={{
                fontSize: "16px",
                color: "#9A9A9A",
                marginTop: "1rem",
              }}
            >
              You get live, guided training sessions (e.g., Antar Mouna, Yoga
              Nidra, breathwork, journaling) tailored to help you build a
              stronger, more resilient mind.
            </Typography>
          </Box>
        </Box>

        {/* Right Content */}
        <Box
          sx={{
            flex: 1,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: { md: leftHeight },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={3}
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "22px" },
              lineHeight: 1.1,
              color: "#1B5E20", // Dark green
              backgroundColor: "#E8F5E9", // Light green highlight
              px: 2,
              py: 1,
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            Take a step for your Mental Fitness.
          </Typography>
          <Box sx={{display:'flex',flexDirection:'row',gap:2 }}>
              <CommonButtons
            label="Book a free consultation"
            width="150px"
            height="50px"
            sx={{ backgroundColor: '#1470AF', color: 'white' ,lineHeight: 1.2}}
            variant="contained"
            onClick={() => handelConsulation("calendly")}
          />

            <CommonButtons
            label="Hire Trainer"
            width="150px"
            height="50px"
            sx={{ backgroundColor: '#1470AF', color: 'white' }}
            variant="contained"
            onClick={() => handelConsulation("rozerpay")}
          />
          </Box>

        </Box>
        

        {/* Background Image */}
        <Box
          component="img"
          src={bgImg}
          alt="Decorative"
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            right: "-28%",
            top: "50%",
            transform: "translateY(-50%)",
            height: { md: "120%" },
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      </Box>

      {/* <WaveDivider fill="lightblue" /> */}
    </>
  );
};
