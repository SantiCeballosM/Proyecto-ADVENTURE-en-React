/* eslint-disable no-unused-vars */
function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

 // Validación del nombre completo
  if (!values.fullname==="") {
    error.fullname = "El nombre completo no puede estar vacío";
  }

// Validación del correo electrónico
  if (values.email === "") {
    error.email = "El correo no puede estar vacio";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Correo no coincide";
  } else {
    error.email = "";
  }

// Validación de la contraseña
  if (values.password === "") {
    error.password = "La contraseña no puede estar vacia";
  } else if (!password_pattern.test(values.password)) {
    error.password = "La contraseña no coincide";
  } else {
    error.password = "";
  }

// Validación de la fecha de nacimiento (puedes ajustar según tus necesidades)
  if (!values.birthdate===null) {
    error.birthdate = "La fecha de nacimiento no puede estar vacía";
  }

// Validación del número de teléfono (puedes ajustar según tus necesidades)
  if (!values.phone_number===null) {
    error.phone_number = "El número de teléfono no puede estar vacío";
  }
  return error;
}

export default Validation;
