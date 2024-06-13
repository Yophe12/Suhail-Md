const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_50_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MixcbiAgICAgICAgMTgyLFxuICAgICAgICAzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkxLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgyLFxuICAgICAgICA1NixcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4LFxuICAgICAgICA2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInhnOUNKK2VDOWszZklVaHJrRjVjNFh6b05ZL1FxMVNhcGNNampwTi9rVDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlXLVRxdDNmVHBXT2tlcFk5XzVIUlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzA4ZTdkMjctYjRhNS00ZWQyLWFiNzMtNDkzZmViZmViNTM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDE1OCxcbiAgICAgIDI1MyxcbiAgICAgIDIzNyxcbiAgICAgIDI0NCxcbiAgICAgIDE0NSxcbiAgICAgIDU0LFxuICAgICAgMTg0LFxuICAgICAgNzEsXG4gICAgICAyMCxcbiAgICAgIDM4LFxuICAgICAgMTcyLFxuICAgICAgNjAsXG4gICAgICAyMzAsXG4gICAgICAyNDksXG4gICAgICAxNjAsXG4gICAgICA4MixcbiAgICAgIDQwLFxuICAgICAgOCxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDEyNCxcbiAgICAgIDE1MixcbiAgICAgIDE4NixcbiAgICAgIDI0OCxcbiAgICAgIDEzOSxcbiAgICAgIDM0LFxuICAgICAgNTIsXG4gICAgICAxNzQsXG4gICAgICAyMzgsXG4gICAgICA0MyxcbiAgICAgIDYyLFxuICAgICAgMTI3LFxuICAgICAgMTcsXG4gICAgICAyNTEsXG4gICAgICAyMDcsXG4gICAgICAxNzcsXG4gICAgICAxOTQsXG4gICAgICAxOTEsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZRzlSWFc0Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYwOTcxODE2OTU2OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS2luZyBNYWtvXCIsXG4gICAgXCJsaWRcIjogXCIyMTM1NjMyNzI2MDk5NzI6NjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU9wbHNrRUVQUGlyTE1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5d3RnQXloRXY3bEVkQUFKbDFBTmRPNks0M3lTTzN6UDNEZ0pjS1NPaW13PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk8wSmp1Yjc5TjJuVVhXakZGWFloVnAyY29iQ2ZtR2FhU0dlVFhoRUpYd0JhR1JCc2dob0ZRN3AwRjMxK3IvQm81TW9UazBsMGVBRXZsczgxaW4yNkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNRdFRmT1BBa0FpRWVCaktmMkpDVEMrcGwxaThCcnJ5MG0xd2RsUGpsUTlJc1paQzdYN2FnMXhtSElKNzc1YXVSdUF0VmZibUJwQklOd1kzbFlKeWdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MDk3MTgxNjk1Njo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgzMDEwNDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMdVRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx1VC5qc29uIjogIntcImtleURhdGFcIjpcImlpbTJPUnlQckxrdXhIZ1pnK29mdlR6aWVuZzROSTZhbW5XS0JzUlZNaE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyNzE5OTYxOCxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDksMTBdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "KING👑MAKO",
  ownername:process.env.OWNER_NAME|| "KINGMAKO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
