export default function formatDate(date) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ];
  if (typeof date === "string") {
    let arr = date.split("/");
    let result = `${arr[0]} ${months[arr[1] - 1]}`;
    return result;
  } else {
    let displayDate = `${date.getDate()} ${
      months[date.getMonth()]
    }, ${date.getFullYear()}`;
    if (date) return displayDate;
  }
}
