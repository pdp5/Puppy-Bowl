const API_URL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT/players";

export async function fetchPlayers() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.log(error);
  }
}
export async function postPlayer(obj) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    const data = await response.json();
    console.log("player added successfully:", data);
  } catch (error) {
    console.log(error);
  }
}
