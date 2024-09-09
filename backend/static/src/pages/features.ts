export const loadFeatureImportances = async function () {
  try {
    const res = await fetch('/features', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    console.log(data);

    switch (data.status) {
      case 'success':
        plotBarChart(data.feature_importances);
        break;
      case 'error':
        window.alert(data.msg);
        break;
    }
  } catch (err) {
    window.alert((err as Error).message);
  }
};

const plotBarChart = (importances: { [k: string]: number }) => {
  const barData: Array<{ x: string; y: number }> = [];

  // Populate bar data
  for (const key in importances) barData.push({ x: key, y: importances[key] });

  const LABEL_COLOR = 'rgba(255, 255, 255, 0.7)';
  const LABEL_TITLE_COLOR = '#fff';

  const options = {
    chart: { type: 'bar' },
    colors: ['#FF704D'],
    series: [{ data: [...barData.sort((pt1, pt2) => pt2.y - pt1.y)] }],
    title: {
      text: 'Predictors and their Importances'.toUpperCase(),
      align: 'center',
      margin: 10,
      style: {
        fontSize: '17px',
        fontWeight: 'normal',
        fontFamily: 'Nunito',
        color: 'rgba(255, 255, 255, .7)'
      }
    },

    xaxis: {
      type: 'category',
      labels: {
        show: true,
        rotate: -45,
        style: {
          colors: barData.map(() => LABEL_COLOR),
          fontSize: '15px',
          fontFamily: 'Nunito'
        }
      }
    },
    yaxis: {
      show: true,
      showAlways: false,
      tickAmount: undefined,
      min: undefined,
      max: undefined,
      stepSize: undefined,
      labels: {
        show: true,
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: barData.map(() => LABEL_COLOR),
          fontSize: '14px',
          fontFamily: 'Nunito',
          fontWeight: 400,
          cssClass: 'apexcharts-yaxis-label'
        },
        offsetX: 0,
        offsetY: 0,
        formatter: (val: number) => `${val}%`
      },
      title: {
        text: 'Importance',
        rotate: -90,
        offsetX: -10,
        offsetY: 0,
        style: {
          color: LABEL_TITLE_COLOR,
          fontSize: '15px',
          fontFamily: 'Nunito',
          fontWeight: 600
        }
      },
      tooltip: { enabled: false }
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: undefined,
      formatter: (val: number) => val + '%',
      style: {
        fontSize: '12px',
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        colors: barData.map(() => '#000')
      },
      background: { enabled: false },
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: '#000',
        opacity: 0.45
      }
    },
    tooltip: {
      enabled: true,
      followCursor: true,
      fillSeriesColor: true,
      style: {
        fontSize: '14px',
        color: '#000',
        fontFamily: 'Nunito',
        backgroundColor: '#000'
      },
      x: { show: true, formatter: undefined },
      y: { formatter: undefined, title: 'Importance:' },
      marker: { show: true }
    }
  };

  // @ts-ignore
  var chart = new ApexCharts(
    document.querySelector('#feature_importance_chart'),
    options
  );
  chart.render();
};

window.addEventListener('hashchange', () => {
  if (window.location.hash.replace('#', '') !== 'features') return;
  const chartLoadedBefore = !!document.querySelector('.apexcharts-canvas');
  if (!chartLoadedBefore) loadFeatureImportances();
});
