export function query (name) {
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
  let oUrl = url.toString();
  let index = oUrl.indexOf(`?${paramName}`)
  let re = eval('/(&' + paramName + '=)([^&]*)/gi');

  if (!replaceVal) {
    if (index > -1) {
      if (getQueryName().length > 1) {
        clearQuery()
        window.location.reload()
        return
      }
      clearQuery()
      return
    }
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
  let url = window.location.href;
  if (url.indexOf("?") != -1) {
    url = url.replace(/(\?|#)[^'"]*/, '');
    window.history.replaceState({}, 0, url);
  }
}