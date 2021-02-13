
   function updateUI(res={}){
      console.log("Inside update UI with data ", res)
        document.getElementById('loader').setAttribute('hidden', '')
        document.getElementById('data').innerHTML = '<p><b>Agreement: </b>'+res.agreement+'</p>'+
        '<p><b>Subjectivity: </b>'+res.subjectivity+'</p>' +
        '<p><b>Confidence: </b>'+res.confidence+'</p>' +
        '<p><b>Irony: </b>'+res.irony+'</p>' +
        '<p><b>Score Tag: </b>'+res.score_tag+'</p>';
        document.getElementById('textEntry').value = "";
        document.getElementById('url').value = "";
   }

export { updateUI }
