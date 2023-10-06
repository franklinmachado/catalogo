import { ReactComponent as Seta } from 'assets/images/Seta.svg';
import './styles.css';

function Pagination() {
  return (
    <div className="pagination-container">
      <Seta className="arrow-inactive" />
      <div className="pagination-item active">1</div>
      <div className="pagination-item">2</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">...</div>
      <Seta className="arrow-active arrow-next" />
    </div>
  );
}

export default Pagination;
