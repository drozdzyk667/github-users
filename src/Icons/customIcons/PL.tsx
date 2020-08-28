import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const PL: React.FC<SvgIconProps> = ({ ...props }) => (
  <SvgIcon {...props} viewBox='0 0 640 480'>
    <g fillRule='evenodd'>
      <path fill='#fff' d='M640 480H0V0h640z' />
      <path fill='#dc143c' d='M640 480H0V240h640z' />
    </g>
  </SvgIcon>
);
export default PL;
