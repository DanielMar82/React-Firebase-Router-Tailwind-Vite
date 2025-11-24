export const formValidate = () => { 
return {

    required: { 
        value: true, 
        message: "Campo obligatorio" 
    },

    patternEmail: {
        value:
        /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
        message: "Formato incorrecto",
    },

    minLength: { 
        value: 6, 
        message: "Mínimo 6 carácteres" 
    },

    validateTrim:  
         (v) => {
            if (!v.trim()) {
                return "No seas payaso, escribe algo";
            }
            return true
    },
    
    validateEquals(getValues)  {
        return {
            equals: (v) =>
                v === getValues("password") || "Contraseñas no coinciden",}
        }
} }