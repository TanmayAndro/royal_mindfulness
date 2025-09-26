
import { Box, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
export default function BookNow() {
  const words = [
  "Reduce stress, increase focus, and build sheer strength.",
  "Cultivate calm, command clarity, and conquer your inner chaos.",
  "Stay poised, powerful, and profoundly present.",
  "Journey from overthinking to mental mastery.",
  "Amplify awareness, and move with sovereign strength.",
  "Build royal resilience, disciplined thought, and unshakable calm.",
  "Rule your reactions, reclaim your peace, and rise like a monarch.",
  "From chaos to command.",
  "Stillness breeds supremacy.",
  "Be fierce. Be still. Be royal.",
]
  return (<>
    <Box sx={{ height: "1000px", border: "1px solidred", display: "flex", justifyContent: "coloumn" }}>
      {/* //left part */}
      <Box sx={{ height: "800px", border: "1px solid blue", width: "40%", backgroundColor: "#149BD8" }}>
        <Typography variant="h3" sx={{
          fontSize: { xs: "1.8rem", md: "4rem" }, color: "white", paddingTop: "30px", paddingLeft: "10px",
          fontWeight: "bold", mb: 3,
        }}>
          You’re One Step Away From a Magistical Life
        </Typography>
        <Typewriter words={words}
        loop={0}
        cursor
        cursorStyle="|"
        ></Typewriter>
      </Box>
      {/* right part */}
      <Box sx={{ height: "800px", border: "1px solid green", width: "60%" }}></Box>
    </Box>
  </>)
}
