const labels = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio','Julio', 'Agosto']

const graph = document.querySelector("#grafica");

const data = {
	labels: labels,
	datasets: [{
		label:"Cantidad de personas que nos visitan",
		data: [124,143,122,100,215,123,165,142],
		backgroundColor: 'rgb(245, 154, 78)'
	}]
};

const config = {
	type: 'bar',
	data: data,
	};
new Chart(graph, config);