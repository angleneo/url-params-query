## This is a url params too toolkit.
You can run  `npm i url-params-query` to set up . All operations are not logged to history.

## function query
import { query } from 'url-params-query';

If url is `https://xxx/xxx?time=2020&name=abc&age=20` ,then you can use `query("time")` or `query("name")` to get time value and name value.


## function setQuery
import { setQuery } from 'url-params-query';

you can use like this to add params query:

`setQuery(url, "time", "2020-07-07")`
 
You can see that the URL becomes `https://xxx/xxx?time=2020-07-07`, if params has alread exists, it can replace value.


## function getQueryName
import { getQueryName } from 'url-params-query';

you can use like this to add params query:

`getQueryName()`

If your url is `https://xxx/xxx?time=2020&name=abc&age=20`, it can return an array, `["time", "name", "age"]`


## function clearQuery
import { clearQuery } from 'url-params-query';

you can use like this to add params query:

`clearQuery()`

If your url is `https://xxx/xxx?time=2020&name=abc&age=20`, after you use this function , it can clear all params, url becomes `https://xxx/xxx`.

If you think the tool is good, please go to https://github.com/angleneo/url-params-query and give me a star ^_^