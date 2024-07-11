export default function getCurrentDateTime(data) {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; //returns YYYY-MM-DD HH:MM:SS
}

export function formatDate(isoDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(isoDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  //return `${months[monthIndex]} ${day} ${year}`;
  return {
    datestamp: `${months[monthIndex]} ${day} ${year}`, // i.e "Jul 11 2024"
    timestamp: `${months[monthIndex]} ${day} ${year} ${hour}:${min}:${sec}`, // i.e "Jul 11 2024 14:35:9"
  };
}
