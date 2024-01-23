import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import RecipeList from "./components/RecipeList";
import type Recipe from "./types/Recipe";
import type Unit from "./types/Unit";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [units, setUnits] = useState<Unit>("metric");
  const [data, setData] = useState<Recipe[]>([]);
  const [resultsAmount, setResultsAmount] = useState<number>(30);
  const uri = `https://api.edamam.com/search?q=${query}&to=${resultsAmount}&app_id=dc16785e&app_key=51a3c7a8caa9e47cc8cfeedfabd62559&diet=low-carb`;

  function search(): void {
    fetch(uri)
      .then(async (response) => await response.json())
      .then((json) => {
        setData(json.hits as Recipe[]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Header title="Recipe Buddy" />
      <SearchBar
        resultsAmount={resultsAmount}
        query={query}
        setQuery={setQuery}
        setUnits={setUnits}
        setResultsAmount={setResultsAmount}
        buttonLabel="Search"
        onClick={() => {
          search();
        }}
      />
      <RecipeList recipes={data}/>
    </div>
  );
};

export default App;
