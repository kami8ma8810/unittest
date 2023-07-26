export function add(a: number, b: number) {
  if (a < 0 || a > 100) {
    throw new Error("aの入力値は、0〜100の間で入力してください");
  }
  if ( b < 0 || b > 100) {
    throw new Error("bの入力値は0〜100の間で入力してください");
  }
  const sum = a + b;
  if (sum > 100) {
    return 100;
  }
  return sum;
}

export function sub(a: number, b: number) {
  const sum = a - b;
  if (sum < 0) {
    return 0;
  }
  return sum;
}
