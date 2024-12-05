const form = document.getElementById("form");
const ratings = document.getElementById("ratings");
const stars = document.getElementsByClassName("stars");
let rating = 0;

Array.from(stars).forEach((element) => {
  element.addEventListener("click", (e) => {
    const current_svg = e.target.closest("svg");
    const rating_value = current_svg.dataset.value;
    rating = rating_value;

    Array.from(stars).forEach((star) => {
      if (star.dataset.value <= rating_value) {
        star.setAttribute("fill", "yellow");
      } else {
        star.setAttribute("fill", "black");
      }
    });
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ratings.innerText = `You have ${rating} star ratings`;
});
