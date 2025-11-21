import {
    Box, Button, Container,
    FormControl, FormControlLabel, FormLabel, Paper,
    ToggleButton,
    ToggleButtonGroup, Typography
} from "@mui/material"
import { useState } from "react";


export default function MentalQuiz() {
    const [answers, setAnswers] = useState({});
    const questions = [
        {
            id: 1,
            question: "When sudden changes disrupt your schedule, you stay calm and easily adjust.",
            virtue: "Stress Resilience"
        },
        {
            id: 2,
            question: "You calmly handle criticism without feeling upset or defensive.",
            virtue: "Emotional Resilience"
        },
        {
            id: 3,
            question: "When working, you effortlessly ignore social media notifications and distractions.",
            virtue: "Focus & Concentration"
        },
        {
            id: 4,
            question: "You maintain healthy habits consistently, even when not motivated.",
            virtue: "Discipline & Persistence"
        },
        {
            id: 5,
            question: "You clearly understand your emotions when upset   or angry.",
            virtue: "Emotional Intelligence"
        },
        {
            id: 6,
            question: "After a stressful day, you quickly unwind and achieve restful sleep.",
            virtue: "Mental Recovery & Relaxation"
        },
        {
            id: 7,
            question: "You're able to resist impulses (like unhealthy eating, binge-watching) for long-term benefits.",
            virtue: "Self-Control"
        },
        {
            id: 8,
            question: "You confidently make decisions even in uncertain situations.",
            virtue: "Decision-Making Confidence"
        },
        {
            id: 9,
            question: "You rarely dwell on mistakes or failures, quickly moving forward instead.",
            virtue: "Self-Compassion & Growth Mindse"
        },
        {
            id: 10,
            question: "When feeling anxious or overwhelmed, you have effective coping strategies to manage it.",
            virtue: "Anxiety Management"
        },
        {
            id: 11,
            question: "In conflict situations, you easily empathize and understand the other person's viewpoint.",
            virtue: "Empathy & Listening"
        },
        {
            id: 12,
            question: "You regularly take breaks during work to restore your mental clarity.",
            virtue: "Energy Management"
        },
        {
            id: 13,
            question: "You easily detach from negative thoughts and don’t ruminate excessively.",
            virtue: "Thought Management"
        },
        {
            id: 14,
            question: "Even when things go wrong, you remain optimistic about achieving your long-term goals.",
            virtue: "Optimism & Positivity"
        },
        {
            id: 15,
            question: "You’re mindful and fully present during your day-to-day activities, rarely distracted by past or future worries.",
            virtue: "	Mindfulness & Presence"
        }
    ]

    const options = [
        { label: "1 - Very Untrue", value: 1 },
        { label: "2 - Untrue", value: 2 },
        { label: "3 - Neutral", value: 3 },
        { label: "4 - True", value: 4 },
        { label: "5 - Very True", value: 5 },
    ];

    const handleAlignment=()=>{

    }



    return (
        <Container maxWidth="md" >
            <Typography variant="h4" align="center" gutterBottom mt={4}>Mental Wellness Quiz</Typography>
            {questions.map((q) => (
                <Paper key={q.id} elevation={3} sx={{ my: 3, p: 3 }}>
                    <FormControl component="fieldset" fullWidth sx={{ }}>
                        <FormLabel component="legend" sx={{ fontWeight: "bold", mb: 1 }}>
                            {q.id}.{q.question}
                        </FormLabel>
                        <Typography variant="body2" text="textSecondary" sx={{ mb: 2 }}>Mental Virtue Measured:<strong>{q.virtue}</strong></Typography>
                        <Box gap={2} sx={{display:"flex",justifyContent:"space-evenly",marginBlock:"20px"}}>
                            {
                                options.map((option)=>(
                                    
                                    <ToggleButtonGroup
                            value={option.value}
                            exclusive
                            onChange={handleAlignment}
                            aria-label="text alignment"
                        
                            sx={{border:"1px solid red"}}
                          
                        >
                            <ToggleButton sx={{width:"150px"}} key={option.id} value={option.value} aria-label="left aligned" label={option.label}  >
                                {option.label}
                            </ToggleButton>
                        </ToggleButtonGroup>
                                ))
                            }
                        </Box>
                        
                           
                            
                        
                    </FormControl>

                </Paper>
            ))}

            <Box textAlign="center" mt={4} mb={4}>
                <Button
                    sx=
                    {{
                        backgroundColor: "blue",
                        color: "white", width: "200px",
                        "&:hover": {
                            backgroundColor: "blue", color: "white"

                        }
                    }}>
                    Submit
                </Button>
            </Box>

        </Container>






    )




}