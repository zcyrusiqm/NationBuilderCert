const PeopleCard = ({person}) => {
    return (
        <div>
            <h3>{person.first_name} {person.last_name}</h3>
            <p>Sex: {person.sex}</p>
            <p>Party: {person.party}</p>
        </div>
    )
}

export default PersonCard;