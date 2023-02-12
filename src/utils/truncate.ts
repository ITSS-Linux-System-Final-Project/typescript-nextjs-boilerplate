type Truncate = (text: string, num: number) => string;
export const truncate: Truncate = (text: string, numer: number) => {
  if (text?.length > numer) {
    return `${text.slice(0, numer)}...`;
  }
  return text;
};
export const truncateReverse: Truncate = (text: string, numer: number) => {
  if (text.length > numer) {
    return text.slice(text.length - 1 - numer, text.length - 1);
  }
  return text;
};
