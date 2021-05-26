//Axios get current surveys from API endpoint first /api/v1/sites/:site_slug/pages/surveys
//Display most recent survey and have user answer that
//When they hit the submit button axios post call to /api/v1/survey_responses
// Survey id, question id, and person id will be fetched on page load
import { useState } from 'react';
import axios from 'axios';
const API_URL = 'placeholder'
const AnswerSurveys = () => {
    const [response, setResponse] = useState('')

    //handles input value of text area of survey question
    const handleResponse = (e) => {
        setResponse(e.target.value)
    }

    //log contact on succesful completion fo survey question
    const logContact = async () => {
        const responseObj = {
            "survey_id": '',
            "person_id": '',
            "question_responses": [
                {
                    "question_id": "",
                    "response": response
                }
            ]
        }
        console.log(responseObj)

        //let returnedResponse = await axios.post(`${API_URL}/api/v1/survey_responses`,responseObj)
        //return returnedResponse.data;

    }

    //function for submit button
    const handleSubmit = (e) => {
        e.preventDefault();
        logContact()
    }

    return (
        <div className="container">
            <h1>Survey Name</h1>
            <h2>Survey Question Prompt</h2>
            <form className='surveyForm'>

                <div className='mb-3'>
                    <label htmlFor="response" className="form-label">Response</label>
                    <textarea name='response' className="form-control" onChange={handleResponse} value={response} />
                </div>

                <button className='btn btn-primary' onClick={handleSubmit}>Submit Response</button>

            </form>

        </div>
    )
}

export default AnswerSurveys