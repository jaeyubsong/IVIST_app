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

function getVideoUrl (video) {
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

function ResultBox({ imageSrc, width, height, onClick, videoSecond, fps, videoNumber, onSave, mapIndex }) {
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
  return (
    <div>
      {/* <div> */}
        <Popup trigger={<img src={imageSrc} style={{ width: width }} onClick={onClick} />} position={(mapIndex % 10) > 5 ? "left center" : "right center"}>
          <div>
            <ReactPlayer url={getVideoUrl(videoNumber)} controls={true} />
            {videoNumber}/
            {videoSecond}/
            {Math.trunc(videoSecond/60)}:
            {+(videoSecond - Math.trunc(videoSecond/60) * 60).toFixed(2)}
            {/* {getSameVideo(videoNumber, videoList)} */}
            <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Min Sec
            </div>
            <div>
              startTime (In format Minute:Second)
            </div>
            <div>
              <input style={{width: "30px"}} 
                type="number" 
                value={startMinute} 
                onChange={setStartMinute}
                placeholder="Minute" />:
              <input style={{width: "30px"}} 
                type="number" 
                value={startSecond} 
                onChange={setStartSecond}
                placeholder="Second" />
              <button onClick={() => {
                let videoSecond = (+startMinute * 60) + (+startSecond)
                onSave(videoNumber, videoSecond, Math.round((+videoSecond) * fps))
              }}>Save</button>
            </div>
          </div>
        </Popup>
      {/* </div> */}
      {/* {videoSecond}       */}
    </div>

  )
}

export default ResultBox
