import styled from 'styled-components';

const GradientText = styled.h1`
  color: #303F9F;
  font-size: 50px;
  font-weight: bold;
  line-height: 1.75em;
  background: -webkit-linear-gradient(left, #1A237E, #7986CB);
  -webkit-mask-image: linear-gradient(left, #1A237E, #7986CB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255,255,255,0);
  display:inline-block;
`;

export default GradientText;
