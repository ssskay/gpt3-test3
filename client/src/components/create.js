import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    skill: "",
    statement: "",
    position: "",

  });

  const [id, setId] = useState()

  const [responseform, setResponseForm] = useState({
    aicorrectness: "",
  });
  const [choice, setChoice] = useState()
  const [toggle, setToggled] = useState(false)

  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  function updateResponseForm(value) {
    return setResponseForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function rateAI(e){
    e.preventDefault();
     // When a post request is sent to the create url, we'll add a new record to the database.

     const data = await fetch(`http://localhost:5001/record/update/${id}`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({...responseform,airesponse:choice}),
     }) .then((res)=> res.json())  
       .catch(error => {
         window.alert(error);
         return;
       });
       console.log(data)
     setResponseForm({ aicorrectness: ""});
       navigate("/");
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    const data = await fetch("http://localhost:5001/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }) .then((res)=> res.json())  
      .catch(error => {
        window.alert(error);
        return;
      });
      console.log(data)
    // setForm({ name: "", position: "", level: "" });
    console.log(data.choices[0].text)
    setChoice(data.choices[0].text)
    setId(data._id)
    
  }


  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Submission</h3>
      <form onSubmit={onSubmit}>

        <div className="form-group">
          <label htmlFor="position">Statement</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            onChange={(e) => updateForm({ position: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Type of statement: </label>
          <h3 > </h3>


          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionCapableOf"
              value="CapableOf"
              checked={form.level === "CapableOf"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionCapableOf"
              className="form-check-label">Capable Of
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionLong-tailKnowledge"
              value="Long-tailKnowledge"
              checked={form.level === "Long-tailKnowledge"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionLong-tailKnowledge"
            className="form-check-label">Long-tail Knowledge
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionPlausibility"
              value="Plausibility"
              checked={form.level === "Plausibility"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionPlausibility"
            className="form-check-label">Plausibility
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionComparison"
              value="Comparison"
              checked={form.level === "Comparison"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionComparison"
            className="form-check-label">Comparison
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionPhysical"
              value="Physical"
              checked={form.level === "Physical"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionPhysical"
            className="form-check-label">Physical
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionCausality"
              value="Causality"
              checked={form.level === "Causality"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionCausality"
            className="form-check-label">Causality
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionTemporal"
              value="Temporal"
              checked={form.level === "Temporal"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionTemporal"
            className="form-check-label">Temporal
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionNegation"
              value="Negation"
              checked={form.level === "Negation"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionNegation"
            className="form-check-label">Negation
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionStrategy"
              value="Strategy"
              checked={form.level === "Strategy"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionStrategy"
            className="form-check-label">Strategy
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionEventChain"
              value="EventChain"
              checked={form.level === "EventChain"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionEventChain"
            className="form-check-label">Event Chain
            </label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Ask the AI"
            className="btn btn-primary"
          />
        
        </div>
      </form>
    
      <form onSubmit={rateAI}>

<div className="form-group">
  <label htmlFor="position">The AI's answer: </label>
  <span>{choice}</span>
</div>
<div className="form-group">
  <label htmlFor="position">Rate the AI's response: </label>
  <h3 > </h3>

  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="correct"
      id="correct"
      value="correct"
      checked={responseform.aicorrectness === "correct"}
      onChange={(e) => updateResponseForm({ aicorrectness: e.target.value })}
    />
    <label htmlFor="correct"
      className="form-check-label">Correct!
    </label>
  </div>

  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="incorrect"
      id="incorrect"
      value="incorrect"
      checked={responseform.aicorrectness === "incorrect"}
      onChange={(e) => updateResponseForm({ aicorrectness: e.target.value })}
    />
    <label htmlFor="incorrect"
    className="form-check-label">Incorrect
    </label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="notApplicable"
      id="notApplicable"
      value="notApplicable"
      checked={responseform.aicorrectness === "notApplicable"}
      onChange={(e) => updateResponseForm({ aicorrectness: e.target.value })}
    />
    <label htmlFor="notApplicable"
    className="form-check-label">N/A (AI did not say true or false)
    </label>
  </div>
  
</div>
<div className="form-group">
  <input to="/"
    type="submit"
    value="Submit feedback"
    className="btn btn-primary"
  />

</div>
</form>
      <h3> Reference Table</h3> <button className='btn btn-primary' onClick={() => setToggled(!toggle)}> Show Table</button>
      {toggle && <table class='table'>
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

      </table>}
    </div>
  );
}
