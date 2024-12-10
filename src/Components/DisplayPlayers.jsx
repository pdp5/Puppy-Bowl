import { useNavigate } from "react-router-dom";
import PlayerDetails from "./PlayerDetails";
import SeeDetailsBtn from "./SeeDetailsBtn";
import DeleteBtn from "./Deletebtn";

const DisplayPlayers = ({
  players,
  getData,
  setVisible,
  visible,
  setUserInput,
}) => {
  return (
    <div className="display-players">
      {players.map((player) => (
        <div key={player.id} className="container">
          <div className="image">
            <img src={player.imageUrl} alt="Dog's Picture" />
          </div>
          <div className="player-name">{player.name} </div>
          <div className="btns-container">
            <SeeDetailsBtn
              player={player}
              setVisible={setVisible}
              setUserInput={setUserInput}
            />
            {console.log("visible: ", visible)}
            <DeleteBtn
              id={player.id}
              getData={getData}
              setVisible={setVisible}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayPlayers;
