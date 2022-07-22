import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: auto;
  border: 1px solid black;

  .footerP1Con {
    border-bottom: 1.5px solid var(--border);
    height: 264px;

    .heading {
      height: 80px;
      /* border: 1px solid red; */
      box-sizing: border-box;
      /* padding: 24px 0; */
      display: flex;
      align-items: center;
      justify-content: center;
      /* text-align: center; */

      p {
        font-size: 24px;
        color: #1a1a1a;
        line-height: 34px;
      }
    }

    .downloads {
      height: 68px;
      /* border: 1px solid red; */
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000000;

        .strong {
          font-size: 32px;
          line-height: 45px;
        }

        p {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }

    .divider {
      margin: 24px 95px;
      border: 1px solid var(--border);
      background-color: var(--border);
    }

    .mailToUse {
      height: 64px;
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding-bottom: 24px;
      gap: 20px;

      p {
        font-size: 20px;
        line-height: 22px;
      }
      .emailInput {
        input {
          height: 40px;
          border: 0;
          width: 300px;
          text-indent: 14px;
          background-color: #f6f6f6;
          font-size: 14px;
          line-height: 20px;
          margin-right: 14px;

          /* Chrome, Safari, Edge, Opera */
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          &[type="number"] {
            -moz-appearance: textfield;
          }

          &:focus {
            outline: 0;
          }
        }
      }
    }
  }
`;
