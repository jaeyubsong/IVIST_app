import React, { useState, useEffect } from 'react';
import SearchCondition from './SearchCondition'
import SearchResult from './SearchResult';
import Grid from '@material-ui/core/Grid'
import { fetchData, sendQuery } from 'api/api'
import Radio from '@material-ui/core/Radio'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const SearchPage = () => {

  const [searchResult, setSearchResult] = useState({searchComplete: false, data: []})
  const [mode, setMode] = useLocalStorage('mode', 'KIS')
  const [submitted, setSubmitted] = useLocalStorage('submitted', [])

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
  }


  const addSearchOption = (infoArray, setInfoArray, initialObject) => () => {
    const tempArray = [...infoArray, initialObject];
    setInfoArray(tempArray);
  }


  const onSave = (video, second, frame) => {
    const tempArray = [...submitted, {"video": video, "second": second}]
    setSubmitted(tempArray)
    console.log("Clicked submit with video");
    console.log("second", second)
    console.log("frame", frame)
    console.log("Submitted")
    console.log(submitted)
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

  const setRadioValue = event => {
    setMode(event.target.value);
  }

  const clearSubmitted = () => {
    setSubmitted([])
  }

  const removeOneSubmitted = (myIndex) => {
    const tempArray = [...submitted];
    tempArray.splice(myIndex, 1);
    setSubmitted(tempArray);
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
      <Grid container spacing={2} justify="center">
        <Grid item xs={2}>
          Left grid
          <div>
            <button onClick={clearSubmitted}>Clear</button>
          </div>
          {submitted.map((mapData, mapIndex) => (
            <div>
              {"Video: "}{mapData['video']}
              {', Time:'}
              {Math.trunc(mapData['second']/60)}:
              {+(mapData['second'] - Math.trunc(mapData['second']/60) * 60).toFixed(2)}
              <button onClick={() => console.log("ASA")}>Submit</button>
              <IconButton aria-label="Delete" onClick={() => removeOneSubmitted(mapIndex)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          ))}
        </Grid>
        <Grid item xs={8}>
          <SearchCondition onClickSearch={onClickSearch}/>
          <SearchResult searchResult={searchResult} onSave={onSave}/>
        </Grid>  
        <Grid item xs={2}>
          Right grid
        </Grid> 
      </Grid>
    </div>
  );
};

export default SearchPage;