import {useEffect, useState} from "react";

import './table_css.css'; 
import FilterOptions from "../filter/Filter.jsx";


const API = "http://127.0.0.1:5000/api/apdata";
const API2 = "http://127.0.0.1:5000/api/data";
let res="",data2="",dynamicObjectName="",ab="";
let dynamicValueName="";

const Tab = () => {

    const [datamc, setUsers] = useState([]);
    const [tempData, setTempData] = useState({});

    const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [headerLabel, setHeaderLabel] = useState('Strike');

  const handleOption1Change = (event) => {
    const selectedOption = event.target.value;
    setOption1(selectedOption);
    setOption2(''); // Reset option2
    console.log('Option 1:', selectedOption);
  };

  const handleOption2Change = (event) => {
    const selectedOption = event.target.value;
    setOption2(selectedOption);
    setOption1(''); // Reset option1
    console.log('Option 2:', selectedOption);
  };

  const handleOption3Change = (event) => {
    const selectedOption = event.target.value;
    setOption3(selectedOption);
    setOption4(''); // Reset option4
    console.log('Option 3:', selectedOption);
    setHeaderLabel(selectedOption ? 'Strike' : 'Expiry Date');
  };

  const handleOption4Change = (event) => {
    const selectedOption = event.target.value;
    setOption4(selectedOption);
    setOption3(''); // Reset option3
    console.log('Option 4:', selectedOption);
    setHeaderLabel(selectedOption ? 'Expiry Date' : 'Strike');

  };
    const fetchUsers = async (url) => {
        try {
            const res2 = await fetch(url);
            const data = await res2.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e) 
        }
    }

    const fetchAPI2 = async (url) => {
        try {
           res = await fetch(url);
           data2 = await res.json();

        //    data2["MAININDX27JUL23"];
          console.log('Data2 Object:', data2);  //whole json nifty
           dynamicObjectName = Object.values(data2)[0];
          dynamicValueName = Object.keys(data2)[0];
          console.log('Dynamic Object Name:', dynamicObjectName);
        //   const dynamicData = data2[dynamicObjectName];
        //   console.log('Dynamic Data:', dynamicData);
      setTempData(dynamicObjectName);
          // Now you can access the properties ins;ide the dynamicData object
           ab = dynamicObjectName.strike;
        //   const expiry = dynamicData.expiry;
        //   const changeInOI = dynamicData.data.Change_in_oi;
      
          console.log('Strike:', ab);
          console.log("NIFTY",dynamicValueName);
        //   console.log('Expiry:', expiry);
        //   console.log('Change in OI:', changeInOI);
        if (data2.length > 0) {
            setTempData(tempData);
        }
        } catch (e) {
          console.error(e);
        }
      };
    useEffect(() => {
      fetchUsers(API);
      fetchAPI2(API2);

    }, [])

    
const UserData = ({users,temp}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, Ask, Ask_2,Ask_Qty,Ask_Qty_2,Bid,Bid_2,Bid_Qty,Bid_Qty_2,Chng,Chng_2,Chng_in_OI,Chng_in_OI_2,IV,IV_2,LTP,LTP_2,OI,OI_2,Strike,Volume,Volume_2,Expiry} = curUser;
                    const dynamicDataObject = curUser[Object.keys(curUser)[0]];

                    return (
                        
                        <tr key={id}>
                        <td></td>
                        <td>{ab}</td>
                        <td>{Chng_in_OI}</td>
                        <td>{dynamicDataObject.strike}</td>
                        <td>{Volume}</td>
                        <td>{LTP}</td>
                        <td>{Chng}</td>
                        <td>{Bid_Qty}</td>
                        <td>{Bid}</td>
                        <td>{Ask}</td>
                        <td>{Ask_Qty}</td>
                        <td>{headerLabel==='Strike'?Strike:Expiry}</td>
                        <td>{Bid_Qty_2}</td>
                        <td>{Bid_2}</td>
                        <td>{Ask_2}</td>
                        <td>{Ask_Qty_2}</td>
                        <td>{Chng_2}</td>
                        <td>{LTP_2}</td>
                        <td>{IV_2}</td>
                        <td>{Volume_2}</td>
                        <td>{Chng_in_OI_2}</td>
                        <td>{OI_2}</td>
                         <td></td>
                     </tr>
                    )
                })

            }
        </>   
    )
}

    
 
    
    return <>

    


<div className="box-filter">

  
<div className="filter-options">
  <div className="filter11">
  <label htmlFor="filter1">View Options Contracts for:</label>
  <select id="filter1" value={option1} onChange={handleOption1Change} defaultValue="allbanks">
    <option value="allbanks">ALLBANKS</option>
    <option value="mainidx">MAINIDX</option>
    <option value="financials">FINANCIALS</option>
    <option value="midcap">MIDCAP</option>
  </select>
  </div>
 
<div class="space"></div>
 
<div className='filter13'>
  <label htmlFor="filter3">Expiry Date:</label>
  <select id="filter3" value={option3} onChange={handleOption3Change}>
    <option value="">Expiry Date &nbsp;</option>&nbsp;
    <option value="06-Jul-2023">06-Jul-2023</option><option value="13-Jul-2023">13-Jul-2023</option><option value="20-Jul-2023">20-Jul-2023</option><option value="27-Jul-2023">27-Jul-2023</option><option value="03-Aug-2023">03-Aug-2023</option><option value="31-Aug-2023">31-Aug-2023</option><option value="28-Sep-2023">28-Sep-2023</option><option value="28-Dec-2023">28-Dec-2023</option><option value="28-Mar-2024">28-Mar-2024</option><option value="27-Jun-2024">27-Jun-2024</option><option value="26-Dec-2024">26-Dec-2024</option><option value="26-Jun-2025">26-Jun-2025</option><option value="24-Dec-2025">24-Dec-2025</option><option value="25-Jun-2026">25-Jun-2026</option><option value="31-Dec-2026">31-Dec-2026</option><option value="24-Jun-2027">24-Jun-2027</option><option value="30-Dec-2027">30-Dec-2027</option><option value="29-Jun-2028">29-Jun-2028</option></select>

  </div>



<div className="filter14">Or &nbsp;
<label htmlFor="filter4">Filter 4:</label>
  <select id="filter4" value={option4} onChange={handleOption4Change}>
    <option value="">Strike Price</option>
<option value="11,000.00">11,000.00</option><option value="12,000.00">12,000.00</option><option value="12,700.00">12,700.00</option><option value="13,000.00">13,000.00</option><option value="13,500.00">13,500.00</option><option value="14,000.00">14,000.00</option><option value="14,500.00">14,500.00</option><option value="15,000.00">15,000.00</option><option value="16,000.00">16,000.00</option><option value="16,400.00">16,400.00</option><option value="16,450.00">16,450.00</option><option value="16,500.00">16,500.00</option><option value="16,550.00">16,550.00</option><option value="16,600.00">16,600.00</option><option value="16,650.00">16,650.00</option><option value="16,700.00">16,700.00</option><option value="16,750.00">16,750.00</option><option value="16,800.00">16,800.00</option><option value="16,850.00">16,850.00</option><option value="16,900.00">16,900.00</option><option value="16,950.00">16,950.00</option><option value="17,000.00">17,000.00</option><option value="17,050.00">17,050.00</option><option value="17,100.00">17,100.00</option><option value="17,150.00">17,150.00</option><option value="17,200.00">17,200.00</option><option value="17,250.00">17,250.00</option><option value="17,300.00">17,300.00</option><option value="17,350.00">17,350.00</option><option value="17,400.00">17,400.00</option><option value="17,450.00">17,450.00</option><option value="17,500.00">17,500.00</option><option value="17,550.00">17,550.00</option><option value="17,600.00">17,600.00</option><option value="17,650.00">17,650.00</option><option value="17,700.00">17,700.00</option><option value="17,750.00">17,750.00</option><option value="17,800.00">17,800.00</option><option value="17,850.00">17,850.00</option><option value="17,900.00">17,900.00</option><option value="17,950.00">17,950.00</option><option value="18,000.00">18,000.00</option><option value="18,050.00">18,050.00</option><option value="18,100.00">18,100.00</option><option value="18,150.00">18,150.00</option><option value="18,200.00">18,200.00</option><option value="18,250.00">18,250.00</option><option value="18,300.00">18,300.00</option><option value="18,350.00">18,350.00</option><option value="18,400.00">18,400.00</option><option value="18,450.00">18,450.00</option><option value="18,500.00">18,500.00</option><option value="18,550.00">18,550.00</option><option value="18,600.00">18,600.00</option><option value="18,650.00">18,650.00</option><option value="18,700.00">18,700.00</option><option value="18,750.00">18,750.00</option><option value="18,800.00">18,800.00</option><option value="18,850.00">18,850.00</option><option value="18,900.00">18,900.00</option><option value="18,950.00">18,950.00</option><option value="19,000.00">19,000.00</option><option value="19,050.00">19,050.00</option><option value="19,100.00">19,100.00</option><option value="19,150.00">19,150.00</option><option value="19,200.00">19,200.00</option><option value="19,250.00">19,250.00</option><option value="19,300.00">19,300.00</option><option value="19,350.00">19,350.00</option><option value="19,400.00">19,400.00</option><option value="19,450.00">19,450.00</option><option value="19,500.00">19,500.00</option><option value="19,550.00">19,550.00</option><option value="19,600.00">19,600.00</option><option value="19,650.00">19,650.00</option><option value="19,700.00">19,700.00</option><option value="19,750.00">19,750.00</option><option value="19,800.00">19,800.00</option><option value="19,850.00">19,850.00</option><option value="19,900.00">19,900.00</option><option value="19,950.00">19,950.00</option><option value="20,000.00">20,000.00</option><option value="20,050.00">20,050.00</option><option value="20,100.00">20,100.00</option><option value="20,150.00">20,150.00</option><option value="20,200.00">20,200.00</option><option value="20,250.00">20,250.00</option><option value="20,300.00">20,300.00</option><option value="20,350.00">20,350.00</option><option value="20,400.00">20,400.00</option><option value="20,450.00">20,450.00</option><option value="21,000.00">21,000.00</option><option value="22,000.00">22,000.00</option><option value="23,000.00">23,000.00</option><option value="24,000.00">24,000.00</option>
  </select>
</div>
  
</div>
</div>

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
                    <th>{headerLabel}</th>
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
            <UserData users={datamc} temp={tempData} />
            </tbody>
        </table></div>

    </>
}
export default Tab;
{/* export default Tab;


 const Tab = () => {
    const [data, setUsers] = useState([]);
    useEffect(() => {
      const eventSource = new EventSource(API);
      function handleStream(e){
        console.log(e)
        setUsers(e.data)
      }
      eventSource.onmessage= e=>{handleStream(e)}
      // eventSource.addEventListener("message", (event) => {
      //   const newData = JSON.parse(event.data);
      //   setUsers((prevData) => [...prevData, newData]);
      // });
      eventSource.onerror=e=>{
        eventSource.close()
      }
      return () => {
        eventSource.close();
      };
    }, []); */}

