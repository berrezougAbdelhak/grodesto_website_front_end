import { Button, useTheme } from "@mui/material";
import React from "react";
export const ButtonGr = ({ title, onClick,style }) => {
  const theme = useTheme();
  return (
    <Button
      sx={{
        borderRadius: "10px",
        border: "none",
        fontFamily: "Poppins",
        fontSize: 16,
        color: "white",
        // background: theme.palette.YellowGradient.main
        ...style

    }}
    >
      {" "}
      {title}{" "}
    </Button>
  );
};
