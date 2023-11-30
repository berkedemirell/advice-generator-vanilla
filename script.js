
const adviceText = document.querySelector(".advice");
const fetchButton = document.querySelector(".advice-btn");
const id = document.querySelector(".id")


const fetchData = () => {
  let random = Math.ceil(Math.random() * 224)
  fetch(`https://api.adviceslip.com/advice/${random}`).then((res) => {
    return res.json();
  }).then((data) => {
    adviceText.innerHTML = data.slip.advice;
    id.innerHTML = data.slip.id
  }).catch((err) => {
    console.log(err)
  })
}
fetchButton.addEventListener("click", fetchData)

fetchData();