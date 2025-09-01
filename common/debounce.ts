


const debounce = <T extends any[]>(fn: (...args: T) => void, t: number) => {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return function (...args: T) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn(...args), t);
  };
};


const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
