import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Home } from "./Containers/Home/Home";
import { useSelector } from "react-redux";


export function App() {
  const dispatch = useDispatch(); 
  /*const [dataUser, setDataUser] = useState(" ");
  const [Token, setToken] = useState(" ");*/
  const tokenFromId = useSelector((state) => state.userToken);
  const UserFromStore = useSelector((state) => state.userData);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api/user/profile",
    {
      method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("IdTokenGoogle")}`,
          },
      })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      // dispatch({ type: "GET_USER", userData: "salam" });
      // dispatch({ type: "GET_TOKEN", userToken: "salam" });
     
  }, [])
  console.log(tokenFromId);
  console.log(UserFromStore);
  // dispatch({ type: "GET_USER", userData: items });
  // dispatch({ type: "GET_TOKEN", userToken: items });
    
  /*async function getProfile() {
      try {
        let res = await fetch(
          "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api/user/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("IdTokenGoogle")}`,
            },
          }
        );
        const data = await res.json();
        setDataUser(data);
        setToken(data.data.idToken);
        
        
       

      } catch (error) {}
      
    }
   
    
   
   
    // useEffect(() => {
    //   getProfile()
    // }, []);

    const aza = () => {
      getProfile()
    }
   
   
    // dispatch({ type: "GET_TOKEN", userToken: Token });
    // dispatch({ type: "GET_USER", userData: dataUser });
    // console.log(UserFromStore);
    // console.log(tokenFromId);*/

  return (
    <div>
      <Home />
      <div className="btn" >Кнопка</div>
    </div>
  );
}
