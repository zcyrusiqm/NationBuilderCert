//component that displays a person's name, sex, party
// person prop should always be an object
const PeopleCard = ({person}) => {
    return (
        <div className='card mb-4 p-4'>
            <h3 className='card-title'>{person.first_name} {person.last_name}</h3>
            <p className='card-text'>Sex: {person.sex}</p>
            <p className="card-text">Party: {person.party}</p>
        </div>
    )
}

export default PeopleCard;