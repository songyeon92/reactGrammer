import React from "react";
import DicContents from "./DicContents";
import emojipedia from "../emojipedia";
import { ScriptElementKindModifier } from "typescript";

const createEmoji = (emoji) => {
  return <DicContents 
    key={emoji.id}
    emoji={emoji.emoji}
    name={emoji.name}
    meaning={emoji.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
