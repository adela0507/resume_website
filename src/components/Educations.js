import React from 'react'
import { Link } from 'react-router-dom'

function Educations() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EDUCATION</strong>
          </h6>
          <table className="striped">
            <thead>
              <th>Certificate</th>
              <th>Date</th>
              <th></th>
            </thead>
          </table>
          <tbody>
            <tr>
              <td>WEB DEV</td>
              <td>Jan 2020</td>
              <td> <Link to='/details' className='btn blue lighten-2' > View </Link> </td>
            </tr>
            <tr>
              <td> tech gadgets</td>
              <td>june 2020</td>
              <td><Link to='details' className='btn blue lighten-2' >View</Link></td>
            </tr>
            <tr>
              <td> Other</td>
              <td>june 2020</td>
              <td><Link to='details' className='btn blue lighten-2' >View</Link></td>
            </tr>
          </tbody>
        </div>
      </div>
      
    </div>
  )
}

export default Educations
