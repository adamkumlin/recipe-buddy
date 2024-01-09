import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import RecipeList from './components/RecipeList';

const App: React.FC = () => {

  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<string[]>([]);
  const uri = `https://api.edamam.com/search?q=${query}&app_id=dc16785e&app_key=51a3c7a8caa9e47cc8cfeedfabd62559&diet=low-carb`;

  const search = () => {
    fetch(uri)
    .then(response => response.json())
    .then(json => setData(json.hits))
    .catch(error => console.log(error));
  }
  
  return (
    <div className="App">
      <Header title='Recipe Buddy' />
      <SearchBar query={query} onChange={(e) => setQuery(e.target.value)} buttonLabel='Search' onClick={() => search()} />
      {query != "" ? <RecipeList recipes={data}/> : <p>No results :(</p>}
    </div>
  )
}

export default App;
