import styled from 'styled-components';
import { fonts, colors } from '../../styles/theme';

const SCSearchForm = styled.div`
  form {
    font-family: ${fonts.base};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    .hidden {
      display: none;
    }
    input {
      width: 100%;
      height: 30px;
      border: 1px solid ${colors.secondary};
      border-radius: 7px;
      padding-left: 10px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      ::placeholder {
        color: ${colors.primary};
      }
    }

    button {
      color: ${colors.primary};
      border: 1px solid ${colors.secondary};
      width: 100px;
      height: 34px;
      border-radius: 7px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      cursor: pointer;
      background: ${colors.background};
      font-weight: 600;
      border-left: none;
      :hover {
        color: ${colors.secondary};
        border: 1px solid ${colors.secondary};
        background: ${colors.primary};
      }
    }
  }
`;

export default SCSearchForm;
