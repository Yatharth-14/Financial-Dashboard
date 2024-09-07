import FlexBetween from "@/components/FlexBetween";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { Box, Typography, useTheme } from "@mui/material";
// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p=".5rem 0rem" color={palette.grey[300]}>
      {/* Left side */}
      <FlexBetween gap=".75rem">
        <AutoGraphIcon sx={{ fontSize: "28px" }}></AutoGraphIcon>
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>

      {/* Right side */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link 
          to="/" 
          onClick={() => setSelected("dashboard")}
          style={{color: selected === "dashboard" ? "inherit" : palette.primary[700],
            textDecoration: "inherit"
          }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
        <Link 
          to="/predictions" 
          onClick={() => setSelected("predictions")}
          style={{color: selected === "predictions" ? "inherit" : palette.primary[700],
            textDecoration: "inherit"
          }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
