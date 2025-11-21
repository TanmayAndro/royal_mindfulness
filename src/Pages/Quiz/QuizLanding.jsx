
// import {
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   Typography,
//   Grow,
// } from "@mui/material";
// import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
// import QuizIcon from "@mui/icons-material/Quiz";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import { useNavigate } from "react-router-dom";




// export default function QuizLanding() {
//     const navigate = useNavigate();
//     const cards = [
//   {
//     title: "Download Mental Fitness Checklist",
//     icon: <PlaylistAddCheckIcon fontSize="inherit" />,
//     color: "#1A73E8",
//     bg: "#E8F0FE",
//      onClick: () => navigate("/user-form"),
//   },
//   {
//     title: "Take Mental Wellness Quiz",
//     icon: <QuizIcon fontSize="inherit" />,
//     color: "#D93025",
//     bg: "#FDECEA",
//     onClick: () => navigate("/user-form"),
//   },
//   {
//     title: "Download free Royal Mindfulness journal",
//     icon: <MenuBookIcon fontSize="inherit" />,
//     color: "#188038",
//     bg: "#E6F4EA",
//      onClick: () => navigate("/user-form"),
//   },
// ];
//   return (
//     <Box sx={{ overflow: "hidden", pb: 0, mt: 0 }}>
//       {/* Top Background Section */}
//       <Box
//         sx={{
//           background: "linear-gradient(135deg, #3a8dde 0%, #62a0ea 100%)",
//           position: "relative",
//           color: "white",
//           pt: 10,
//           pb: 12,
//           textAlign: "center",
//         }}
//       >
//         {/* Glow Effect */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "-120px",
//             left: "-120px",
//             width: "360px",
//             height: "360px",
//             background:
//               "radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 75%)",
//             borderRadius: "50%",
//             animation: "pulse 7s ease-in-out infinite",
//             zIndex: 0,
//             filter: "blur(40px)",
//           }}
//         />

//         {/* Cards */}
//         <Grid
//           container
//           spacing={3}
//           justifyContent="center"
//           sx={{ position: "relative", zIndex: 2 }}
//         >
//           {cards.map((card, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Grow in timeout={900 + index * 300}>
//                 <Card
//                   onClick={card.onClick}
//                   elevation={0}
//                   tabIndex={0}
//                   role="button"
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") card.onClick();
//                   }}
//                   sx={{
//                     cursor: "pointer",
//                     minHeight: 100,
//                     maxWidth: 200,
//                     mx: "auto",
//                     px: 4,
//                     py: 4,
//                     borderRadius: 4,
//                     background: `linear-gradient(145deg, ${card.bg}, #ffffff)`,
//                     border: `1px solid ${card.color}33`,
//                     boxShadow: `0 6px 20px -4px ${card.color}40`,
//                     transition: "all 0.3s ease",
//                     "&:hover, &:focus-visible": {
//                       transform: "translateY(-6px) scale(1.02)",
//                       boxShadow: `0 16px 36px -8px ${card.color}66`,
//                       outline: "none",
//                     },
//                     transformOrigin: "center",
//                   }}
//                 >
//                   <Avatar
//                     sx={{
//                       bgcolor: "white",
//                       color: card.color,
//                       width: 56,
//                       height: 56,
//                       mb: 3,
//                       fontSize: 28,
//                       border: `2px solid ${card.color}`,
//                       boxShadow: `0 0 12px ${card.color}33`,
//                     }}
//                   >
//                     {card.icon}
//                   </Avatar>
//                   <CardContent sx={{ textAlign: "center", p: 0 }}>
//                     <Typography
//                       variant="subtitle1"
//                       fontWeight="bold"
//                       sx={{
//                         color: card.color,
//                         userSelect: "none",
//                         letterSpacing: 0.4,
//                       }}
//                     >
//                       {card.title}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grow>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Wave SVG */}
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             width: "100%",
//             lineHeight: 0,
//             zIndex: 1,
//             pointerEvents: "none",
//           }}
//         >
//           <svg
//             viewBox="0 0 1440 220"
//             xmlns="http://www.w3.org/2000/svg"
//             style={{ display: "block", width: "100%", height: "auto" }}
//           >
//             <defs>
//               <linearGradient id="waveGradient1" x1="0" y1="0" x2="1" y2="0">
//                 <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
//                 <stop offset="100%" stopColor="#cfd9e6" stopOpacity="0.6" />
//               </linearGradient>
//               <linearGradient id="waveGradient2" x1="0" y1="0" x2="1" y2="0">
//                 <stop offset="0%" stopColor="#f0f4ff" stopOpacity="0.85" />
//                 <stop offset="100%" stopColor="#d1d9f1" stopOpacity="0.5" />
//               </linearGradient>
//             </defs>
//             <path
//               fill="url(#waveGradient1)"
//               d="M0,160 C360,220 720,80 1080,140 1260,170 1320,220 1440,200 L1440,320 L0,320 Z"
//               opacity="0.95"
//             />
//             <path
//               fill="url(#waveGradient2)"
//               d="M0,180 C360,240 720,100 1080,160 1260,190 1320,240 1440,220 L1440,320 L0,320 Z"
//               opacity="0.65"
//             />
//           </svg>
//         </Box>
//       </Box>

//       {/* Pulse animation keyframes */}
//       <style>
//         {`
//           @keyframes pulse {
//             0% { transform: scale(1); opacity: 1; }
//             50% { transform: scale(1.1); opacity: 0.75; }
//             100% { transform: scale(1); opacity: 1; }
//           }
//           [role="button"]:focus-visible {
//             outline: 3px solid #3a8dde;
//             outline-offset: 4px;
//           }
//         `}
//       </style>
//     </Box>
//   );
// }

/* heading down to the wave */

// import {
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   Typography,
//   Grow,
// } from "@mui/material";
// import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
// import QuizIcon from "@mui/icons-material/Quiz";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import { useNavigate } from "react-router-dom";

// export default function QuizLanding() {
//   const navigate = useNavigate();
//   const cards = [
//     {
//       title: "Download Mental Fitness Checklist",
//       icon: <PlaylistAddCheckIcon fontSize="inherit" />,
//       color: "#1A73E8",
//       bg: "#E8F0FE",
//       onClick: () => navigate("/user-form"),
//     },
//     {
//       title: "Take Mental Wellness Quiz",
//       icon: <QuizIcon fontSize="inherit" />,
//       color: "#D93025",
//       bg: "#FDECEA",
//       onClick: () => navigate("/user-form"),
//     },
//     {
//       title: "Download free Royal Mindfulness journal",
//       icon: <MenuBookIcon fontSize="inherit" />,
//       color: "#188038",
//       bg: "#E6F4EA",
//       onClick: () => navigate("/user-form"),
//     },
//   ];

//   return (
//     <Box sx={{ overflow: "hidden", pb: 0, mt: 0 }}>
//       {/* Top Background Section */}
//       <Box
//         sx={{
//           background: "linear-gradient(135deg, #3a8dde 0%, #62a0ea 100%)",
//           position: "relative",
//           color: "white",
//           pt: 10,
//           pb: 12,
//           textAlign: "center",
//         }}
//       >
//         {/* Glow Effect */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "-120px",
//             left: "-120px",
//             width: "360px",
//             height: "360px",
//             background:
//               "radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 75%)",
//             borderRadius: "50%",
//             animation: "pulse 7s ease-in-out infinite",
//             zIndex: 0,
//             filter: "blur(40px)",
//           }}
//         />

//         {/* Cards */}
//         <Grid
//           container
//           spacing={3}
//           justifyContent="center"
//           sx={{ position: "relative", zIndex: 2 }}
//         >
//           {cards.map((card, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Grow in timeout={900 + index * 300}>
//                 <Card
//                   onClick={card.onClick}
//                   elevation={0}
//                   tabIndex={0}
//                   role="button"
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") card.onClick();
//                   }}
//                   sx={{
//                     cursor: "pointer",
//                     minHeight: 100,
//                     maxWidth: 200,
//                     mx: "auto",
//                     px: 4,
//                     py: 4,
//                     borderRadius: 4,
//                     background: `linear-gradient(145deg, ${card.bg}, #ffffff)`,
//                     border: `1px solid ${card.color}33`,
//                     boxShadow: `0 6px 20px -4px ${card.color}40`,
//                     transition: "all 0.3s ease",
//                     "&:hover, &:focus-visible": {
//                       transform: "translateY(-6px) scale(1.02)",
//                       boxShadow: `0 16px 36px -8px ${card.color}66`,
//                       outline: "none",
//                     },
//                     transformOrigin: "center",
//                   }}
//                 >
//                   <Avatar
//                     sx={{
//                       bgcolor: "white",
//                       color: card.color,
//                       width: 56,
//                       height: 56,
//                       mb: 3,
//                       fontSize: 28,
//                       border: `2px solid ${card.color}`,
//                       boxShadow: `0 0 12px ${card.color}33`,
//                     }}
//                   >
//                     {card.icon}
//                   </Avatar>
//                   <CardContent sx={{ textAlign: "center", p: 0 }}>
//                     <Typography
//                       variant="subtitle1"
//                       fontWeight="bold"
//                       sx={{
//                         color: card.color,
//                         userSelect: "none",
//                         letterSpacing: 0.4,
//                       }}
//                     >
//                       {card.title}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grow>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Wave SVG */}
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             width: "100%",
//             lineHeight: 0,
//             zIndex: 1,
//             pointerEvents: "none",
//           }}
//         >
//           <svg
//             viewBox="0 0 1440 220"
//             xmlns="http://www.w3.org/2000/svg"
//             style={{ display: "block", width: "100%", height: "auto" }}
//           >
//             <defs>
//               <linearGradient id="waveGradient1" x1="0" y1="0" x2="1" y2="0">
//                 <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
//                 <stop offset="100%" stopColor="#cfd9e6" stopOpacity="0.6" />
//               </linearGradient>
//               <linearGradient id="waveGradient2" x1="0" y1="0" x2="1" y2="0">
//                 <stop offset="0%" stopColor="#f0f4ff" stopOpacity="0.85" />
//                 <stop offset="100%" stopColor="#d1d9f1" stopOpacity="0.5" />
//               </linearGradient>
//             </defs>
//             <path
//               fill="url(#waveGradient1)"
//               d="M0,160 C360,220 720,80 1080,140 1260,170 1320,220 1440,200 L1440,320 L0,320 Z"
//               opacity="0.95"
//             />
//             <path
//               fill="url(#waveGradient2)"
//               d="M0,180 C360,240 720,100 1080,160 1260,190 1320,240 1440,220 L1440,320 L0,320 Z"
//               opacity="0.65"
//             />
//           </svg>
//         </Box>
//       </Box>

//       {/* Motivation Quote Section */}
//       <Box textAlign="center" py={6} bgcolor="#f5f7fa">
//         <Typography variant="h5" fontWeight="bold" color="primary" mb={2}>
//           "A healthy mind is the key to a stronger you."
//         </Typography>
//         <Typography variant="subtitle1" color="textSecondary">
//           Start your journey today. It's free and takes just a few minutes.
//         </Typography>
//       </Box>

//       {/* Pulse animation keyframes */}
//       <style>
//         {`
//           @keyframes pulse {
//             0% { transform: scale(1); opacity: 1; }
//             50% { transform: scale(1.1); opacity: 0.75; }
//             100% { transform: scale(1); opacity: 1; }
//           }
//           [role="button"]:focus-visible {
//             outline: 3px solid #3a8dde;
//             outline-offset: 4px;
//           }
//         `}
//       </style>
//     </Box>
//   );
// }

/* heading up to the wave */
import {
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Grow,
  Dialog,
  IconButton,
} from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import QuizIcon from "@mui/icons-material/Quiz";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import CloseIcon from '@mui/icons-material/Close';
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import CommonButtons from "../LandingPage/CommonButtons";

export default function QuizLanding() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openVideo, setOpenVideo] = useState(false);

  const handleVideoOpen = () => setOpenVideo(true);
  const handleVideoClose = () => setOpenVideo(false);
  
      const handelConsulation = (clickedOn: "calendly" | "rozerpay") => {
  if (clickedOn === "calendly") {
    window.open("https://calendly.com/royalmindfulness/30min", "_blank");
  } else if (clickedOn === "rozerpay") {
    window.open("https://pages.razorpay.com/pl_RJ40RFXQGpJ4w5/view", "_blank");
  }
};
  const cards = [
    {
      title: "Download Mental Fitness Checklist",
      icon: <PlaylistAddCheckIcon fontSize="inherit" />,
      color: "#1A73E8",
      bg: "#E8F0FE",
      onClick: () => navigate("/user-form"),
    },
    {
      title: "Book a free consultation",
      icon: <LiveHelpIcon fontSize="inherit" />,
      color: "brown",
      bg: "#FDECEA",
      onClick: () => {handelConsulation("calendly")},
      highlight: true,
    },
    {
      title: "Download free Royal Mindfulness journal",
      icon: <MenuBookIcon fontSize="inherit" />,
      color: "#188038",
      bg: "#E6F4EA",
      onClick: () => navigate("/user-form"),
    },
    {
      title: "Take Mental Wellness Quiz",
      icon: <QuizIcon fontSize="inherit" />,
      color: "#006400",
      bg: "#E6F4EA",
      onClick: () => navigate("/user-form"),
    },
    {
      title: "Take a Free Relaxation Session",
      icon: <SelfImprovementIcon fontSize="inherit" />,
      color: "purple",
      bg: "#E6F4EA",
      onClick: handleVideoOpen,
    },
  ];

  return (
    <Box sx={{ overflow: "hidden", pb: 0, mt: 0 }}>
      <Box textAlign="center" py={6} bgcolor="#f5f7fa">
        <Typography variant="h5" fontWeight="bold" color="primary" mb={2}>
          "A healthy mind is the key to a stronger you."
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Start your journey today. It's free and takes just a few minutes.
        </Typography>
          <CommonButtons
                    label="Book a free consultation"
                    width="150px"
                    height="50px"
                    sx={{ backgroundColor: '#1470AF', color: 'white' ,lineHeight: 1.2 , marginTop: '20px' }}
                    variant="contained"
                    onClick={() =>handelConsulation("calendly")}
                  />
      </Box>

      <Box
        sx={{
          background: "linear-gradient(135deg, #3a8dde 0%, #62a0ea 100%)",
          py: 12,
          px: 2,
          position: "relative",
          color: "white",
          pt: 10,
          pb: 18,
          textAlign: "center",
        }}
      >
        {/* Glow bubble background */}
        <Box
          sx={{
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "360px",
            height: "360px",
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 75%)",
            borderRadius: "50%",
            animation: "pulse 7s ease-in-out infinite",
            zIndex: 0,
            filter: "blur(40px)",
          }}
        />

        {/* First Row (3 Cards) */}
      <Grid container spacing={1.5} justifyContent="center">
  {cards.slice(0, 3).map((card, index) => {
    const isConsultCard = card.title === "Book a free consultation";
    return (
      <Grid
        item
        xs={10}
        sm={4}
        md={2.5}
        key={index}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grow in timeout={900 + index * 300}>
          <Card
            onClick={card.onClick}
            elevation={2}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") card.onClick();
            }}
           sx={{
  cursor: "pointer",
  px: 2,
  py: 2,
  width: "100%",
 height: isConsultCard ? 230 : 170, 
  maxWidth: 240,
  borderRadius: 3,
  background: `linear-gradient(145deg, ${card.bg}, #ffffff)`,
  border: `1px solid ${card.color}33`,
  boxShadow: `0 6px 20px -4px ${card.color}40`,
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: isConsultCard ? "center" : "flex-end", // 👈 Key part
  "&:hover, &:focus-visible": {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: `0 16px 36px -8px ${card.color}66`,
    outline: "none",
  },
}}

          >
            <Avatar
              sx={{
                bgcolor: "white",
                color: card.color,
                width: 56,
                height: 56,
                mb: 2,
                fontSize: 28,
                border: `2px solid ${card.color}`,
                boxShadow: `0 0 12px ${card.color}33`,
              }}
            >
              {isConsultCard ? <SupportAgentIcon fontSize="large" /> : card.icon}
            </Avatar>
            <CardContent sx={{ textAlign: "center", p: 0 }}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  color: card.color,
                  userSelect: "none",
                  letterSpacing: 0.4,
                }}
              >
                {card.title}
              </Typography>
            </CardContent>
          </Card>
        </Grow>
      </Grid>
    );
  })}
</Grid>

        {/* Second Row (2 Cards) */}
        <Grid container spacing={1.5} justifyContent="center" mt={1}>
          {cards.slice(3).map((card, index) => {
            const isConsultCard = card.title === "Book a free consultation";
            return (
              <Grid
                item  
                xs={10}
                sm={5}
                md={2.5}
                key={index + 3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grow in timeout={1800 + index * 300}>
                  <Card
                    onClick={card.onClick}
                    elevation={2}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") card.onClick();
                    }}
                    sx={{
                      cursor: "pointer",
                      px: 2,
                      py: 2,
                      width: "100%",
                       height: isConsultCard ? 230 : 170, 
                      maxWidth: 240,
                      borderRadius: 3,
                      background: `linear-gradient(145deg, ${card.bg}, #ffffff)`,
                      border: `1px solid ${card.color}33`,
                      boxShadow: `0 6px 20px -4px ${card.color}40`,
                      transition: "all 0.3s ease",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover, &:focus-visible": {
                        transform: "translateY(-6px) scale(1.02)",
                        boxShadow: `0 16px 36px -8px ${card.color}66`,
                        outline: "none",
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "white",
                        color: card.color,
                        width: 56,
                        height: 56,
                        mb: 2,
                        fontSize: 28,
                        border: `2px solid ${card.color}`,
                        boxShadow: `0 0 12px ${card.color}33`,
                      }}
                    >
                      {isConsultCard ? (
                        <SupportAgentIcon fontSize="large" />
                      ) : (
                        card.icon
                      )}
                    </Avatar>
                    <CardContent sx={{ textAlign: "center", p: 0 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{
                          color: card.color,
                          userSelect: "none",
                          letterSpacing: 0.4,
                        }}
                      >
                        {card.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            );
          })}
        </Grid>

       
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              lineHeight: 0,
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <svg
              viewBox="0 0 1440 220"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", width: "100%", height: "auto" }}
            >
             <defs>
  <linearGradient id="waveGradient1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
    <stop offset="100%" stopColor="#cfd9e6" stopOpacity="0.6" />
  </linearGradient>
  <linearGradient id="waveGradient2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#f0f4ffe0" stopOpacity="0.85" />
    <stop offset="100%" stopColor="#d3dce9ff" stopOpacity="0.5" />
  </linearGradient>
</defs>

              <path
                fill="url(#waveGradient1)"
                d="M0,160 C360,220 720,80 1080,140 1260,170 1320,220 1440,200 L1440,320 L0,320 Z"
                opacity="0.95"
              />
              <path
                fill="url(#waveGradient2)"
                d="M0,180 C360,240 720,100 1080,160 1260,190 1320,240 1440,220 L1440,320 L0,320 Z"
                opacity="0.65"
              />
            </svg>
          </Box>
       
      </Box>

      {/* Video Dialog */}
      <Dialog open={openVideo} onClose={handleVideoClose} maxWidth="md" fullWidth>
        <Box position="relative" paddingTop="56.25%">
          <IconButton
            onClick={handleVideoClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            src="https://www.youtube.com/embed/y9pG051DWqc"
            title="Free Relaxation Session"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            allowFullScreen
          ></iframe>
        </Box>
      </Dialog>
    </Box>
  );
}
