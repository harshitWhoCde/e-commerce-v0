export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Puma AJ3 TR BOOT WTR Black Men",
    category: "Shoes to Discover",
    price: 150.99,
    rating: 4.5,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Nike Air Max Light Red series",
    category: "Shoes to Discover",
    price: 86.0,
    rating: 4.3,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Adidas Fusion Storm Winter",
    category: "Shoes to Discover",
    price: 79.97,
    rating: 4.6,
    reviews: 489,
    image: "https://images.unsplash.com/photo-1595777707802-e2e1f2d7a251?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Nike CloudPurple Pure Running Shoe",
    category: "Shoes to Discover",
    price: 68.99,
    rating: 4.4,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=300&h=300&fit=crop",
    badge: "Savings",
  },
  {
    id: 5,
    name: "Adidas Alpha Bounce Running Shoe",
    category: "Shoes to Discover",
    price: 59.94,
    originalPrice: 89.99,
    rating: 4.3,
    reviews: 201,
    image: "https://images.unsplash.com/photo-1589373786081-4e2764d3f17f?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Amazon Basics Lightning to USB Cable",
    category: "Amazon Top Sellers",
    price: 15.99,
    rating: 4.6,
    reviews: 1243,
    image: "https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=300&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Skyworth D-Series 24\" 1080P Smart TV",
    category: "Amazon Top Sellers",
    price: 129.97,
    rating: 4.2,
    reviews: 856,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Instant Pot Duo 7-in-1 Electric Cooker",
    category: "Amazon Top Sellers",
    price: 79.0,
    originalPrice: 89.95,
    rating: 4.7,
    reviews: 2103,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Philips S7500 Dry Care Essential iONIC",
    category: "Amazon Top Sellers",
    price: 24.99,
    originalPrice: 34.95,
    rating: 4.1,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",
  },
  {
    id: 10,
    name: "GreenPan Stackable Hard, Frying Pan, 12\"",
    category: "Amazon Top Sellers",
    price: 59.94,
    originalPrice: 71.95,
    rating: 4.4,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1578915810519-3ede8b89f710?w=300&h=300&fit=crop",
  },
];

export const topSellerProducts = products.slice(5, 10);
export const shoeProducts = products.slice(0, 5);
