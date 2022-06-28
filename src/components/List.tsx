import { FC , Dispatch , SetStateAction } from "react";
import { IPeople } from "../App";
import {RiDeleteBin5Fill} from 'react-icons/ri';


interface IProps {
    people: IPeople[],
    setPeople: Dispatch<SetStateAction<IPeople[]>>
}

const List: FC<IProps> = ({ people , setPeople }) => {

const handleDeletePeople = (id:number):void=>{
    const persons = [... people];
    const filteredPeople = persons.filter((person)=> person.id !== id)
    setPeople(filteredPeople);
}

const renderList : JSX.Element[] = people.map((people) =>(
    <div key={people.id} className="col-12 col-lg-6 m-1">
        <div className="card">
            <div className="card-body d-flex align-items-center">
                <img className="img-fluid rounded img-thumbnail" width={100} height={100} src={people.img_url} alt={people.bio} />
            
            <div className=" me-4">
                <p>
                    <span className="h4">{people.fullName}</span>
                    <span className="badge bg-primary me-3">{people.age} years</span>
                </p>
                <p className="text-muted">{people.bio}</p>
            </div>

            </div>
            <div className="operation_btns m-1">
                <RiDeleteBin5Fill size={20} color='red' onClick={()=>{handleDeletePeople(people.id)}} />
            </div>
        </div>
    </div>
) );

    return (
        <>
            <div className="row">
                {renderList}
            </div>
        </>
    )
}
export default List;


