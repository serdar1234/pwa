export function checkDateInvalid(d) {
  if (!d || Date.now() < new Date(d)) {
    this.reset();
    console.log("reset happened");
    return true;
  }

  return false;
}
