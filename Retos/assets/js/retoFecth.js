let $cartas = document.querySelector('#cartas');

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//Aqui la respuesta hace refenrencia a una funcion flecha que hace que la respusta se convierta a json
.then((resp) => resp.json())
//teniendo el json tenemos un array de objetos
.then((data) =>{
    console.log(data);
    /* Creamos contenedor de imagen y titulo */
    data.forEach((element) => {
      let Titulo=element.title;
      let Imagen=element.thumbnailUrl;

      let contenido = `<div class="card" style="width: 18rem;">
      <img src="${Imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${Titulo}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>`;

    const carta = document.createElement('div');
    /* 
    Renderiza e interpreta el marcado html
    carta crea un div para despues el marcador html aplicara el contenido */
    carta.innerHTML = contenido;
    $cartas.appendChild(carta);  
    });
      
  });
