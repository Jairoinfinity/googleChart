window.addEventListener("load", function () {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.load("current", { packages: ["line"] });
    google.charts.load("current", { packages: ["calendar"] });
    google.charts.setOnLoadCallback(dc);
    google.charts.setOnLoadCallback(calendarChart);
    google.charts.setOnLoadCallback(lineChart);
    function dc() {
        var opciones = {
            title: "Porcentage de aprobados",
            width: 550,
            height: 400
        };

        var datos = new google.visualization.DataTable();
        datos.addColumn("string", "Notas");
        datos.addColumn("number", "Percentage");
        datos.addRows([
            ["Aprobados", 5],
            ["Suspensos", 8],
            ["Np", 2]
        ]);

        var grafico = new google.visualization.PieChart(document.getElementById('contenedor'));
        grafico.draw(datos, opciones);
    }

    function lineChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Day');
        data.addColumn('number', 'Guardians of the Galaxy');
        data.addColumn('number', 'The Avengers');
        data.addColumn('number', 'Transformers: Age of Extinction');
  
        data.addRows([
          [1,  37.8, 80.8, 41.8],
          [2,  30.9, 69.5, 32.4],
          [3,  25.4,   57, 25.7],
          [4,  11.7, 18.8, 10.5],
          [5,  11.9, 17.6, 10.4],
          [6,   8.8, 13.6,  7.7],
          [7,   7.6, 12.3,  9.6],
          [8,  12.3, 29.2, 10.6],
          [9,  16.9, 42.9, 14.8],
          [10, 12.8, 30.9, 11.6],
          [11,  5.3,  7.9,  4.7],
          [12,  6.6,  8.4,  5.2],
          [13,  4.8,  6.3,  3.6],
          [14,  4.2,  6.2,  3.4]
        ]);
  
        var options = {
          chart: {
            title: 'Box Office Earnings in First Two Weeks of Opening',
            subtitle: 'in millions of dollars (USD)'
          },
          width: 900,
          height: 500,
          axes: {
            x: {
              0: {side: 'top'}
            }
          }
        };
  
        var chart = new google.charts.Line(document.getElementById('contenedor2'));
  
        chart.draw(data, google.charts.Line.convertOptions(options));
      }

      function calendarChart() {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: 'date', id: 'Date' });
        dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
        dataTable.addRows([
           [ new Date(2012, 3, 13), 37032 ],
           [ new Date(2012, 3, 14), 38024 ],
           [ new Date(2012, 3, 15), 38024 ],
           [ new Date(2012, 3, 16), 38108 ],
           [ new Date(2012, 3, 17), 38229 ],
           // Many rows omitted for brevity.
           [ new Date(2013, 9, 4), 38177 ],
           [ new Date(2013, 9, 5), 38705 ],
           [ new Date(2013, 9, 12), 38210 ],
           [ new Date(2013, 9, 13), 38029 ],
           [ new Date(2013, 9, 19), 38823 ],
           [ new Date(2013, 9, 23), 38345 ],
           [ new Date(2013, 9, 24), 38436 ],
           [ new Date(2013, 9, 30), 38447 ]
         ]);
 
        var chart = new google.visualization.Calendar(document.getElementById('contenedor3'));
 
        var options = {
          title: "Red Sox Attendance",
          height: 350,
        };
 
        chart.draw(dataTable, options);
    }

    
});