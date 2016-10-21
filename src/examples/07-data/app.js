
var redis = require('redis');
var client = redis.createClient();

client.set("message", "Hello");

client.get("message", function(err, reply){
 console.log(reply);
});
