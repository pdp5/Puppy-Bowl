import { useNavigate } from "react-router-dom";
const SeeDetailsBtn = ({ player, setUserInput, setVisible }) => {
  const navigate = useNavigate();

  function onClickHandler(id) {
    navigate(`/player/${id}`);
    setVisible(false);

    setUserInput("");
  }

  return <button onClick={() => onClickHandler(player.id)}>See Details</button>;
};

export default SeeDetailsBtn;
