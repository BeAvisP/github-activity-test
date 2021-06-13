import styled from 'styled-components';
import { fonts, colors } from '../../styles/theme';

const SCRepositoryDetailsPage = styled.div`
  margin: 80px 20px;
  font-family: ${fonts.base};

  .icons {
    font-size: 30px;
    color: ${colors.primary};
  }

  .return,
  .save {
    font-size: 30px;
    color: ${colors.primary};
    background-color: ${colors.secondary};
    width: 30px;
    border-radius: 50%;
    padding: 10px;
    margin: 0 10px;
    :hover {
      color: ${colors.secondary};
      background-color: ${colors.primary};
    }
  }

  h1 {
    text-align: center;
    color: ${colors.primary};
  }

  .wrapper {
    background-color: ${colors.background};
    box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;
    padding: 20px 40px;
    border-radius: 10px;
    margin: 20px 20px;
  }

  .details {
    display: flex;
    justify-content: center;
    align-items: center;

    .owner-details {
      h3 {
        color: ${colors.primary};
      }
    }

    .item-details {
      .info-wrapper {
        display: flex;

        .interactions,
        .dates {
          display: flex;
          p {
            padding: 0 15px;
          }
        }
        .interactions {
          justify-content: flex-end;
        }
      }
    }
  }

  .commit-list {
    display: flex;
    flex-wrap: wrap;
    .commit-details {
      width: 70px;
    }
  }

  .avatar,
  .top-avatar {
    width: 60px;
    border-radius: 50%;
    border: 4px solid ${colors.secondary};
  }

  .top-avatar {
    border-color: ${colors.top};
  }

  @media (max-width: 1024px) {
    .details {
      display: block;
      .item-details > .info-wrapper {
        display: block;
      }
    }
  }

  @media (max-width: 768px) {
    .details > .item-details {
      .info-wrapper > .interactions,
      .info-wrapper > .dates {
        display: block;
      }
    }
  }

  @media (max-width: 375px) {
    #phones-list-container {
      grid-template-columns: repeat(1, 1fr);
    }
    section {
      margin: 0px 20px;
    }
  }
`;

export default SCRepositoryDetailsPage;
