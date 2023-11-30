import { useState } from "react";
import "./styles.css";

type Props = {
  onSearch: Function;
};

const SearchBar = ({ onSearch }: Props) => {
  const [text, setText] = useState("");


  function handleSearchSubmit(event: any) {
    event.preventDefault()
    onSearch(text)
  }

  function handleChangeInput (event: any){
    setText(event.target.value)
  }

  function handleResetClick(){
    setText("")
    onSearch(text)
  }
  return (
    <form className="dsc-search-bar" onSubmit={handleSearchSubmit}>
      <button type="submit">🔎︎</button>
      <input 
      value={text} 
      type="text" 
      placeholder="Nome do produto" 
      onChange={handleChangeInput}
      />
      <button onClick={handleResetClick}>🗙</button>
    </form>
  );
};

export default SearchBar;
