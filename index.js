const userInfo = require("./information.js")
const cowsay = require("cowsay")

console.log(cowsay.say({
    text : "I'm "+ userInfo.me.name + " and I come from  " + userInfo.me.campus,
    e : "XX",
    T : "V"
}))