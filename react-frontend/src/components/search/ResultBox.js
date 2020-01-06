import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  }
}))

const getVideoUrl = (video) => {
  let myVideo = video.toString()
  while (myVideo.length < 5) {
    myVideo = '0' + myVideo
  }
  let url = process.env.PUBLIC_URL + '/dataset/video_data/' + myVideo + '.mp4'
  // console.log(url)
  return url
}

function getSameVideo (videoNumber, videoList) {
  let myVideos = []
  for (const video of videoList) {
    if (video['video'] == videoNumber)
    myVideos.push(video['startSecond'])
  }

  return myVideos
}

function getMinute (second) {
  
}

function ResultBox({ imageSrc, width, height, addLog, videoSecond, fps, videoNumber, onSave, mapIndex, mode, shot }) {
  const classes = useStyles()
  const [startMinute, setStartMin] = useState(0.0)
  const [startSecond, setStartSec] = useState(0.0)
  const [endMinute, setEndMin] = useState(0.0)
  const [endSecond, setEndSec] = useState(0.0)
  // const setStartSecond = event => {
  //   setStart(event.target.value);
  // }

  const changeTime = (setTime) => event => {
    setTime(event.target.value)
  }
  const setStartMinute = changeTime(setStartMin);
  const setStartSecond = changeTime(setStartSec);
  const RESULT_PER_LINE = 10
  return (
    <div>
      {/* <div> */}
        <Popup trigger={<img src={imageSrc} style={{ width: width }} onClick={()=>console.log("Click videovideovideovideovideo")} />} position={(mapIndex % RESULT_PER_LINE) > 5 ? "left center" : "right center"}>
          <div>
          {/* {addLog("browsing", "videoPlayer", "play VId" + videoNumber.toString() + "," + "FN" + shot.toString())} */}
            <ReactPlayer url={getVideoUrl(videoNumber)} controls={true} onReady={()=>{
              console.log("Video ready to play")
              addLog("browsing", "videoPlayer", "play VId" + videoNumber.toString() + "," + "FN" + shot.toString())
            }}/>
            Video: {videoNumber} <br></br>Time: &nbsp;
            {Math.trunc(videoSecond/60)}:
            {+(videoSecond - Math.trunc(videoSecond/60) * 60).toFixed(0)}
            {/* {getSameVideo(videoNumber, videoList)} */}
            {mode == 'KIS' && 
            <div>
              <div>
                startTime (In format Minute:Second)
              </div>
              <div>
                <input style={{width: "40px"}} 
                  type="number" 
                  value={startMinute} 
                  onChange={setStartMinute}
                  placeholder="Minute" />:
                <input style={{width: "40px"}} 
                  type="number" 
                  value={startSecond} 
                  onChange={setStartSecond}
                  placeholder="Second" />
                <button onClick={() => {
                  let videoSecond = (+startMinute * 60) + (+startSecond)
                  onSave(videoNumber, videoSecond, Math.round((+videoSecond) * fps), shot, mode)
                }}>Submit</button>
              </div>
            </div>  
          }
            {mode == 'AVS' && 
            <div>
              <div>
                Shot#: {shot}
              </div>
              <div>
                <button onClick={() => {
                  onSave(videoNumber, Math.round(videoSecond), Math.round((+videoSecond) * fps), shot, mode)
                }}>Submit</button>
              </div>
            </div>  
          }
            {/* <div>
              <input style={{width: "40px"}} 
                type="number" 
                value={startMinute} 
                onChange={setStartMinute}
                placeholder="Minute" />:
              <input style={{width: "40px"}} 
                type="number" 
                value={startSecond} 
                onChange={setStartSecond}
                placeholder="Second" />
              <button onClick={() => {
                let videoSecond = (+startMinute * 60) + (+startSecond)
                onSave(videoNumber, videoSecond, Math.round((+videoSecond) * fps))
              }}>Save</button>
            </div> */}
          </div>
        </Popup>
      {/* </div> */}
      {/* {videoSecond}       */}
    </div>

  )
}

export default ResultBox
