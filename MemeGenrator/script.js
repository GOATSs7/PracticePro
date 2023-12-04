let title = document.getElementById("title");
let author = document.getElementById("author");

let img = document.getElementById("img");
let button = document.getElementById("button");

async function getMeme() {
  try {
    // https://github.com/D3vd/Meme_Api

    const meme = await fetch("https://meme-api.com/gimme/wholesomememes");
    const res = await meme.json();
    return res;
  } catch (error) {
    console.error("Error in fetch api" + error);
    return null;
  }
}

async function displayMEME() {
  try {
    const MEME = await getMeme();
    if (MEME) {
      author.innerHTML = "Author :" + MEME.author;
      title.innerHTML = "Title :" + MEME.title;
      img.src = MEME.url;
      //   img.innerHTML = MEME.url;
    }
  } catch (error) {
    console.error("Error displaying meme: " + error);
  }
}

button.onclick = () => {
  displayMEME();
};

displayMEME();
