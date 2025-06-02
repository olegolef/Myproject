import React from 'react';
import AddPlus from './icon-add-plus.svg';
import GooglePlay from './icon-google-play.svg';
import Apple from './icon-apple.svg';
import RuStore from './icon-rustore.svg';

export type IconName = 'add-plus' | 'google-play' | 'apple' | 'rustore';

const icons = {
  'add-plus': AddPlus,
  'google-play': GooglePlay,
  'apple': Apple,
  'rustore': RuStore,
};

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color, className }) => {
  const SvgIcon = icons[name] as any;
  if (!SvgIcon) return null;
  return <img src={SvgIcon} width={size} height={size} style={color ? { color } : {}} className={className} alt={name} />;
}; 