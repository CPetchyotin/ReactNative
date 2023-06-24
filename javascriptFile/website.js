const  SITE_NAME = "Informatino Technology"
const BASE_URL = "http://it.tni.ac.th"
const COLOR_THEME = "Blue"
const ALLOW_SIGN_UP = true;

console.log("Welcome to  "+SITE_NAME)
let languages = ["JavaScript ","Python","Ruby","Java","PHP"]
for(let i in languages){
    let url = BASE_URL + "lang/" + languages[i].toLowerCase()
    console.log(`- ${languages[i]} programming (${url})`)
}

console.log("Footer")

let footer =["About","Privacy"]
for (let i in footer){
    let url  = BASE_URL + ' ' +footer[i].toLowerCase()
    console.log(`-${footer[i]} (${url})`)

}
if(ALLOW_SIGN_UP){
    console.log("[Sign up for new settle]")
}

console.log(`© ${new Date().getFullYear()} ${SITE_NAME}`)