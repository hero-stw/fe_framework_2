export const random = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const numLength = (min: number, max: number) => {
  const e = random(min, max);
  return generate(e);
};

export const generate = (n: number) => {
  const add = 1;
  let max = 9 - add;

  if (n > max) {
    return generate(max) + generate(n - max);
  }

  max = Math.pow(10, n + add);
  const min = max / 10; // Math.pow(10, n) basically
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

export const l100 = (n: number) => {
  if (n > 10000) return ">10000";
  else if (n == 10000) return 10000;
  else return n;
};

//làm tròn đến số nguyên, thập phân gần nhất gồm 2 số cuối thập phân
export const roundTo2 = (num: number) => {
  const factor = 10 ** 2;
  return Math.round(num * factor) / factor;
};
// thêm dấu cách đơn vị
export const numDot = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const pad0 = (value: any, count: any) => {
  var result = value.toString();
  for (; result.length < count; --count) result = "0" + result;
  return result;
};

export const msToHMS = (ms: any) => {
  let sec = ms / 100;
  sec = sec % 100;
  let mili = ms - Math.floor(sec) * 100;
  return Math.floor(sec) + "s " + Math.floor(mili);
};

export const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  e.target.value = value;
  return e;
};

export const removecommas = (e: string) => {
  return Number(e.replace(/,/g, ""));
};
export const avgOfArray = (arr: number[]) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = sum / arr.length || 0;
  return avg;
};

export const calculation = (a: number, b: number, ch: string) => {
  return a + " " + ch + " " + b + " = ?";
};

export const showCalculator = (a: any, b: any, calculation: any) => {
  return a + " " + calculation + " " + b + " = ?";
};
