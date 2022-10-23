document
  .querySelectorAll(".animate")
  .forEach((item, index) =>
    setTimeout(() => item.classList.add("active"), index * 1000)
  );
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const reveals_more = document.querySelectorAll(".reveal_more");
  for (let i = 0; i < reveals_more.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals_more[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals_more[i].classList.add("active");
    } else {
      reveals_more[i].classList.remove("active");
    }
  }
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal, { capture: true });

const submit = document.getElementById("submit");

submit.addEventListener("click", async (e) => {
  e.preventDefault();
});
