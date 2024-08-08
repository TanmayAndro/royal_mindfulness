import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import {slider1, slider2, slider3, slider4, slider5, slider6, slider7} from '../../assests'



const items=[
    {
        name: "Well !! Think again!",
        image: slider1
    },
    {
        name: "Well! ..... We can offer you something.",
        image: slider2
    },
    {
        name: "YOGA NIDRA Also known as Yogic Sleep",
        image: slider3
    },
    {
        name: "Do you really think sleep helps your mind to relax?",
        image: slider4
    },
    {
        name: "Does the state of your mind changes after you wake up!?",
        image: slider5
    },
    {
        name: "Sleep helps you in relaxing your Body.The Mind needs more.",
        image: slider6
    },
    {
        name: "So what have you done to relax your mind and emotions?",
        image: slider7
    }
];

const Item = ({ item }) => {
    return (
        <Paper>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            <Overlay>
                <Typography variant="h3" component="h2" style={{ color: 'white', textAlign: 'center', margin: '0 auto' }}>
                    {item.name}
                </Typography>
            </Overlay>
        </Paper>
    )
}

const Slider = () => {
    return (
        <Carousel>
            {items.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
    )
}



const Overlay = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px'
});

export default Slider;

