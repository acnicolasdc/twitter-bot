let Twit = require('twit');

let bot = new Twit({
    consumer_key: 'ep7eJLNZpeOhkbQh1nxEz1iea',
    consumer_secret:'LXaUtkTxKBJNhK7duMEg5IcmtmU8yCTtsuiFkNgW6af5S2iTdY',
    access_token: '874157974700400640-7wfVoVU9Qxe9xe4ySOhhuKQl74h1sQI',
    access_token_secret: 'Bf8rgfYi3v9HKScjxXlyaHfPt5Z2orG2LweSwRTiS5UpV',
    timeout_ms: 60*1000
});


// bot.post('statuses/update', {
//     status:'Testing my bot from nodeJS service'
// }, function(err, data, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.text+ ' was tweeted')
//     }
// })

// bot.get('followers/list', {
//     screen_name:'bots_with_han'
// }, function(err, data, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

bot.post('friendships/create',{ screen_name: 'acnicolasdc'}, function(err, data, response){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

bot.get('followers/ids', {
    screen_name:'bots_with_han'
}, function(err, data, response){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})


bot.get('friendships/lookup', {
    screen_name:'acnicolasdc'
}, function(err, data, response){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})