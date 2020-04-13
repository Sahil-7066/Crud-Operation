import React from "react";

function View({ rowdata, deleterecord, data }) {
  return (
    <tr>
      <td id="td1"> {rowdata.id} </td>
      <td id="td2"> {rowdata.name} </td>

      <td id="td3"> {rowdata.sname} </td>

      <td>
        <button
          id="b2"
          class="btn btn-primary"
          onClick={() => {
            if (window.confirm("Delete data")) {
              deleterecord(rowdata);
            }
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default View;
