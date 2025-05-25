class Disco {
  constructor(nombre, artista, id, portada, pistas) {
    this.nombre = nombre;
    this.artista = artista;
    this.id = id;
    this.portada = portada;
    this.pistas = pistas;

    this.sumDuracion = 0;
    this.pistas.forEach((pista) => (this.sumDuracion += pista.duracion));
  }

  //Func: solicitar nombre del disco
  static pedirNombre() {
    let nombre;
    do {
      nombre = prompt("Ingrese el nombre del Disco");
    } while (!Validator.validarString(nombre));
    return nombre;
  }

  //Func: solicitar artista / banda del disco
  static pedirArtista() {
    let artista;
    do {
      artista = prompt("Ingrese el autor / banda");
    } while (!Validator.validarString(artista));
    return artista;
  }

  //Func: solicitar id unico del disco
  static pedirId(idList) {
    let id;
    let idValido = false;

    do {
      id = parseInt(prompt("Ingrese el Número"));
      if (!Validator.validarNumber(id)) {
        alert("El dato ingresado no es valido como id");
      } else if (idList.includes(id)) {
        alert("Tiene que ser unico");
      } else if (id < 1 || id > 999) {
        alert("Tiene que ser de 1 a 999");
      } else {
        idValido = true;
      }
    } while (!idValido);
    return id;
  }

  //Func: solicitar url de la portada del disco
  static pedirPortada() {
    let portada;
    do {
      portada = prompt("Ingrese url de portada");
    } while (!Validator.validarString(portada));
    return portada;
  }

  //Func: buscar la pista más larga del disco
  pistaLarga() {
    if (this.pistas.length === 0) {
      return null;
    }
    let maxPista = this.pistas[0];
    for (const pista of this.pistas) {
      if (pista.duracion > maxPista.duracion) {
        maxPista = pista;
      }
    }
    return maxPista;
  }

  // Formating de datos de duración a formato HH:MM:SS
  static formatDuracion(duracion) {
    let horas = Math.floor(duracion / 3600);
    let minutos = Math.floor((duracion % 3600) / 60);
    let segundos = duracion % 60;

    horas = horas.toString().padStart(2, "0");
    minutos = minutos.toString().padStart(2, "0");
    segundos = segundos.toString().padStart(2, "0");

    return `${horas}:${minutos}:${segundos}`;
  }

  toHTML() {
    let html = `<div class='carta-disco'>`;
    html += `<h3>${this.nombre}</h3>`;
    html += `<img src="${this.portada}" alt="${this.nombre}">`;
    html += `<div class='info-disco'>`
    html += `<p>Autor / Banda: ${this.artista}</p>`;
    html += `<p>Número: ${this.id}</p>`;
    html += `<p>Duración: ${Disco.formatDuracion(this.sumDuracion)} </p>`;
    html += `<p>Cantidad de pistos: ${this.pistas.length} </p>`;

    const promedio = Math.floor(this.sumDuracion / this.pistas.length);
    html += `<p>Promedio de duración: ${Disco.formatDuracion(promedio)}</p>`;

    const maxpista = this.pistaLarga();
    if (maxpista !== null) {
      html += `<p>Pista más larga: ${maxpista.nombre}</p>`;
    }
    html += `</div>`
    html += `<ul>`;

    this.pistas.forEach((pista) => (html += `<li>${pista.toHTML()}</li>`));

    html += `</ul>`;
    html += `</div>`;
    return html;
  }
}
