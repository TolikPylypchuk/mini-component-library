import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  isolation: isolate;
`;

const InvisibleSelect = styled.select`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  appearance: none;
`;

const Presentation = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding-block: 12px;
  padding-inline-start: 18px;
  padding-inline-end: 52px;

  ${InvisibleSelect}:focus + & {
    outline: auto;
  }

  ${InvisibleSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  height: fit-content;
  margin-block: auto;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <InvisibleSelect value={value} onChange={onChange} aria-label={label}>
        {children}
      </InvisibleSelect>
      <Presentation>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
      </Presentation>
    </Wrapper>
  );
};

export default Select;
