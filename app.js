import {
  checkDatesInvalid,
  storeNewPeriod,
  renderPastPeriods,
} from "./utilities/index.js";

// create constants for the form and the form controls
const newPeriodFormEl = document.getElementById("form-id");
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");

// Start the app by rendering the past periods.
renderPastPeriods();

// Listen to form submissions.
newPeriodFormEl.addEventListener("submit", function (event) {
  // Prevent the form from submitting to the server
  // since everything is client-side.
  event.preventDefault();

  // Get the start and end dates from the form.
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;

  // Check if the dates are invalid
  if (checkDatesInvalid.call(this, startDate, endDate)) {
    return;
  }

  // Store the new period in our client-side storage.
  storeNewPeriod(startDate, endDate);

  // Refresh the UI.
  renderPastPeriods();

  // Reset the form.
  newPeriodFormEl.reset();
});
