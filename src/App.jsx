import { useState } from "react";

const Login = () => {
  // determinar que user='admin' y que password='admin'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (event) => {
    const texto = event.target.value;
    setUsername(texto);
  }

  const changePassword = (event) => {
    const texto = event.target.value;
    setPassword(texto);
  }

  const auth = () => {
    if (username.length <= 0 || password.length <= 0) {
      alert("Debe llenar los campos requeridos");
      return;
    }

    if (username == 'admin' && password == 'admin') {
      alert("Bienvenido!");
      return;
    }
    alert("Credenciales incorrectas");
  }

  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="">Usuario</label>
      <br />
      <input type="text" placeholder="Ingrese su usuario" onChange={changeUsername} value={username} />
      <br />
      <label htmlFor="">Contraseña</label>
      <br />
      <input type="password" onChange={changePassword} />
      <br />
      <button onClick={auth}>Entrar</button>
    </div>
  )
}

const App = () => {

  return (
    <Login />
  );
}


export default App;