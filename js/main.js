let words = document.querySelectorAll(".portfolio .shuffle li");
let images = document.querySelectorAll(".portfolio .images-container .image");

words.forEach((word) => {
	word.onclick = function () {
		words.forEach((word) => {
			word.classList.remove("active");
		});
		word.classList.add("active");
		let active = word.innerHTML;
		images.forEach((image) => {
			image.style.display = "block";
			if (image.dataset.imgtype !== active) {
				image.style.display = "none";
			}
			if (active === "All") {
				image.style.display = "block";
			}
		});
	};
});
