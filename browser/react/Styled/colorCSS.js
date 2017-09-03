import {css} from 'styled-components';
import color from 'color';
import theme from './theme';

const darken = (clr, dec = 0.4) => color(clr).darken(dec).string();

export const active = css`
${props => {

  let thm;
  Object.keys(theme).forEach(th => {
    if (props[th]) thm = th;
  });

  if (!thm) return null;

  return `
    color: ${props.theme[thm].color || '#fff'};
    background: ${darken(props.theme[thm].background) || '#2b4355'};
    border-color: ${darken(props.theme[thm].borderColor) || '#1a2833'};
  `;

}}
`;

export const fixed = css`
${props => {
  let thm;
  Object.keys(theme).forEach(th => {
    if (props[th]) thm = th;
  });

  if (!thm) return null;

  return `
    color: ${props.theme[thm].color || '#fff'};
    background: ${props.theme[thm].background || '#395870'};
    border-color: ${props.theme[thm].borderColor || '#2b4355'};

    &.active {
      ${active}
    }
    `;
  }}
`;

export default css`
${props => {
  let thm;
  Object.keys(theme).forEach(th => {
    if (props[th]) thm = th;
  });

  if (!thm) return null;

  return `
    color: ${props.theme[thm].color || '#fff'};
    background: ${props.theme[thm].background || '#395870'};
    border-color: ${props.theme[thm].borderColor || '#2b4355'};
    
    &:hover, &:active, &:focus, $.active {
      ${active};
    }
  `;
}}
`;