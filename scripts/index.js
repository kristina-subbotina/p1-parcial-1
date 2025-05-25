/*
 * SUBBOTINA, KRISTINA
 */


//Cargamos discos de json para testear
let discos = [];
fetch("/discos.json")
  .then((response) => response.json())
  .then((json) => {
    discos = json.map(
      (disco) =>
        new Disco(
          disco.nombre,
          disco.artista,
          disco.id,
          disco.portada,
          disco.pistas.map((pista) => new Pista(pista.nombre, pista.duracion))
        )
    );
  });

//Func: buscar el disco más largo  
function discoLargo() {
  if (discos.length === 0) {
    return null;
  }
  let maxDisco = discos[0];
  for (const disco of discos) {
    if (disco.sumDuracion > maxDisco.sumDuracion) {
      maxDisco = disco;
    }
  }
  return maxDisco;
}


//Func: Mostrar info y todos los discos
function mostrar(discosMostrar, isSearch = false) {
  const divDiscos = document.querySelector("#discos");
  const divInfo = document.querySelector("#info");
  divDiscos.innerHTML = '';
  divInfo.innerHTML = '';
  discosMostrar.forEach((disco) => (divDiscos.innerHTML += disco.toHTML()));


  if (!isSearch) {
    divInfo.innerHTML += `<p>La cantidad de los discos: ${discosMostrar.length}</p>`;
    const maxdisco = discoLargo();
    if (maxdisco !== null) {
      divInfo.innerHTML += `<p>El disco más largo: ${maxdisco.nombre}</p>`;
    }
  } else {
    if (discosMostrar.length > 0) {
      divInfo.innerHTML += `<p>Discos encontrados: ${discosMostrar.length} </p>`;
    }
  }
}

//Func: cargar un disco nuevo
function cargar() {
  const idList = discos.map((disco) => disco.id);

  const nombre = Disco.pedirNombre();
  const artista = Disco.pedirArtista();
  const id = Disco.pedirId(idList);
  const portada = Disco.pedirPortada();
  const canciones = [];

  do {
    const nombrePista = Pista.pedirNombre();
    const duracionPista = Pista.pedirDuracion();
    canciones.push(new Pista(nombrePista, duracionPista));
  } while (confirm("Otra canción?"));

  discos.push(new Disco(nombre, artista, id, portada, canciones));
  mostrar(discos);
}

//Func: buscar el disco por su id
function buscar() {
  let idBuscar = Disco.pedirId([]);
  const resultBuscar = discos.filter((disco) => disco.id === idBuscar);
  if (resultBuscar.length === 0) {
    alert("Error: No hay discos encontrados");
  }
  mostrar(resultBuscar, true);
}
