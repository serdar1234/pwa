export function checkDatesInvalid(start, end) {
  if (!start || !end || start > end) {
    this.reset();
    console.log("reset happened");
    return true;
  }

  return false;
}
