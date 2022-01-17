import { gql } from "@apollo/client";
import { ICreateShopBody } from "../interfaces/IShop";
export const GET_SHOPS = gql`
  query shops {
    shops {
      user_id
      id
      shop_name
      street
      city
      state
      country
      zip
      phone
    }
  }
`;
export const CREATE_SHOP = gql`
  mutation createShop($shop: IShop!) {
    createShop(shop: $shop) {
      shop_name
    }
  }
`;
