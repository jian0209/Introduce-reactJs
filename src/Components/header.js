import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { CommonStore } from "../Store/commonStore";
import Colors from '../Assets/Colors';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: Colors.goldColor,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function Header() {
    const currentNav = CommonStore.useState((s) => s.navCode);

  const handleChange = (event, newValue) => {
    CommonStore.update(s => {
        s.navCode = newValue;
    })
  };

  return (
    <Box sx={{ width: "100%", height: 50, }}>
      <Box>
        <StyledTabs value={currentNav} onChange={handleChange}>
          <StyledTab label="About Me" />
          <StyledTab label="Contact Me" />
          <StyledTab label="Project View" />
          <StyledTab label="Download Project" />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
}
