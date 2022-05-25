export interface ProductData {
  _id: string;
  title: string;
  desc: string;
  price: number;
  squareThumbUrl: string;
  largeUrl: string;
  fullsizeUrl: string;
  categories?: Array<string>;
  isFeatured?: boolean;
  variants?: Variants[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface Variants {
  id: string;
  name: string;
  squareThumbUrl: string;
  largeUrl: string;
  fullsizeUrl: string;
}

export interface CartItemState {
  pId: string;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cartItems: [CartItemState];
}

export interface UserState {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  favorites: string[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface UserReducerState {
  authData: {
    user: UserState;
  };
  error: boolean | { name: string; message: string; createdAt: string };
}
