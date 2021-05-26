//Axios get current surveys from API endpoint first /api/v1/sites/:site_slug/pages/surveys
//Display most recent survey and have user answer that
//When they hit the submit button axios post call to /api/v1/survey_responses
import { useState } from 'react';

const AnswerSurveys = () => {
    const [response, setResponse] = useState('')

    const handleResponse = (e) => {
        setResponse(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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