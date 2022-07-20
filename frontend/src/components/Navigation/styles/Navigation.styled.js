import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 100%;

  //Part - 1
  .header_1Con {
    height: 48px;
    box-sizing: border-box;
    padding: 5px 0px;
    border-bottom: 1px solid var(--border);
    display: flex;

    & > div {
      /* border: 1px solid var(--border); */
    }

    //First div
    .firstPart {
      width: 65rem;
      box-sizing: border-box;
      display: flex;

      .logoCon {
        /* border: 1px solid red; */
        width: 18%;
        display: flex;
        height: 100%;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        /* padding: 15px; */

        img {
          height: 36px;
          width: 118px;
        }
      }
      .tabList {
        list-style: none;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        line-height: 16px;
        /* border: 1px solid red; */
        /* width: 100%; */
        gap: 20px;

        li {
          display: flex;
          align-items: center;

          a {
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            color: black;
          }

          .badge {
            /* display: flex;
            align-items: center; */
            background-color: #ff6f61;
            color: white;
            font-size: 11px;
            padding: 2px 4px;
            margin-left: 2px;
            border-radius: 1px;
            font-weight: bold;
          }

          &:hover {
            a {
              color: #ff6f61;
            }
          }
        }
      }
    }
    .secondPart {
      /* width: 37.5rem; */
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .list {
        width: auto;
        padding: 0 25px;
        list-style: none;
        line-height: 20px;
        font-size: 14px;
        display: flex;
        align-items: center;
        font-weight: 500;
        gap: 30px;
        li {
          a {
            color: #212121;
            text-decoration: none;
          }
        }
      }
    }
  }

  //Part  - 2
  .header_2Con {
    height: 46px;
    border-bottom: 1px solid #f1f4f6;
    box-sizing: border-box;
    padding: 6px 0;
    display: flex;
    & > div {
      /* border: 1px solid red; */
    }

    //First part
    .firstCon {
      width: 65%;
      display: flex;
      justify-content: center;

      //Con
      .container {
        width: 90%;
        /* border: 1px solid black; */
        height: 100%;
        display: flex;
        align-items: center;
        //Loaction Con
        .locationCon {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 280px;
          background-color: #f1f4f6;

          span {
            /* border: 1px solid black; */
            height: 100%;
            display: flex;
            width: 20px;
            align-items: center;
            font-size: 14px;
            color: #666666;
          }
          input {
            font-size: 16px;
            line-height: 22px;
            width: 210px;
            height: 94%;
            text-indent: 10px;
            font-weight: bold;
            background-color: inherit;
            border: 0;
            &:focus {
              outline: 0;
            }
          }
        }

        //Searchbar
        .searchbarCon {
          box-sizing: border-box;
          padding: 0 5px;
          margin-left: 5px;
          max-width: 80%;
          width: 825px;
          height: 100%;
          display: flex;
          align-items: center;
          /* border: 1px solid red; */
          background-color: #f1f4f6;
          input {
            flex-grow: 1;
            height: 94%;
            font-size: 14px;
            line-height: 21px;
            text-indent: 10px;
            color: #3e3e3e;
            background-color: inherit;
            border: 0;

            &:focus {
              outline: none;
            }
          }
          span {
            width: 20px;
            /* border: 1px solid black; */
            height: 100%;
            color: #666666;
            display: flex;
            align-items: center;
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
    }

    //Second Part
    .secondCon {
      width: 35%;
      height: 100%;
      padding: 0 20px;
      /* background-color: blue; */
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .container {
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        height: 100%;
        width: 450px;
        max-width: 450px;

        p {
          margin-right: 15px;
          color: #212121;
          font-size: 14px;
        }
        span {
          /* border: 1px solid black; */
          height: 100%;
          width: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 30px;
          }
        }
      }
    }
  }

  //Media queries
  @media (max-width: 1500px) {
    //Part - 1
    .header_1Con {
      //First div
      .firstPart {
        width: 60rem;

        //Logo
        .logoCon {
          width: 12%;

          img {
            width: 90px;
          }
        }
      }
    }
  }

  @media (max-width: 1320px) {
    //Part - 1

    .header_1Con {
      //First div
      //Second part
      .secondPart {
        justify-content: center;
        .list {
          padding: 0;
          gap: 15px;
          li {
            /* border: 1px solid red; */
          }
        }
      }
    }
  }
`;
