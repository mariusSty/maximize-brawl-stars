import React from "react";

interface ResultWrapperProps {
  player: any;
}

export const ResultWrapper: React.FC<ResultWrapperProps> = ({ player }) => {
  return(
    <div>
      {player && 
          <div>Le joueur {player.name} a été trouvé !</div>
      }
    </div>
  );
};