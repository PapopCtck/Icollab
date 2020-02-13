export function formatDate(date) {
  if (date) {
    const newDate = new Date(date);
    return (
      `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear() + 543}`
    )
  }
  return '-';
}

export function timeSince(time) {
  if (time) {
    const total = Date.parse(new Date()) - Date.parse(time);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor((total / (1000 * 60 * 60 * 24)) % 30);
    const weeks = Math.floor((total / (1000 * 60 * 60 * 24 * 7)));
    if (weeks > 0) {
      return `${weeks} สัปดาห์ที่แล้ว`;
    }
    else if (days > 0) {
      return `${days} วันที่แล้ว`;
    }
    else if (hours > 0) {
      return `${hours} ชั่วโมงที่แล้ว`;
    }
    else if (minutes > 0) {
      return `${minutes} นาทีที่แล้ว`;
    }
    return `${seconds} วินาทีที่แล้ว`;
  }
  return '-';
}
