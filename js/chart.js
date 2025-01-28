/**
 * 📊 차트 초기화 및 업데이트 모듈
 */

let chart;

// 차트 초기 설정
const initChart = () => {
  const ctx = document.getElementById('investmentChart').getContext('2d');
  chart = new Chart(ctx, {
    type: 'line',  // 꺽은선 그래프로 변경
    data: {
      labels: ['샤프', '효용성', '캘리', '하프캘리'],
      datasets: [{
        label: '계산 결과 추이',
        data: [],
        borderColor: '#2980b9',  // 파란색 계열
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: '#27ae60'  // 녹색 포인트
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: '#ecf0f1' }
        }
      }
    }
  });
};

// 차트 데이터 업데이트
export const updateChartData = (newData) => {
  if (chart) {
    chart.data.datasets[0].data = newData;
    chart.update();
  }
};

// 초기화 실행
document.addEventListener('DOMContentLoaded', initChart);