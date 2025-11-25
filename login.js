// La función que maneja la lógica de inicio de sesión
function validarLogin(event) {
  // Previene el envío del formulario por defecto (evita la recarga)
  event.preventDefault();

  const CLAVE_SECRETA = "ok";
  const usuarioInput = document.getElementById("usuario");
  const passwordInput = document.getElementById("password");

  if (!usuarioInput || !passwordInput) {
    return false;
  }

  const usuario = usuarioInput.value.trim();
  const password = passwordInput.value.trim().toLowerCase();

  if (!usuario || !password) {
    alert("Por favor, completa tus datos.");
    return false;
  }

  if (password === CLAVE_SECRETA) {
    alert("¡Acceso concedido! Bienvenido.");
    window.location.href = "index.html";
  } else {
    alert("Clave incorrecta. Inténtalo de nuevo.");
    passwordInput.value = "";
    passwordInput.focus();
  }

  return false;
}
