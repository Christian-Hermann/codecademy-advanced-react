// Hook Reviews
// Do not put hooks in a conditional. Put the conditional iside of the hook
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 10)
      document.body.style.backgroundImage =
        "linear-gradient(to right, coral, teal)";
  }, [counter]);

  return (
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
    </div>
  );
}

export default App;

// Creating own custom hook
import { useState, useEffect } from "react";

// Create your custom hook here!
export const useGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    const onSuccess = (e) => {
      setCurrentLocation({
        latitude: e.coords.latitude.toFixed(3),
        longitude: e.coords.longitude.toFixed(3),
      });
    };
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);
  return currentLocation;
};
