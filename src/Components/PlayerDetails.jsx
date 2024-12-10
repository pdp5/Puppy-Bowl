import { useParams, useNavigate } from "react-router-dom";
const PlayerDetails = ({ players, setVisible }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const player = players.find((p) => p.id === Number(id));

  function onClickHandler() {
    navigate("/");
    setVisible(true);
  }

  return (
    <>
      <div className="display-player-detail">
        <h1>Player Detail:</h1>
        <div className="image-container">
          <img src={player.imageUrl} alt="Dog's Picture" />
        </div>
        <p>
          <strong>ID: </strong> {player.id}
        </p>
        <p>
          <strong>Name: </strong> {player.name}
        </p>

        <p>
          <strong>Breed: </strong> {player.breed}
        </p>
        <p>
          <strong>Status: </strong> {player.status}
        </p>

        <button onClick={onClickHandler}>Back To Players</button>
      </div>
    </>
  );
};

export default PlayerDetails;
