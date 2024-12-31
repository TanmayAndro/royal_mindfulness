import { Box, Typography, Grid, Rating } from "@mui/material";
import test1 from "../../../Assests/BG (1).png";
import test2 from "../../../Assests/BG.png";

const testimonials = [
  {
    id: 1,
    name: "Jenny Wilson",
    role: "Growco.io",
    avatar: test2,
    rating: 5,
    text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
  {
    id: 2,
    name: "Devon Lane",
    role: "DLDesign.co",
    avatar: test1,
    rating: 5,
    text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#f9f9f9" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Don’t just take our words
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial) => (
          <Grid
            item
            key={testimonial.id}
            xs={12}
            sm={6}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "flex-start",
                maxWidth: 500,
                p: 2,
                mt: "1rem",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: 190 },
                  height: { xs: "auto", sm: 200 },
                  backgroundColor: "#e0e0e0",
                  borderRadius: 10,
                  mb: { xs: 2, sm: 0 },
                  mr: { sm: 2 },
                  overflow: "hidden",
                }}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ flex: 1, ml: { sm: "2rem" } }}>
                <Rating
                  name={`rating-${testimonial.id}`}
                  value={testimonial.rating}
                  readOnly
                  sx={{ mb: 1 }}
                />
                <Typography variant="body1" mt={3}>
                  &quot;{testimonial.text}&quot;
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                  mt={3}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {testimonial.role}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
