import { FC } from "react";
import { IPeople } from "../App";


interface IProps {
    people: IPeople[]
}

const List: FC<IProps> = ({ people }) => {

const renderList : JSX.Element[] = people.map((people) =>(
    <div className="col-12 col-lg-6">
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


