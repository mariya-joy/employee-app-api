import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmployeeNavbar from './EmployeeNavbar'

const ViewAllEmployee = () => {
    const[employee,changeEmployee]=useState(
        {"status":"success","data":[],"message":"Successfully! All records has been fetched."}
    )
    const fetchData=()=>{
        axios.get("https://dummy.restapiexample.com/api/v1/employees").then(
            (response)=>{
                changeEmployee(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <EmployeeNavbar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div style={{ textAlign: "center", padding: "30px" }}>
                                    <h2>Student List</h2>
                                    <table border="1" cellSpacing="0" cellPadding="10" className="table table-bordered table-striped" style={{ margin: "0 auto", width: "80%" }}>
                                        <thead style={{ backgroundColor: "#f2f2f2" }}>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Salary</th>
                                                <th>Age</th>
                                                <th>Profile Image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {employee.data.map(
                                                (value, index) =>{ 
                                                    return(
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.employee_name}</td>
                                                        <td>{value.employee_salary}</td>
                                                        <td>{value.employee_age}</td>
                                                        <td>{value.profile_image}</td>
                                                    </tr>
                                                    )
                                                }
                                                )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewAllEmployee