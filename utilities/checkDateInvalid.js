export function checkDateInvalid(d) {
  if (!d || Date.now() < d) {
    this.reset();
    console.log("reset happened");
    return true;
  }

  return false;
}
