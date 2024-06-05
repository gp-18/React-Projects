import React from "react";

const InputField = ({handleGetCountry}) => {
  const [country, setCountry] = React.useState("");

  const handleCountry = (e) => {
    e.preventDefault();
    handleGetCountry(country);
    setCountry("");
  };
  return (
    <>
      <form onSubmit={handleCountry}>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input 
        type="submit" 
        value="submit" />
      </form>
    </>
  );
};

export default InputField;
