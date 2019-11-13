export function getCookie(name) {
  const cookie = `; ${document.cookie}`;
  let parts = cookie.split(`; ${name}=`);
  if(parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}

export function deleteCookie(name) {
  const dt = new Date();
  dt.setDate(dt.getDate() - 1);
  document.cookie = `${name}= ; expires=${dt.toUTCString()}; path=/`;
}

export function createCookie(name , value , hr) {
  const dt = new Date();
  if(hr) {
    dt.setTime(dt.getTime() + (3600000 * hr));
  } else {
    dt.setTime(dt.getTime() + 3600000);
  }
  document.cookie = `${name}=${value}; expires=${dt.toUTCString()}; path=/`;
}
