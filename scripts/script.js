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

    categoryBtn.onclick = () => {
      loadCategoryVideos(category.category_id);
    };
    categoryBtn.textContent = `${category.category}`;
    // categoryBtn.classList.add("'btn', 'hover:bg-[#ff1f3d]', 'hover:text-white'");
    categoryBtn.classList.add("btn", "hover:bg-[#ff1f3d]", "hover:text-white");

    categoryContainer.append(categoryBtn);
  }
}
function addActiveClass() {
  const categoryContainer = document.getElementById("category-container");

  categoryContainer.addEventListener("click", (event) => {
    event.target.classList.add("custom-active");
    removeActiveClass();
  });
}
function removeActiveClass() {
  const activeBtn = document.getElementsByClassName("custom-active");
  activeBtn.classList.remove("custom-active");
}
addActiveClass();
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}

function loadCategoryVideos(category_id) {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${category_id}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayVideos(data.category));
}
function displayVideos(videos) {
  const videoContainer = document.getElementById("video_container");
  videoContainer.innerHTML = "";
  videos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `<div class="space-y-4">
          <div>
            <img class="w-full object-cover h-50"
              src="${video.thumbnail}"
              alt=""
            />
          </div>
          <div class="flex items-start gap-4">
            <div class="avatar">
              <div class="w-12 rounded-full">
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
            <div>
              <h2 class="text-xl text-[#171717]">
                ${video.title}
              </h2>
              <p class="flex items-center gap-2 text-sm text-[#171717]/70">
                ${video.authors[0].profile_name}
                ${
                  video.authors[0].verified
                    ? '<img class="w-5" src="./assets/verified.png" alt="" />'
                    : ""
                }
              </p>
              <p class=" text-sm text-[#171717]/70">${
                video.others.views
              } views</p>
            </div>
          </div>
        </div>`;

    videoContainer.append(videoCard);
  });
}
loadCategories();
