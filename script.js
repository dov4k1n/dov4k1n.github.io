const footer = document.createElement('footer');
fetch('html/footer.html')
  .then(response => response.text())
  .then(data => {
    footer.innerHTML = data;
    document.body.appendChild(footer);
  })
  .catch(error => {
    console.error('Error loading footer.html:', error);
  });
// document.body.appendChild(footer);