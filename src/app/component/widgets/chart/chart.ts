import { Component } from "@angular/core";

import { CryptoAnnotations } from "./crypto-annotations/crypto-annotations";
import { CryptocurrencyPrices } from "./cryptocurrency-prices/cryptocurrency-prices";
import { Finance } from "./finance/finance";
import { LiveProducts } from "./live-products/live-products";
import { MonthlyHistory } from "./monthly-history/monthly-history";
import { MonthlySales } from "./monthly-sales/monthly-sales";
import { OrderStatus } from "./order-status/order-status";
import { StockMarket } from "./stock-market/stock-market";
import { TotalProduct } from "./total-product/total-product";
import { TotalProject } from "./total-project/total-project";
import { TotalSale } from "./total-sale/total-sale";
import { TurnOver } from "./turn-over/turn-over";
import { Uses } from "./uses/uses";
import { WidgetSalesOverview } from "./widget-sales-overview/widget-sales-overview";
import { ProjectCreated } from "../../dashboard/project/project-created/project-created";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.html",
  styleUrls: ["./chart.scss"],
  imports: [
    TotalSale,
    TotalProject,
    TotalProduct,
    ProjectCreated,
    WidgetSalesOverview,
    MonthlyHistory,
    LiveProducts,
    TurnOver,
    CryptocurrencyPrices,
    CryptoAnnotations,
    StockMarket,
    Finance,
    OrderStatus,
    MonthlySales,
    Uses,
  ],
})
export class Chart {}
