import { type FormEvent } from "react";

const NewGoal = () => {
  const handleSumit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSumit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
