import { useState }from 'react'
import axios from 'axios'

const SendData = () => {

  const[data, setData] = useState('')
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null);


const options = {
  method: 'POST',
  url: 'https://api.cohere.ai/v1/generate',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer vuQvupQyuoKFIURO1S2MfXD98MGLabbnnrnYtrUE'
  },
  data: {
    model: 'command',
    temperature: 0.9,
    max_tokens: 300,
    return_likelihoods: 'NONE',
    truncate: 'END',
    prompt: ` f"""
    These prompts will allow the user to get a 4 line poem back about the inputted subject
    ex:

    Prompt: Generate a zhort poem about life
    Output: 
    `
  }
};

const handleData = (e) => {
  e.preventDefault()
  setResults(null)
  axios
  .request(options)
  .then((res) => {
    console.log(res)
    // gets data from the array and stores it in a variable
    const receivedData = res.data.generations[0].text
    // accesses the array with the info stored in the variable but gets only the text back from the api
    // const actualData = receivedData.split(' ')[1]
    setData(receivedData)

  })
  .catch((err) => {
    setError('aw dang! something went wrong, try again :)', err.message)
  });
  setResults(true)
  }
  return(
    <div>
        <div>
         <form action="submit" onSubmit={handleData}>
                <label id="text"></label>
               <input type='text' placeholder="generate a poem about....." required/>
              <button type='submit'>Get Poem!</button>
        </form>
        </div>
        <div>
            {results && <div>
                <p>{data}</p>
                </div>}
                {error && <div>{error}</div>}
        </div>
    </div>
)}


export default SendData