document.addEventListener('DOMContentLoaded', function (event) {
    const minified = (toggleBtn, appId) => {
      const btn = document.getElementById(toggleBtn),
        app = document.getElementById(appId);
  
      // Validate that all variables exist
      if (btn && app) {
        btn.addEventListener('click', () => {
          btn.classList.toggle('bx-arrow-from-left');
          btn.classList.toggle('bx-arrow-from-right');
          app.classList.toggle('minify');
        });
      }
    };
    minified('header-toggle', 'app');
  
    /*===== LINK ACTIVE =====*/
    const itemActive = document.querySelectorAll('.nav_item > a');
  
    function activeItem() {
      if (itemActive) {
        itemActive.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
      }
    }
    itemActive.forEach((l) => l.addEventListener('click', activeItem));
  });
  