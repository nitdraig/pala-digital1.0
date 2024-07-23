import { Button } from "cui-react";
import { useState } from "react";
import PropTypes from "prop-types";
const SearchForm = ({ handleSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;

    handleSendMessage(inputValue);
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center  space-y-4"
    >
      <div className="mt-4 lg:w-[400px] md:w-[300px] w-[16rem] mx-auto flex items-center">
        <input
          placeholder="Como te llamas?"
          required
          name="message"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="flex-1 py-2 px-3 rounded-md bg-gray-200 text-black focus:outline-none"
        />
        <Button color="primary" type="submit" size="medium" text="Empezar" />
      </div>
    </form>
  );
};
SearchForm.propTypes = {
  handleSendMessage: PropTypes.func.isRequired,
};

export default SearchForm;
