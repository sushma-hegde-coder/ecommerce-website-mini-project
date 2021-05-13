export type StoreType = {
  currency: string;
  cart: CartType[];
  userSession: UserSessionType;
  loading: boolean;
};

export type ProductType = {
  productId: number;
  productName: string;
  productPrice: string;
  productImage: string;
  productSalePrice: string;
  productStock: number;
};

export interface ProductResponseType {
  totalItems: number;
  data: ProductType[];
  currentPage: number;
  totalPages: number;
}

export type MenuType = {
  menuItem: string;
  menuLink: string;
};

export type CartType = {
  productQty: number;
} & ProductType;

export type LoginResponseType = {
  message: string;
  expiresIn: number;
  access_token: string;
};

export type UserSessionType = {
  user: object | null;
  error: string | null;
};

//check api in postman not in browser
//config,headers,request,status,statusText are just info, in postman it is showed as extra info
//only data returned is 'data'. Define that 'data' structure
export interface ExchangeCurrencyType {
  base: string;
  date: Date;
  rates: object;
  success: string;
  timestamp: any;
  __proto_: object;
}
