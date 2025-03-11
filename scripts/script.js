function loadCategories() {
  // fetch categories
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
  // get container
  const categoryContainer = document.getElementById("category-container");

  for (let category of categories) {
    const categoryBtn = document.createElement("button");

    categoryBtn.textContent = `${category.category}`;
    // categoryBtn.classList.add("'btn', 'hover:bg-[#ff1f3d]', 'hover:text-white'");
    categoryBtn.classList.add("btn", "hover:bg-[#ff1f3d]", "hover:text-white");

    categoryContainer.append(categoryBtn);
  }
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}
function displayVideos(videos){
    
    videos.forEach(video => {

    })
}
loadCategories();
