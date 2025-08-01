import {
  checkDateInvalid,
  checkSumInvalid,
  storeNewRecord,
  renderPastRecords,
} from "./utilities/index.js";

const newRecordForm = document.getElementById("form-id");
const newDate = document.getElementById("date");
const money = document.getElementById("money");
const activity = document.getElementById("activity");

renderPastRecords();

newRecordForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const dateValue = newDate.value;
  const moneySum = money.value;
  const activityValue = activity.value;

  if (checkDateInvalid.call(this, dateValue)) {
    return;
  }

  if (checkSumInvalid.call(this, moneySum)) {
    return;
  }

  storeNewRecord(dateValue, moneySum, activityValue);

  renderPastRecords();

  newRecordForm.reset();
});
