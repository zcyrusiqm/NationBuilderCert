import { useState } from 'react';


const Survey = () => {
    const [questionInput, setQuestionInput] = useState('')
    const [questions, setQuestions] = useState([])
    const [questionStatus, setQuestionStatus] = useState('published')
    const [surveyName, setSurveyName] = useState('')
    const [surveyStatus, setSurveyStatus] = useState('published')

    //function to add question obj to questions array to be submitted with post call
    const addQuestion = (e) => {
        e.preventDefault();
        if(questionInput === ''){
            return;
        }
        
        let questionObj = {
            "type": 'text',
            "prompt": questionInput,
            "status": questionStatus
        }
        setQuestions([...questions,questionObj])
        setQuestionInput('')
    }

    //function to handle input value of question prompt
    const handleQuestionChange = (e) => {
        setQuestionInput(e.target.value)

    }

    //function to handle input of survey names
    const handleSurveyName = (e) => {
        setSurveyName(e.target.value)
    }

    //function to handle value of question publishing status
    const handleQuestionStatus = (e) => {
        setQuestionStatus(e.target.value)
    }

    //function to handle value of survey publishing status
    const handleSurveyStatus = (e) => {
        setSurveyStatus(e.target.value)
    }


    //function to submit survey
    const surveySubmit = (e) => {
        e.preventDefault();
        if(surveyName === ''){
            return;
        }
        let surveyObj = {
            "name":surveyName,
            "status": surveyStatus,
            "questions": questions
        }
        console.log(surveyObj)
    }

    //function to make axios post call to create a survey
    const surveyPost = (survey) => {
        
    }

    return (
        <div className='container surveyContainer'>
            <h1>Create a Survey</h1>
            <form className='surveyForm'>
                <div className='mb-3'>
                    <label htmlFor="name" className="form-label">Survey Name</label>
                    <input name='name' className="form-control" type="text" onChange={handleSurveyName} value={surveyName} />
                </div>

                <div className='mb-3'>
                    <label htmlFor="status" className="form-label">Status</label>
                    <select className="form-select" onChange={handleSurveyStatus}>
                        <option>
                            published
                        </option>
                        <option>
                            unlisted
                        </option>
                        <option>
                            hidden
                        </option>
                    </select>
                </div>

            </form>

            <div>
                <h3>Current Questions</h3>
                <ul className='questionsList'>
                    <li>Fake question</li>
                    {questions.map((question) => {
                        return <li>{question.prompt}</li>
                    })}
                </ul>
            </div>

            <form style={{ marginBottom: '1rem' }} className='questionForm'>

                <h3>Add a question</h3>

                <div style={{ marginBottom: '1rem' }} className='mb-3'>
                    <label htmlFor="prompt" className="form-label">Question Prompt</label>
                    <input name='prompt' className="form-control" type="text" onChange={handleQuestionChange} value={questionInput} />
                </div>

                <p>Type: Text (for this demonstration assuming all questions are free response)</p>

                <label htmlFor="status" className="form-label">Status</label>
                <select className="form-select" onChange={handleQuestionStatus}>
                    <option value='published'>
                        published
                    </option>

                    <option value='unlisted'>
                        unlisted
                    </option>

                    <option value='hidden'>
                        hidden
                    </option>
                </select>

                <br />

                <button className="btn btn-secondary" onClick={addQuestion} style={{ marginTop: '1rem ' }}>Add Question</button>

            </form>

            <button onClick={surveySubmit} className="btn btn-primary" type='submit'>Create Survey</button>
        </div>
    )

}

export default Survey;