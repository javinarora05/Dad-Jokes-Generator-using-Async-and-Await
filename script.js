const api_body = document.querySelector(".api_body");
const apiUrl = "https://icanhazdadjoke.com/";


async function showJoke() {
  try{
      const res = await fetch(apiUrl, {
        headers: {
            Accept : "application/json"
        }
    })
    const data = await res.json();
    api_body.innerHTML = data.joke;
    // console.log(data.joke);
    }
    catch(error){
        // console.log(error);
        api_body.innerHTML = error;
    }
}

showJoke();

document.querySelector('#fetchJoke').addEventListener("click" , showJoke)