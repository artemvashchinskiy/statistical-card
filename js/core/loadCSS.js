export function loadCSS(path){

  // prevent duplicate element
  if (document.querySelector(`link[data-src="${path}"]`)) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';

  // 👇 THIS LINE FIXES YOUR ENTIRE PROBLEM
  link.href = path + `?v=${Date.now()}`;

  link.dataset.src = path;

  document.head.appendChild(link);
}
