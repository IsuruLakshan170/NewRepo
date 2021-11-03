import React, { useState, useEffect } from 'react'
import Employee from './Employee'
import axios from "axios";
import './Card.css';
export default function EmployeeList() {
    const [employeeList, setEmployeeList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshEmployeeList();
    }, [])

    const employeeAPI = (url = 'https://localhost:44373/api/Card/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshEmployeeList() {
        employeeAPI().fetchAll()
            .then(res => {
                setEmployeeList(res.data)
            })
            .catch(err => console.log(err))
    }

    

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }


    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
          <div className="galarycard" >
          <img src={data.imageSrc} />
              </div>  
            <div className="card-body">
                <h5 className="imgcontext">{data.cardName}</h5>
            </div>
        </div>
    )


    return (
        <div className="two">
        <div  className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h1 id="galaryhead" className="display-4">Image gallery</h1>
                  <hr className="ruel"></hr>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
             
            </div>
            <div className="col-md-9">
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(employeeList.length / 3))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(employeeList[3 * i])}</td>
                                    <td>{employeeList[3 * i + 1] ? imageCard(employeeList[3 * i + 1]) : null}</td>
                                    <td>{employeeList[3 * i + 2] ? imageCard(employeeList[3 * i + 2]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
        </div>
    )
}
