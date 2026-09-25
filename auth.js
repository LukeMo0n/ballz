document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');

  if (!loginForm) return;

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      loginError.textContent = 'Please enter both username and password.';
      return;
    }

    if (password.length < 6) {
      loginError.textContent = 'Password must be at least 6 characters.';
      return;
    }

    localStorage.setItem('vaultboxAuth', 'true');
    localStorage.setItem('vaultboxUser', username);
    window.location.href = 'main.html';
  });
});
