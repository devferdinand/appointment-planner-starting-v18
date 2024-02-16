import React from "react";
import {Tile} from "../tile/Tile"

export const TileList = ({contacts}) => {
  return (
    <div>
      {contacts.map((contact, index) => { // traverse through every contact in contacts
        const { name, ...description } = contact; // restructuring syntax
        return <Tile name={name} description={description} key={index} />
      })}
    </div>
  );
};
