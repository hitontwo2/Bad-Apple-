const ffmpeg = require("ffmpeg")
const config = require("./config.json")

async function Main(){
    console.log("Starting process...")
    try{
    const process = new ffmpeg(config.video_path)
    try{
    (await process).fnExtractFrameToJPG("frames",{frame_rate:config.frame_rate})
    }catch(err){
        console.log("Error occured while extracting frames :"+err)
    }
    }catch(err){
        console.log("Error occured please check you config again!: "+err)
    }
}
Main()