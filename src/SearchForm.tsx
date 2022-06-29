import React, { useState } from "react";

interface SearchFormProps {
  findPlayer: (tag: string) => Promise<void>
}

export const SearchForm: React.FC<SearchFormProps> = ({ findPlayer }) => {
  const [tag, setTag] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    findPlayer(tag);
  };

  const onChange = (e: any) => {
    setTag(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" name="tag" onChange={onChange}></input>
        <button onClick={handleSubmit}>Valider</button>
      </form>
    </div>
  );
};