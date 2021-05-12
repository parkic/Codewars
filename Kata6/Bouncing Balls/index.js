function bouncingBall(h,  bounce,  window) {
  let counter = 0;
  if(bounce <=0 || bounce >=1) { return -1 }
  while(h>window){
    h = h.toFixed(2)*bounce;
    counter++;
  }
  return counter*2 -1
}