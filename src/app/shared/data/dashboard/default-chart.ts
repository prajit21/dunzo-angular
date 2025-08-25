import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexPlotOptions,
  ApexResponsive,
  ApexFill,
  ApexGrid,
  ApexMarkers,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ApexLegend,
} from "ng-apexcharts";

let primary_color = localStorage.getItem("primary_color") || "#307EF3";
let secondary_color = localStorage.getItem("secondary_color") || "#EBA31D";

export interface TotalEarningChartInterface {
  series: ApexAxisChartSeries;
  colors: string[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
}

export const TotalEarningData: TotalEarningChartInterface = {
  series: [
    {
      name: "series2",
      data: [15, 25, 20, 35, 60, 30, 20, 30, 20, 35, 25, 20],
    },
  ],
  colors: ["var(--theme-default)", "#FFA941"],
  chart: {
    height: 95,
    type: "bar",
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      borderRadius: 3,
      distributed: true,
      columnWidth: "50%",
      barHeight: "38%",
      dataLabels: {
        position: "top",
      },
    },
  },
  responsive: [
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 86,
        },
      },
    },
    {
      breakpoint: 1699,
      options: {
        chart: {
          height: 95,
        },
      },
    },
    {
      breakpoint: 1460,
      options: {
        grid: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 5,
          },
        },
      },
    },
    {
      breakpoint: 376,
      options: {
        chart: {
          height: 50,
        },
      },
    },
  ],
};

export interface TotalExpenseChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  markers: ApexMarkers;
}
export const TotalExpenseChart: TotalExpenseChartInterface = {
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
    height: 100,
    type: "area",
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
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  tooltip: {
    enabled: false,
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
        fillColor: primary_color,
        strokeColor: "#fff",
        size: 5,
        shape: "circle",
      },
    ],
  },
};

export interface ProductChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  fill: ApexFill;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  markers: ApexMarkers;
  responsive: ApexResponsive[];
}
export const productChart: ProductChartInterface = {
  series: [
    {
      data: [10, 50, 80, 120, 160, 160],
    },
  ],
  chart: {
    type: "area",
    height: 350,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
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
  xaxis: {
    categories: ["Mac", "iPhone", "Laptop", "Watch", "AirPords", "Headphone"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  stroke: {
    curve: "stepline",
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: "#E16371",
        strokeColor: "#E16371",
        size: 6,
        shape: "circle",
      },
    ],
  },
  responsive: [
    {
      breakpoint: 1440,
      options: {
        chart: {
          height: 330,
        },
      },
    },
  ],
};

export interface SaleStatisticChartInterface {
  series: number[];
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  colors: string[];
  responsive: ApexResponsive[];
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
}

export const SaleStatistic: SaleStatisticChartInterface = {
  series: [65, 55, 40, 30],
  chart: {
    type: "donut",
    height: 300,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
      donut: {
        size: "75%",
        labels: {
          show: true,
          name: {
            offsetY: -10,
          },
          value: {
            offsetY: -50,
          },
          total: {
            show: true,
            fontSize: "14px",
            fontFamily: "Outfit",
            fontWeight: 400,
            label: "Total",
            color: "#9B9B9B",
            formatter: (_w: string) => "45.764",
          },
        },
      },
      customScale: 1,
      offsetX: 0,
    },
  },
  grid: {
    padding: {
      bottom: -120,
    },
  },
  colors: [primary_color, secondary_color, "#DC3545", "#53a653cf"],
  responsive: [
    {
      breakpoint: 1660,
      options: {
        chart: {
          height: 280,
        },
      },
    },
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 250,
        },
      },
    },
  ],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};

export interface SalesOverviewChartInterface {
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
export const SalesOverviwe: SalesOverviewChartInterface = {
  series: [
    {
      name: "TEAM A",
      type: "area",
      data: [183, 175, 170, 178, 185, 171, 177, 185, 170, 180, 175, 170],
    },
    {
      name: "TEAM B",
      type: "line",
      data: [183, 193, 170, 182, 200, 180, 185, 178, 165, 175, 190, 190],
    },
  ],
  chart: {
    height: 288,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: [3, 3],
    dashArray: [0, 4],
  },
  grid: {
    show: true,
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
        show: false,
      },
    },
  },
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: "#fff",
        strokeColor: "#000",
        size: 7,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: "#fff",
        strokeColor: "#000",
        size: 7,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: "#fff",
        strokeColor: "#000",
        size: 7,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 9,
        fillColor: "#fff",
        strokeColor: "#000",
        size: 7,
        shape: "circle",
      },
    ],
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y: number) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
  legend: {
    show: false,
  },
  colors: [primary_color, "#EAEAEA"],
  fill: {
    type: ["gradient", "solid", "gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: [primary_color, "#fff5f7", primary_color],
      inverseColors: true,
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100, 100, 100],
    },
  },

  xaxis: {
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1440,
      options: {
        chart: {
          height: 220,
        },
      },
    },
  ],
};

export interface TotalInvestmentChartInterface {
  series: number[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  colors: string[];
}

export const Totalinvestment: TotalInvestmentChartInterface = {
  series: [100, 10, 30, 40],
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
      breakpoint: 1500,
      options: {
        chart: {
          height: 180,
        },
      },
    },
    {
      breakpoint: 1441,
      options: {
        chart: {
          height: 200,
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
            formatter: () => "$ 9,8373",
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
  colors: [primary_color, "#53a653cf", "#DC3545", secondary_color],
};
