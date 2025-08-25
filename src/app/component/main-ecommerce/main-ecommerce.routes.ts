import { Routes } from "@angular/router";

import { AddProduct } from "./add-product/add-product";
import { Cart } from "./cart/cart";
import { Checkout } from "./checkout/checkout";
import { OrderHistory } from "./order-history/order-history";
import { PaymentDetails } from "./payment-details/payment-details";
import { Pricing } from "./pricing/pricing";
import { Product } from "./product/product";
import { ProductList } from "./product-list/product-list";
import { ProductPage } from "./product-page/product-page";
import { Wishlist } from "./wishlist/wishlist";

export default [
  {
    path: "add-products",
    component: AddProduct,
    data: {
      title: "Add Product",
      breadcrumb: "Add Product",
    },
  },
  {
    path: "products",
    component: Product,
    data: {
      title: "Product",
      breadcrumb: "Product",
    },
  },
  {
    path: "product-page",
    component: ProductPage,
    data: {
      title: "Product Page",
      breadcrumb: "Product Page",
    },
  },
  {
    path: "product-list",
    component: ProductList,
    data: {
      title: "Product List",
      breadcrumb: "Product List",
    },
  },
  {
    path: "payment-details",
    component: PaymentDetails,
    data: {
      title: "Payment Details",
      breadcrumb: "Payment Details",
    },
  },
  {
    path: "order-history",
    component: OrderHistory,
    data: {
      title: "Recent Orders",
      breadcrumb: "Recent Orders",
    },
  },
  {
    path: "cart",
    component: Cart,
    data: {
      title: "Cart",
      breadcrumb: "Cart",
    },
  },
  {
    path: "wishlist",
    component: Wishlist,
    data: {
      title: "Wishlist",
      breadcrumb: "Wishlist",
    },
  },
  {
    path: "checkout",
    component: Checkout,
    data: {
      title: "Checkout",
      breadcrumb: "Checkout",
    },
  },
  {
    path: "pricing",
    component: Pricing,
    data: {
      title: "Pricing",
      breadcrumb: "Pricing",
    },
  },
] as Routes;
