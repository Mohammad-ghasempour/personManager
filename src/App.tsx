import { useState } from "react";
import List from "./components/List";
import { ShowVideo } from "./components/ShowVideo";

interface IPeople {
          id: number,
          fullName: string,
          age: number,
          img_url:string,
          bio?:string
  }

  const App = ()=> {
  const [people , setPeople] = useState<IPeople[]>([ {id: 10, fullName: 'Mohammad', age: 37, img_url:'', bio:''}]
  )


const [picture , setPicture] = useState<string>('');
const [PI , setPi] = useState<number>(3.14159);

const run =()=>{
  setPicture("https://krydder.bib.no/1087/10964838.bilde.1545476188.n.jpg");
}

   return (
    <div className="container">
    <h4 className="alert alert-info">persons management</h4>
    <List people={people}/>
    <ShowVideo link={picture} PI={PI}/>
    <button onClick={run}>insert Video</button>

    </div>
  );
}

export default App;