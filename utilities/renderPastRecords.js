import { getAllStoredRecords } from "./storage.js";

const pastRecords = document.getElementById("records");

export function renderPastRecords() {
  const records = getAllStoredRecords();

  if (records.length === 0) {
    return;
  }

  pastRecords.textContent = "";

  const headerRecords = document.createElement("h2");
  headerRecords.textContent = "Past records";

  const pastRecordList = document.createElement("ul");

  records.forEach((r) => {
    const recoredElement = document.createElement("li");
    recoredElement.textContent = `Spent ${r.money}$ on ${
      r.activity
    } on ${formatDate(r.d)}`;
    pastRecordList.appendChild(recoredElement);
  });

  pastRecords.appendChild(headerRecords);
  pastRecords.appendChild(pastRecordList);
}

function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}
