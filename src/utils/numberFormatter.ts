export const numberWithCommas = (x: number) => {
  if (isNaN(x)) {
    return x;
  }
  return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
