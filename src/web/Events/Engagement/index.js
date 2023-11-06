import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"


const Index = (props) => {

  console.log("example") // watch input value by passing the name of it

  return (
    <div className={`d-flex flex-column align-items-start justify-content-start`}>
      <p>Engagement description</p>
      <form>
        <label>Hope you will be join us on 26/Nov/2023:</label>
        <label className='d-block'>
        <input
          type="radio"
          name="availability"
        // value={inputs.age || ""}
        // onChange={handleChange}
        />Yes
        </label>
        <label className='d-block'>
        <input
          type="radio"
          name="availability"
        // value={inputs.age || ""}
        // onChange={handleChange}
        />No
        </label>
        <label className='d-block'>
        <input
          type="radio"
          name="availability"
        // value={inputs.age || ""}
        // onChange={handleChange}
        />Not sure
        </label>


        <input type="submit" />
      </form>
    </div>
  )
}

export default Index;


