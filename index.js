export function query (name) {
  if (process.server) {
    return
  }
  let query = window.location.search.substring(1);
  let oUrl = window.location.href.toString();
  let vars = []
  if (oUrl.indexOf("?") == -1) {
    vars = query.split("?");
  } else {
    vars = query.split("&");
  }
  for (let i = 0;i < vars.length;i++) {
    if (vars[i].split("=")[0] == name) {
      return vars[i].split("=")[1];
    }
  }
  return "";
}

export function setQuery (url, paramName, replaceVal) {
  if (process.server) {
    return
  }
  let oUrl = url.toString();
  let index = oUrl.indexOf(`?${paramName}`)
  let re = eval('/(&' + paramName + '=)([^&]*)/gi');

  if (!replaceVal) {
    let url1 = oUrl.replace(re, '');
    window.history.replaceState('', '', url1)
    return
  }
  if (!window.location.search) {
    window.history.replaceState('', '', `${url}?${paramName}=${replaceVal}`)
    return
  }
  if (window.location.search && !query(paramName)) {
    // query值不存在
    window.history.replaceState('', '', `${url}&${paramName}=${replaceVal}`)
    return
  }
  let nUrl = ""
  if (index > -1) {
    nUrl = oUrl.replace(`?${paramName}=${query(paramName)}`, `?${paramName}=${replaceVal}`)
  } else {
    nUrl = oUrl.replace(re, `&${paramName}=${replaceVal}`)
  }
  window.history.replaceState('', '', nUrl)
}

export function getQueryName () {
  if (process.server) {
    return
  }
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  let arr = []
  for (let i = 0;i < vars.length;i++) {
    let pair = vars[i].split("=");
    arr.push(pair[0])
  }
  return arr;
}

export function clearQuery () {
  if (process.server) {
    return
  }
  let url = window.location.href;
  if (url.indexOf("?") != -1) {
    url = url.replace(/(\?|#)[^'"]*/, '');
    window.history.replaceState({}, 0, url);
  }
}