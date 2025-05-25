class Pista {
  constructor(nombre, duracion) {
    this.nombre = nombre;
    this.duracion = duracion;
  }

  static pedirNombre() {
    let nombre;
    do {
      nombre = prompt("Ingrese el nombre de la Cancion");
    } while (!Validator.validarString(nombre));
    return nombre;
  }

  static pedirDuracion() {
    let duracion;
    let isValido = false;

    do {
      duracion = parseInt(prompt("Ingrese la Duración"));
      if (!Validator.validarNumber(duracion)) {
        alert("El dato ingresado no es valido como duracion");
      } else if (duracion <= 0 || duracion > 7200) {
        alert("Tiene que ser más que 0 y no más que 7200");
      } else {
        isValido = true;
      }
    } while (!isValido);
    return duracion;
  }



  formatDuracion() {
    let minutos = Math.floor(this.duracion / 60);
    let segundos = this.duracion % 60;

    minutos = minutos.toString().padStart(2, "0");
    segundos = segundos.toString().padStart(2, "0");
    return `${minutos}:${segundos}`;
  }

  toHTML() {
    let duracionClass = "corta";
    if (this.duracion > 180) {
      duracionClass = "larga";
    }
    let html = `<div class='cancion ${duracionClass}'>`;
    html += `<p>${this.nombre}</p>`;
    html += `<p>${this.formatDuracion()}</p>`;

    html += `</div>`;
    return html;
  }
}
