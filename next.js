import { handlePrimaryClick, handleSecondaryClick } from './buttonHandlers';

export default function MyButtons() {
  return (
    <div>
      <button className="btn" onClick={handlePrimaryClick}>
        Sign Up
      </button>
      <button className="btn btn-secondary" onClick={handleSecondaryClick}>
        Learn More
      </button>
    </div>
  );
}