import React from "react";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Layout from "./containers/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Navbar></Navbar>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default App;
