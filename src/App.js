import React, {useState, useEffect} from 'react';
import "./style.css";

const App = () => {
  const [user, setUser] = useState({});

  const update = async() =>{
    const response = await fetch("https://randomuser.me/api/");
    const jsonResponse = await response.json();
    const obj = jsonResponse.results[0]; 
    console.log(obj); 
    setUser(obj);
  }

  useEffect(async()=>{
    update(); 
    
  }, [])

  return (<>
  
  <nav> <div className= "row box">
    <div className="Company">
     <h1> USERPROFILE </h1> </div>
  <div className= "col2">  
      <button className="button" onClick={update}>
        Update
      </button>
      </div>

      </div>
  </nav>
  <div className="App">
    
      {user && (
        <div className="item_container">
          <h2>USER DETAILS</h2>
          <div className="item_content">
            {user && Object.keys(user).length != 0 && (
              <div className= "item_data">
                 <br></br>
                <img src={user.picture.large} alt=""></img>
                <br></br>
                <h3>Name : {user.name.title} {" "} {user.name.first}{" "} {user.name.last}</h3>
                <h3>Gender : {user.gender}</h3>
                <h3>Mobile No : {user.phone}</h3>
                <h3>Country : {user.location.country}</h3>
                <h3>Age : {user.registered.age}</h3>
              </div>
            )
            }
          </div>
        </div>
      )}
    </div>
    </> 
  );
};
export default App;

