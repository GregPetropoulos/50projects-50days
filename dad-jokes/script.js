const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// function generateJoke() {
//   const options = {
//     headers: {
//       Accept: 'application/json'
//     }
//   };
//   fetch('https://icanhazdadjoke.com', options)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEl.innerHTML=data.joke
//     })
// }
async function generateJoke() {
  const options = {
    headers: {
      Accept: 'application/json'
    }
  };
  const res = await fetch('https://icanhazdadjoke.com', options);
  const data = await res.json();
  return (jokeEl.innerHTML = data.joke);
}
