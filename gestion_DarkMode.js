function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// Fonction pour changer de theme en direct
function toggleTheme() {
  let activeTheme = localStorage.getItem('theme');
  setTheme(activeTheme === 'dark' ? 'light' : 'dark');
}

// IIFE qui détecte les valeurs au chargement
(function () { 
  if (localStorage.getItem('theme') === 'dark' ||
      window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
})();

// Gestion des clics sur le themeSwitcher
const themeSwitcher = document.querySelector('#switcher');

themeSwitcher.addEventListener('click', toggleTheme);