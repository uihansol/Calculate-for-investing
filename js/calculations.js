/**
 * 📐 투자 공식 계산 모듈
 */

// 샤프 비율 계산
export const calculateSharpe = (Rp, Rf, sigmaP) => {
  return ((Rp - Rf) / sigmaP).toFixed(2);
};

// 효용성 함수 계산
export const calculateUtility = (expectedReturn, lambda, variance) => {
  return (expectedReturn - 0.5 * lambda * variance).toFixed(2);
};

// 캘리 공식 계산
export const calculateKelly = (b, p, q) => {
  return ((b * p - q) / b).toFixed(2);
};

// 하프 캘리 계산
export const calculateHalfKelly = (kellyFraction) => {
  return (kellyFraction / 2).toFixed(2);
};