export const getInitialMode = () => {
  const existProp = "dark" in localStorage;
  const savedMode = JSON.parse(localStorage.getItem("dark"));
  const userPrefersDark = getPrefColorScheme();
  // if mode was saved --> dark / light
  if (existProp) {
    return savedMode;
    // if preferred color scheme is dark --> dark
  } else if (userPrefersDark) {
    return true;
    // otherwise --> light
  } else {
    return false;
  }
  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
};
export const getInitialBorder = () => {
  const existProp = "rounded" in localStorage;
  const savedMode = JSON.parse(localStorage.getItem("rounded"));
  if (existProp) {
    return savedMode;
  } else {
    return false;
  }
};
