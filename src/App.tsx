import { useState } from "react";
import AddPeople from "./components/AddPeople";
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
    <List people={people} setPeople = {setPeople} />
    <AddPeople people={people} setPeople={setPeople} />

    </div>
  );
}

export default App;