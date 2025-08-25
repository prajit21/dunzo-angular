import {
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexDataLabels,
  ApexGrid,
  ApexXAxis,
  ApexYAxis,
  ApexLegend,
  ApexFill,
  ApexMarkers,
  ApexResponsive,
  ApexStroke,
} from "ng-apexcharts";

let primary_color = localStorage.getItem("primary_color") || "#307EF3";
let secondary_color = localStorage.getItem("secondary_color") || "#EBA31D";

export interface OnlineOrderChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  colors: string[];
}
export const OnlineOrderChart: OnlineOrderChartInterface = {
  series: [
    {
      name: "Activity",
      data: [42, 44, 55, 66, 55, 86, 52, 44, 44, 66, 55, 86, 52, 44, 44],
    },
  ],
  chart: {
    height: 115,
    type: "bar",
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 3,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  colors: [
    "#d6e5fd",
    "#d6e5fd",
    "#d6e5fd",
    "#d6e5fd",
    "#d6e5fd",
    primary_color,
    "#d6e5fd",
    "#d6e5fd",
    "#d6e5fd",
    "#d6e5fd",
    "#d6e5fd",
    "#d6e5fd",
    "#d6e5fd",
    "#d6e5fd",
    "#d6e5fd",
  ],
};

export interface OfflineOrderChartInterface {
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

export const OfflineOrderChart: OfflineOrderChartInterface = {
  series: [
    {
      name: "Desktops",
      data: [
        50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66,
        66,
      ],
    },
  ],
  chart: {
    type: "area",
    offsetY: 30,
    height: 140,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 2,
      color: secondary_color,
      opacity: 0.2,
    },
  },
  colors: [secondary_color],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 12,
        fillColor: secondary_color,
        strokeColor: "#fff",
        size: 5,
        shape: "circle",
      },
    ],
  },
  responsive: [
    {
      breakpoint: 1661,
      options: {
        chart: {
          height: 140,
        },
      },
    },
  ],
};

export interface TotalRevenueChartInterface {
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
export const TotalRevenueChart: TotalRevenueChartInterface = {
  series: [
    {
      name: "Desktops",
      data: [15, 14, 11, 20, 10, 15, 11],
    },
  ],
  chart: {
    type: "area",
    height: 135,
    offsetY: 10,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 2,
      color: "#DC3545",
      opacity: 0.2,
    },
  },
  colors: ["#DC3545"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.2,
      stops: [0, 100, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: "#DC3545",
        strokeColor: "#fff",
        size: 6,
        shape: "circle",
      },
    ],
  },
};

export interface CategoriesChartInterface {
  series: number[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  colors: string[];
}

export const CategoriesChart: CategoriesChartInterface = {
  series: [52, 35, 15, 45],
  chart: {
    type: "donut",
    height: 200,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 150,
        },
      },
    },
    {
      breakpoint: 1441,
      options: {
        chart: {
          height: 205,
        },
      },
    },
    {
      breakpoint: 421,
      options: {
        chart: {
          height: 170,
        },
      },
    },
  ],
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "70%",
        labels: {
          show: true,
          value: {
            offsetY: 5,
          },
          total: {
            show: true,
            fontSize: "14px",
            color: "#9B9B9B",
            fontFamily: "Outfit', sans-serif",
            fontWeight: 400,
            label: "Total",
            formatter: () => "60%",
          },
        },
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val: number) {
        return val / 100 + "$";
      },
    },
  },
  colors: [primary_color, "#DC3545", "#F3F3F3", secondary_color],
};

export interface EarnedChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
}
export const EarnedChart: EarnedChartInterface = {
  series: [
    {
      name: "Desktops",
      data: [50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62],
    },
  ],
  chart: {
    type: "area",
    height: 200,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 2,
      color: primary_color,
      opacity: 0.2,
    },
  },
  colors: [primary_color],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.2,
      stops: [0, 100, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
};

export interface StatisticSalesChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  responsive: ApexResponsive[];
  grid: ApexGrid;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
}
export const StatisticSales: StatisticSalesChartInterface = {
  series: [
    {
      name: "Web App Design",
      data: [150, 100, 100, 100, 70, 70, 70, 270, 50, 100],
    },
    {
      name: "Website Design",
      data: [320, 210, 290, 200, 230, 230, 230, 350, 230, 300],
    },
    {
      name: "App Design",
      data: [150, 165, 165, 165, 280, 155, 155, 140, 170, 130],
    },
  ],
  colors: [primary_color, "#78A6ED", "#4F5875"],
  chart: {
    type: "bar",
    height: 320,
    stacked: true,

    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 1661,
      options: {
        chart: {
          height: 340,
        },
      },
    },
  ],
  grid: {
    strokeDashArray: 3,
    position: "back",
    row: {
      opacity: 0.5,
    },
    column: {
      opacity: 0.5,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "20%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
    ],
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
};

export interface MonthlySalesChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  grid: ApexGrid;
  colors: string[];
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  markers: ApexMarkers;
}

export const MonthlySales: MonthlySalesChartInterface = {
  series: [
    {
      name: "Growth",
      data: [0, 14, 5, 20, 14, 30],
    },
  ],
  chart: {
    height: 120,
    type: "line",
    stacked: true,
    offsetY: 40,
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: false,
    borderColor: "#000000",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },

  colors: [primary_color],
  stroke: {
    width: 3,
    curve: "smooth",
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    min: -10,
    max: 40,
    labels: {
      show: false,
    },
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 0,
        fillColor: primary_color,
        strokeColor: primary_color,
        size: 4,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: primary_color,
        strokeColor: primary_color,
        size: 4,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: primary_color,
        strokeColor: primary_color,
        size: 4,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: primary_color,
        strokeColor: primary_color,
        size: 4,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: primary_color,
        strokeColor: primary_color,
        size: 4,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: "#fff",
        strokeColor: primary_color,
        size: 5,
        shape: "circle",
      },
    ],
  },
};
