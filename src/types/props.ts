import { ProductCard, SelectOptionType } from "./";

export interface UiSelectProps {
  labelText: string;
  options: SelectOptionType[];
  emptyOption?: string;
  modelValue: SelectOptionType;
}

export interface ProductCardProps {
  product: ProductCard;
}

export interface ProductsFilterProps {
  selectedSort: SelectOptionType;
  sortOptions: SelectOptionType[];
  selectedMaterial: SelectOptionType;
  materialsOptions: SelectOptionType[];
}

export interface PageContainerProps {
  withoutBreadcrumbs?: boolean;
  loadingContent?: boolean;
  pageContentEmpty?: boolean;
}

export interface FavoriteIconProps {
  isInFavorite?: boolean;
}

export interface ChevronIconProps {
  isChevronUp?: boolean;
}

export interface CartIconProps {
  isInCart?: boolean;
}
