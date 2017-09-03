import styled from 'styled-components';
import {fixed} from './colorCSS';

export default styled.span`

display: inline-block;
padding: .3em .6em;
font-size: 85%;
font-weight: bold;
line-height: 1;
color: #fff;
background: #000;
text-align: center;
white-space: nowrap;
vertical-align: baseline;
border-radius: .25em;
border: 1px solid;
${fixed}

&:empty {
  display: none;
}

.btn & {
  position: relative;
  top: -1px;
}
`;
