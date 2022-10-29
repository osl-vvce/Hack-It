const container = document.querySelector(".dog-imgs");
const filter = document.querySelector(".filter-dog");
var doglink = "https://dog.ceo/api/breeds/image/random";
filter.addEventListener("click", function (e) {
  const breed = e.target.value;
  if (breed === "random") {
    doglink = "https://dog.ceo/api/breeds/image/random";
  } else {
    doglink = `https://dog.ceo/api/breed/${breed}/images/random`;
  }
});
function fetchDogPics() {
  fetch(doglink)
    .then(function (rawResponse) {
      return rawResponse.json();
    })
    .then(function (usableData) {
      const image = document.createElement("img");
      image.src = usableData.message;
      if (container.children.length === 0) {
        container.appendChild(image);
      } else {
        const oldChild = document.querySelector(".dog-imgs img");
        container.replaceChild(image, oldChild);
      }
    });
}
