// // src/pages/UserForm.jsx
// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
// } from "@mui/material";

// export default function UserForm() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted:", form);
//     // Add actual submission logic here
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box mt={4} mb={4} p={4} boxShadow={6} borderRadius={3}>
//         <Typography variant="h5" fontWeight="bold" mb={3}>
//           Enter Your Details
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Name"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             margin="normal"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             margin="normal"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Phone Number"
//             name="phone"
//             type="tel"
//             value={form.phone}
//             onChange={handleChange}
//             margin="normal"
//             required
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3 }}
//           >
//             Submit
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }
// src/pages/UserForm.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // Add actual submission logic here
  };

  const handleBack = () => {
    navigate("/quiz-landing");
  };

  return (
    <Container maxWidth="sm" >
      <Box mt={4} mb={4} p={4} boxShadow={6} borderRadius={3}>

        {/* Back Arrow */}
        <IconButton onClick={handleBack} sx={{ mb: 2 ,color:"blue"}}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h5" fontWeight="bold" mb={3}>
          Enter Your Details
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}

