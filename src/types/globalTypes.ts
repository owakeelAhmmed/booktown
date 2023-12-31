export interface IProduct {
  _id: string;
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
