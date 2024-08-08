import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const UserBatchPerformance = () => {
    const data = {
        labels: ['Jr. Knights', 'Gladiators', 'Spartans'],
        datasets: [
            {
                label: 'All information in percentage(%) ',
                data: [85, 70, 75],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return (
        <Paper sx={{ borderRadius: 4, pb: 2 }}>
            <Box p={2}>
                <Typography variant="h6">User Batch Performance</Typography>
                <Bar data={data} />
            </Box>
        </Paper>
    );
};

export default UserBatchPerformance;
