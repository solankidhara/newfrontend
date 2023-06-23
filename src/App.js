import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RouteSelector from "./Routes/RouteSelector";
import "./utils/intercepter";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <RouteSelector />
    </div>
  );
}

export default App;
