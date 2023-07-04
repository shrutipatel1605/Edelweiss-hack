
const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, Ask, Ask_2,Ask_Qty,Ask_Qty_2,Bid,Bid_2,Bid_Qty,Bid_Qty_2,Chng,Chng_2,Chng_in_OI,Chng_in_OI_2,IV,IV_2,LTP,LTP_2,OI,OI_2,Strike,Volume,Volume_2} = curUser;
          

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
                        <td>{Strike}</td>
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
export default UserData;