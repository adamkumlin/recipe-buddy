import { ChangeEventHandler } from "react";

type SearchBarProps = {
    query: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    buttonLabel: string;
    onClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange, buttonLabel, onClick }) => {

    return (
        <div className='SearchField'>
                <input type="field" onChange={onChange} value={query} />
                <button onClick={onClick}>{buttonLabel}</button>
        </div>
    )
}

export default SearchBar;