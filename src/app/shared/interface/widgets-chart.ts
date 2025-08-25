import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexGrid,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexMarkers,
  ApexResponsive,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip,
  ApexAnnotations,
  ApexTitleSubtitle,
} from "ng-apexcharts";

export interface TotalSaleChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  markers: ApexMarkers;
  responsive: ApexResponsive[];
}

export interface TotalProjectChartOptions {
  series: ApexAxisChartSeries;
  colors: string[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
}

export interface TotalProductChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  markers: ApexMarkers;
}

export interface SaleOverviewChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  grid: ApexGrid;
  labels: string[];
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  colors: string[];
  fill: ApexFill;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  responsive: ApexResponsive[];
}

export interface MonthlyHistoryChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
  fill: ApexFill;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
}

export interface LiveProductsChartOptions {
  chart: ApexChart;
  stroke: ApexStroke;
  series: ApexAxisChartSeries;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  colors: string[];
  labels: string[];
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  tooltip: ApexTooltip;
}

export interface TurnOverChartOptions {
  chart: ApexChart;
  stroke: ApexStroke;
  series: ApexAxisChartSeries;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  colors: string[];
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
}

export interface CryptocurrencyPricesChartOptions {
  chart: ApexChart;
  stroke: ApexStroke;
  series: ApexAxisChartSeries;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  colors: string[];
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
}

export interface CryptoAnnotationsChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  annotations: ApexAnnotations;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
  colors: string[];
  labels: string[];
  xaxis: ApexXAxis;
  responsive: ApexResponsive[];
}

export interface StockMarketChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  fill: ApexFill;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  responsive: ApexResponsive[];
}

export interface FinancesChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  fill: ApexFill;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  responsive: ApexResponsive[];
}

export interface OrderStatusChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  grid: ApexGrid;
  fill: ApexFill;
  colors: string[];
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  responsive: ApexResponsive[];
}

export interface MonthlySalesChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  fill: ApexFill;
  stroke: ApexStroke;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  labels: string[];
}

export interface UsesChartInterface {
  chart: ApexChart;
  series: ApexAxisChartSeries;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  colors: string[];
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}
