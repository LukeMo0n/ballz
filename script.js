document.addEventListener('DOMContentLoaded', () => {
  const launchButton = document.getElementById('launchStorage');

  if (!launchButton) return;

  const tunnelUrl = 'http://files.storageforqx.space/';
  launchButton.setAttribute('href', tunnelUrl);
  launchButton.setAttribute('aria-label', `Open Filestash storage at ${tunnelUrl}`);
});
