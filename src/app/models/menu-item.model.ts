import { Image } from './image.model';

export interface MenuItem {
  id: string;
  image: Image;
  name: string;
  category: string;
  price: number;
}
