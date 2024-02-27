import * as React from 'react';

import BadgeUnstyled from '@mui/base/BadgeUnstyled';
import { styled, SxProps, Theme } from '@mui/system';

const StyledBadge = styled(BadgeUnstyled)(
  ({  }) => `
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #194049;
    line-height: 22px;
    text-align: center;
    list-style: none;
    font-family: Poppins, sans-serif;
    position: relative;
    display: inline-block;
    border-radius: 16px;
    background: #EDF1D5;
    white-space: nowrap;
    z-index: auto;
    min-width: 22px;
    height: 30px;
    padding: 5px 10px;

  `
);

export default function MHBadge({
  children,
  content,
  sx
}: {
  content: string;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <StyledBadge badgeContent={content} sx={{ ...sx }} >
      {children}
    </StyledBadge>
  );
}
