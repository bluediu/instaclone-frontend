import { Link } from 'react-router-dom';
import './UserNotFound.scss';

function UserNotFound() {
  return (
    <div className="user-not-found">
      <p>Usuario no encontrado</p>
      <p>
        Es posible que el enlace que haz seguido sea incorrecto o
        que el usuario se haya eliminado
      </p>

      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default UserNotFound;
