import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import SafeComponent from "./SafeComponent";

import "./index.scss";
const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));

const App = () => (
  <div className=" text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
    </SafeComponent>
    <div>Pdp</div>
    <Suspense fallback={<div>Loading...</div>}>
      <Footer />
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
