import { Dispatch } from 'react';
import { FormEvent } from 'react';
import { SetStateAction } from 'react';
import { useState , FC } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaUserEdit } from 'react-icons/fa';
import { IPeople } from '../App';

interface IProps {
    person: IPeople,
    mainPeople: IPeople[],
    setMainPeople: Dispatch<SetStateAction<IPeople[]>>

}
const Edit: FC<IProps> = ({person , mainPeople , setMainPeople}) => {
    const [isShowModal , setIsShowModal] = useState<boolean>(false);
    const [fullName, setFullName] = useState<string>(person.fullName);
    const [age, setAge] = useState<number | string>(person.age);
    const [img_url, setImg_url] = useState<string>(person.img_url);
    const [bio, setBio] = useState<string | undefined>(person.bio);


    const handleEdit= (e:(FormEvent<HTMLFormElement>)): void =>{
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

        const editlist = [... mainPeople];
        const index = editlist.findIndex((p)=> p.id === person.id);
        editlist[index] = {
            id: person.id,
            fullName,
            age: Number(age),
            img_url,
            bio 
        }
        setMainPeople(editlist);
        setIsShowModal(false);
        
    }

    return (
        <>
            <FaUserEdit size={20} color="blue" className='m-1' onClick={()=>setIsShowModal(true)} />

            <Modal size="lg" centered show={isShowModal} onHide={()=>{setIsShowModal(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {person.fullName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="col-md-6 col-lg-6 mx-auto">
            <form
                autoComplete="off" 
                onSubmit={(e)=>handleEdit(e)}
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
                <button type="button" onClick={()=>{setIsShowModal(false)}} className="btn btn-secondary m-2">
                    Close
                </button>
                <button type="submit" className="btn btn-success">
                    Edit Person
                </button>
             
            </form>
        </div>
                </Modal.Body>

            </Modal>

        </>
    )
}

export default Edit;