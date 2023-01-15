import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--border': '1px',
    '--font-size': `${14 / 16}rem`
  },
  large: {
    '--border': '2px',
    '--font-size': `${18 / 16}rem`
  }
}

const Wrapper = styled.div`
  border-bottom: var(--border) solid ${COLORS.black};
  width: ${p => p.width}px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black}
  }
`;

const InputLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
  padding-block-end: 4px;
`;

const InputWrapper = styled.div`
  display: inline-block;
  margin-inline-start: 8px;
  padding-block: 4px;
`

const Input = styled.input`
  width: 100%;
  border: none;
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = STYLES[size];
  
  if (!style) {
    throw new Error(`Unknown size for icon input: ${size}`);
  }

  const iconSize = size === 'small' ? 16 : 18;
  const iconStrokeWidth = size === 'small' ? 1 : 2;

  return (
    <Wrapper width={width} style={style}>
      <InputLabel for="icon-input">
        <Icon id={icon} size={iconSize} strokeWidth={iconStrokeWidth} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </InputLabel>
      <InputWrapper>
        <Input id="icon-input" type="text" placeholder={placeholder} />
      </InputWrapper>
    </Wrapper>
  );
};

export default IconInput;
