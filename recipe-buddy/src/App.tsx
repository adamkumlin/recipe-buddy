import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import type RecipeT from "./types/RecipeT";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<RecipeT[]>([]);
  const uri = `https://api.edamam.com/search?q=${query}&to=30&app_id=dc16785e&app_key=51a3c7a8caa9e47cc8cfeedfabd62559&diet=low-carb`;

  function search(): void {
    fetch(uri)
      .then(async (response) => await response.json())
      .then((json) => {
        setData(json.hits as RecipeT[]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Header title="Recipe Buddy" />
      <SearchBar
        query={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        buttonLabel="Search"
        onClick={() => {
          search();
        }}
      />
      <RecipeList recipes={data} />
    </div>
  );
};

export default App;
