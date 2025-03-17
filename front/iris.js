function Send(){
    sl = document.getElementById("sl")
    sw = document.getElementById("sw")
    pl = document.getElementById("pl")
    pw = document.getElementById("pw")

    alert("자바 스크립트 Send 함수를 불려짐")
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
        txtOut.value = response.prediction
    }).fail(function(response){
        alert("fail" +response)
    }
    ).always()
  }