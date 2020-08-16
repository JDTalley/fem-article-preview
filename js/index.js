// Share area
let sharebtn = document.querySelectorAll(".share-btn-more");
let shareActive = false;

for (let i = 0; i < sharebtn.length; i++) {
    sharebtn[i].addEventListener("click", () => {
        let extradiv = document.querySelector(".article-extra");
        let metadiv = document.querySelector(".article-meta");
        let sharediv = document.querySelector(".share");

        if (shareActive) {
            sharediv.style.display = "none";
            metadiv.style.display = "flex";
        } else {
            sharediv.classList.remove("hidden");
            sharediv.style.display = "flex";
            metadiv.style.display = "none";
        }

        extradiv.classList.toggle("article-extra-dark");
        shareActive = !shareActive;
    })
} 