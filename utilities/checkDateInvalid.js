export function checkDateInvalid(d) {
  if (!d || Date.now() < new Date(d)) {
    this.reset();
    alert("Please enter a valid date");
    return true;
  }

  return false;
}
