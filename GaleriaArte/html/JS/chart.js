
const labels = ['Arte Abstracto','Realismo','Fotografia y Videos','Arte moderno']
const colors = ['#DD7C3C', 'rgb(99,201,122)', 'rgb(245, 100, 78)', 'rgb(229,224,88)'];

const graph = document.querySelector("#grafica");

const data = {
    labels: labels,
    datasets: [{
        data: [18,5,26,7],
        backgroundColor: colors
    }]
};

const config = {
    type: 'pie',
    data: data,
};

new Chart(graph, config);