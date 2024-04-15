export interface ProductCard {
  id: string;
  name: string;
  code: string | null;
  price: {
    old_price: number | null;
    current_price: number;
  };
  image: {
    url: string;
  };
  material: number;
}

export interface SelectOption {
  id: string;
  name: string;
}

export interface IObject {
  [key: string]: string;
}

export type SelectOptionType = SelectOption | IObject;

export interface SortByPriceMap {
  [key: string]: (arr: ProductCard[]) => ProductCard[];
}
