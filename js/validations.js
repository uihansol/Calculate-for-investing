/**
 * 🔍 입력 유효성 검사 모듈
 */

// 숫자 입력 검증
export const validateNumberInput = (value, min=0, max=100) => {
  return !isNaN(value) && value >= min && value <= max;
};

// 샤프 비율 특수 검증
export const validateSharpeInputs = (Rp, Rf, sigmaP) => {
  return sigmaP !== 0 && Rp > Rf;
};

// 캘리 공식 특수 검증
export const validateKellyInputs = (b, p, q) => {
  return b !== 0 && (p + q) === 1;
};