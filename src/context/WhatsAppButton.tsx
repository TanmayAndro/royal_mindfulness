import React from 'react'
import { Fab, Tooltip, SvgIcon } from "@mui/material";

const WhatsAppIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M12.01 2.01c-5.52 0-10 4.48-10 10 0 1.75.46 3.39 1.26 4.83L2 22l5.3-1.26c1.4.75 3 1.27 4.71 1.27 5.52 0 10-4.48 10-10s-4.48-10-10-10zm.01 18c-1.54 0-3.05-.41-4.37-1.18l-.31-.18-3.24.77.78-3.15-.2-.32c-.84-1.34-1.28-2.9-1.28-4.5 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.66-6.38c-.26-.13-1.51-.74-1.74-.83-.23-.09-.4-.13-.57.13-.17.26-.64.83-.78.99-.14.17-.29.19-.54.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.27-1.52-1.42-1.78-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.4-.42-.57-.43-.15 0-.32-.01-.5-.01-.17 0-.45.06-.68.31-.24.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.81 2.77 4.39 3.88.61.26 1.09.42 1.46.54.62.2 1.18.17 1.62.11.49-.07 1.51-.62 1.72-1.21.21-.59.21-1.09.15-1.21-.06-.12-.21-.18-.47-.31z" />
  </SvgIcon>
);

type WhatsAppButtonProps = {
  phoneNumber?: string;
  message?: string;
};


const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber = "919425645147", 
  message= "Hello, I want to know more about your services." 
}) => {

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };    
  return (
    <Tooltip title="Chat on WhatsApp">
      <Fab
        color="success"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: { xs: 16, sm: 20 },
          right: { xs: 16, sm: 20 },
          zIndex: 9999,
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Tooltip>
  )
}

export default WhatsAppButton
