import React from "react";
import InputField from "./InputField";
import axiosInstance from "./services/axiosInterceptor";

const App = () => {
  const [getCountry, setGetCountry] = React.useState();
  const [countryData, setCountryData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleGetCountry = (data) => {
    setGetCountry(data);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      if (getCountry) {
        setLoading(true);
        try {
          const response = await axiosInstance.get(
            `/country?name=${getCountry}`
          );
          setCountryData(response.data[0]);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [getCountry]);

  return (
    <>
      <InputField handleGetCountry={handleGetCountry} />
      {loading && <h1>Loading...</h1>}
      {loading && countryData ? null : (
        <>
          <h1>{countryData.name}</h1>
          <h1>{countryData.capital}</h1>
        </>
      )}
    </>
  );
};

export default App;
