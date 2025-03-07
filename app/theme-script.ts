// This script runs before the app loads to prevent theme flashing
export const themeScript = `
  let isDark = false;
  try {
    isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  } catch (e) {}
  
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Add smooth transitions after initial load
  document.documentElement.style.setProperty('transition', 'background-color 0.3s ease-in-out, color 0.3s ease-in-out')
`;
