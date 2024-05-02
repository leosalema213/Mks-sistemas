export type Products = {
  products: Product[];
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
  quantidade: number
};
