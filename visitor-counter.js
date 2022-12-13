function visitorCounter(){
    fetch("https://0j3e1x4f5f.execute-api.us-east-1.amazonaws.com/visitorCounter")
     .then(response => response.text())
     .then((body) =>{
        document.getElementById("visitor-counter").innerHTML=body
     })
}