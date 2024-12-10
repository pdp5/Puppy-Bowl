import { fetchPlayers, postPlayer } from "../API";
const AddPlayerForm = ({
  name,
  breed,
  status,
  imageUrl,
  setName,
  setBreed,
  setStatus,
  setImageUrl,
  getData,
}) => {
  function onSubmitHandler(e) {
    e.preventDefault();

    const obj = {
      name: name,
      breed: breed,
      status: status,
      imageUrl:
        imageUrl ||
        "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
    };

    async function handlePlayerSubmission() {
      try {
        await postPlayer(obj);
        await getData();
      } catch (error) {
        console.error("Error during player submission:", error);
      }
    }

    handlePlayerSubmission();

    console.log("name: ", name);
    console.log();
    setName("");
    setBreed("");
    setStatus("");
    setImageUrl("");
  }

  return (
    <>
      <div className="add-player-form">
        <h1>Puppy Bowl</h1>
        <form onSubmit={onSubmitHandler}>
          <label>Name: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <label>Breed: </label>
          <input
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            type="text"
          />
          <label>Status: </label>
          <input
            value={status}
            onChange={(e) => setStatus(e.target.value.toLowerCase())}
            type="text"
          />
          <label>Image URL: </label>
          <textarea
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Paste Your Image URL Here..."
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddPlayerForm;
