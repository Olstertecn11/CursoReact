import { useState } from 'react';

const Register = () => {

  const empty_user = { username: '', email: '', password: '', confirm_password: '' };
  const [user, setUser] = useState(empty_user);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const nuevo_user = { ...user, [name]: value };
    setUser(nuevo_user);
  }

  const registrar = () => {
    if (user.password == user.confirm_password) {
      alert("usuario registrado correctamente");
    }
    else {
      alert("Las contraseñas no coinciden");
    }
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-5">
          <div className="card card-body">
            <h2 className="text-center">Register</h2>
            <label >Usuario</label>
            <input type="text" placeholder="Ols11" className="form-control" name="username" onChange={handleChange} value={user.username} />
            <label className="mt-4" >Correo</label>
            <input type="email" placeholder="fulano@gmail.com" className="form-control" name="email" onChange={handleChange} value={user.email} />

            <label className="mt-4" >Contraseña</label>
            <input type="password" className="form-control" name="password" onChange={handleChange} value={user.password} />

            <label className="mt-4">Confirmación de Contraseña</label>
            <input type="password" className="form-control" name="confirm_password" onChange={handleChange} value={user.confirm_password} />
            <button onClick={registrar} className="btn btn-warning mt-4"> Regitrar </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Register;
