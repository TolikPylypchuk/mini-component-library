/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  'large': {
    '--height': '24px',
    '--padding': '4px'
  },
  'medium': {
    '--height': '12px',
    '--padding': '0'
  },
  'small': {
    '--height': '8px',
    '--padding': '0'
  }
}

const ProgressBarWrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
`;

const ProgressBarContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: clip;
`;

const ProgressBarContent = styled.div`
  width: ${p => p.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  const style = STYLES[size];
  return (
    <ProgressBarWrapper role="progressbar" aria-valuenow={value} style={style}>
      <ProgressBarContentWrapper>
        <ProgressBarContent value={value} />
      </ProgressBarContentWrapper>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
