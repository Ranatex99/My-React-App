import React, { Fragment, useState } from 'react';
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Listing=(props)=>{

    const [list]=useState([
    {Name:"Manu",age:20,level:13.5},
    {Name:"Tanu",age:21,level:11.5},
    {Name:"Shaka",age:24,level:16.5},
    {Name:"Thakur",age:30,level:9.5}
])

const [hvar,uhvar]=useState("Some Data");

let temp="Target Data";

function send(svar){
    return props.getchild(svar)}
return(
        <Fragment>
         <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody>

                {list.map((list, i) =>
                <Link to={`/Contact/${list.Name}/${list.age}`}>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{list.Name}</td>
                        <td>{list.age}</td>
                        <td>{list.level}</td>
                    </tr>
                </Link>
                    )  }
            </tbody>
            <h1>{hvar.Name} , {hvar.age} , {hvar.level}</h1>
            <button onClick={()=>send(hvar)}>Send To About</button>
        </Table>
        </Fragment>
 )
}
export default Listing;