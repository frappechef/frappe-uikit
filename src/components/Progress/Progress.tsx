import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import { ProgressFrappe } from "../Svg";
import { ProgressProps } from "./types";
import FrappeyProgressWrapper from "./FrappeyProgressWrapper";

const stepGuard = (step: number) => {
  if (step < 0) {
    return 0;
  }

  if (step > 100) {
    return 100;
  }

  return step;
};

const Progress: React.FC<ProgressProps> = ({ primaryStep = 0, secondaryStep = null, showFrappeyProgress = false }) => (
  <StyledProgress>
    {showFrappeyProgress && (
      <FrappeyProgressWrapper style={{ left: `${stepGuard(primaryStep)}%` }}>
        <ProgressFrappe />
      </FrappeyProgressWrapper>
    )}
    <Bar primary style={{ width: `${stepGuard(primaryStep)}%` }} />
    {secondaryStep ? <Bar style={{ width: `${stepGuard(secondaryStep)}%` }} /> : null}
  </StyledProgress>
);
export default Progress;
