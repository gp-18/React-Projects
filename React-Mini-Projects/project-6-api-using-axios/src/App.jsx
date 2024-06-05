import React from "react";
import InputField from "./InputField";
import axios from "axios";
const App = () => {
  const [getCountry, setGetCountry] = React.useState("");
  const [countryData, setCountryData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleGetCountry = (data) => {
    setGetCountry(data);
  };

  React.useEffect(() => {
    const fetchCountry = async () => {
      try {
        setLoading(true);
        setError("");

        if (getCountry) {
          const response = await axios.get(
            `https://api.api-ninjas.com/v1/country?name=${getCountry}`,
            {
              headers: {
                "X-Api-Key": "Vqemfmr+nB7M8hd6hCpsDQ==eqeozA19eC4O9Qdz",
              },
            }
          );
          console.log(response.data[0]);
          setCountryData(response.data[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [getCountry]);

  return (
    <>
      <InputField handleGetCountry={handleGetCountry} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error....</h1>}
      {(loading && countryData )? null : (
        <>
          <h1>{countryData.name}</h1>
          <h1>{countryData.capital}</h1>
        </>
      )}
    </>
  );
};

export default App;
