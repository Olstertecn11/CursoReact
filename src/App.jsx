import { useState } from "react";

const Login = () => {

  const empty_user = { username: '', password: '' };
  const [user, setUser] = useState(empty_user);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const nuevo_user = { ...user, [name]: value };
    setUser(nuevo_user);
  }


  const auth = () => {
    alert(user.username);
    // Terminar el ejemplo verificando que username y password sean iguales a 'admin'
  }

  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="">Usuario</label>
      <br />
      <input type="text" placeholder="Ingrese su usuario" name="username" onChange={handleChange} value={user.username} />
      <br />
      <label htmlFor="">Contraseña</label>
      <br />
      <input type="password" onChange={handleChange} value={user.password} name="password" />
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
