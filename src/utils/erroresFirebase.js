export const erroresFirebase = (code) => {
    switch (code) {
        case "auth/email-already-in-use":
          return "usuario ya registrado"
          break;
        case "auth/invalid-email":
          return "Formato email no válido"
          break;
        case "auth/user-not-found":
          return "Usuario no registrado"
          break;
        case "auth/wrong-password":
          return "Contraseña incorrecta"
          break;
        default:
          return "Error del servidor"
      }
}