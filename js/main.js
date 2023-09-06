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

let landing = document.querySelector(".landing");
let togglers = Array.from(document.querySelectorAll(".toogler"));
let bullets = Array.from(document.querySelectorAll(".bullets li"));
bullets.forEach((bullet) => {
	bullet.onclick = (_) => {
		bullets.forEach((bullet) => {
			bullet.classList.remove("active");
		});
		bullet.classList.add("active");
		landing.style.backgroundImage = `url(../images/landing${bullet.dataset.num}.jpg)`;
	};
});
togglers[0].onclick = (_) => {
	let activeBullet = document.querySelector(".bullets li.active");
	if (activeBullet.previousElementSibling) {
		activeBullet.classList.remove("active");
		activeBullet.previousElementSibling.classList.add("active");
		landing.style.backgroundImage = `url(../images/landing${activeBullet.previousElementSibling.dataset.num}.jpg)`;
	}
};
togglers[1].onclick = (_) => {
	let activeBullet = document.querySelector(".bullets li.active");
	if (activeBullet.nextElementSibling) {
		activeBullet.classList.remove("active");
		activeBullet.nextElementSibling.classList.add("active");
		landing.style.backgroundImage = `url(../images/landing${activeBullet.nextElementSibling.dataset.num}.jpg)`;
	}
};

// let tween =
document.querySelector(".logo").onmouseenter = (_) => {
	gsap.to(".logo", {
		scale: 1.5,
		duration: 3,
		ease: "bounce.out",
	});
};
