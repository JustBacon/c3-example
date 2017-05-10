//variable that storing the graph function
var chart = c3.generate({
	bindto: "#chart",
	data: {
		columns: [
			//3 columns with 2D array set of data with points
			["data1", 300,100,80],
			["data2", 240,60,30],
			["data3", 100,20,400]
		],
		//state what types of graphs to make per data
		types: {
			data1: "pie",
			data2: "pie",
			data3: "pie"
		}
	}
});