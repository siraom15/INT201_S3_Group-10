class CookieUtil {
  static get(name) {
    let cookieName = `${encodeURIComponent(name)}=`,
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null;
    if (cookieStart > -1) {
      let cookieEnd = document.cookie.indexOf(';', cookieStart);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
      );
    }

    return cookieValue;
  }

  static set(name, value, expires) {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (expires instanceof Date) {
      cookieText += `; expires=${expires.toUTCString()}`;
    }

    document.cookie = cookieText;
  }

  static unset(name) {
    CookieUtil.set(name, '', new Date(0));
  }
}
export default CookieUtil;
