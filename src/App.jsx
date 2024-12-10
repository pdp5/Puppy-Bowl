import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { fetchPlayers } from "./API/index";
import DisplayPlayers from "./Components/DisplayPlayers";
import PlayerDetails from "./Components/PlayerDetails";
import Searchbar from "./Components/Searchbar";
import AddPlayerForm from "./Components/AddPlayerForm";

function App() {
  const [players, setPlayers] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [matchedPlayers, setMatchedPlayers] = useState([]);

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [visible, setVisible] = useState(true);

  async function getData() {
    try {
      const data = await fetchPlayers();
      setPlayers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // console.log("user: ", userInput);

  return (
    <>
      {visible && (
        <AddPlayerForm
          name={name}
          breed={breed}
          status={status}
          imageUrl={imageUrl}
          setName={setName}
          setBreed={setBreed}
          setStatus={setStatus}
          setImageUrl={setImageUrl}
          getData={getData}
        />
      )}

      <Router>
        {visible && (
          <>
            <Searchbar
              players={players}
              userInput={userInput}
              setUserInput={setUserInput}
              setMatchedPlayers={setMatchedPlayers}
              matchedPlayers={matchedPlayers}
              setVisible={setVisible}
            />
            {userInput && <hr />}
          </>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <DisplayPlayers
                players={players}
                getData={getData}
                setVisible={setVisible}
                visible={visible}
                setUserInput={setUserInput}
              />
            }
          />
          <Route
            path="/player/:id"
            element={
              <PlayerDetails players={players} setVisible={setVisible} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
