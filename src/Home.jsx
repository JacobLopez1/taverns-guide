import React from "react";
import "./Home.css";
import "./Components.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Divider from "./Divider";
import Footer from "./Footer";
import { Button } from "@mui/material";
import BG from "./assets/background.jpg";
import SubBG1 from "./assets/highlight-bg1.jpg";
import SubBG2 from "./assets/highlight-bg2.jpg";
import Split from "./Split";

const Home = () => {
  return (
    <>
      <Header />
      <Divider />
      <section id="main">
        <div className="main__container">
          <figure className="backgroundImg">
            <img src={BG} />
          </figure>
          <div className="main__content">
            <h1>The most trusted online Hearthstone database</h1>
            <p>
              Filter through and examine 1000+ cards from the game's history.
              Now featuring the newest expansion, "Voyage to the Sunken City"!
            </p>
            <Link className="button__link" to="/browse">
              <Button className="main__button">Browse All Cards</Button>
            </Link>
          </div>
        </div>
      </section>
      <Divider />
      <section id="split__sections">
        <Split
          image={SubBG2}
          title="Random Card"
          content="Refresh your knowledge with a random selection from our database"
        />
      </section>
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
