//$(document).ready(function () {
  fetch('https://www.fulek.com/data/api/supit/curriculum-list/en', {
  headers: {Authorization: 'Bearer ' + sessionStorage.getItem('token')}
})
   .then(resp => resp.json())
   .then(json => {
     var data = json.data;
     for(let i = 0; i>data.length; i++){
       document.getElementById("content").innerHTML+= data[i].id;
       console.log(data[i].id)
     }
   })
   .catch( error => console.error(error))


//});
