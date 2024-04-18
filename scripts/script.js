// Full Screen Toggle
function toggleFullScreen() {
  const app = document.getElementById("app");
  if (!document.fullscreenElement) {
    app.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Full Screen icon Toggle
function toggleFullScreenIcon() {
  const icon = document.getElementById("fullscreen-icon");
  icon.classList.toggle("fa-expand");
  icon.classList.toggle("fa-compress");
}

document.addEventListener('fullscreenchange', toggleFullScreenIcon);
document.addEventListener('webkitfullscreenchange', toggleFullScreenIcon);
document.addEventListener('mozfullscreenchange', toggleFullScreenIcon);
document.addEventListener('MSFullscreenChange', toggleFullScreenIcon);

function toggleDarkMode() { 
  const app = document.getElementById('app');
  const dataTheme = app.getAttribute('data-theme');

  if(dataTheme === 'dark') {
    app.setAttribute('data-theme', 'light');
  } else {
    app.setAttribute('data-theme', 'dark');
  } 
}