import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    excitementLevel: "5",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isUnderAged, SetIsUnderAged] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setIsSubmitted(false);
  };

  const handleSliderChange = (e) => {
    setFormData({ ...formData, excitementLevel: e.target.value });
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(formData.age) >= 10) {
      SetIsUnderAged(false);
      setIsSubmitted(true);
    } else {
      SetIsUnderAged(true);
      setIsSubmitted(false);
    }
  };
  return (
    <div className="form-container ">
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          {isUnderAged && (
            <div className="input-warrning">Age must be 10 or above.</div>
          )}

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-section">
          <label>Excitement Level: {formData.excitementLevel}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={formData.excitementLevel}
            onChange={handleSliderChange}
            step="1"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {isSubmitted && !isUnderAged && (
        <p className="form-message">
          Get ready {formData.name}! Your thrilling adventure is about to begin!
        </p>
      )}
    </div>
  );
};

export default Form;
