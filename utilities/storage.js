// Add the storage key as an app-wide constant
const STORAGE_KEY = "period-tracker";

export function storeNewPeriod(start, end) {
  // Get data from storage.
  const periods = getAllStoredPeriods();

  // Add the new period object to the end of the array of period objects.
  periods.push({ start, end });

  // Sort the array so that periods are ordered by start date, from newest
  // to oldest.
  periods.sort((a, b) => new Date(b.start) - new Date(a.start));

  // Store the updated array back in the storage.
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
  // console.log(window.localStorage.getItem(STORAGE_KEY));
}

export function getAllStoredPeriods() {
  // Get the string of period data from localStorage
  const data = window.localStorage.getItem(STORAGE_KEY);

  // If no periods were stored, default to an empty array
  // otherwise, return the stored data as parsed JSON
  const periods = data ? JSON.parse(data) : [];

  return periods;
}
