import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export const MarqueeItem = styled("li")(({ theme: _theme }) => ({
  listStyle: "none",
  opacity: "0.4",
}));

const Marquee = (props: { children: React.ReactNode; continuous: boolean }) => {
  return (
    <Box
      sx={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        my: { xs: 3, md: 7 },
      }}
      className="marquee"
    >
      <Stack
        component="ul"
        className="marquee__content"
        direction="row"
        spacing={{ xs: 5, md: 10 }}
        justifyContent="space-around"
        alignItems="center"
      >
        {props.children}
      </Stack>

      <Stack
        component="ul"
        className="marquee__content"
        direction="row"
        spacing={{ xs: 5, md: 10 }}
        justifyContent="space-around"
        alignItems="center"
        aria-hidden="true"
      >
        {props.children}
      </Stack>
    </Box>
  );
};

export default Marquee;
