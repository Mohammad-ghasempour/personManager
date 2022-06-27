import { useState } from "react";
import AddPeople from "./AddPeople";
import List from "./components/List";
export interface IPeople {
          id: number,
          fullName: string,
          age: number ,
          img_url:string,
          bio?:string
  }

  const App = ()=> {

  const [people , setPeople] = useState<IPeople[]>([ {id: 10, fullName: 'Mohammad Ghasempour', age: 37,
       img_url:'https://avatars.githubusercontent.com/mohammad-ghasempour', bio:'Frontend developer'}]
  )



  

   return (
    <div className="container">
    <h4 className="alert alert-info">persons management</h4>
    <List people={people}/>
    <AddPeople people={people} setPeople={setPeople} />

    <button onClick={()=>{setPeople([...people , {id: 11, fullName: 'Ghasempour', age: 35557,
  img_url:'https://avatars.githubusercontent.com/mohammad-ghasempour', bio:'Frloper'}    ])  }}>click</button>
    </div>
  );
}

export default App;