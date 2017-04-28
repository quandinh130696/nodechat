var Botkit = require('botkit')

var controller = Botkit.slackbot({
  debug: true
})


controller.spawn({
    token: 'xoxb-167338476823-4Q7qmXqYYas1veavDK3AIqZp',
}).startRTM()

controller.hears(
  ['xin chào','chào Sam','chào bạn'],
  ['direct_message', 'direct_mention', 'mention','channel_join'],
  function(bot, message) {
       var name = message.match[1]
    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
          
            bot.reply(message, 'ờ chào ' + user.name + '!')
        } else {
            bot.reply(message, 'chào bạn !')
           
        }
    })
})
controller.hears(
  ['tên bạn là gì ?','bạn tên gì ?','bạn tên là gì ?',],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    bot.reply(message, 'mình là <@' + bot.identity.name +'>, còn bạn?')
})
controller.hears(
  ['sinh nhật ?','sinh ngày ?'],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    
            bot.reply(message, 'mình sinh ngày 10/04/2017')
        }
    )
controller.hears(
  ['Ai đã tạo ra bạn ?'],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    
            bot.reply(message, 'Mr.Quan Dinh Nguyen đã tạo ra mình')
        }
    )
    controller.hears(
  ['Bạn có thể gọi mình là (.*)',],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    var name = message.match[1]
    controller.storage.users.get(message.user, function(err, user) {
        if (!user) {
            user = {
                id: message.user,
            }
        }
        user.name = name
        controller.storage.users.save(user, function(err, id) {
            bot.reply(message, 'ờ, từ giờ mình sẽ gọi bạn là ' + user.name)
        })
    })
})
controller.hears(
  ['bạn biết mình là ai rồi chứ','mình là ai'],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, 'Rồi , bạn là ' + user.name + '')
        } else {
            bot.reply(message, 'mình chưa biết bạn là ai')
        }
    })
})
controller.hears(
  ['Sam ơi',],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    bot.reply(message, 'ơi ! có Sam')
})
controller.hears(
  ['Có bạn gái chưa',],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    bot.reply(message, 'xin số toàn failed lấy đâu ra mà có ?')
})
controller.hears(
  ['thể thao không ?','thể thao chứ ?'],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
   controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, 'Không ,' + user.name + ' ơi !')
        } else {
            bot.reply(message, 'mình không thích ! , mình chỉ thích xem phim thôi .')
        }
})
})
controller.hears(
  ['tụ tập bạn bè và rủ bạn ấy theo',],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    bot.reply(message, 'Điên ! Đời nào người ta đi ?')
})
controller.hears(
  ['thích bóng đá',],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    bot.reply(message, 'Bóng đá chơi có hay không ?')

})
controller.hears(
  ['hay',],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    bot.reply(message, 'chả biêt !')
})

controller.hears(
  ['thể loại','phim gì',],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    bot.reply(message, 'Kinh dị , hành động, tình cảm .... nói chung là thích tất hihi')
})

controller.hears(
  ['buồn bã','cảm thấy buồn',],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
   controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, 'Sao buồn hả ' + user.name + '? Cứ nói với tớ nè !')
        } else {
            bot.reply(message, 'buồn thì trò chuyện với mình cho vui nè !')
        }
})
})
controller.hears(
  ['hihi','haha'],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
    bot.reply(message, 'hì hì')
})
controller.hears(
  [''],
  ['direct_message', 'direct_mention', 'mention'],
  function(bot, message) {
  
            bot.reply(message, 'Mr.Quan Dinh Nguyen chưa dậy tôi câu này ')
        }
)



