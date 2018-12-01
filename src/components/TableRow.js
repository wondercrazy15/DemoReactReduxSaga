import React from 'react';

const TableRow = (props) => {
    return( 
        <tr>                   
          <td>
            {props.name}
          </td>
          <td>
            {props.city}
          </td>
          <td>            
          <p data-placement="top" data-toggle="tooltip" title="Edit">
            <button className="btn btn-primary btn-xs"  data-title="Edit" onClick={props.click} ><span className="glyphicon glyphicon-pencil"></span>
            </button>
          </p>
          </td>
          <td>
          <p data-placement="top" data-toggle="tooltip" title="Delete">
            <button className="btn btn-danger btn-xs" data-title="Delete"   onClick={props.DeleteClick}  ><span className="glyphicon glyphicon-trash"></span>
            </button>
          </p>
          </td>
        </tr>
        )
}

export default TableRow;