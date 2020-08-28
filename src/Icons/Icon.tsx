import * as React from 'react';
import { SvgIconProps } from '@material-ui/core';
import * as muiIcons from './mui.constants';
import * as customIcons from './customIcons';

/**
 * @param name of the icon
 */

export type IconName =
  | keyof typeof muiIcons
  | keyof typeof customIcons
  | string;

interface IconProps extends SvgIconProps {
  name: IconName;
}

const Icon: React.FC<IconProps> = React.forwardRef(
  ({ name, ...iconProps }, ref) => {
    const Icon = muiIcons[name] || customIcons[name];
    return <Icon ref={ref} {...iconProps} />;
  }
);

export default Icon;
