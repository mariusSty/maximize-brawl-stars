import React, { ChangeEvent, MouseEvent, useState } from "react";

interface SearchFormProps {
  findPlayer: (tag: string) => Promise<void>
  error?: string;
  setError: (error: string | undefined) => void
  setIsLoading: (isLoading: boolean) => void 
}

export const SearchForm: React.FC<SearchFormProps> = ({ findPlayer, error, setError,  setIsLoading }) => {
  const [tag, setTag] = useState("");

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError(undefined);
    findPlayer(tag).catch(() => { setError(`Impossible de trouver le joueur avec ce tag : "${tag}" !`); setIsLoading(false);});
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(undefined);
    setTag(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center py-10">
        <div className="flex flex-col items-center max-w-screen-sm">
          <div className="flex w-full">
            <div className="flex justify-center items-center w-10 bg-slate-800 rounded-l-lg">
              <span className="text-gray-100 text-3xl">#</span>
            </div>
            <input placeholder= "Tag ?" className="h-10 px-3 text-lg placeholder-gray-600 border-2 border-slate-800 rounded-r-lg" type="text" name="tag" onChange={onChange}></input>
            <button className="h-10 px-6 mx-3 text-lg text-gray-100 transition-colors duration-150 bg-slate-800 rounded-lg hover:bg-slate-700" onClick={handleSubmit}>Valider</button>
          </div>
          <span className="absolute top-40 text-red-600 text-sm self-start">{error}</span>
        </div>
      </div>
    </>
  );
};