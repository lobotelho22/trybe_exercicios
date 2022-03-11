// ? Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const num = -13;

function positiveNegativeOrZero() {
  if (num > 0) {
    return "Positivo";
  } else if (num < 0) {
    return "Negativo";
  } else if (num == 0) {
    return "Zero";
  } else {
    return "Quiéquetá-avenu?";
  }
}

console.log(positiveNegativeOrZero());
