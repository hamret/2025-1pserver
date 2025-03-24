function drawChart(prob, pid) {

        var data = google.visualization.arrayToDataTable([
          ['iris species', 'prob'],
          ['setosa',     prob[0][0]],
          ['versicolor',      prob[0][1]],
          ['virginica',  prob[0][2]]


        ]);

        var options = {
          title: '붓꽃 품종 확률',
          pieHole: 0.4
        };

        var chart = new google.visualization.PieChart(document.getElementById('dountchart'));

        chart.draw(data, options);
      }

function Send(){
    sl = document.getElementById("sl")
    sw = document.getElementById("sw")
    pl = document.getElementById("pl")
    pw = document.getElementById("pw")

    alert("결과 불러옴")
  var data = {
    'sepal_length': sl.value,
    'sepal_width': sw.value,
    'petal_length': pl.value,
    'petal_width': pw.value,
  }
 $.ajax({
    type: "POST",
    url: 'http://localhost:8000/predict',
    headers:{
        "Accept" : "application/json",
        "Content-Type": "application/json",
     },
     data: JSON.stringify(data),
    }).done(function(response){
        console.log(response)
        txtOut.value = response.prediction + " 일 확률 " + response.probability
        google.charts.setOnLoadCallback(drawChart(response.probability, document.getElementById('dountchart')));

    }).fail(function(response){
        alert("fail" +response)
    }
    ).always()
  }