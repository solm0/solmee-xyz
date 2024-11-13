const calcResponsiveFontSize = () => {
  const min = 0.6251 * 16;
  const preferred = 0.6336 * 16 + 0.0435 * window.innerWidth;
  const max = 0.6 * 16;
  const clamp = (min, val, max) => Math.max(min, Math.min(val, max));
  return clamp(min, preferred, max);
};

export const GRAPHSTYLE = {
  fontSize: calcResponsiveFontSize(),
  backgroundColor: '#f8fbf8',
  grayColor1: '#e4e9e1',
  grayColor2: '#d7d7cd',
  grayColor3: '#aaaaa0',
  grayColor4: '#686868',
  textColor: '#212121',
};