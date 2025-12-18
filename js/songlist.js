const songs = [
  "Big Generator by Yes",
  "Sunshine in the Shade by The Fixx",
  "Eye in the Sky by The Alan Parsons Project",
  "Fallen Angel by Alphaville",
  "The Logical Song by Supertramp",
  "Take a Chance on Me by ABBA",
  "Give Me Love, Give Me Life by Roger Hodgson",
  "Only Time Will Tell by Asia",
  "Steppin' in a Slide Zone by The Moody Blues",
  "Twilight by Electric Light Orchestra",
  "Sweet Defector by Albert Hammond",
  "The Reflex by Duran Duran",
  "Crazy by the Myles Revolution"
];

function pickWord() {
  const randomIndex = Math.floor(Math.random() * songs.length);
  const selectedSong = songs[randomIndex];
  
  document.getElementById("output").textContent = selectedSong;

  const extraDiv = document.getElementById("extraContent");
  extraDiv.innerHTML = ""; // clear previous content

  if (selectedSong === "Crazy by the Myles Revolution") {
    extraDiv.innerHTML = `
      <p>Surprise! You've come across Illinois's own The Myles Revolution! He has a fun song for you!</p>
      <iframe 
        width="560" 
        height="315"
        src="https://www.youtube.com/embed/MYxHJLGH7So"
        referrerpolicy="strict-origin-when-cross-origin"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
     `;
  }
}