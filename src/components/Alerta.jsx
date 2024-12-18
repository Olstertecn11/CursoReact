const Alerta = ({ title, message, type, show = false }) => {
  const color = type == 'success' ? 'green' : 'red';

  const display_type = show ? 'block' : 'none';

  return (
    <div style={{ background: color, display: display_type }}>
      <p> <b>{title}</b> {message} </p>
    </div>
  )
}

export default Alerta;
