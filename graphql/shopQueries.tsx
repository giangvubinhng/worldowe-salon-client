import {gql} from "@apollo/client";
export const GET_SHOPS = gql`
  query shops($name: String) {
    shops(name: $name) {
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
export const GET_MY_SHOPS = gql`
  query myShops {
    myShops {
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
      id
    }
  }
`;
