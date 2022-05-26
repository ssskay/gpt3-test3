import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    {/* <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td> */}
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5001/record/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return; 
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5001/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h1>Welcome!</h1>
      <h4>Thank you for helping us with our study! Today we are going to play a game against an AI. </h4>
      <h5>You will be randomly assigned three types of logical statements to write and the AI will try to guess it correctly. 
        If you fool the AI, you get a point. Otherwise, the AI gets a point. Best of 3 wins! </h5>
      <h5>Here are each of the categories:</h5>
      <table class = 'table'>
  <tr>
    <th>Category</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Capable of</td>
    <td>Whether an object is capable of performing an action</td>
    <td>A watch is capable of telling the past time</td>
  </tr>
  <tr>
    <td>Long-tail knowledge</td>
    <td>The question contains factual long-tail information</td>
    <td>Washington DC is located further south than Washington State</td>
  </tr>

  <tr>
    <td>Plausibility</td>
    <td>Quantifiers or always-never relations</td>
    <td>The peak of a mountain almost always reaches above the the tree line</td>
  </tr>

  <tr>
    <td>Comparison</td>
    <td>Comparison between two objects</td>
    <td>The end of a baseball bat is larger than the handle</td>
  </tr>

  <tr>
    <td>Physical</td>
    <td>Physical commonsense</td>
    <td>You build the walls on a house before putting on the roof</td>
  </tr>

  <tr>
    <td>Causality</td>
    <td>Cause and effect relations</td>
    <td>If you get into an accident because you have been drinking alcohol, you will be arrested</td>
  </tr>

  <tr>
    <td>Temporal</td>
    <td>Temporal understanding</td>
    <td>No one had ever reached the top of Mount Everest before 1977</td>
  </tr>

  <tr>
    <td>Negation</td>
    <td>A negation phrase</td>
    <td>A mock trial is something with no legal consequence</td>
  </tr>

  <tr>
    <td>Strategy</td>
    <td>Reasoning steps are implicit and should be inferred using a strategy</td>
    <td>Blood banks almost never take cash or checks as deposits</td>
  </tr>

  <tr>
    <td>Event chain</td>
    <td>Relating to the order of events</td>
    <td>Putting on shoes is done in this order normally: slips shoes onto feet, then tie shoelaces</td>
  </tr>

</table>
<h3> Current submissions:</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>

          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>

      <Link to="/create">
      <button className="nav-link" to="/create">
      Start Game!
      </button>
      </Link>
    </div>
    
  );
 
  
}
