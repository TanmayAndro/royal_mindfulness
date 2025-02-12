import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../Assests/footerLogo.png";
import footerImg from "../Assests/footerLast.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        padding: "3rem",
        backgroundColor: "#1470AF", // Use backgroundImage
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
        <Box
          onClick={handleClick}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: 2,
            cursor: "pointer",
          }}
        >
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
          sx={{ marginTop: "2rem", color: "#EAEAEE" }}
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
            // { name: "Pricing", link: "/pricing-plans" },
            { name: "Contact Us", link: "/contact" },
            { name: "Webinar", link: "/webinar" },
            // { name: "Blogs", link: "/blogs" },

            {
              name: "Blogs",
              link: "https://tanmaysmarty.wixsite.com/my-site-1/blog",
            },

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
              window.open(
                "https://www.linkedin.com/company/royalmindfulness/",
                "_blank"
              );
            }}
          >
            <LinkedInIcon sx={{ marginRight: 1 }} /> LinkedIn
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
