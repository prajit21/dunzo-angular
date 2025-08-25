import { Component } from "@angular/core";

import { ActiveTasks } from "./active-tasks/active-tasks";
import { LeadsStatus } from "./leads-status/leads-status";
import { NewsUpdate } from "./news-update/news-update";
import { Notifications } from "./notifications/notifications";
import { ProductStock } from "./product-stock/product-stock";
import { RecentOrder } from "./recent-order/recent-order";
import { Review } from "./review/review";
import { SalesOverview } from "./sales-overview/sales-overview";
import { SalesStatistic } from "./sales-statistic/sales-statistic";
import { Statistics } from "./statistics/statistics";
import { TotalEarning } from "./total-earning/total-earning";
import { TotalExpense } from "./total-expense/total-expense";
import { TotalInvestment } from "./total-investment/total-investment";
import { TradingSection } from "./trading-section/trading-section";
import { ViewProfile } from "./view-profile/view-profile";

@Component({
  selector: "app-default",
  templateUrl: "./default.html",
  styleUrls: ["./default.scss"],
  imports: [
    ViewProfile,
    TotalEarning,
    TotalExpense,
    NewsUpdate,
    ProductStock,
    RecentOrder,
    SalesStatistic,
    TradingSection,
    Review,
    SalesOverview,
    ActiveTasks,
    TotalInvestment,
    LeadsStatus,
    Notifications,
    Statistics,
  ],
})
export class Default {}
