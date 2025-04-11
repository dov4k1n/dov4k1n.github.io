const navigation_drawer = document.createElement('div');
fetch('navigation_drawer.html')
  .then(response => response.text())
  .then(data => {
    navigation_drawer.innerHTML = data;
    document.body.appendChild(navigation_drawer);

    // Active state handling:

    const currentURL = window.location.pathname;
    const menuItems = navigation_drawer.querySelectorAll('.navigation-drawer-list-item a');

    menuItems.forEach(item => {
      const itemURL = new URL(item.href).pathname;
      if (itemURL === currentURL) {
        item.classList.add('active');
      }
    });
  })
  .catch(error => {
    console.error('Error loading navigation_drawer.html:', error);
  });