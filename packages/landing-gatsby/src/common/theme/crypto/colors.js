import config from 'config/index';
import { hexToRgba } from 'common/helpers';

const { colors } = config.theme;

export default {
  transparent: 'transparent', // 0
  black: '#000000', // 1
  white: '#ffffff', // 2
  headingColor: '#0f2137',
  textColor: '#5d646d', // 3
  labelColor: '#767676', // 4
  inactiveField: '#f2f2f2', // 5
  inactiveButton: '#b7dbdd', // 6
  inactiveIcon: '#EBEBEB', // 7
  
  primary: colors.primary, // 8
  primaryHover: colors.primaryDark, // 9
  secondary: colors.secondary, // 10
  secondaryHover: colors.secondaryDark, // 11
  yellow: colors.tertiary, // 12
  yellowHover: colors.tertiaryDark, // 13
  primaryBoxShadow: ` -6.691px 7.431px 20px 0px ${hexToRgba(colors.primary, 0.2)}`,
};