import styled from 'styled-components';
import { fonts, colors } from '../../styles/theme';

const SCOrganizationListPage = styled.div`
  margin: 80px 20px;
  
  h1{
    margin-top: 30px;
    text-align: center;
    color: ${colors.primary};
    font-family: ${fonts.base};
  }
  
  .search{
    width: 50%;    
    margin: 0 auto;
  }

  .list-container{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: stretch;
  }
`;

export default SCOrganizationListPage;