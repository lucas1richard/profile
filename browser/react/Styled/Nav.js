import styled from 'styled-components';
import color from 'color';
import colorCSS, {active, fixed} from './colorCSS';

export default styled.div`
  background-color: ${color('#333').lighten(0.99).toString()};
  border-bottom: 2px solid;
  overflow: hidden;
  margin-left: -15px;
  margin-right: -15px;
  top: 0px;
  position: fixed;
  width: 100%;
  z-index: 100;

  ${fixed}

  & a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

    ${colorCSS}
  }

  & a:first-child {
    font-weight: bold;
    color: darkorange;
  }

  & a:not(:first-child):hover {
    ${active}
  }

  & a.active {
    ${active}
  }

  & .icon {
    display: none;
  }

  @media screen and (max-width: 600px) {
    & a:not(:first-child) {
      display: none;
    }
    & a.icon {
      float: right;
      display: block;
    }
  }
  
  /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
  @media screen and (max-width: 600px) {
    &.responsive a.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    &.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
`;
