const STORAGE_KEY = "budget-tracker";

export function storeNewRecord(d, money, activity) {
  const records = getAllStoredRecords();

  records.push({ d, money, activity });

  records.sort((a, b) => new Date(b.d) - new Date(a.d));

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  // console.log(window.localStorage.getItem(STORAGE_KEY));
}

export function getAllStoredRecords() {
  const data = window.localStorage.getItem(STORAGE_KEY);

  const records = data ? JSON.parse(data) : [];

  return records;
}
