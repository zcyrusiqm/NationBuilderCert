import PeopleCard from './PeopleCard'

const PersonList = ({people}) => {
    return (
        <div>
            {people.map(person => PeopleCard(person))}

        </div>
    )
}

export default PersonList; 