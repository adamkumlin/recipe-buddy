import type Unit from "../types/Unit";
interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  buttonLabel: string;
  onClick: () => void;
  setUnits: React.Dispatch<React.SetStateAction<Unit>>;
  setResultsAmount: React.Dispatch<React.SetStateAction<number>>;
  resultsAmount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  setUnits,
  setResultsAmount,
  resultsAmount,
  buttonLabel,
  onClick,
}) => {
  function validateResultsAmount(value: number): void {
    if (value >= 10 && value <= 100) {
      setResultsAmount(value);
    } else {
      setResultsAmount(10);
    }
  }

  return (
    <div className="SearchField">
      <label>
        Units
        <select defaultValue={"metric"} onChange={(e) => setUnits(e.target.value as Unit)}>
          <option value={"metric"}>Metric</option>
          <option value={"imperial"}>Imperial</option>
        </select>
      </label>
      <label>
        Amount of results
        <input
          type="range"
          min="10"
          max="100"
          value={resultsAmount}
          onChange={(e) => setResultsAmount(parseInt(e.target.value))}
        />
        <input
          type="number"
          value={resultsAmount}
          onChange={(e) => setResultsAmount(parseInt(e.target.value))}
          onBlur={(e) => validateResultsAmount(parseInt(e.target.value))}
        />
      </label>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="What are you hungry for?"
      />
      <button onClick={onClick}>{buttonLabel}</button>
    </div>
  );
};

export default SearchBar;
