import PeopleCard from './PeopleCard'

const PersonList = ({people}) => {
    return (
        <div>
            {people.map(person => <PeopleCard key={person.id} person ={person}/>)}

        </div>
    )
}

export default PersonList; 