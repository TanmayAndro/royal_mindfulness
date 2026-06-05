// src/Components/mobile/GetItFree.tsx

import { useEffect, useState } from "react";

import { Box, Typography, Paper, IconButton } from "@mui/material";
import workbg from "../../Assests/images/mobile/Group103.png";
import checklist from "../../Assests/images/checklist_bg.jpg";
import { trackEvent } from "../../analitics/analytics";

import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const freeItems = [
  {
    id: 1,
    title: "Download Mental Fitness Checklist",
    desc: "checklist description",
  },
  {
    id: 2,
    title: "Book a free consultation",
    desc: "Answer a few questions online...",
    route: "/consultation_question",
    imgClass: "consultation-img",
  },
  {
    id: 3,
    title: "Download free Royal Mindfulness journal",
    desc: "journal description",
  },
  {
    id: 4,
    title: "Take Mental Wellness Quiz",
    desc: "If your first therapist isn't a fit...",
    route: "/quiz_questions",
  },
  {
    id: 5,
    title: "Take a Free Relaxation Session",
    desc: "If your first therapist isn't a fit...",
    link_url: "https://youtu.be/y9pG051DWqc?si=SBP9wl75W1ozw9XG",
  },
];


type Step = {
  id: number;
  title: string;
  desc: string;
  route?: string;
  imgClass?: string;
  link_url?: string;
  document_url?: string;
};


const API_URL =
  // "https://deedee-unchainable-optionally.ngrok-free.dev/checklists";
  `${process.env.REACT_APP_BASE_URL}/checklists`;

const GetItFree = () => {
 const [steps, setSteps] = useState<Step[]>(freeItems);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  

  /* 🔹 FETCH DATA ON MOUNT */
  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Accept: "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        });

        const list = response?.data?.data || [];

       const checklist = list.find(
  (i: any) =>
    i.attributes.title ===
    "Mental Fitness Checklist"
);

const journal = list.find(
  (i: any) =>
    i.attributes.title ===
    "Royal Mindfulness Journal"
);
        setSteps((prev) =>
          prev.map((step) => {
            if (step.id === 1 && checklist) {
              return {
                ...step,
                document_url: checklist.attributes.document_url?.replace(
                  "http://",
                  "https://",
                ),
              };
            }

            if (step.id === 3 && journal) {
              return {
                ...step,
                document_url: journal.attributes.document_url?.replace(
                  "http://",
                  "https://",
                ),
              };
            }

            return step;
          }),
        );
      } catch (error) {
        console.warn("Initial API failed – using static UI");
      }
    };

    fetchChecklist();
  }, []);

  // FUNCTION CHECK SERVER ON /OFF
  const isBackendAlive = async () => {
    try {
      await axios.head(API_URL, { timeout: 3000 });
      return true;
    } catch {
      return false;
    }
  };

  const handleCardClick = async (step: Step) => {
  try {
    trackEvent(
      "Landing Page",
      "Click",
      step.title
    );
  } catch (error) {
    console.error(
      "Track Event Error:",
      error
    );
  }

  await handleStepClick(step);
};

  /* 🔹 CLICK HANDLER */
const handleStepClick = async (
  step: Step
) => {
    setErrorMessage("");

    // 1️⃣ Internal route
    if (step.route) {
      navigate(step.route);
      return;
    }

    // 2️⃣ Document (needs backend alive)
    if (step.document_url) {
      const alive = await isBackendAlive();

      if (!alive) {
        setErrorMessage(
          "Service is temporarily unavailable. Please try again later.",
        );
        return;
      }

      window.open(step.document_url, "_blank", "noopener,noreferrer");
      return;
    }

    // 3️⃣ External link (independent)
    if (step.link_url) {
      window.open(step.link_url, "_blank", "noopener,noreferrer");
      return;
    }

    // 4️⃣ Nothing available
    setErrorMessage(
      "Content is currently unavailable. Please try again later.",
    );
  };
  return (
    <Box
      sx={{
        width: "100%",

        px: 2.5,
        py: 6,

        boxSizing: "border-box",

        position: "relative",
        borderRadius: "40px",

        overflow: "hidden",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",

        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",

        backgroundColor: "#F5F5F5",

        boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
        marginBottom: 1,
      }}
    >
      {/* BG IMAGE */}
      <Box
        sx={{
          position: "absolute",

          inset: 0,

          backgroundImage: `url(${checklist})`,

          backgroundSize: "105% 103%",
          borderRadius: "10px",

          backgroundPosition: "center",

          backgroundRepeat: "no-repeat",

          opacity: 0.15,

          zIndex: 1,

          /* FIGMA STYLE */
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "relative",
          marginTop: "40px",

          zIndex: 2,
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            textAlign: "center",

            fontSize: {
              xs: "34px",
              sm: "44px",
            },

            fontWeight: 400,

            color: "#555",

            mb: 5,
          }}
        >
          Get it for{" "}
          <Box
            component="span"
            sx={{
              color: "#1470AF",
              fontWeight: 700,
            }}
          >
            Free!
          </Box>
        </Typography>

        {errorMessage && (
          <Typography
            sx={{
              color: "#D32F2F",
              textAlign: "center",
              mb: 3,
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {errorMessage}
          </Typography>
        )}

        {/* CARDS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {steps.map((step, index) => (
            <Paper
              key={index}
              elevation={0}
              onClick={() => handleCardClick(step)}
              sx={{
                width: "100%",
                minHeight: "105px",

                px: 2.5,
                py: 2,

                borderRadius: "26px",

                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                cursor: "pointer",

                background: "rgba(255,255,255,0.55)",

                backdropFilter: "blur(10px)",

                border: "1px solid rgba(20,112,175,0.15)",

                boxShadow: "0px 6px 14px rgba(0,0,0,0.10)",

                boxSizing: "border-box",

                transition: "all 0.2s ease",

                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              {/* LEFT CONTENT */}
              <Box
                sx={{
                  flex: 1,
                  pr: 2,
                }}
              >
                {/* TITLE */}
                <Typography
                  sx={{
                    color: "#1470AF",

                    fontSize: {
                      xs: "17px",
                      sm: "20px",
                    },

                    fontWeight: 700,

                    lineHeight: 1.15,

                    mb: 0.5,
                  }}
                >
                  {step.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    color: "#555",

                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                    },

                    lineHeight: 1.25,

                    fontWeight: 400,
                  }}
                >
                  {step.desc}
                </Typography>
              </Box>

              {/* RIGHT ICON */}

              <IconButton
                disableRipple
                sx={{
                  width: 42,
                  height: 42,

                  pointerEvents: "none",
                }}
              >
                <Icon
                  icon="solar:map-arrow-right-bold"
                  width="38"
                  height="38"
                  color="#1470AF"
                />
              </IconButton>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GetItFree;
