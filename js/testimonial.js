const testimonialData = [
  {
    author: "Mang Oleeh",
    quote: "Mantap!!!! berkat blog ini odading mang oleh semakin laris!",
    image:
      "images/fotomeme1.jpg",
    rating: 5,
  },
  {
    author: "Fajar Sadboy",
    quote: "HMMM,,, berkat blog ini bab saya lancar sekali!!",
    image:
      "images/fotomeme2.jpg",
    rating: 4,
  },
  {
    author: "Malika",
    quote: "Pokonya ini website terkeren yang ada didunia!!!!",
    image:
      "images/fotomeme3.jpg",
    rating: 3,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `
    <div class="testimonial">
      <img src="${item.image}" class="profile-testimonial" />
      <p class="quote">${item.quote}</p>
      <p class="author">- ${item.author}</p>
      <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
    </div>
    `;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML = `<h1>Data not found!</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `
      <div class="testimonial">
        <img src="${item.image}" class="profile-testimonial" />
        <p class="quote">${item.quote}</p>
        <p class="author">- ${item.author}</p>
        <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
      </div>
      `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}