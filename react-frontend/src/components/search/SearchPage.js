import React, { useState, useEffect, useRef } from 'react';
import SearchCondition from './SearchCondition'
import SearchResult from './SearchResult';
import Grid from '@material-ui/core/Grid'
import { fetchData, sendQuery } from 'api/api'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import Radio from '@material-ui/core/Radio'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const SearchPage = () => {

  const [searchResult, setSearchResult] = useState({searchComplete: false, data: []})
  const [mode, setMode] = useLocalStorage('mode', 'KIS')
  const [submitted, setSubmitted] = useLocalStorage('submitted', [])
  const [memberId, setMemberId] = useLocalStorage('memberId', 0)
  const [teamId, setTeamId] = useLocalStorage('teamId', "3")
  const [log, setLog] = useLocalStorage('log', [])

  useInterval(() => {
    // console.log("Do this every 10 seconds")
    let ts = Math.floor(Date.now() / 1000)
    let logToSend = {"teamId": teamId, "memberId": memberId, 
    "timestamp": ts, "type": "interaction", "events": log}
    // console.log(ts)
    console.log(logToSend)
    // setLog([])
  }, 3000)

  const onClickSearch = async (...options) => {
    console.log("Clicked search");
    // console.log(classOption);
    // console.log(ocrOption);
    // console.log(colorOption);
    const flattened = [].concat(...options);
    console.log(flattened)
    // console.log(...options)
    const result = await sendQuery(flattened);
    console.log("Finished sendQuery");
    console.log(result.data);
    const newSearchResult = {...searchResult}
    Object.assign(newSearchResult, {searchComplete: true, data: result.data});
    console.log(newSearchResult);
    setSearchResult(newSearchResult);

    // Make reseut log
    let usedCategories = []
    let usedTypes = []
    let sortType = []
    let resultSetAvailability = ""
    for (let i = 0; i < flattened.length; i++) {
      if (flattened[i]["type"] === "object" && flattened[i]["object"] != "") {
        usedCategories.push("Text")
        usedTypes.push("localizedObject")
        sortType.push("localizedObject")
      }
      else if (flattened[i]["type"] === "text" && flattened[i]["text"] != "") {
        usedCategories.push("Text")
        usedTypes.push("OCR")
      }
      else if (flattened[i]["type"] === "color" && flattened[i]["color"] != "") {
        usedCategories.push("filter")
        usedTypes.push("dominantColor")
      }
      else if (flattened[i]["type"] === "sentence" && flattened[i]["sentence"] != "") {
        usedCategories.push("Text")
        usedTypes.push("jointEmbedding")
        sortType.push("jointEmbedding")
      }
    }
    usedCategories = [...new Set(usedCategories)]
    usedTypes = [...new Set(usedTypes)]
    sortType = [...new Set(sortType)]
    if (result.data.length < 100) {
      resultSetAvailability = "all"
    }
    else if (result.data.length <= 10000) {
      resultSetAvailability = "top"
    }
    else {
      resultSetAvailability = "sample"
    }
    
    if (sortType.length > 0 && sortType[0] == "jointEmbedding") {
      resultSetAvailability = "sample"
    }
    let results_array = []
    let arr_length = Math.min(result.data.length, 10000)
    for (let i = 0; i < arr_length; i++) {
      let video = result.data[i]["video"].toString()
      let shot = result.data[i]["keyFrame"]
      let score = result.data[i]["Sorting_Score"]
      let rank = i + 1
      while (video.length < 5) {
        video = "0" + video
      }
      results_array.push({"video": video, "shot": shot, "score": score, "rank": rank})
    }
    let ts = Math.floor(Date.now() / 1000)
    let result_logging = {"teamId": teamId, "memberId": memberId, "timestamp": ts, "usedCategories": usedCategories, "usedTypes": usedTypes,
                      "sortType": sortType, "resultSetAvailability": resultSetAvailability, "type": "result", "results": results_array}
    // sent this log
    console.log("Send this to result log")
    console.log(result_logging)
  }


  const addSearchOption = (infoArray, setInfoArray, initialObject) => () => {
    const tempArray = [...infoArray, initialObject];
    setInfoArray(tempArray);
  }
  const addLog = (category, type, value) => {
    let ts = Math.floor(Date.now() / 1000)
    let data = {"timestamp": ts, "category": category, "type": type, "value": value}
    console.log("call addLog with data")
    console.log(data)
    if (log.length > 0) {
      console.log("last element:")
      let lastElement = log[log.length - 1]
      console.log(lastElement)
      if (category === "text"
      && type === "OCR" 
      && lastElement["category"] === "text" 
      && lastElement["type"] === "OCR"
      && lastElement["value"].substring(0, 7) === value.substring(0, 7)
      ) {
        // const popped_original = [...log].pop()
        console.log("Inside remove last ocr")
        const tempArray = [...log.slice(0, log.length-1), data]
        console.log(tempArray)
        setLog(tempArray)
      }  
      else if (category === "text"
      && type === "jointEmbedding" 
      && lastElement["category"] === "text" 
      && lastElement["type"] === "jointEmbedding"
      && lastElement["value"].substring(0, 7) === value.substring(0, 7)
      ) {
        // const popped_original = [...log].pop()
        console.log("Inside remove last sentence")
        const tempArray = [...log.slice(0, log.length-1), data]
        console.log(tempArray)
        setLog(tempArray)
      } 
      else {
        const tempArray = [...log, data];
        setLog(tempArray)
        console.log("sliced array")
        console.log(tempArray)  
      }   
    }
    else {
      const tempArray = [...log, data];
      setLog(tempArray)
      console.log("sliced array")
      console.log(tempArray)
    }

  }


  const onSave = (video, second=0, frame=0, shot=0, mode="KIS") => {
    const tempArray = [...submitted, {"video": video, "second": second, "frame": frame, "shot": shot, "mode": mode}]
    setSubmitted(tempArray)
    console.log("Clicked save with video");
    console.log("second", second)
    console.log("frame", frame)
    console.log("shot", shot)

    console.log("Submitted")
    console.log(submitted)
  }

  const getVideoUrl = (video) => {
    let myVideo = video.toString()
    while (myVideo.length < 5) {
      myVideo = '0' + myVideo
    }
    let url = process.env.PUBLIC_URL + '/dataset/video_data/' + myVideo + '.mp4'
    // console.log(url)
    return url
  }

  // Hook
  function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };

    return [storedValue, setValue];
  }


  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const setRadioValue = event => {
    setMode(event.target.value);
  }

  const clearSubmitted = () => {
    addLog("browsing", "resetAll", "Clear frames saved for submission")
    setSubmitted([])
  }

  const removeOneSubmitted = (myIndex) => {
    const tempArray = [...submitted];
    tempArray.splice(myIndex, 1);
    setSubmitted(tempArray);
  }

  const onClickSubmit_KIS = (video, frame) => {
    console.log("Submit with")
    console.log("video", video)
    console.log("frame", frame)
  }


  const onClickSubmit_AVS = (video, shot) => {
    console.log("Submit AVS with")
    console.log("video", video)
    console.log("shot", shot)
  }


  const resetAll = () => {
    addLog("browsing", "resetAll", "Clear every saved values")
    setSubmitted([])
    setLog([])
  }

  return (
    <div>
      {console.log("Reload this")}
      KIS
      <Radio 
        checked={mode === 'KIS'}
        onChange={setRadioValue}
        value="KIS"
        name="radio-button"
        inputProps={{ 'aria-label': 'A' }}
      />
      {"          "}
      AVS
      <Radio 
        checked={mode === 'AVS'}
        onChange={setRadioValue}
        value="AVS"
        name="radio-button"
        inputProps={{ 'aria-label': 'A' }}
      />
      TeamID
      <input style={{width: "50px"}} type="text" value={teamId} onChange={(event) => {
        setTeamId(event.target.value);
      }} />
      &nbsp;
      MemberID
      <input style={{width: "50px"}} type="number" value={memberId} onChange={(event) => {
        setMemberId(parseInt(event.target.value));
      }} />
      <button onClick={resetAll}>Reset all</button>

      <Grid container spacing={2} justify="center">
        <Grid item xs={3}>
          Left grid
          <div>
            <button onClick={clearSubmitted}>Clear</button>
          </div>
          {submitted.map((mapData, mapIndex) => (
            <div>
              <Popup trigger={
                <text style={{color: 'blue', textDecorationLine: 'underline'}} onPress={console.log("Clicked")}>
                  {"Video: "}{mapData['video']}
                  {', Time:'}
                  {Math.trunc(mapData['second']/60)}:
                  {+(mapData['second'] - Math.trunc(mapData['second']/60) * 60).toFixed(2)}
                  {mapData['mode'] == 'AVS' && <text>, Shot: {mapData['shot']}</text>}
                </text>
              }>
                <ReactPlayer url={getVideoUrl(mapData['video'])} controls={true} />
              </Popup>
              {/* {"Video: "}{mapData['video']}
              {', Time:'}
              {Math.trunc(mapData['second']/60)}:
              {+(mapData['second'] - Math.trunc(mapData['second']/60) * 60).toFixed(2)} */}
              <Popup trigger={<button>Submit</button>}>
                {mapData['mode'] == 'KIS' &&
              <div>
                {"Video: "}{mapData['video']}
                {', Time:'}
                {Math.trunc(mapData['second']/60)}:
                {+(mapData['second'] - Math.trunc(mapData['second']/60) * 60).toFixed(2)}<br></br>
                Mode: {mapData['mode']}<br></br>
                Click confirm to submit
                <button onClick={()=>onClickSubmit_KIS(mapData['video'], mapData['frame'])}>Confirm</button>
              </div>
              }
                {mapData['mode'] == 'AVS' &&
              <div>
                {"Video: "}{mapData['video']}
                {', Time:'}
                {Math.trunc(mapData['second']/60)}:
                {+(mapData['second'] - Math.trunc(mapData['second']/60) * 60).toFixed(2)}<br></br>
                {', shot:'}{mapData['shot']}<br></br>
                Mode: {mapData['mode']}<br></br>
                Click confirm to submit
                <button onClick={()=>onClickSubmit_AVS(mapData['video'], mapData['shot'])}>Confirm</button>
              </div>
              }
              </Popup>
              <IconButton aria-label="Delete" onClick={() => removeOneSubmitted(mapIndex)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          ))}
        </Grid>
        <Grid item xs={7}>
          <SearchCondition onClickSearch={onClickSearch} addLog={addLog}/>
          <SearchResult searchResult={searchResult} onSave={onSave} mode={mode} addLog={addLog}/>
        </Grid>  
        <Grid item xs={2}>
          {/* Right grid */}
        </Grid> 
      </Grid>
    </div>
  );
};

export default SearchPage;