let $btnPrro = document.querySelector('#btnPrro');

$btnPrro.addEventListener('click',()=>{
    //hacer la peticion a () 
    //Muy importante leer la documentacion del consumo de apis por ejemplo la de gato es un array de objeto y la de prro ya es un objeto
    /* funciona para gatos */
 /*    
 fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json()).then(data =>{
            console.log(data);
            console.log("aqui");
            let imagenPrro = document.createElement('img');
            imagenPrro.src = data[0].url;
            document.body.appendChild(imagenPrro);
        }); 
      lo que pasa detra de bambalinas   
      .then(function(resp){
            return resp.json()
        }).then(data =>{
            console.log(data);
        }) 
    una peticion a este url .procesala como json .procesala como objeto
*/
    fetch('https://dog.ceo/api/breeds/image/random')
    
        .then(resp => resp.json()).then(data =>{
            console.log(data);
            
            let imagenPrro = document.createElement('img');
            imagenPrro.src = data.message;
            document.body.appendChild(imagenPrro);
        });
 
});
