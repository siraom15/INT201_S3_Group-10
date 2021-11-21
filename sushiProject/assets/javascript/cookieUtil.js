let CookieUtil = {
  get: function (name) {
    let cookieStr = document.cookie;
    let value = null;
    cookieStr.split(';').forEach((e) => {
      let [key, val] = e.trim().split('=');
      if (key === name) {
        value = val;
      }
    });
    return value;
  },
  set: function (name, value, expires) {
    let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (expires instanceof Date) {
      cookieStr += `; expires=${expires.toUTCString()}`;
    }
    document.cookie = cookieStr;
  },
  unset: function (name) {
    this.set(name, '', new Date(0));
  },
};

export default CookieUtil;
