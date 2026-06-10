import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import DesktopLanding from "../../Components/Landing/Desktop/DesktopLanding";
 import MobileLanding from "../../Components/Landing/Mobile/MobileLanding";
 function Royal() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    
  return (
    // <div>
    //   {isMobile ? <MobileLanding /> : <DesktopLanding />}
    // </div>


    <div>
      {isMobile ? <MobileLanding /> : <MobileLanding />  }
    </div>
  );
}   
export default Royal;