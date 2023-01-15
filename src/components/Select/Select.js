import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: fit-content;
  border-radius: 8px;
  color: ${COLORS.gray700};
  position: relative;
  padding-block: 12px;
  padding-inline-start: 18px;
  padding-inline-end: 54px;
`;

const InvisibleSelect = styled.select`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  margin: -12px -18px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  height: fit-content;
  margin-block: auto;
  margin-inline-start: 18px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <InvisibleSelect value={value} onChange={onChange} aria-label={label}>
        {children}
      </InvisibleSelect>
      <div>{displayedValue}</div>
      <IconWrapper>
        <Icon id="chevron-down" size="24" strokeWidth="2" />
      </IconWrapper>
    </Wrapper>
  );
};

export default Select;
