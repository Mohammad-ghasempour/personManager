import { useState , FormEvent, FC , Dispatch} from "react";
import { IPeople } from "../App";


interface Iprops{
    people : IPeople[],
    setPeople: Dispatch<React.SetStateAction<IPeople[]>>
}

const AddPeople: FC<Iprops> = ({people , setPeople}) => {

    
    const [fullName, setFullName] = useState<string>('');
    const [age, setAge] = useState<number | string>('');
    const [img_url, setImg_url] = useState<string>('');
    const [bio, setBio] = useState<string>('');

    const handleResetState = ():void => {
        setFullName('');
        setAge('');
        setImg_url('');
        setBio('');
    }

    
    const handleSubmit = (e:FormEvent<HTMLFormElement>):void=> {
        e.preventDefault();

        if(!fullName){
            return alert('Name & Family is required!');
        }
        if(!age){
            return alert('Age is required!');
        }
        if(!img_url){
            return alert('Image URL is required!');
        }
        
        setPeople([...people , {
            id: Math.floor(Math.random() * 1000000),
            fullName,
            age: Number(age),
            img_url,
            bio
        }])

        handleResetState();
    }

    return (
        <div className="col-md-6 col-lg-6 mx-auto">
            <form
                autoComplete="off" onSubmit={(e)=> handleSubmit(e)}
                className="mt-3">
                <input
                    type="text"
                    className="form-control mb-2"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Name and Family"
                />
                <input
                    type="number"
                    className="form-control mb-2"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    name="img_url"
                    value={img_url}
                    onChange={(e) => setImg_url(e.target.value)}
                    placeholder="Profile image address"
                />
                <textarea
                    className="form-control mb-2"
                    name="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={7}
                    placeholder="Biography"
                />
                <button type="submit" className="btn btn-success">
                    Add to List
                </button>
            </form>
        </div>
    )
}

export default AddPeople;