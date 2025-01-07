// import { Grid, Typography } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";
// import { facebook_item, gmail, insta, linkdin } from "../assests";
// import "./common.css";
// const config = require("../config.js");
// const Footer = () => {
//   return (
//     <Grid container className="main_header_css">
//       <Grid item xs={12} md={8} sm={12} lg={8} className="footer_item_box_css">
//         {config.footerItem.map(
//           (
//             item: {
//               name: string;
//               link: string;
//             },
//             index: number
//           ) => {
//             const { name, link } = item;
//             return (
//               <Link
//                 to={link}
//                 style={{ textDecoration: "none" }}
//                 key={`${index}`}
//               >
//                 <Typography
//                   className="item_heading_css"
//                   style={{
//                     fontFamily: "lato",
//                   }}
//                 >
//                   {name}
//                 </Typography>
//               </Link>
//             );
//           }
//         )}
//       </Grid>
//       <Grid
//         item
//         xs={12}
//         md={4}
//         sm={12}
//         lg={4}
//         className="footer_item_second_box_item"
//       >
//         <img
//           src={insta}
//           className="logo_style"
//           onClick={() => {
//             window.open(
//               "https://www.instagram.com/royalmindfulness/",
//               "_blank"
//             );
//           }}
//         />
//         <img src={facebook_item} className="logo_style" onClick={() => {
//             window.open(
//               "https://www.facebook.com/royalmindfulness/",
//               "_blank"
//             );
//           }}/>
//         <img src={linkdin} className="logo_style" onClick={() => {
//             window.open(
//               "https://www.linkdin.com/royalmindfulness/",
//               "_blank"
//             );
//           }}/>
//         <img src={gmail} className="logo_style" onClick={() => {
//             window.open(
//               "https://www.gmail.com/royalmindfulness/",
//               "_blank"
//             );
//           }}/>
//       </Grid>
//     </Grid>
//   );
// };

// export default Footer;

import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../Assests/footerLogo.png";
import footerImg from "../Assests/footerLast.png";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "3rem",
        backgroundImage: `url(${footerImg})`, // Use backgroundImage
        backgroundSize: "cover", // Adjust backgroundSize as needed
        backgroundPosition: "center", // Adjust backgroundPosition as needed
        color: "#fff",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <Box sx={{ flex: 1, minWidth: 200, zIndex: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: 40, height: 40, marginRight: 8 }}
          />
          <Typography variant="h6" fontWeight="bold">
            ROYAL <br></br> MINDFULNESS
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom sx={{ marginTop: "1rem" }}>
          ONLINE YOGA RELAXATION CLASSES
        </Typography>
        <Typography
          variant="body2"
          fontStyle="italic"
          sx={{ marginTop: "2rem", color: "#FAFD87" }}
        >
          "Experience deep relaxation at home with our<br></br> Online Yoga
          Classes—your journey to inner <br></br> peace starts here!"
        </Typography>
      </Box>

      <Box sx={{ flex: 1, minWidth: 150, zIndex: 1 }}>
        <Typography variant="subtitle1" gutterBottom>
          Quick Links
        </Typography>
        <List sx={{ listStyleType: "disc", paddingLeft: 2, cursor: "pointer" }}>
          {[
            { name: "About Us", link: "/aboutus" },
            { name: "Terms & Condition", link: "/term-condition" },
            { name: "Privacy Policy", link: "/privacy-policy" },
            { name: "Pricing", link: "/pricing-plans" },
            { name: "Contact Us", link: "/contact" },
            { name: "Refund/Cancellation", link: "/refund-cancellation" },
          ].map((item) => (
            <ListItem
              key={item.name}
              sx={{ display: "list-item", padding: 0 }}
              onClick={() => {
                window.location.href = item.link;
              }}
            >
              <ListItemText primary={item.name} sx={{ color: "#fff" }} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ flex: 1, minWidth: 150, zIndex: 1 }}>
        <Typography variant="subtitle1" gutterBottom>
          Follow Us
        </Typography>
        <List>
          <ListItem
            sx={{ padding: 0, cursor: "pointer" }}
            onClick={() => {
              window.open(
                "https://www.facebook.com/royalmindfulness/",
                "_blank"
              );
            }}
          >
            <FacebookIcon sx={{ marginRight: 1 }} /> Facebook
          </ListItem>
          <ListItem
            sx={{ padding: 0, cursor: "pointer" }}
            onClick={() => {
              window.open(
                "https://www.instagram.com/royalmindfulness/",
                "_blank"
              );
            }}
          >
            <InstagramIcon sx={{ marginRight: 1 }} /> Instagram
          </ListItem>
          <ListItem
            sx={{ padding: 0, cursor: "pointer" }}
            onClick={() => {
              window.open("https://www.gmail.com/royalmindfulness/", "_blank");
            }}
          >
            <LinkedInIcon sx={{ marginRight: 1 }} /> Gmail
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
