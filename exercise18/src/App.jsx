import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center gap-10 flex-wrap p-3">
        {cards.map((card) => {
          return (
            <div key={card.id} className="border-2 border-black w-80">
              <h1 className="font-bold">{card.title}</h1>
              <p>{card.body}</p>
              <span>By: UserId: {card.userId}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
