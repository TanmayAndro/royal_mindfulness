import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import {
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
} from "../../assests";
import bg1 from "../../Assests/b1.png";
import bg2 from "../../Assests/b2.png";
import bg3 from "../../Assests/b3.png";

const items = [
  {
    name: "Antar Mouna",
    text: "Translate to inner silence...",
    image: bg1,
  },
  {
    name: "Antar Mouna",
    text: "Translate to inner silence...",
    image: bg2,
  },
  {
    name: "Antar Mouna",
    text: "Translate to inner silence...",
    image: bg3,
  },
];

const Item = ({ item }) => {
  return (
    <Paper>
      <img sx={{ boxShadow:' none'}}
        src={item.image}
        alt={item.name}
        style={{ width: "100%", height: "500px", objectFit: "cover",aspectRatio: "16/9" }}
      />
      <Overlay>
        <Typography
          component="h2"
          style={{
            fontSize: "80px",
            fontWeight: "700",
            color: "#0F2E15",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          {item.name}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          style={{ color: "black", margin: "0 auto" }}
        >
          {item.text}
        </Typography>
      </Overlay>
    </Paper>
  );
};

const Slider = () => {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Overlay = styled("div")({
  position: "absolute",
  top: "30%",
  left: "20%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  textAlign: "center",
  padding: "20px",
});

export default Slider;
