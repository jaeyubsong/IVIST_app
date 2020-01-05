import axios from 'axios'

export const fetchData = async () => {
  console.log("fetchData is called");
  const result = await axios({
    method: 'post',
    url: 'http://143.248.49.97:5000/vbs/getData',
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });

}

export const sendQuery = async (myData) => {
   console.log("QueryData is called sending ");
   console.log(myData)
   const result = await axios({
     method: 'post',
     url: 'http://143.248.49.97:5000/vbs/query',
     headers: {
       "Access-Control-Allow-Origin": "*"
     },
     data: {myData}
   });
   console.log("Got result back")
   console.log(result);
   return result;
 }

 export const sendInteractionLog = async (team, member, interaction_log) => {
  let default_url = 'http://demo2.itec.aau.at:80/vbs/submit?team=' + team.toString() 
  + '&member=' + member.toString()
  // let default_url = 'http://demo2.itec.aau.at:80/vbs/logs'
  // + '&member=' + member.toString()
  console.log("default_url")
  console.log(default_url)
  // let myData = JSON.stringify(inputData)
  let myData = interaction_log
  console.log(myData)

  const result = await axios({
    method: 'post',
    url: default_url,
    // url: 'http://143.248.49.97:5000/vbs/interaction_log',
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      // 'Content-Type': 'text/plain',
      // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    },
    data: myData
  });

  console.log("Got result back")
  console.log(result);
  return result;
 }

 export const sendKISResult = async (team, member, video, frame, interaction_log) => {
  console.log("Send KIS result")
  // let myData = JSON.stringify(inputData)
  let default_url = 'http://demo2.itec.aau.at:80/vbs/submit?team=' + team.toString() 
  + '&member=' + member.toString() + '&video=' + video.toString() + '&frame=' + frame.toString()
  console.log("default_url")
  console.log(default_url)
  let myData = interaction_log

  const result = await axios({
    method: 'post',
    url: default_url,
    // url: 'http://143.248.49.97:5000/vbs/interaction_log',
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      // 'Content-Type': 'text/plain',
      // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    },
    data: interaction_log
  });

  console.log("Got result back")
  console.log(result);
  return result;
 }

 export const sendAVSResult = async (team, member, video, shot, interaction_log) => {
  // console.log("myData is")
  // let myData = JSON.stringify(interaction_log)
  // let myData = interaction_log
  const result = await axios({
    method: 'post',
    url: 'http://demo2.itec.aau.at:80/vbs/submit?team=' + team.toString() 
    + '&member=' + member.toString() + '&video=' + video.toString() + '&shot=' + shot.toString(),
    // url: 'http://143.248.49.97:5000/vbs/interaction_log',
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      // 'Content-Type': 'text/plain',
      // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    },
    data: interaction_log
  });

  console.log("Got result back")
  console.log(result);
  return result;
 }