## This is a url params too toolkit.
You can run  `npm i url-params-query` to set up . All operations are not logged to history.

## function query
import { query } from 'url-params-query';

If url is `https://xxx/xxx?time=2020&name=abc&age=20` ,then you can use `query("time")` or `query("name")` to get time value and name value.

for example:
let time = query("time")
console.log(time) // "2020"

## function setQuery
import { setQuery } from 'url-params-query';

you can use like this to add params query:
`setQuery(url, "time", "2020-07-07")`
 
You can see that the URL becomes `https://xxx/xxx?time=2020-07-07`, if params has alread exists, it can replace value.

for example:
`setQuery('localhost:3000', "time", "2020-09-09") // localhost:3000?time=2020-09-09`
`setQuery('localhost:3000', "time", "2020-10-01")`
`console.log(location.href) // http://localhost:3000?time=2020-10-01`

## function getQueryName
import { getQueryName } from 'url-params-query';

you can use like this to add params query:
`getQueryName()`

If your url is `https://xxx/xxx?time=2020&name=abc&age=20`, it can return an array, `["time", "name", "age"]`

for example:
`let arr = getQueryName();`
`console.log(arr) // ["time", "name", "age"]`

## function clearQuery
import { clearQuery } from 'url-params-query';

you can use like this to delete params query:

`clearQuery()`

If your url is `https://xxx/xxx?time=2020&name=abc&age=20`, after you use this function , it can clear all params, url becomes `https://xxx/xxx`.

for example:
`clearQuery();`
`console.log(location.href) // localhost:3000`

If you think the tool is good, please go to https://github.com/angleneo/url-params-query and give me a star ^_^

## ——————————————————————————————————————————————————  以下是中文翻译.(for Chinese translation)  ——————————————————————————————————————————————————

这是一个url参数工具箱，你可以用来操作url中的参数而且不会记录在history中,通常会应用在筛选功能中,改变url但是页面不做跳转,可以很方便的回退和分享url出去。

## function query
import { query } from 'url-params-query';

如果url是: `https://xxx/xxx?time=2020&name=abc&age=20`, 你可以使用 `query("time")` 或者 `query("name")` 来获取他们后面的值。

for example:
`let time = query("time")`
`console.log(time) // "2020"`

## function setQuery
import { setQuery } from 'url-params-query';

你可以使用`setQuery`方法来向url添加值,如下:
`setQuery(url, "time", "2020-07-07")`
 
你可以看到url变为`https://xxx/xxx?time=2020-07-07`, 如果参数的值再次赋值, 它可以替换当前的值。

for example:
`setQuery('localhost:3000', "time", "2020-09-09") // localhost:3000?time=2020-09-09`
`setQuery('localhost:3000', "time", "2020-10-01")`
`console.log(location.href) // http://localhost:3000?time=2020-10-01`

## function getQueryName
import { getQueryName } from 'url-params-query';

你可以这样使用来获取当前所有参数列表
`getQueryName()`

它会返回一个数组, 里面包含当前的参数,`["time", "name", "age"]`

for example:
`let arr = getQueryName();`
`console.log(arr) // ["time", "name", "age"]`

## function clearQuery
import { clearQuery } from 'url-params-query';

你可以这样使用来清除所有参数和值

`clearQuery()`

使用了这个方法后,会删除掉url后面的所有参数,url会变为 `https://xxx/xxx`。

for example:
`clearQuery();`
`console.log(location.href) // localhost:3000`

如果你觉得这个工具还不错能帮得上你, 可以去 https://github.com/angleneo/url-params-query 给我一颗星好咩^-^