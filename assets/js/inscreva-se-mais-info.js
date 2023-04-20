const accordion = document.getElementById("accordion");
const toggleIcon = document.getElementsByClassName("fa-solid");

accordion.addEventListener("click", (e) => {
  if (e.target.classList.contains("more-information")) {
    e.target.parentElement.parentElement.parentElement.classList.toggle(
      "scale"
    );
    e.target.children.toggle("fa-minus");
  }
});
