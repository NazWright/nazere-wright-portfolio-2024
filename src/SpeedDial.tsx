import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import SourceIcon from "@mui/icons-material/Source";
import ArticleIcon from "@mui/icons-material/Article";

const iconColor = "info";

const actions = [
  { icon: <SourceIcon color={iconColor} />, name: "Projects" },
  { icon: <FingerprintIcon color={iconColor} />, name: "About Me" },
  { icon: <ArticleIcon color={iconColor} />, name: "Publications" },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        className="speed-dial"
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon color="black" />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
