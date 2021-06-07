//waiting for API key will be placed in env file later.
const API_URL = 'placeholder'

//submit function to allow a user to create an event form through Nation Builder API
const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    //take input entries and convert them to acceptable json format for POST request
    let formInputs = new FormData(form);
    const formJSON = Object.fromEntries(formInputs.entries())
    console.log(formJSON)
    //call createEvent(formJSON)
}

//have to handle cases where input fields are empty
const handleUpdateSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    let formInputs = new FormData(form);
    const formJSON = Object.fromEntries(formInputs.entries())
    console.log(formJSON)//
    //updateEvent(formJSON)
}

//function to make axios POST request to NationBuilder API create event endpoint
const createEvent = (data) => {
    //data should already be an object
    axios.post(`${API_URL}/api/v1/sites/:site_slug/pages/events`, data)

}

//function to make axios PUT request to NationBuilder API to update event endpoint
const updateEvent = (data) => {
    axios.put(`${API_URL}/api/v1/sites/:site_slug/pages/events/:id`, data)
}

//function to fetch current event lists
const fetchEvents = async () => {
    let events = await axios.get(`${API_URL}/api/v1/sites/:site_slug/pages/events`)
    return events.data;
}

//function to display list of current events
const displayEvents = () => {
    //const events = fetchEvents();
    //events should be an arr
    let fakeEvents = [
        {
            'name':"Created Event",
            'title':'Random Nonsense'
        },
        {
            'name':'Last Event'
        }
    ]
    fakeEvents.forEach((item) => {
        let row = document.createElement("li")
        row.className = 'list-group-item';
        row.innerHTML = item.name;
        let eventList = document.getElementById('eventList');
        eventList.appendChild(row)

    })
}
//target create event form;
const form = document.getElementsByClassName('formInput')[0]

//adds handleSubmit function to create event form
form.addEventListener("submit", handleSubmit);

//target update form 
const updateForm = document.getElementsByClassName('updateForm')[0]

//adds handleUpdateSubmit function to submit button
updateForm.addEventListener("submit", handleUpdateSubmit)

//When document loads display all current events
document.onload = displayEvents()