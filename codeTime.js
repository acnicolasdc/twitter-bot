let Twit = require('twit');
const Emitter = require('./emitter');
const { SAVED } = require('./emitter-names');

const { EventEmitter } = require('events');

let bot = new Twit({
    consumer_key: 'SZxVCpCCUJemJoEtN6T4u1oOh',
    consumer_secret:'inRNUxqmZTBNLe7z8NoZA0MgpEFo1bJHxdr1yobB1yyh3cCGj4',
    access_token: '874157974700400640-9mAjSmuZK0Mc4x6lruQ2DzGKPF6nE5O',
    access_token_secret: 'tjR2oNYvh0AAPHbPevfLdOTIUJzBhbW79VtMtGvextKnX',
    timeout_ms: 60*1000
});

const emitter = new EventEmitter();

emitter.on(SAVED, ()=>{
    console.log('Hello one')
})
emitter.on(SAVED, ()=>{
    console.log('Hello second')
})

emitter.emit(SAVED)
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

// bot.post('friendships/create',{ screen_name: 'acnicolasdc'}, function(err, data, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// bot.get('followers/ids', {
//     screen_name:'bots_with_han'
// }, function(err, data, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// bot.get('friendships/lookup', {
//     screen_name:'acnicolasdc'
// }, function(err, data, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// bot.post('direct_messages/events/new', {
//     event: {
//         type: "message_create",
//         message_create: {
//           target: {
//             recipient_id: "936455176952713216"
//           },
//           message_data: {
//             text: "he generado este mensaje desde un bot",
//           }
//         }
//       }
// }, function(err, data, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("The message wa send")
//         console.log(data)
//     }
// });

// function getBotTimeline(){
//     bot.get('statuses/home_timeline', { count: 5 }, function(err, data, response){
//             if(err){
//                 console.log(err)
//             }else{
//             data.forEach((d)=>{
//                     console.log(d)
//                     console.log(d.user.screen_name)
//                     console.log(d.id)
//                     console.log('\n')
//             })
//             }
//     })
// }

// getBotTimeline()

// bot.post('statuses/retweet/:id', { id:'1314029435562209280'}, function(err, data, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(`${data.text} was retweeted`);
//     }
// })

// bot.post('statuses/unretweet/:id', {id:'1314025401174421500'}, function(err, data, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(`${data.text} was unretweeted`);
//     }
// })

// bot.post('statuses/destroy/:id', {id:'1314025401174421500'}, function(err, data, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(`${data.text} was deleted`);
//     }
// })

// bot.post('favorites/create', {id:'1314029435562209280'}, function(err, data, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(`${data.text} was liked`);
//     }
// })

// bot.post('favorites/destroy', {id:'1314029435562209280'}, function(err, data, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(`${data.text} was unlike`);
//     }
// })

// bot.post('statuses/update', {status:'YAY!', in_reply_to_status_id: '1314029435562209280'}, function(err, data, response){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(`${data.text} was created`);
//     }
// })