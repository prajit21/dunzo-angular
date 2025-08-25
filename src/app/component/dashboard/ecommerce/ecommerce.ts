import { Component } from "@angular/core";

import { CategoriesSales } from "./categories-sales/categories-sales";
import { DealOfDay } from "./deal-of-day/deal-of-day";
import { EcommerceInvoices } from "./ecommerce-invoices/ecommerce-invoices";
import { EcommerceMonthlySale } from "./ecommerce-monthly-sale/ecommerce-monthly-sale";
import { EcommerceOrderOverview } from "./ecommerce-order-overview/ecommerce-order-overview";
import { EcommerceRecentOrder } from "./ecommerce-recent-order/ecommerce-recent-order";
import { EcommerceSaleStatistic } from "./ecommerce-sale-statistic/ecommerce-sale-statistic";
import { NewCustomers } from "./new-customers/new-customers";
import { RecentActivity } from "./recent-activity/recent-activity";
import { SaleTopCountries } from "./sale-top-countries/sale-top-countries";
import { TopEcommerce } from "./top-ecommerce/top-ecommerce";

@Component({
  selector: "app-ecommerce",
  templateUrl: "./ecommerce.html",
  styleUrls: ["./ecommerce.scss"],
  imports: [
    TopEcommerce,
    SaleTopCountries,
    EcommerceRecentOrder,
    CategoriesSales,
    EcommerceSaleStatistic,
    EcommerceOrderOverview,
    EcommerceMonthlySale,
    EcommerceInvoices,
    RecentActivity,
    NewCustomers,
    DealOfDay,
  ],
})
export class Ecommerce {}
