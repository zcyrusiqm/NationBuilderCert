import PeopleCard from './PeopleCard'

//Maps through an array of people and turns each element into a PeopleCard
const PersonList = ({people}) => {
    return (
        <div>
            {people.map(person => <PeopleCard key={person.id} person ={person}/>)}

        </div>
    )
}

export default PersonList; 