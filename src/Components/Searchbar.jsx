import DisplayPlayers from "./DisplayPlayers";
import SeeDetailsBtn from "./SeeDetailsBtn";
const Searchbar = ({
  players,
  userInput,
  setUserInput,
  setMatchedPlayers,
  matchedPlayers,
  setVisible,
}) => {
  function onChangeHandler(value) {
    setUserInput(value);
    console.log("value: ", value);

    setMatchedPlayers(
      players.filter((player) =>
        player.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  return (
    <>
      <div className="searchbar">
        <label>Search: </label>
        <input
          onChange={(e) => onChangeHandler(e.target.value)}
          placeholder="Search Your Player"
          type="search"
          value={userInput}
        />
      </div>
      <div className="matchplayers-with-userinput">
        {userInput && (
          <DisplayPlayers
            players={matchedPlayers}
            setVisible={setVisible}
            setUserInput={setUserInput}
          />
        )}
      </div>
    </>
  );
};

export default Searchbar;
