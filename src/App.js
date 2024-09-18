import {  useJsApiLoader } from "@react-google-maps/api";
import "./App.css";
import Map from "./component/Map";
import { mapOptions } from "./component/MapConfiguration";

function App() {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });
  return (
    <div className="App">
      <Map isLoaded={isLoaded}/>
    </div>
  );
}

export default App;
