// eslint-disable-next-line
export const debounce = <T extends (...args: any[]) => void>(
  cb: T,
  delay: number
) => {
  let timer: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};
