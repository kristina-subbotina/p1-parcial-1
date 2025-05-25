class Validator {
  //Func: validar string que no es null y que no está vacia
  static validarString(string) {
    if (string === null) {
      alert("Dato obligatorio");
      return false;
    } else if (string.trim() === "") {
      alert("No dejar vacio el campo");
      return false;
    }
    return true;
  }

  //Func: validar number que no es isNaN
  static validarNumber(number) {
    if (isNaN(number)) {
      return false;
    }
    return true;
  }
}
