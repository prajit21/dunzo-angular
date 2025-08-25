import { Component } from "@angular/core";

import { AdvancedSmil } from "./advanced-smil/advanced-smil";
import { BiPolarBarChart } from "./bi-polar-bar-chart/bi-polar-bar-chart";
import { BiPolarLineChartArea } from "./bi-polar-line-chart-area/bi-polar-line-chart-area";
import { DonutSvgAnimate } from "./donut-svg-animate/donut-svg-animate";
import { ExtremeResponsiveConfiguration } from "./extreme-responsive-configuration/extreme-responsive-configuration";
import { FilledHolesInData } from "./filled-holes-in-data/filled-holes-in-data";
import { HolesInData } from "./holes-in-data/holes-in-data";
import { HorizontalBarChart } from "./horizontal-bar-chart/horizontal-bar-chart";
import { LineChartArea } from "./line-chart-area/line-chart-area";
import { SimpleLineChart } from "./simple-line-chart/simple-line-chart";
import { StackedBarChart } from "./stacked-bar-chart/stacked-bar-chart";
import { SvgPath } from "./svg-path/svg-path";

@Component({
  selector: "app-chartist-chart",
  templateUrl: "./chartist-chart.html",
  styleUrls: ["./chartist-chart.scss"],
  imports: [
    AdvancedSmil,
    SvgPath,
    DonutSvgAnimate,
    BiPolarLineChartArea,
    LineChartArea,
    BiPolarBarChart,
    StackedBarChart,
    HorizontalBarChart,
    ExtremeResponsiveConfiguration,
    SimpleLineChart,
    HolesInData,
    FilledHolesInData,
  ],
})
export class ChartistChart {}
