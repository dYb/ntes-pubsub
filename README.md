### Pubsub

简单实现的一个发布订阅。


#### Usage

```
// a.js
var Pubsub = require('ntes-pubsub')
var token = Pubsub.subscribe('event', function(sth){
  console.log(sth)
})
...
// At some time
Pubsub.unsubscribe('event', token)

```


```
// b.js
var Pubsub = require('ntes-pubsub')
Pubsub.publish('event', 'sth')
```