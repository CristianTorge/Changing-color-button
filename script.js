let colors = ['red', 'yellow', 'green'];
  let indexColor = 0;
  const button = document.getElementById('button');
  window.onload = function() {
    setInterval(changeColor, 10000);
    button.addEventListener('click', changeColor);
  };
  function changeColor() {
    indexColor = (indexColor + 1) % colors.length;
    button.style.backgroundColor = colors[indexColor];
  }
