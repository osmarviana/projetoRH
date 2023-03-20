const accordion = document.getElementById("accordion");

accordion.addEventListener("click", (e) => {
  if (e.target.classList.contains("more-information")) {
    e.target.parentElement.parentElement.classList.toggle("scale");
  }
});
