import { ReactNode } from "react";

export interface GalleryItemType {
  children: ReactNode;
  itemTitle: string;
  className?: string;
  onMouseEnter?: () => void;  
  onMouseLeave?: () => void; 
}
