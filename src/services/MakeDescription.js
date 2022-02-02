export const MakeDescription = () => {
  const elements = document.querySelectorAll('.film__description');
  elements.forEach((el) => {
    while (el.scrollHeight > el.clientHeight) {
      const lastSpace = el.textContent.lastIndexOf(' ');
      // eslint-disable-next-line no-param-reassign
      el.textContent = `${el.textContent.slice(0, lastSpace)}...`;
    }
  });
};
