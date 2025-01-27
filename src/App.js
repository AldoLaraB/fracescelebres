import React, { useEffect, useState } from "react";
import Autore from "./Autore";
import Boton from "./Boton";
import Frasi from "./Frase";
import Twitter from "./Twitter";

function App() {
  const [quote, setquote] = useState("");
  const [autor, setautor] = useState("");

  const initialUrl = "https://type.fit/api/quotes";
  //https://type.fit/api/quotes
  const quotasautor = (url) => {
    // CREARE function con valore FETCH che legge L'API's
    fetch(url)
      .then((Response) => Response.json())
      .then((quote) => {
        setquote(quote.content);
        setautor(quote.author);
        //console.log(quote)
      })

      .catch((error) => console.error());
  };

  useEffect(() => {
    // Struttura (useEffect) per leggere l'API's
    quotasautor(initialUrl);
  }, []);

  const newquote = () => {
    quotasautor(initialUrl);
  };

  return (
    <div id="quote-box" className="App hero">
      <Twitter />
      <Frasi frase={quote} />
      <Autore autor={autor} />
      <Boton nf={newquote} />
    </div>
  );
}

export default App;
