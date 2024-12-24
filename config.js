const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_48_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDczLFxuICAgICAgICAxNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDUsXG4gICAgICAgIDU3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU2LFxuICAgICAgICA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NCxcbiAgICAgICAgODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhXWStNK2w1K1FGS2ZxNm1GbGtoY21JMHBNS2hLR29ESEJ1bXFTUkFEd1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlYxcUkwN1dDUm9xQW51V3c2YTFVeVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzg0OWFjYmUtNzg2NS00NDIwLWJkNGMtY2FjYmYxMWY0YmI4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDE5NyxcbiAgICAgIDEzMCxcbiAgICAgIDk4LFxuICAgICAgMTg3LFxuICAgICAgNjUsXG4gICAgICAyMDgsXG4gICAgICAyNDIsXG4gICAgICAxMjEsXG4gICAgICA2OSxcbiAgICAgIDk3LFxuICAgICAgMjMsXG4gICAgICA3MSxcbiAgICAgIDIxNSxcbiAgICAgIDcyLFxuICAgICAgMTc4LFxuICAgICAgMTcxLFxuICAgICAgMjEsXG4gICAgICA4MCxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDEyNixcbiAgICAgIDE3OCxcbiAgICAgIDE0NSxcbiAgICAgIDkyLFxuICAgICAgNDEsXG4gICAgICAxMjAsXG4gICAgICAxMjEsXG4gICAgICAxNDUsXG4gICAgICAyMDksXG4gICAgICAxMjIsXG4gICAgICAxNzUsXG4gICAgICAyMSxcbiAgICAgIDExMCxcbiAgICAgIDk5LFxuICAgICAgMjU0LFxuICAgICAgMjU0LFxuICAgICAgMTM4LFxuICAgICAgOTcsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5SEhMMzY3MlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5Mzg4MzA2Mjc6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE4MjAyMTEzNzQ0OTA1OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW1Nd2FFR0VKMlRxN3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPTFBCS014MlFYK09NZDBaK05EWGtyVVgrWis3bnBUdW5FTEwvK1lkRDBvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9TZ3A5V1czOWs2djJrcTE3MnNFeFU3ZGlSai96M1JnU0U1L2xBZzdSdllSeDdHNEVPYnlKWVhkNWF5WlE4c3dOQmpyTGpVbWMvcjMwL3Q1NElTTUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm56T1krUjVSWCs1bXRac3AxQzk5RmtGU1QvVGpUaUE4bU8ybGJLT05HSTYwSDVmb0wzd0M0dnFYdjBiVUJpc1dFL2tRUFVXdmVNK1V5OGMzU2hQdkNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM4ODMwNjI3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTA1MTY4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJNdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQk10Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiazVCWjZqamYrU1BNcmhMMVU0SWRBSFRDWVIwMjFwZ01URUlKb1QyS25MUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjgwODg1MjU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUwNTE2ODU3MDVcIn0iCn0=" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "∆",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
