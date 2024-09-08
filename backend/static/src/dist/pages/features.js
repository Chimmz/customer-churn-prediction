var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const loadFeatureImportances = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch('/features', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = yield res.json();
            console.log(data);
            switch (data.status) {
                case 'success':
                    plotBars(data.feature_importances);
                    break;
                case 'error':
                    window.alert(data.msg);
                    break;
            }
        }
        catch (err) {
            window.alert(err.message);
        }
        finally {
        }
    });
};
const plotBars = (importances) => {
    const barData = [];
    // Populate bar data
    for (const key in importances)
        barData.push({ x: key, y: importances[key] });
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
                formatter: (val) => `${val}%`
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
            formatter: (val) => val + '%',
            style: {
                fontSize: '12px',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
                colors: barData.map(() => '#000')
            },
            background: {
                enabled: false
            },
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
            inverseOrder: false,
            custom: undefined,
            hideEmptySeries: true,
            fillSeriesColor: true,
            theme: false,
            style: {
                fontSize: '14px',
                color: 'black',
                fontFamily: 'Nunito',
                backgroundColor: '#000'
            },
            x: {
                show: true,
                format: 'dd MMM',
                formatter: undefined
            },
            y: {
                formatter: undefined,
                title: {
                    formatter: (seriesName) => 'Importance:'
                }
            },
            marker: {
                show: true
            }
        }
    };
    // @ts-ignore
    var chart = new ApexCharts(document.querySelector('#feature_importance_chart'), options);
    chart.render();
};
window.addEventListener('hashchange', () => {
    if (window.location.hash.replace('#', '') !== 'features')
        return;
    const chartLoadedBefore = !!document.querySelector('.apexcharts-canvas');
    if (!chartLoadedBefore)
        loadFeatureImportances();
});
// window.onload = () => {
//   alert();
//   if (window.location.hash.replace('#', '') === 'features')
//     loadFeatureImportances();
// };
//# sourceMappingURL=features.js.map