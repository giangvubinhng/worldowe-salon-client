import {gql} from "@apollo/client";
import {ICreateShopBody} from "../interfaces/IShop";
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
export const GET_CURRENT_SHOP = gql`
  query shop($id: Int) {
    shop(id : $id) {
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
