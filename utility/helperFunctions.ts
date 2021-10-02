export const leftPaddingZeros = (num) => {
  return ("000" + (parseInt(num, 10) + 1)).slice(-4);
};
