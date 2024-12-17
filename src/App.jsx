import { useState } from "react";

// Los componentes reciben parametros (props)
const Alerta = ({ title, message, type, show = false }) => {
  const color = type == 'success' ? 'green' : 'red';

  const display_type = show ? 'block' : 'none';

  return (
    <div style={{ background: color, display: display_type }}>
      <p> <b>{title}</b> {message} </p>
    </div>
  )
}


const Login = () => {

  // Variables
  const empty_user = { username: '', password: '' };
  const empty_alert = { title: '', message: '', type: '', show: false };
  const success_alert = {
    title: 'Éxito',
    message: 'Bienvenido al sistema', type: 'success', show: true
  }
  const error_alert = {
    title: 'Error',
    message: 'Credenciales incorrectas', type: 'error', show: true
  }



  // States
  const [user, setUser] = useState(empty_user);
  const [alerta, setAlert] = useState(empty_alert)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const nuevo_user = { ...user, [name]: value };
    setUser(nuevo_user);
  }

  const clearAlert = () => {
    setTimeout(() => {
      setAlert(empty_alert);
    }, 3000)
  }


  const auth = () => {
    if (user.username == 'admin' && user.password == 'admin') {
      setAlert(success_alert);
      clearAlert();
      return;
    }
    setAlert(error_alert);
    clearAlert();
  }

  return (
    <div className="container">
      <Alerta title={alerta.title} message={alerta.message} type={alerta.type} show={alerta.show} />
      <div className="row mt-4">
        <div className="col-md-5 mx-auto">
          <div className="card card-body p-4">
            <label htmlFor="">Usuario</label>
            <input className="form-control" type="text" placeholder="Ingrese su usuario" name="username" onChange={handleChange} value={user.username} />
            <label htmlFor="" className="mt-4">Contraseña</label>
            <input className="form-control" type="password" onChange={handleChange} value={user.password} name="password" />
            <button className="mt-4 btn btn-warning" onClick={auth}>Entrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {

  return (
    <Login />
  );
}


export default App;
