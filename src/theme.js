const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector(".js-switch-input");

checkbox.addEventListener('change', changeTheme);

let localTheme = localStorage.getItem('Theme');
if (localTheme !== null){
  document.body.classList.add(localTheme);

  if (localTheme === theme.DARK) {
    checkbox.checked = true;
  }
}

function changeTheme() {
  if (checkbox.checked) {
    document.body.classList.add(theme.DARK);
    localStorage.setItem('Theme', 'dark-theme');
  } else {
    document.body.classList.remove(theme.DARK);
    localStorage.setItem('Theme', 'light-theme');
  }
}