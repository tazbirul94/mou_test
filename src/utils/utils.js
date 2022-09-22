export const redirectTo = (url) => {
  window.location.replace(url.includes('//') ? url : ['//', url].join(''));
};
