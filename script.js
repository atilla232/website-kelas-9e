// Dapatkan nama folder dari URL
const pathArray = window.location.pathname.split("/");
const folderName = pathArray[pathArray.length - 2];

// Setel judul dengan nama folder
const titleElement = document.getElementById("dynamicTitle");
if (titleElement) {
  titleElement.textContent = folderName;
}
