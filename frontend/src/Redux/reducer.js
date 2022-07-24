import { USEROTP, USERNAME } from "./actiontype";
import { Loaddata, Savedata } from "../utils/localstorage";
import {
  DESDATA,
  BRANDFILTER,
  DISCOUNTFILTER,
  GETDATA,
  SORTDATA,
} from "./action";

const initState = {
  otp: Loaddata("otp") || "",
  username: Loaddata("username") || "",
  productsData: [],
  allproducts: [],
  desData: {},
};

export const Userreducer = (state = initState, action) => {
  switch (action.type) {
    case USEROTP: {
      let data = action.payload;
      Savedata("otp", data);

      return {
        ...state,
        otp: data,
      };
    }

    case USERNAME: {
      let data = action.payload;
      Savedata("username", data);

      return {
        ...state,
        username: data,
      };
    }

    case GETDATA: {
      return {
        ...state,
        productsData: action.payload,
        allproducts: action.payload,
      };
    }

    case DESDATA: {
      return {
        ...state,
        desData: action.payload,
      };
    }

    case BRANDFILTER: {
      return {
        ...state,
        productsData: action.payload,
      };
    }

    case DISCOUNTFILTER: {
      return {
        ...state,
        productsData: action.payload,
      };
    }

    case SORTDATA: {
      return {
        ...state,
        productsData: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
