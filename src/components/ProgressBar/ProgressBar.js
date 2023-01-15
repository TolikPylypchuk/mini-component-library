/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  'small': {
    '--height': '8px',
    '--padding': '0',
    '--radius': '4px'
  },
  'medium': {
    '--height': '12px',
    '--padding': '0',
    '--radius': '4px'
  },
  'large': {
    '--height': '24px',
    '--padding': '4px',
    '--radius': '8px'
  }
}

const Wrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: clip;
`;

const Bar = styled.div`
  width: ${p => p.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  const style = STYLES[size];

  if (!style) {
    throw new Error(`Unknown size for progress bar: ${size}`);
  }

  return (
    <Wrapper role="progressbar" aria-valuenow={value} style={style}>
      <BarWrapper>
        <Bar value={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
