import React from "react";
import {Tile} from "../tile/Tile"

export const TileList = ({tiles}) => {
  return (
    <div>
      {tiles.map((tile, index) => { // traverse through every contact in contacts
        const { name, ...description } = tile; // restructuring syntax
        return <Tile name={name} description={description} key={index} />
      })}
    </div>
  );
};
