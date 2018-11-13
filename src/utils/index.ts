export function debounce (fn: (...param: any) => void, wait: number, immediate: boolean): (arg?:any) => void {
  let timer: any = null;
  const later = (...arg: any) => setTimeout(() => {
    timer = null;
    if(!immediate){
      fn(...arg);
    }
  }, wait);

  return (...arg) => {
    // if(timer) {clearTimeout(timer);}
    if(!timer) { // 第一次执行 且 immediate设置为true
      timer = later();
      if(immediate) {
        fn(...arg);
      }
    }else {
      clearTimeout(timer);
      timer = later(...arg);
    }
  }
}

export function throttle(fn: (param?: any) => void, time: number): () => void {
  let preTime: number = 0;
  return () => {
    const now = + new Date();
    if((now - preTime) >= time) {
      fn();
      preTime = now;
    }
  }
}
