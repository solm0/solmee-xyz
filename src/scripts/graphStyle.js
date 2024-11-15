const calcResponsiveFontSize = () => {
  const min = 0.6251 * 16;
  const preferred = 0.6336 * 16 + 0.0435 * window.innerWidth;
  const max = 0.6 * 16;
  const clamp = (min, val, max) => Math.max(min, Math.min(val, max));
  return clamp(min, preferred, max);
};

const getGraphStyle = () => {
  const root = document.documentElement;
  const isDark = root.classList.contains('dark');

  if (isDark) {
    return {
      fontSize: calcResponsiveFontSize(),
      backgroundColor: '#1d1f21',
      grayColor1: '#3c3e3b',
      grayColor2: '#52524e',
      grayColor3: '#7e7e76',
      grayColor4: '#a4a4a4',
      textColor: '#c9d3c9',
    };
  } else {
    return {
      fontSize: calcResponsiveFontSize(),
      backgroundColor: '#f8fbf8',
      grayColor1: '#e4e9e1',
      grayColor2: '#d7d7cd',
      grayColor3: '#aaaaa0',
      grayColor4: '#686868',
      textColor: '#212121',
    };
  }
};

export let GRAPHSTYLE = getGraphStyle();

const handleThemeChange = () => {
  GRAPHSTYLE = getGraphStyle();
};

const observer = new MutationObserver(() => {
  handleThemeChange();
});

observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });