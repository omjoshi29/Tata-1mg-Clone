import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: auto;
  border: 1px solid black;
  box-sizing: border-box;
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
      height: 2px;
      /* border: 1px solid var(--border); */
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

  .footerP2Con {
    background-color: #fffcf8;
    box-sizing: border-box;

    .links {
      box-sizing: border-box;
      height: 305px;
      padding: 44px 17px;
      border: 1px solid red;

      display: flex;
      justify-content: space-evenly;

      .listContainer {
        p {
          color: #1a1a1a;
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 16px;
        }
        ul {
          list-style: none;

          li {
            a {
              text-decoration: none;
              color: #666666;
              font-size: 12px;
              line-height: 22px;
            }
          }
        }
      }

      .connectContainer {
        p {
          color: #1a1a1a;
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 16px;
        }
        ul {
          list-style: none;

          li {
            a {
              text-decoration: none;
              font-size: 14px;
              color: #666666;
              /* line-height: 22px; */
            }
          }

          .socials {
            display: flex;
            margin-bottom: 5px;
            span {
              margin-right: 12px;
              a {
                img {
                  width: 26px;
                }
              }
            }
          }
        }
      }

      .getAppContainer {
        h5 {
          margin-bottom: 16px;
        }
        ul {
          list-style: none;

          .getAppIcons {
            width: 136px;
            padding: 0;
            margin-bottom: 12px;
            /* border: 1px solid black; */
            a {
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
