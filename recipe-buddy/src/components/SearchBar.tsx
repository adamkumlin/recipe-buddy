import { ChangeEventHandler } from "react";

interface SearchBarProps {
  query: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  buttonLabel: string;
  onClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onChange,
  buttonLabel,
  onClick,
}) => {
  return (
    <div className="SearchField">
      <input
        type="text"
        onChange={onChange}
        value={query}
        placeholder="What are you hungry for?"
      />
      <button onClick={onClick}>{buttonLabel}</button>
    </div>
  );
};

export default SearchBar;
