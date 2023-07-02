import {useEffect, useState} from "react";
import UserData from "./table2.jsx";
import './table_css.css'; 

const API = "http://127.0.0.1:5000/api/data";

const Tab = () => {
    const [data, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {const interval = setInterval(() => {
      fetchUsers(API);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
    }, [])

 
    
    return <>
    <div id="divedit">        <table>
            <thead>
            <tr>
      <th colSpan="11">Calls</th>
      <th colSpan="1"></th>
      <th colSpan="11">Puts</th>
    </tr>
              <tr>
            <th></th>
            <th>OI</th>
           
                    <th>Chng in OI</th>
                    <th>Volume</th>
                    <th>IV</th>
                    <th>LTP</th>
                    <th>Chng</th>
                    <th>Bid Qty</th>
                    <th>Bid</th>
                    <th>Ask</th>
                    <th>Ask Qty</th>
                    <th>Strike</th>
                    <th>Bid Qty</th>
                    <th>Bid</th>
                    <th>Ask</th>
                    <th>Ask Qty</th>
                    <th>Chng</th>
                    <th>LTP</th>
                    <th>IV</th>
                    <th>Volume</th>
                    <th>Chng in OI</th>
                    <th>OI</th>
                    <th></th>
            </tr>
            </thead>
            <tbody>
            <UserData users={data}/>
            </tbody>
        </table></div>

    </>
}

export default Tab;



// const Tab = () => {
//     const [data, setUsers] = useState([]);
  
//     useEffect(() => {
//       const eventSource = new EventSource(API);
//       function handleStream(e){
//         console.log(e)
//         setUsers(e.data)
//       }
//       eventSource.onmessage= e=>{handleStream(e)}
  
//       // eventSource.addEventListener("message", (event) => {
//       //   const newData = JSON.parse(event.data);
//       //   setUsers((prevData) => [...prevData, newData]);
//       // });
//       eventSource.onerror=e=>{
//         eventSource.close()
//       }
//       return () => {
//         eventSource.close();
//       };
//     }, []);