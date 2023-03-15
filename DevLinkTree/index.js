const switchButton = document.querySelector("#switch button")
const html = document.documentElement

switchButton.addEventListener("click", () => {
  html.classList.toggle("light")
})
