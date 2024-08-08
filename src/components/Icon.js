import React from "react";
import styled from "@emotion/styled";

const StyledSvg = styled.svg`
  fill: currentColor;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

const Icon = ({ name, size = 20, className = "" }) => {
  return (
    <StyledSvg
      className={className}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`/icons/solid.svg#${name}`} />
    </StyledSvg>
  );
};

export default Icon;
