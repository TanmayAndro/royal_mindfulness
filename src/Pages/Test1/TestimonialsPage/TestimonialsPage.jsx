import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// MUI Icons
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./TestimonialsPage.css";
import TestimonialCard from "../../../Components/test1/TestimonialCard/TestimonialCard";

// import images
import Test1 from "../../../Assests/images/download (4).webp";
import Test2 from "../../../Assests/images/image11.avif";
import Test3 from "../../../Assests/images/image13.avif";
import Test4 from "../../../Assests/images/images(4).webp"; 
import Test5 from "../../../Assests/images/testmonilas_6.webp";  
import Test6 from "../../../Assests/images/testmonilas_7.webp";  
import Test7 from "../../../Assests/images/download(2).webp";   
import Test8 from "../../../Assests/images/image33.avif";   
import Test9 from "../../../Assests/images/iamge32.webp";  
import Test10 from "../../../Assests/images/images (3).webp";   
import Test11 from "../../../Assests/images/images.webp";   
import Test12 from "../../../Assests/images/download (3).webp";   
import Test13 from "../../../Assests/images/download (1).webp";   
import Test14 from "../../../Assests/images/image12.avif";   
import Test15 from "../../../Assests/images/image31.webp";   

// /home/ravi/Desktop/Tanmay_sir/royal_mindfulness/src/Assests/images/testmonilas_1.webp
const testimonialData = [
  { id: 1, name: "James", text: "Royal Mindfulness helped me slow down my racing mind. I didn’t realize how much mental noise I was carrying until I learned how to observe it", image: Test1, bgColor: "#005e5d", textColor: "white" },

  { id: 2, name: "Harper", text: "I came here for stress management, but I stayed for the clarity it brought into my daily life. My reactions have changed completely.", image: Test2, bgColor: "#a2330aff", textColor: "white" },


  { id: 3, name: "Evelyn", text: "This isn’t just meditation. It’s mental training. I feel more in control of my thoughts and decisions now.", image: Test3, bgColor: "#1f0c3aff", textColor: "white" },

  { id: 4, name: "Alexander", text: "Earlier I tried many apps and videos, but personal guidance at Royal Mindfulness made all the difference.", image: Test4, bgColor: "#3b2c71ff", textColor: "white" },

  { id: 5, name: "Mia", text: "My sleep quality improved within weeks. Not because I forced it—but because my mind finally learned how to relax.", image: Test5, bgColor: "#8e155aff", textColor: "white" },

  { id: 6, name: "Emma", text: "Royal Mindfulness taught me how to respond instead of react. That one shift changed my relationships and work life.", image: Test6, bgColor: "#30a424ff", textColor: "white" },

  { id: 7, name: "Lucas", text: "I used to feel mentally exhausted all the time. Now I have more energy, focus, and emotional balance throughout the day.", image: Test7, bgColor: "#67492fff", textColor: "white" },

  { id: 8, name: "Charlotte", text: "What I love most is how practical the practices are. You can actually apply them in real-life situations.", image: Test8, bgColor: "#7e7fa3ff", textColor: "white" },

  { id: 9, name: "Ava", text: "I didn’t just gain calmness—I gained awareness. And awareness changed how I see myself and the world.", image: Test9, bgColor: "#005e5d", textColor: "white" },

  { id: 10, name: "Liam", text: "The concept of a ‘mental fitness trainer’ is powerful. Just like physical fitness, my mind now feels trained and disciplined.", image: Test10, bgColor: "#08322aff", textColor: "white" },

  { id: 11, name: "Olivia", text: "Royal Mindfulness helped me break old patterns I didn’t even know were controlling me.", image: Test11, bgColor: "#1d3c17ff", textColor: "white" },

  { id: 12, name: "William", text: "This training brought structure to my inner world. My thoughts feel less chaotic and more intentional now.", image: Test12, bgColor: "#4ece3dff", textColor: "white" },

  { id: 13, name: "Benjamin", text: "I feel more present in conversations, work, and even small moments. That alone feels priceless.", image: Test13, bgColor: "#bb50b9ff", textColor: "white" },

  { id: 14, name: "Isabella", text: "Instead of escaping stress, I learned how to face it calmly. That confidence is new for me.”", image: Test14, bgColor: "#b4c124ff", textColor: "white" },

  { id: 15, name: "Elijah", text: "Royal Mindfulness didn’t promise quick fixes. It offered real tools—and those tools actually worked.", image: Test15, bgColor: "#dd831cff", textColor: "white" },
];

const TestimonialsPage = () => {
  const [isAutoplay, setIsAutoplay] = useState(true); 
  const swiperRef = useRef(null);

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isAutoplay) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsAutoplay(!isAutoplay);
    }
  };

  
  const iconStyle = { 
    fontSize: 20,               
    color: '#007bff',           // Blue color
    backgroundColor: 'transparent', // Transparent background
    // transition: 'transform 0.2s ease, color 0.2s ease',
    cursor: 'pointer',
    "&:hover": {
      transform: 'scale(1.1)',
      color: '#0056b3'         
    }
 
  };

  return (
    <div className="testimonials-page-wrapper">
      <div className="carousel-controls">
        <button onClick={toggleAutoplay} className="control-icon-btn">
          {isAutoplay ? (
            <PauseCircleFilledIcon sx={iconStyle} />
          ) : (
            <PlayCircleFilledIcon sx={iconStyle} />
          )}
        </button>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Instance set karne ka sahi tarika
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 }, // 1024 fix
          1440: { slidesPerView: 4, spaceBetween: 40 },
        }}
        className="testimonials-swiper"
      >
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id}>
            <TestimonialCard {...item} /> 
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsPage;