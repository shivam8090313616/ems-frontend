function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}


// ##############################
// // // general variables for charts
// #############################

const chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
  },
  responsive: 1,
  scales: {
    y: {
      display: 0,
      ticks: {
        display: false,
        maxTicksLimit: 7,
      },
      grid: {
        zeroLineColor: "transparent",
        drawTicks: false,
        display: false,
        drawBorder: false,
      },
    },
    x: {
      display: 0,
      ticks: {
        display: false,
      },
      grid: {
        zeroLineColor: "transparent",
        drawTicks: false,
        display: false,
        drawBorder: false,
      },
    },
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 },
  },
};

var gradientChartOptionsConfigurationWithNumbersAndGrid = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
  },
  responsive: 1,
  scales: {
    y: {
      grid: {
        zeroLineColor: "transparent",
        drawBorder: false,
      },
      ticks: {
        maxTicksLimit: 7,
      },
    },
    x: {
      display: 0,
      ticks: {
        display: false,
      },
      grid: {
        zeroLineColor: "transparent",
        drawTicks: false,
        display: false,
        drawBorder: false,
      },
    },
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 },
  },
};

// ##############################
// // // Dashboard view - Panel chart
// #############################

const dashboardPanelChart = {
  data: (canvas) => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      datasets: [
        {
          label: "Data",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          tension: 0.4,
          data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95],
        },
      ],
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#fff",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          fontColor: "rgba(255,255,255,0.4)",
          fontStyle: "bold",
          beginAtZero: true,
          maxTicksLimit: 5,
          padding: 10,
        },
        grid: {
          drawTicks: true,
          drawBorder: false,
          display: true,
          color: "rgba(255,255,255,0.1)",
          zeroLineColor: "transparent",
        },
      },
      x: {
        grid: {
          display: false,
          color: "rgba(255,255,255,0.1)",
        },
        ticks: {
          padding: 10,
          fontColor: "rgba(255,255,255,0.4)",
          fontStyle: "bold",
        },
      },
    },
  },
};

// ##############################
// // // Dashboard view - Shipped Products - Card
// #############################

const dashboardShippedProductsChart = {
  data: (canvas) => {
    var ctx = canvas.getContext("2d");

    // Ensure chartColor is defined
    const chartColor = "#FF6384"; // Example color

    // Create gradient stroke
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor); // Ensure chartColor is valid

    // Create gradient fill
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    return {
      labels: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      datasets: [
        {
          label: "Active Users",
          borderColor: "#11171D",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#11171D",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill, // Ensure this is valid
          borderWidth: 2,
          tension: 0.4,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630],
        },
      ],
    };
  },
  options: gradientChartOptionsConfiguration,
};


// ##############################
// // // Dashboard view - All Products - Card
// #############################

const dashboardAllProductsChart = {
  data: (canvas) => {
    const ctx = canvas.getContext("2d");

    // Example hex color
    const chartColor = "#FF6384"; // Replace this with your desired color

    // Create gradient fill
    const gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)"); // Transparent
    gradientFill.addColorStop(1, hexToRGB(chartColor, 0.4)); // Use the hexToRGB function

    return {
      labels: ["12pm", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
      datasets: [
        {
          label: "Email Stats",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          tension: 0.4,
          data: [40, 500, 650, 700, 1200, 1250, 1300, 1900],
        },
      ],
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid, // Ensure this is defined
};


// ##############################
// // // Dashboard view - Bar Chart - Card
// #############################

const dashboard24HoursPerformanceChart = {
  data: (canvas) => {
    const ctx = canvas.getContext("2d");

    // Create a gradient fill
    const gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)"); // Transparent at the top
    gradientFill.addColorStop(1, hexToRGB("#11171D", 0.6)); // Semi-transparent color

    return {
      labels: [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December",
      ],
      datasets: [
        {
          label: "Active Countries",
          backgroundColor: gradientFill,
          borderColor: "#11171D", // Cleaned up extra space
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#11171D", // Cleaned up extra space
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,
          data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: { // Updated to 'tooltip' for consistency with Chart.js
        bodySpacing: 4,
        mode: "nearest",
        intersect: false,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          maxTicksLimit: 7,
        },
        grid: {
          zeroLineColor: "transparent",
          drawBorder: false,
        },
      },
      x: {
        display: false, // Set to false for better readability
        ticks: {
          display: false,
        },
        grid: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false,
        },
      },
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 },
    },
  },
};


module.exports = {
  dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
  dashboardShippedProductsChart, // Chart for Dashboard view - Shipped Products Card
  dashboardAllProductsChart, // Chart for Dashboard view - All products Card
  dashboard24HoursPerformanceChart, // Chart for Dashboard view - 24 Hours Performance Card
};
