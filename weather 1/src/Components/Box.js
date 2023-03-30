import React, { useEffect, useState } from "react";

export default function Box() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://open-weather13.p.rapidapi.com/city/${search}/?rapidapi-key=97c33d8443msh21cb00badde2cfbp1ef10ejsnc8445e41a104`;
      const response = await fetch(url);
    const resJson = await response.json();
    console.log(resJson);
    
      setCity(response.main);
  
    };

    fetchApi();
  }, []);

  return (
    <div>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            // value={search}
            name=""
            id=""
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errMsg">No data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}</h1>
              <h3 className="tempmin_max">
                Min : 5.25 deg Cel | Max : 5.25 deg Cel
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </div>
  );
}
