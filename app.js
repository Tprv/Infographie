const ctx = document.getElementById('chartRevenues');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['I', 'II', 'III', 'IV', 'V', 'VI','VII','VIII','IX','X*','XI','XII','XIII','XVI','XV'],
      datasets: [{
        label: 'Revenues (in millions)',
        data: [321, 288, 547, 647, 719, 840, 1230, 869, 608, 1720, 1640, 521, 1130, 1010, 520,],
        backgroundColor: [
          " rgba(223, 40, 202, 0.548)",
        ]
      }]
    },
    plugins: [ChartDataLabels],
    options: {
       plugins:{
        legend: {
          display: false
        },
        datalabels: {
          color: '#fff',
          font: {
          size: 15,
          }
        }
       },
      maintainAspectRatio: false,
      indexAxis: 'y',
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color:'#fff',
            font: {
              size: 10,
              weight: 800,
            }
          }
        },
        x: {
          ticks: {
            color:'#fff',
          }
        },
      }
    },
  });


  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });



  const card = document.querySelector(".card");

  card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  });