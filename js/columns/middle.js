export default function initMiddleColumn(root){
    const posts = root.querySelectorAll('.post');


    posts.forEach(post => {
        post.addEventListener('click', () => {
        post.style.outline = '2px solid var(--accent)';
        });
    });
}
 
const burger = document.getElementById("navBurger");
const panel = document.querySelector(".nav-debug-panel");

burger.addEventListener("click", () => {
  panel.classList.toggle("nav-debug-panel--open");
});

document.addEventListener("click", (e) => {
  if (!panel.contains(e.target) && !burger.contains(e.target)) {
    panel.classList.remove("nav-debug-panel--open");
  }
});