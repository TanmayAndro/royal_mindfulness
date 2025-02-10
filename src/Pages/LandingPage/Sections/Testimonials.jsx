import { Box, Typography, Rating, IconButton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    id: 1,
    name: "Nirmala",
    role: "Vietnam",
    rating: 5,
    text: "I started practicing yoga in 2007 as per my doctor's advice for my health condition. After six months of practice, my sinus problem went away, and my health improved. I could control my emotions better than before. Yoga Nidra is also a very special practice. I experienced it today, and I believe in the healing power of Yoga Nidra.Yoga Nidra is helpful for many conditions—mind, body, and even spiritual well-being. I have had many experiences and benefits from Yoga Nidra, both for myself and my students.",
  },
  {
    id: 2,
    name: "Hari Om",
    role: "Munger",
    rating: 5,
    text: "It was a tool, a divine practice that I could lean on comfortably. It helped me come out of a major illness I had suffered from for two decades. My physical and mental strength increased, enthusiasm and self-belief grew, and I overcame negative thinking, insomnia, and concentration issues. Harmony entered my life, and my overall efficiency improved.",
  },
  {
    id: 3,
    name: "Paramhansa Swami Satyananda",
    role: "",
    rating: 5,
    text: "Yoga Nidra felt like a true magic wand. It helped me heal from a long-term illness, enhancing my physical and mental strength, boosting self-belief, and overcoming insomnia and negativity. This divine practice brought harmony and transformation into my life. I wish everyone experiences its profound benefits.",
  },
  {
    id: 4,
    name: "Yoga liri",
    role: "",
    rating: 5,
    text: "My experience with Yoga Nidra was deeply transformative. As I practiced, I felt a profound lightness, like melting into spring. A vision of my ishta devata, an elephant with sorrowful eyes, led me to a powerful realization. My first visit to India and connection with Ganesha strengthened this journey, filling me with a strong emotional glow—guiding me back to my true path.",
  },
];

// Custom Arrow Components
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "0px", // Position outside the content
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Solid background
        color: "white",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 1)",
        },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: "0px", // Position outside the content
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Solid background
        color: "white",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 1)",
        },
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2, // Default for larger screens
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{ py: 8, px: 2, backgroundColor: "#f9f9f9", position: "relative" }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Don’t just take our words
      </Typography>

      <Box sx={{ position: "relative", maxWidth: "1200px", margin: "0 auto" }}>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Box
              key={testimonial.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: 500,
                padding: "3rem",
                mt: "1rem",
                mx: "auto",
                textAlign: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                {testimonial.name}
              </Typography>
              <Rating
                name={`rating-${testimonial.id}`}
                value={testimonial.rating}
                readOnly
                sx={{ my: 2 }}
              />
              <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                &quot;{testimonial.text}&quot;
              </Typography>
              {testimonial.role && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {testimonial.role}
                </Typography>
              )}
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Testimonials;
