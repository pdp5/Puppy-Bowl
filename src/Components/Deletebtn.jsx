const DeleteBtn = ({ id, getData }) => {
  async function onClickHandler() {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT/players/${id}`,
        { method: "DELETE" }
      );
    } catch (error) {
      console.log(error);
    }
    console.log("id to delete: ", id);
    await getData();
  }
  return <button onClick={onClickHandler}>Delete</button>;
};

export default DeleteBtn;
