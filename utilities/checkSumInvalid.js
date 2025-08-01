export function checkSumInvalid(s) {
  if (Number(s) < 1) {
    alert("Please enter a valid amount of money");
    return true;
  }
  return false;
}
