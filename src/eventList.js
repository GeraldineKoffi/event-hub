import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import utilisateur1 from './dashboard/utilisateur1.png'
import rech from './mesImages/rech.jpg'
import {Link} from "react-router-dom"



function EventList() {
    const [data, setDate] = useState([])
    const [search, setSearch]=useState([])
     
    useEffect(() => {
        Axios.get("http://localhost:4000/event")
            .then(res => {
                setDate(res.data)

            }
            ).catch(err => console.log(err))
    },[]);

   const handleSearch=(e)=>{
    let value = e.target.value;
    setSearch(value)
   }
   console.log(setSearch)
    const arr = data 
    .filter((val)=>{
            return val.title.includes(search)
    })
    
  .map((data, index) => {
        return (
            
            <div className='eventList' key={index}>
                <h5 className='title'>{data.title} </h5>
                <img src={utilisateur1} className="imag" alt=''/>
                <h5 className='descrp'>{data.description}</h5>
                <h5 className='date'> {data.date}</h5>
                <h5 className='status'> {data.statut}</h5>
                <h5 className='prix'>Prix Ticket:{data.prix}</h5>
                <Link to={"./ticket"}><button className='valid'>Achat de ticket</button></Link>
            </div>
            
        )
    })
    return (
        <div className='eventL'>
            <div className='recherche'>
            <img src={rech} alt="" className='img'/>
            <input type="text" name="search" id="search" placeholder=" un événement ici en entrant son titre" onChange={handleSearch} />
            </div>
            <h1>Events List</h1>
            <hr/>
            {arr}
            
        </div>
    )
}
export default EventList