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
    <div className="flex justify-center py-10">
      <input placeholder= "Tag ?" className="h-10 px-3 text-lg placeholder-gray-600 border rounded-lg" type="text" name="tag" onChange={onChange}></input>
      <button className="h-10 px-6 mx-3 text-lg text-gray-100 transition-colors duration-150 bg-slate-800 rounded-lg hover:bg-slate-700" onClick={handleSubmit}>Valider</button>
    </div>
  );
};