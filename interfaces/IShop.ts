export interface IShopBody {
  user_id: number;
  id: number;
  shop_name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  phone: string;
}

export interface ICreateShopBody {
  shop_name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  phone: string;
}
