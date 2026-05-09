// Mouse-following decorative circle
const mouseCircle = document.getElementById('mouseCircle');

document.addEventListener('mousemove', (e) => {
  mouseCircle.style.left = e.clientX + 'px';
  mouseCircle.style.top  = e.clientY + 'px';
});
