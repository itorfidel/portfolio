import React from "react";
import "./styles/App.scss";
import Home from "./routes/Home";
import { defaultFallbackInView } from "react-intersection-observer";

defaultFallbackInView(true);

const App: React.FC = () => {
  return <Home />;
};

export default App;
