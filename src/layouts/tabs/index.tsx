import { Box, useMediaQuery, Tabs, Tab, Typography } from '@mui/material';
import { useState } from 'react';
import Cashflow from '../../components/Cashflow';
import NetPresentValue from '../../components/NetPresentValue';
import ProfitRevenue from '../../components/ProfitRevenue';
import { useTheme } from '@mui/material';

const gridTemplateLargeScreen = `
  "a b"
  "a b"
  "a b"
  "a b"
  "a b"
  "a b"
`

const gridTemplateSmallScreen = `
  "a"
  "a"
  "a"
  "a"
`

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = useState(0);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1000px)")
  const { palette } = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', color: palette.grey[900]}}>
        <Tabs value={value} onChange={handleChange} color={palette.grey[900]} aria-label="basic tabs example" textColor="secondary" indicatorColor="secondary">
          <Tab label="Cashflow" {...a11yProps(0)} />
          <Tab label="Net Present Value" {...a11yProps(1)} />
          <Tab label="Revenue vs Profit" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box width={isAboveMediumScreen ? "80%" : "100%"} height="100%" display="grid" gap="1.5rem"
          sx={isAboveMediumScreen ? {
            gridTemplateColumns: "repeat(1, minmax(auto, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplateLargeScreen,
          } : {
            gridTemplateColumns: "repeat(1, minmax(auto, 1fr))",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreen,
          }}
        >
          <Cashflow />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box width={isAboveMediumScreen ? "80%" : "100%"} height="100%" display="grid" gap="1.5rem"
          sx={isAboveMediumScreen ? {
            gridTemplateColumns: "repeat(1, minmax(auto, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplateLargeScreen,
          } : {
            gridTemplateColumns: "repeat(1, minmax(auto, 1fr))",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreen,
          }}
        >
          <NetPresentValue />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Box width={isAboveMediumScreen ? "80%" : "100%"} height="100%" display="grid" gap="1.5rem"
          sx={isAboveMediumScreen ? {
            gridTemplateColumns: "repeat(1, minmax(auto, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplateLargeScreen,
          } : {
            gridTemplateColumns: "repeat(1, minmax(auto, 1fr))",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreen,
          }}
        >
          <ProfitRevenue />
        </Box>
      </CustomTabPanel>
    </Box>
  );
}

export default BasicTabs;