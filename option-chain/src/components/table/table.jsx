import {useEffect, useState} from "react";

import './table_css.css'; 
import FilterOptions from "../filter/Filter.jsx";

const API = "http://127.0.0.1:5000/api/data";

const Tab = () => {
    const [data, setUsers] = useState([]);
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
    // useEffect(() => {
    //     updateHeaderLabel();
    //   }, [option3, option4]);

    useEffect(() => {const interval = setInterval(() => {
      fetchUsers(API);
    }, 20000);
    
    return () => {
      clearInterval(interval);
    };

    }, [])
    
const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, Ask, Ask_2,Ask_Qty,Ask_Qty_2,Bid,Bid_2,Bid_Qty,Bid_Qty_2,Chng,Chng_2,Chng_in_OI,Chng_in_OI_2,IV,IV_2,LTP,LTP_2,OI,OI_2,Strike,Volume,Volume_2,Expiry} = curUser;
          

                    return (
                        
                        <tr key={id}>
                        <td></td>
                        <td>{OI}</td>
                        <td>{Chng_in_OI}</td>
                        <td>{Volume}</td>
                        <td>{IV}</td>
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

    // const updateHeaderLabel = () => {
    //     if (option4!==null) {
    //         setHeaderLabel('ABC');
    //     } else if (option3!==null) {
    //         setHeaderLabel('BC');
    //     } else {
    //         setHeaderLabel('C'); // Default header label when no filter is selected
    //     }
    // };
    
 
    
    return <>

    


<div className="box-filter">

  
<div className="filter-options">
  <div className="filter11">
  <label htmlFor="filter1">View Options Contracts for:</label>
  <select id="filter1" value={option1} onChange={handleOption1Change}>
    <option value="">Select an option  </option>
    <option value="NIFTY">NIFTY</option>
    <option value="finnifty">finnifty</option>
    <option value="banknifty">banknifty</option>
    <option value="midcpnifty">midcpnifty</option>
  </select>
  </div>
 
<div className='12'>
Or &nbsp;

<label htmlFor="filter2">Filter 2:</label>
  <select id="filter2" value={option2} onChange={handleOption2Change}>
    <option value="">Select an option</option>
   <option value="AARTIIND">AARTIIND</option><option value="ABB">ABB</option><option value="ABBOTINDIA">ABBOTINDIA</option><option value="ABCAPITAL">ABCAPITAL</option><option value="ABFRL">ABFRL</option><option value="ACC">ACC</option><option value="ADANIENT">ADANIENT</option><option value="ADANIPORTS">ADANIPORTS</option><option value="ALKEM">ALKEM</option><option value="AMBUJACEM">AMBUJACEM</option><option value="APOLLOHOSP">APOLLOHOSP</option><option value="APOLLOTYRE">APOLLOTYRE</option><option value="ASHOKLEY">ASHOKLEY</option><option value="ASIANPAINT">ASIANPAINT</option><option value="ASTRAL">ASTRAL</option><option value="ATUL">ATUL</option><option value="AUBANK">AUBANK</option><option value="AUROPHARMA">AUROPHARMA</option><option value="AXISBANK">AXISBANK</option><option value="BAJAJ-AUTO">BAJAJ-AUTO</option><option value="BAJAJFINSV">BAJAJFINSV</option><option value="BAJFINANCE">BAJFINANCE</option><option value="BALKRISIND">BALKRISIND</option><option value="BALRAMCHIN">BALRAMCHIN</option><option value="BANDHANBNK">BANDHANBNK</option><option value="BANKBARODA">BANKBARODA</option><option value="BATAINDIA">BATAINDIA</option><option value="BEL">BEL</option><option value="BERGEPAINT">BERGEPAINT</option><option value="BHARATFORG">BHARATFORG</option><option value="BHARTIARTL">BHARTIARTL</option><option value="BHEL">BHEL</option><option value="BIOCON">BIOCON</option><option value="BOSCHLTD">BOSCHLTD</option><option value="BPCL">BPCL</option><option value="BRITANNIA">BRITANNIA</option><option value="BSOFT">BSOFT</option><option value="CANBK">CANBK</option><option value="CANFINHOME">CANFINHOME</option><option value="CHAMBLFERT">CHAMBLFERT</option><option value="CHOLAFIN">CHOLAFIN</option><option value="CIPLA">CIPLA</option><option value="COALINDIA">COALINDIA</option><option value="COFORGE">COFORGE</option><option value="COLPAL">COLPAL</option><option value="CONCOR">CONCOR</option><option value="COROMANDEL">COROMANDEL</option><option value="CROMPTON">CROMPTON</option><option value="CUB">CUB</option><option value="CUMMINSIND">CUMMINSIND</option><option value="DABUR">DABUR</option><option value="DALBHARAT">DALBHARAT</option><option value="DEEPAKNTR">DEEPAKNTR</option><option value="DELTACORP">DELTACORP</option><option value="DIVISLAB">DIVISLAB</option><option value="DIXON">DIXON</option><option value="DLF">DLF</option><option value="DRREDDY">DRREDDY</option><option value="EICHERMOT">EICHERMOT</option><option value="ESCORTS">ESCORTS</option><option value="EXIDEIND">EXIDEIND</option><option value="FEDERALBNK">FEDERALBNK</option><option value="GAIL">GAIL</option><option value="GLENMARK">GLENMARK</option><option value="GMRINFRA">GMRINFRA</option><option value="GNFC">GNFC</option><option value="GODREJCP">GODREJCP</option><option value="GODREJPROP">GODREJPROP</option><option value="GRANULES">GRANULES</option><option value="GRASIM">GRASIM</option><option value="GUJGASLTD">GUJGASLTD</option><option value="HAL">HAL</option><option value="HAVELLS">HAVELLS</option><option value="HCLTECH">HCLTECH</option><option value="HDFC">HDFC</option><option value="HDFCAMC">HDFCAMC</option><option value="HDFCBANK">HDFCBANK</option><option value="HDFCLIFE">HDFCLIFE</option><option value="HEROMOTOCO">HEROMOTOCO</option><option value="HINDALCO">HINDALCO</option><option value="HINDCOPPER">HINDCOPPER</option><option value="HINDPETRO">HINDPETRO</option><option value="HINDUNILVR">HINDUNILVR</option><option value="IBULHSGFIN">IBULHSGFIN</option><option value="ICICIBANK">ICICIBANK</option><option value="ICICIGI">ICICIGI</option><option value="ICICIPRULI">ICICIPRULI</option><option value="IDEA">IDEA</option><option value="IDFC">IDFC</option><option value="IDFCFIRSTB">IDFCFIRSTB</option><option value="IEX">IEX</option><option value="IGL">IGL</option><option value="INDHOTEL">INDHOTEL</option><option value="INDIACEM">INDIACEM</option><option value="INDIAMART">INDIAMART</option><option value="INDIGO">INDIGO</option><option value="INDUSINDBK">INDUSINDBK</option><option value="INDUSTOWER">INDUSTOWER</option><option value="INFY">INFY</option><option value="INTELLECT">INTELLECT</option><option value="IOC">IOC</option><option value="IPCALAB">IPCALAB</option><option value="IRCTC">IRCTC</option><option value="ITC">ITC</option><option value="JINDALSTEL">JINDALSTEL</option><option value="JKCEMENT">JKCEMENT</option><option value="JSWSTEEL">JSWSTEEL</option><option value="JUBLFOOD">JUBLFOOD</option><option value="KOTAKBANK">KOTAKBANK</option><option value="L&amp;TFH">L&amp;TFH</option><option value="LALPATHLAB">LALPATHLAB</option><option value="LAURUSLABS">LAURUSLABS</option><option value="LICHSGFIN">LICHSGFIN</option><option value="LT">LT</option><option value="LTIM">LTIM</option><option value="LTTS">LTTS</option><option value="LUPIN">LUPIN</option><option value="M&amp;M">M&amp;M</option><option value="M&amp;MFIN">M&amp;MFIN</option><option value="MANAPPURAM">MANAPPURAM</option><option value="MARICO">MARICO</option><option value="MARUTI">MARUTI</option><option value="MCDOWELL-N">MCDOWELL-N</option><option value="MCX">MCX</option><option value="METROPOLIS">METROPOLIS</option><option value="MFSL">MFSL</option><option value="MGL">MGL</option><option value="MOTHERSON">MOTHERSON</option><option value="MPHASIS">MPHASIS</option><option value="MRF">MRF</option><option value="MUTHOOTFIN">MUTHOOTFIN</option><option value="NATIONALUM">NATIONALUM</option><option value="NAUKRI">NAUKRI</option><option value="NAVINFLUOR">NAVINFLUOR</option><option value="NESTLEIND">NESTLEIND</option><option value="NMDC">NMDC</option><option value="NTPC">NTPC</option><option value="OBEROIRLTY">OBEROIRLTY</option><option value="OFSS">OFSS</option><option value="ONGC">ONGC</option><option value="PAGEIND">PAGEIND</option><option value="PEL">PEL</option><option value="PERSISTENT">PERSISTENT</option><option value="PETRONET">PETRONET</option><option value="PFC">PFC</option><option value="PIDILITIND">PIDILITIND</option><option value="PIIND">PIIND</option><option value="PNB">PNB</option><option value="POLYCAB">POLYCAB</option><option value="POWERGRID">POWERGRID</option><option value="PVR">PVR</option><option value="PVRINOX">PVRINOX</option><option value="RAMCOCEM">RAMCOCEM</option><option value="RBLBANK">RBLBANK</option><option value="RECLTD">RECLTD</option><option value="RELIANCE">RELIANCE</option><option value="SAIL">SAIL</option><option value="SBICARD">SBICARD</option><option value="SBILIFE">SBILIFE</option><option value="SBIN">SBIN</option><option value="SHREECEM">SHREECEM</option><option value="SHRIRAMFIN">SHRIRAMFIN</option><option value="SIEMENS">SIEMENS</option><option value="SRF">SRF</option><option value="SUNPHARMA">SUNPHARMA</option><option value="SUNTV">SUNTV</option><option value="SYNGENE">SYNGENE</option><option value="TATACHEM">TATACHEM</option><option value="TATACOMM">TATACOMM</option><option value="TATACONSUM">TATACONSUM</option><option value="TATAMOTORS">TATAMOTORS</option><option value="TATAPOWER">TATAPOWER</option><option value="TATASTEEL">TATASTEEL</option><option value="TCS">TCS</option><option value="TECHM">TECHM</option><option value="TITAN">TITAN</option><option value="TORNTPHARM">TORNTPHARM</option><option value="TRENT">TRENT</option><option value="TVSMOTOR">TVSMOTOR</option><option value="UBL">UBL</option><option value="ULTRACEMCO">ULTRACEMCO</option><option value="UPL">UPL</option><option value="VEDL">VEDL</option><option value="VOLTAS">VOLTAS</option><option value="WIPRO">WIPRO</option><option value="ZEEL">ZEEL</option><option value="ZYDUSLIFE">ZYDUSLIFE</option></select>


</div>
<div class="space"></div>
 
<div className='filter13'>
  <label htmlFor="filter3">Filter 3:</label>
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