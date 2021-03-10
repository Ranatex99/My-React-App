import React, { Fragment, useState } from 'react';
import { Table } from 'react-bootstrap'


const Staff=(props)=>{

    const [list]=useState([
    {Name:"Manu",age:20,level:13.5},
    {Name:"Tanu",age:21,level:11.5},
    {Name:"Shaka",age:24,level:16.5},
    {Name:"Thakur",age:30,level:9.5},
    {Name:"John",age:25,level:10.5},
    {Name:"Kora",age:28,level:15.5},
    {Name:"Prya",age:32,level:17.5},
    {Name:"Anjali",age:34,level:18.5},
    {Name:"Mustafa",age:18,level:11.5},
    {Name:"Kabir",age:27,level:8.5},
    {Name:"Alex",age:19,level:7.5}
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

                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{list.Name}</td>
                        <td>{list.age}</td>
                        <td>{list.level}</td>
                    </tr>
    
                    )  }
            </tbody>
        </Table>
        </Fragment>
 )
}
export default Staff;