const API_URL = 'placeholder'

//axios post form data to create person endpoint 
const createPerson = async (data) => {
    let returnedPerson = await axios.post(`${API_URL}/api/v1/people`, data)
    return returnedPerson.data;
}

const updatePerson = async (data) => {
    let updatedPerson = await axios.put(`${API_URL}/api/v1/people/:id`, data)
    return updatePerson.data;
}

//axios delete call to destroy person with matching ID
const deletePerson = async (id) => {
    let personToDelete = await axios.delete(`${API_URL}/api/v1/people/${id}`)
    return personToDelete.data;
}

const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    let formInputs = new FormData(form);
    const formJSON = Object.fromEntries(formInputs.entries())
    const finalJSON = {
        'person': formJSON
    }
    console.log(finalJSON)
    //call createPerson function
}

const handleDelete = (event) => {
    event.preventDefault();
    const content = event.target.parentNode;
    console.log(content)
}

const form = document.getElementsByClassName('formInput')[0]
form.addEventListener("submit", handleSubmit);

window.onload = () => {
    const deleteButtons = document.getElementsByClassName('deleteBtn');
    Array.from(deleteButtons).forEach((btn) => {
        btn.addEventListener('click', handleDelete)
    })
}