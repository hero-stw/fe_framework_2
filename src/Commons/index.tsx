export const random = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

// export const numLength = (min: number, max: number) => {
//     var e = random(min, max);
//     return generate(e);
// }

// export const generate = (n: number) => {
//     const add = 1;
//     let max = 9 - add;

//     if (n > max) {
//       return generate(max) + generate(n - max);
//     }

//     max = Math.pow(10, n + add);
//     const min = max / 10; // Math.pow(10, n) basically
//     const number = Math.floor(Math.random() * (max - min + 1)) + min;
//     return number;
// }

export const l100 = (n: number) => {
  if (n > 10000) return ">10000";
  else if (n == 10000) return 10000;
  else return n;
}

//làm tròn đến số nguyên, thập phân gần nhất gồm 2 số cuối thập phân
export const roundTo2 = (num: number) => {
  const factor = 10 ** 2;
  return Math.round(num * factor) / factor;
};
// thêm dấu cách đơn vị
export const numDot = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}