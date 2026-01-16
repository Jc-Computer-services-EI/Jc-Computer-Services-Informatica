
export interface Service {
  id: string;
  title: string;
  description: string;
  priceInfo?: string;
  enrollable?: boolean;
  icon: string;
  imageUrl?: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  title: string;
}