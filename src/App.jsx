import React from "react";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Layout from "./containers/Layout";
import Body from "./containers/Body";

const App = () => {
  return (
    <>
      <Layout>
        <Navbar></Navbar>
        <Body></Body>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default App;
