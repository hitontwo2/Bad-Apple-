const fs = require("fs")
const Ffmpeg = require("ffmpeg")
const ascii = require("ascii-converter").default
let process = new Ffmpeg("video.mp4")
const exec = require("child_process").exec   
async function Main(){
        const width = (await process).metadata.video.resolution.w
        const height = (await process).metadata.video.resolution.h
        var index = 0
        async function player(){
        if(++index >= fs.readdirSync("frames").length) return;
        console.clear()
        setTimeout(player,1000/60)
        console.log(await ascii(`frames/video_${index}.jpg`,{width:width/10,height:height/10}))
        }
        player()
}
Main()