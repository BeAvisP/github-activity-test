import styled from 'styled-components';
import { fonts, colors } from '../../styles/theme';

const SCRepocCard = styled.div`
  font-family: ${fonts.base};
  padding: 10px;
  padding-right: 20px;
  background: ${colors.background};
  border: 1px solid ${colors.secondary};
  border-radius: 7px;
  width: 200px;
  box-shadow: rgb(17 12 46 / 5%) 0px 30px 50px 0px;
  margin: 10px 0;
  
  h3,
  h5 {
    margin: 0;
  }

  a{
    float: right;
  }
`;

export default SCRepocCard;
