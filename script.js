const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".filters button");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const closeBtn = document.querySelector(".close");

/* FILTER */
buttons.forEach(btn=>{
  btn.onclick = ()=>{
    buttons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    const f = btn.dataset.filter;

    cards.forEach(c=>{
      c.style.display = (f==="all" || c.dataset.category===f) ? "block":"none";
    });
  };
});

/* LIGHTBOX */
cards.forEach(card=>{
  card.onclick = ()=>{
    lightbox.style.display="flex";
    lightboxImg.src = card.querySelector("img").src;
  };
});

closeBtn.onclick = ()=> lightbox.style.display="none";
lightbox.onclick = e=>{
  if(e.target===lightbox) lightbox.style.display="none";
};

/* SCROLL REVEAL */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
});

cards.forEach(c=>observer.observe(c));