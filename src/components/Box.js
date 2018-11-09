
import styled from 'styled-components';
import theme from 'styled-theming';
const backgroundColor = theme('mode', {
  default: '#777777',
  red: '#ffbfce',
  blue: '#b1d7ff',
});
const fontColor = theme('mode', {
  default: '#000000',
  red: '#ff4d78',
  blue: '#278aef',
});
const Box = styled.div`
  background-color: ${backgroundColor};
  font-family: arial;
  color: ${fontColor};
  height:100%;
  width:100%;
 font-size:1rem;
`;
export default Box