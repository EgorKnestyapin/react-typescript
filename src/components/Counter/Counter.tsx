import "./styles.css";

interface CounterProps {
  count: number;
  onPlus: () => void;
  onMinus: () => void;
}

function Counter({ count, onPlus, onMinus }: CounterProps) {
  return (
    <div className="counter-wrapper">
      <button type="button" className="counter-button" onClick={onMinus}>
        -
      </button>
      <p className="count">{count}</p>
      <button type="button" className="counter-button" onClick={onPlus}>
        +
      </button>
    </div>
  );
}

export default Counter;
