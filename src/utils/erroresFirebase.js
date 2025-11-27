export const erroresFirebase = (code) => {
    switch (code) {
        case "auth/email-already-in-use":
          return {
            code: "email",
            message: "usuario ya registrado"
          };
          break;
        case "auth/invalid-email":
          return {
            code: "password",
            message: "Formato email no válido"
          };
          break;
        case "auth/user-not-found":
          return {
            code: "email",
            message: "Usuario no registrado"
          };
          break;
        case "auth/wrong-password":
          return {
            code: "password",
            message: "Contraseña incorrecta"
          }; 
          break;
        default:
          return {
            code: "email",
            message: "Error del servidor"
          };
      }
}