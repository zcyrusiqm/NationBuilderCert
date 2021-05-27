const API_URL = 'placeholder'

const fetchPeople = async () => {
    //once I have api access replace will be replaced with getPeople()
    let listOfPeople = await fetch('./fakePeople.json');
    const response = await listOfPeople.json()
    return response.results;
}

//function to retrieve list of people from NationBuilder API
const getPeople = async (data) => {
    const listOfPeople = await axios.get(`${API_URL}/api/v1/people`)
    return listOfPeople
}

//function to display list of people
const displayPeople = (peopleList) => {
    console.log(peopleList)
    peopleList.forEach((item) => {
        let personRow = document.createElement("div")
        personRow.className = 'list-group-item';

        //titleTag h5
        let personTitleTag = document.createElement("H5")
        let personName = document.createTextNode(item.first_name + " " + item.last_name);
        personTitleTag.appendChild(personName)
        personRow.appendChild(personTitleTag)

        //small element
        let smallElement  = document.createElement('small');
        smallElement.innerHTML = item.id;
        let breakElement = document.createElement('br')
        personRow.appendChild(smallElement)
        personRow.appendChild(breakElement)
        
        //delete button
        let deleteButton = document.createElement("button")
        deleteButton.innerHTML = 'Delete'
        deleteButton.className ='mt-3 btn btn-danger deleteBtn'
        deleteButton.id = item.id
        personRow.appendChild(deleteButton)

        
        //personList
        let personList = document.getElementById('personList');
        personList.appendChild(personRow)

    })
}

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

//function to handle fields that are left blank
const handleBlanks = (JSON) => {
    let cleanJSON = { ...JSON }
    for (const prop in cleanJSON) {
        if (cleanJSON[prop] === "" || cleanJSON[prop] === null) {
            delete cleanJSON[prop]
        }
    }
    return cleanJSON;
}

const handleUpdateSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    let formInputs = new FormData(form);
    const formJSON = Object.fromEntries(formInputs.entries())
    let cleanJSON = handleBlanks(formJSON)
    const body2Send = {
        "person": cleanJSON
    }
    console.log(body2Send)
    //call updatePerson function
}



const handleDelete = (event) => {
    event.preventDefault();
    const personId = event.target.id;
    console.log(personId)
    //call deletePerson(personId)
}

const form = document.getElementsByClassName('formInput')[0]
form.addEventListener("submit", handleSubmit);
const updateForm = document.getElementsByClassName('updateForm')[0]
updateForm.addEventListener("submit", handleUpdateSubmit)

window.onload = async () => {
    const listOfPeople = await fetchPeople()
    displayPeople(listOfPeople)
    const deleteButtons = document.getElementsByClassName('deleteBtn');
    Array.from(deleteButtons).forEach((btn) => {
        btn.addEventListener('click', handleDelete)
    })

}