import {useState} from 'react'

const PersonForm = () => {

    const [person, setPerson] = useState({
        first_name: '' ,
        last_name: '' ,
        email: '' ,
        phone: ''

    })


    //function to manage the various inputs
    const handleChange = (e) => {
        const val = e.target.value;
        setPerson({
            ...person,
            [e.target.name]: val
        })
    }

    const createPerson = async (data) => {
        let returnedPerson = await axios.post(`${API_URL}/api/v1/people`, data)
        return returnedPerson.data;
    }

    //function for submit button
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person)
        //call createPerson
    }

    return (
        <div className='container'>
            <div className="createPerson mb-5">
            <h1>Create a person with the form below</h1>

            <form onSubmit={handleSubmit} className='formInput'>
                <div className='mb-3'>
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input onChange={handleChange} name='first_name' className="form-control" type="text"/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input onChange={handleChange} name='last_name' className="form-control" type="text"/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={handleChange} name='email' className="form-control" type="email"/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input onChange={handleChange} name="phone" className="form-control" type="tel"/>
                </div>

                <button className="btn btn-primary" type='submit'>Create Person</button>

            </form>

        </div>
        </div>
        
    )
}

export default PersonForm