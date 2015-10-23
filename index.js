var Pubsub = (function(){
  var topics = {}
  function subscribe(topic, observer){
    topics[topic] = topics[topic] || []
    var token = topics[topic].length
    unsubscribe(topic, observer)
    topics[topic].push({
      token: token,
      func: observer
    })
    return token
  }
  function unsubscribe(topic){
    var args = arguments[1]
    if(topics[topic]){
      topics[topic] = topics[topic].filter(function(item){
        if(item.func !== args && item.token !== args){
          return item
        }
      })
    }
  }
  function publish(topic){
    var args = [].slice.call(arguments, 1)
    if(topics[topic]){
      topics[topic].forEach(function(item, i){
        if(typeof item.func == 'function'){
          item.func.apply(null, args)
        }
      })
    }
  }
  return{
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    publish: publish
  }
})();

module.exports = Pubsub
