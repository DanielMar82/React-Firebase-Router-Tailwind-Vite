export const formValidate = () => {
  return {
    required: {
      value: true,
      message: "Campo obligatorio",
    },

    patternEmail: {
      value:
        /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
      message: "Formato incorrecto",
    },

    patternURL: {
      value: /^https?:\/\/.+$/i,
      message: "Formato url incorrecto",
    },

    //  minLength: {
    //      value: 6,
    //      message: "Mínimo 6 carácteres"
    //  },

    minLength(value) {
      return {
        value,
        message: `Mínimo ${value} carácteres`,
      };
    },

    validateTrim: (v) => {
      if (!v.trim()) {
        return "No seas payaso, escribe algo";
      }
      return true;
    },

    validateEquals(value) {
      return {
        equals: (v) => v === value || "Contraseñas no coinciden",
      };
    },
  };
};
