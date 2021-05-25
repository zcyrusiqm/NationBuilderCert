import { useState } from 'react';


const Survey = () => {
    const [state, setstate] = useState('initialState')

    const [questions, setQuestions] = useState([])

    const addQuestion = () => {
        

    }

    return (
        <div className='surveyContainer'>
            <h1>Create a Survey</h1>
            <form className='surveyForm'>
                <div class='mb-3'>
                    <label for="name" class="form-label">Survey Name</label>
                    <input name='name' class="form-control" type="text" />
                </div>

                <div class='mb-3'>
                    <label for="status" class="form-label">Status</label>
                    <select>
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
                </ul>
            </div>

            <form style={{ marginBottom: '1rem' }} className='questionForm'>

                <h3>Add a question</h3>
                <div class='mb-3'>
                    <label for="name" class="form-label">Survey Name</label>
                    <input name='name' class="form-control" type="text" />
                </div>

                <p>Type: Text (for this demonstration assuming all questions are free response)</p>

                <div style={{ marginBottom: '1rem' }} class='mb-3'>
                    <label for="prompt" class="form-label">Question Prompt</label>
                    <input name='prompt' class="form-control" type="text" />
                </div>

                <button>Add Question</button>

            </form>

            <button class="btn btn-primary" type='submit'>Create Survey</button>
        </div>
    )

}

export default Survey;