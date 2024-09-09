import React from 'react';
import FlexBetween from './FlexBetween';
import { useTheme } from '@mui/material/styles'; // Correct import for MUI theme
import { Typography, Box } from '@mui/material'; // Import Box from MUI

type Props = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  sideText: string;
};

const BoxHeader: React.FC<Props> = ({ title, subtitle, icon, sideText }) => {
  const { palette } = useTheme();

  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;