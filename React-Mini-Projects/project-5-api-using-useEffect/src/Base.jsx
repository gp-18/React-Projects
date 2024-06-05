import React from "react";
import Input from "./Input";

const Base = () => {
  const [getUserName, setGetUserName] = React.useState("");
  const [setUserName, setSetUserName] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const getName = (data) => {
    setGetUserName(data);
  };

  React.useEffect(() => {
    const getUserFromApi = async () => {
      if (getUserName) {
        try {
          const result = await fetch(
            `https://randomuser.me/api/?name=${getUserName}`
          );
          const value = await result.json();
          if (value.results.length > 0) {
            setSetUserName(value.results[0]);
            setErrorMessage(null);
          } else {
            setErrorMessage("No user found");
            setSetUserName(null);
          }
        } catch (e) {
          setErrorMessage("Something went wrong");
          setSetUserName(null);
          console.log(e);
        }
      }
    };
    getUserFromApi();
  }, [getUserName]);

  return (
    <>
      <h1>PROFILE FINDER USING useEFFECT</h1>
      <Input getName={getName} />
      {errorMessage && <h1>{errorMessage}</h1>}
      {setUserName && (
        <div>
          <p>Name: {setUserName.name.first} {setUserName.name.last}</p>
          <p>Email: {setUserName.email}</p>
          <p>Location: {setUserName.location.city}, {setUserName.location.country}</p>
          <img src={setUserName.picture.medium} alt="User" />
        </div>
      )}
    </>
  );
};

export default Base;
