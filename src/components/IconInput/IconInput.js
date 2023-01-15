import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--border': '1px',
    '--font-size': `${14 / 16}rem`,
    '--padding': '24px'
  },
  large: {
    '--border': '2px',
    '--font-size': `${18 / 16}rem`,
    '--padding': '36px'
  }
}

const InputLabel = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 4px;
  margin-block: auto;
  height: fit-content;
`;

const Input = styled.input`
  width: ${p => p.width}px;
  border: none;
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  padding-block: 4px;
  padding-inline-start: var(--padding);
  padding-inline-end: 0;
  outline-offset: 2px;
  border-bottom: var(--border) solid ${COLORS.black};

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
  ...delegated
}) => {
  const style = STYLES[size];
  
  if (!style) {
    throw new Error(`Unknown size for icon input: ${size}`);
  }

  const iconSize = size === 'small' ? 16 : 24;
  const iconStrokeWidth = size === 'small' ? 1 : 2;

  return (
    <InputLabel>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputIcon id={icon} size={iconSize} strokeWidth={iconStrokeWidth} />
      <Input type="text" width={width} style={style} {...delegated} />
    </InputLabel>
  );
};

export default IconInput;
