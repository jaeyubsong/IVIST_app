import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import ResultBox from './ResultBox'
import sampleImage from 'assets/images/SonHeungMin.jpg'
import { fps_array } from "./fps_data";

// const BASE_URI = 'http://localhost:5000'

function imageClick () {
  console.log('click')
}

function getImage () {
  const sampleData = {
    number: 10,
    data: [
      { path: '/data/part1.jpg', text: ['apple, ant'] },
      { path: '/data/part2.jpg', text: ['banana, carrot'] },
      { path: '/data/part3.jpg', text: ['base, bear'] },
      { path: '/data/part4.jpg', text: ['computer, elephant'] }
    ]
  }
  // console.log(sampleData.data);
  sampleData.data.map(value => {
    console.log(value)
  })
  return sampleData
}

function getImageUrl (video, frame) {
  let myVideo = video.toString()
  let myFrame = frame.toString()
  while (myVideo.length < 5) {
    myVideo = '0' + myVideo
  }
  let url = process.env.PUBLIC_URL + '/dataset/keyframes/' + myVideo + '/shot' + myVideo + '_' + myFrame + '_RKF.png'
  // console.log(url)
  return url
}


const VIDEO_PER_PAGE = 100
function SearchResult (props) {

  const [curPage, setCurPage] = useState(1)
  const [curPageVideo, setCurPageVideo] = useState([])

  const changeCurrentPageVideo = (allVideo, newPage) => {
    let startIndex = VIDEO_PER_PAGE * (newPage-1)
    let end = Math.min(startIndex + VIDEO_PER_PAGE, allVideo.length)
    const tempArray = allVideo.slice(startIndex, end)
    console.log("Called change current page video, total", allVideo.length)
    console.log("startIndex", startIndex)
    setCurPageVideo(tempArray)
  }

  useEffect(() => {
    setCurPage(1)
    changeCurrentPageVideo(props.searchResult.data, 1)
  }, [props.searchResult])

  return (
    <div className='searchResult'>
      {/* {props.searchResult.searchComplete == true &&
      <div>
        {curPage > 1 && 
          <button onClick={() => setCurPage(curPage-1)}>
            Prev
          </button>
        }
        Page {curPage}
        {props.searchResult.data.length % VIDEO_PER_PAGE <= curPage &&
          <button onClick={() => setCurPage(curPage+1)}>
            Next
          </button>
        }
      </div>
      } */}
      {props.searchResult.searchComplete == true && 
      <div>
        Number of results: {props.searchResult.data.length}
        {/* {changeCurrentPageVideo(props.searchResult.data)} */}
        <div>
          {curPage > 1 && 
            <button onClick={() => {
              let newPage = curPage - 1
              setCurPage(newPage)
              changeCurrentPageVideo(props.searchResult.data, newPage)
              props.addLog("browsing", "rankedList", "PreviousPage")
            }}>
              Prev
            </button>
          }
          Page {curPage}
          {props.searchResult.data.length / VIDEO_PER_PAGE >= curPage &&
            <button onClick={() => {
              let newPage = curPage + 1
              console.log("(next)data length is", props.searchResult.data.length)
              setCurPage(newPage)
              changeCurrentPageVideo(props.searchResult.data, newPage)
              props.addLog("browsing", "rankedList", "NextPage")
            }
            }>
              Next
              {console.log("(next)data length is", props.searchResult.data.length)}
              {console.log("cur page is", curPage)}
            </button>
          }
        </div>
        <Grid container spacing={2}>
          <Grid item>
            <Grid container justify='center' spacing={2}>
              {
                curPageVideo.map((value, index) => (
                <Grid key={index} item>
                  <ResultBox
                    mapIndex={index}
                    imageSrc={getImageUrl(value['video'], value['keyFrame'])}
                    width={100}
                    addLog={props.addLog}
                    videoSecond={value['startSecond']}
                    videoNumber={value['video']}
                    mode={props.mode}
                    shot={value['keyFrame']}
                    // videoList={props.searchResult.data}
                    fps={fps_array[value['video'] - 1]}
                    onSave={props.onSave}
                  />
                  {/* {value} */}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      }

    </div>
  )
}

export default SearchResult