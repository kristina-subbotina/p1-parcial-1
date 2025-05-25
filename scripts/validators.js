class Validator {
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

  static validarNumber(number) {
    if (isNaN(number)) {
      return false;
    }
    return true;
  }
}
