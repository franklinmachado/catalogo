import { ReactComponent as Seta } from 'assets/images/Seta.svg';
import './styles.css';

type Props = {
  text: string;
};

const ButtonIcon = ({ text }: Props) => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary btn-icon">
        <h6>{text}</h6>
      </button>

      <div className="btn-icon-container">
        <Seta />
      </div>
    </div>
  );
};

export default ButtonIcon;
