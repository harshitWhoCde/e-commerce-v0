export interface Category {
  id: number;
  name: string;
  image: string;
  section: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Beauty picks",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=250&h=250&fit=crop",
    section: "Shop by categories",
  },
  {
    id: 2,
    name: "Computer & Accessories",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=250&h=250&fit=crop",
    section: "Shop by categories",
  },
  {
    id: 3,
    name: "Video games",
    image: "https://images.unsplash.com/photo-1535869452-7b449a92c2d4?w=250&h=250&fit=crop",
    section: "Shop by categories",
  },
  {
    id: 4,
    name: "Toys & Games",
    image: "https://images.unsplash.com/photo-1488894807352-0ef6c6bdb51e?w=250&h=250&fit=crop",
    section: "Shop by categories",
  },
  {
    id: 5,
    name: "Amazon Basics",
    image: "https://images.unsplash.com/photo-1577720643272-265f434886f9?w=250&h=250&fit=crop",
    section: "Featured Collections",
  },
  {
    id: 6,
    name: "Deals & Promotions",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=250&h=250&fit=crop",
    section: "Featured Collections",
  },
];
