import React from "react";
import { useState } from "react";

function RegistrationForm() {
  const [rangeValue, setRangeValue] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState("");

  const handleRangeValue = (event) => {
    setRangeValue(event.target.value);
  };
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-purple-700 font-bold text-center text-4xl mb-8">
        Roller Coaster Maddness
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-2/5">
        <form>
          <label className="  font-bold">Name:</label>
          <input
            type="text"
            className="w-full px-4 py-2 mb-4 border rounded-md "
            onChange={handleUserName}
            required
            name="nameInput"
          />
          <label className="  font-bold">Age:</label>
          <input
            type="number"
            className="w-full px-4 py-2 mb-4 border rounded-md "
            min={10}
            required
            name="age"
          />
          <label className="  font-bold">Email:</label>
          <input
            type="email"
            className="w-full px-4 py-2 mb-4 border rounded-md "
            required
            name="email"
          />
          <label className="  font-bold">Excitement Level: {rangeValue}</label>
          <input
            type="range"
            min="0"
            max="10"
            className="w-full h-5"
            onChange={handleRangeValue}
            name="rangeSlider"
          />
          <button
            type="submit"
            className="bg-purple-700 text-white px-4 py-2 w-full mt-4 rounded-md hover:bg-purple-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        {submitted && (
          <p className="text-purple-700 mt-4 text-center font-bold">
            Get ready for the ride of your life! Hold on tight and enjoy the
            adrenaline rush as you embark on the ultimate rollercoaster
            adventure! Thank you {userName} for joining us on this thrilling
            journey!
          </p>
        )}
      </div>
    </div>
  );
}

// Note from Me (Jafar):
// When I prevented the default action of the button to stop it from refreshing the page, it caused unexpected issues.
// The submit button lost its functionality as a submit button, allowing users to simply click "submit" without filling out the form.
// I know I need to use an if statement in the handleSubmit function. If the user fills out the entire form and their age is greater than 10 (a guard function),
// the function should reach setSubmitted and change the value to true.
// However, I'm unsure how to do this!! I've spent around 4 hours trying to figure it out, with the rest of the task taking less than 1.5 hours.

export default RegistrationForm;
