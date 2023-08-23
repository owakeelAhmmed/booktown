export interface IProduct {
  _id: number;
  title: string;
  author: string;
  genre: string;
  publication: string;
  image: string;
  price: number;
  features: string[];
  status: boolean;
  rating: number;
  quantity?: number;
}
