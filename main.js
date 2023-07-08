const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const firstItem = document.querySelector(".slide-one");
const secondItem = document.querySelector(".slide-two");
const thirdItem = document.querySelector(".slide-three");

var count = 0

if (count == 0) {
  secondItem.classList.add('hidden')
  thirdItem.classList.add('hidden')
  firstItem.classList.remove('hidden')
}



nextButton.addEventListener("click", () => {
  if (count < 3) { count++ }
  if (count >= 3) { count = 0 }
  console.log(count)
  if (count == 0) {
    secondItem.classList.add('hidden')
    thirdItem.classList.add('hidden')
    firstItem.classList.remove('hidden')
  }
  if (count == 1) {
    firstItem.classList.add('hidden')
    thirdItem.classList.add('hidden')
    secondItem.classList.remove('hidden')
  }
  if (count == 2) {
    firstItem.classList.add('hidden')
    secondItem.classList.add('hidden')
    thirdItem.classList.remove('hidden')
  }
});
prevButton.addEventListener("click", () => {
  if (count >= 1) { count-- }
  else { count = 2 }
  if (count == 0) {
    secondItem.classList.add('hidden')
    thirdItem.classList.add('hidden')
    firstItem.classList.remove('hidden')
  }
  if (count == 1) {
    firstItem.classList.add('hidden')
    thirdItem.classList.add('hidden')
    secondItem.classList.remove('hidden')
  }
  if (count == 2) {
    firstItem.classList.add('hidden')
    secondItem.classList.add('hidden')
    thirdItem.classList.remove('hidden')
  }
});