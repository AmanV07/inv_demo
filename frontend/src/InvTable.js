import React, { useEffect, useState, useRef } from "react";

import { DownloadTableExcel } from 'react-export-table-to-excel';


const Inventory = () => {

  const [dd, setDd] = useState([]);

  const [showTable, setShowTable] = useState(false);

 

  const today = new Date();

  const date = today.toLocaleDateString();

  const time = today.toLocaleTimeString();

 

  const handleClick = () => {

    setShowTable(true);

  };

 

  const getDd = async () => {

    try {

      const response = await fetch(`http://localhost:5000/inv`);

      const jsonData = await response.json();

      setDd(jsonData);

      // console.log(jsonData)

    } catch (err) {

      console.error(err.message);

    }

  };

 

  useEffect(() => {

    getDd();

  }, []);

 

  console.log(dd)

 

  const total = dd.reduce((sum, item) => item.dd_ev + item.ws_ev + item.ss_ev + item.dd_sv + item.ws_sv + item.ss_sv, 0);

 

  const dds = useRef(null);

  const ws = useRef(null);

  const dw = useRef(null);

  const con = useRef(null);

 

  return (

<> 

     

      <h3 align="center" >"Memorandum for Inventory of Dedicated Stores"</h3>

      {dd.map(p=>(<h3 align="center">Date of Transaction upto : {p.r_upto}</h3>))}

      <div align="center">

      <button align="center" onClick={handleClick}>View Memorandum</button></div>

     




       {/* Table1 */}

       {showTable && (

      <table className="dddd" border="1" align="center" width="99%" ref={dds}>

       

        <thead align="left">

        {dd.map(p=>(
          <tr >

            <th colspan="3" align="left">Status of Inventory of DD Stores as on {p.r_upto}</th>

          </tr>))}

          <tr align="center">

            <th>Sr. No</th>  

            <th>Description</th>

            <th> In Rs. Lakhs</th>

 

          </tr>

 

          {dd.map(p => (

              <tr  key={p.sno}>

              <th align="right">1.</th>

              <th> Value of Stock Ending December, 2022</th>

              <th>{p.dd_vse}</th>

              </tr>))}

       

            {dd.map(p => (

            <tr key={p.sno}>  

              <th align="right">2.</th>        

            <th>Value of Stock Received During January, 2023 </th>

            <th>{p.dd_vsr}</th>

            </tr>))}

 

           

            {dd.map(p => (

              <tr key={p.sno}>

              <th align="right">3.</th>        

            <th>Value of Stock Issued During January, 2023 </th>

            <th>{p.dd_vsi}</th>

            </tr>))}

 

            {dd.map(p => (

            <tr key={p.sno}>

            <th align="right">4.</th>          

            <th>Value of Stock as on  (1+2-3=4) </th>

            <th>{p.dd_vs}</th>

            </tr>))}

            </thead>

            <tbody>

            </tbody>

      </table> )}

 

      {showTable && (<DownloadTableExcel

                    filename="Inventory details on DD Stores"

                    sheet="DD Stores"

                    currentTableRef={dds.current}

                >

                  <div align="left" >

                   <button > Export excel </button></div>

 

                </DownloadTableExcel>)}

                      {/* Table 2 */}

      <br/><br/>

      {showTable && (<table className="dddd" border="1" align="center" width="99%" ref={ws}>

       

        <thead align="left">

        {dd.map(p=>(
          <tr >

            <th colspan="3" align="left">Status of Inventory of Workshops as on {p.r_upto}:</th>

          </tr>))}

          <tr align="center">

            <th>Sr. No</th>  

            <th>Description</th>

            <th> In Rs. Lakhs</th>

 

          </tr>  

          {dd.map(p => (

              <tr key={p.sno}>

              <th align="right">1.</th>

              <th> Value of Stock Ending December, 2022</th>

              <th>{p.ws_vse}</th>

              </tr>))}

 

            {dd.map(p => (

            <tr key={p.sno}>  

              <th align="right">2.</th>        

            <th>Value of Stock Received During January, 2023 </th>

            <th>{p.ws_vsr}</th>

            </tr>))}

 

            {dd.map(p => (

            <tr key={p.sno}>

            <th align="right">3.</th>        

            <th>Value of Stock Issued During January, 2023 </th>

            <th>{p.ws_vsi}</th>

            </tr>))}

 

            {dd.map(p => (

            <tr key={p.sno}>

              <th align="right">4.</th>          

            <th>Value of Stock as on  (1+2-3=4) </th>

            <th>{p.ws_vs}</th>

            </tr>))}

            </thead>

            <tbody>

            </tbody>

      </table>  )}

      {showTable && (<DownloadTableExcel

                    filename="Inventory details on Workshops"

                    sheet="Workshops"

                    currentTableRef={ws.current}

                >

                <div align="left">

                   <button> Export excel </button></div>

 

                </DownloadTableExcel>)}




           {/* Table 3 */}

           <br/>

           {showTable && (<table className="dddd" border="1" align="center" width="99%" ref={dw}>

       

        <thead align="left">
        {dd.map(p=>(
          <tr >

            <th colspan="3" align="left">Status of Inventory of Different Works as on {p.r_upto}:</th>

          </tr>))}

          <tr align="center">

            <th>Sr. No</th>  

            <th>Description</th>

            <th> In Rs. Lakhs</th>

          </tr>

 

            {dd.map(p => (

              <tr key={p.sno}>

              <th align="right">1.</th>

              <th> Value of Stock Ending December, 2022</th>

              <th>{p.ss_vse}</th>

              </tr>))}

 

              {dd.map(p => (

              <tr key={p.sno}>  

            <th align="right">2.</th>        

            <th>Value of Stock Received During January, 2023 </th>

            <th>{p.ss_vsr}</th>

            </tr>))}

           

            {dd.map(p=>(

            <tr key= {p.sno}>  

              <th align="right">3.</th>        

            <th width="71%">Value of Stock Issued to CWIP and O & M During January, 2023 </th>

            <th>{p.ss_vsi}</th>

            </tr>))}

 

            {dd.map(p => (

            <tr key={p.sno}>

              <th align="right">4.</th>          

            <th>Value of Stock as on  (1+2-3=4) </th>

            <th>{p.ss_vs}</th>

            </tr>))}

            </thead>

            <tbody>

            </tbody>

      </table>)}

      {showTable && (<DownloadTableExcel

                    filename="Inventory details on Different Works"

                    sheet="Different Works"

                    currentTableRef={dw.current}

                >

 
                <div align="left">
                   <button> Export excel </button></div>

 

                </DownloadTableExcel>)}

 

      {/* Table 4 */}

      <br/>

      {showTable && (

       

      <table className="dddd" border="1" align="center" width="99%" ref={con}>

       

        <thead align="left">

        {dd.map(p=>(
          <tr ><th colspan="4" align="left">Status of Inventory (DD Stores + Workshops + Works) as on {p.r_upto}:</th></tr>))}

          <tr align="center">

            <th>Sr. No</th>  

            <th>Description</th>

            <th> Equipment & Spares etc.</th>

            <th width="19%">Scrap</th>

          </tr>

       

 

        {dd.map(p => (

            <tr  key={p.sno}>

              <th align="right">1. </th>

              <th >  Value of Stock in DD Stores</th>

              <th>{p.dd_ev}</th>

              <th>{p.dd_sv}</th>

              </tr>))}

 

            {dd.map(p => (

            <tr key={p.key}>

              <th align="right">2.</th>        

            <th>Value of Stock in Workshops  </th>

            <th>{p.ws_ev}</th>

            <th>{p.ws_sv}</th>

            </tr>))}

 

            {dd.map(p => (

            <tr key={p.sno}>

            <th align="right">3.</th>        

            <th> Value of Stock in Site Stores </th>

            <th>{p.ss_ev}</th>

            <th>{p.ss_sv}</th>

            </tr>))}

 

            {dd.map(p => (

            <tr key={p.key}>

              <th></th>          

            <th align="right">Total : </th>

            <th colSpan="2">{total}</th>

           

            </tr>))}

            <tr><th colspan="4" align="right">Print Date Time : {date} {time}</th></tr>

            </thead>

        <tbody>

         </tbody>

      </table>)}

      {showTable && (<DownloadTableExcel

                    filename="Inventory details"

                    sheet="Consolidated"

                    currentTableRef={con.current}

                >

 
                <div align="left">
                   <button> Export excel </button></div>

 

                </DownloadTableExcel>)}

           

 

      </>

 

  );

};

 

export default Inventory;