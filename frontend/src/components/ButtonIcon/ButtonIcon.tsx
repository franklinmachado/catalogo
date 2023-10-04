import { ReactComponent as Seta } from 'assets/images/Seta.svg';
import './styles.css';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary btn-icon">
        <h6>INICIE AGORA A SUA BUSCA</h6>
      </button>

      <div className="btn-icon-container">
        <Seta />
      </div>
    </div>
  );
};

export default ButtonIcon;
