import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Browse.css";
import "./Components.css";
import Divider from "./Divider";
import Header from "./Header";
import SearchBG from "./assets/search-bg.jpg";
import { Button, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ManaCrystal from "./assets/crystal.png";
import "./Sidebar.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import Footer from "./Footer";
const Browse = () => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cardSet, setCardSet] = useState([]);
  const [filteredCardSet, setFilteredCardSet] = useState([]);
  const [manaFilter, setManaFilter] = useState("NONE");
  const [selectedClass, setSelectedClass] = useState("NONE");
  const [selectedType, setSelectedType] = useState("NONE");
  const [selectedRarity, setSelectedRarity] = useState("NONE");
  const [selectedSet, setSelectedSet] = useState("voyage-to-the-sunken-city");
  const [selectedSort, setSelectedSort] = useState("MANA_LOW_TO_HIGH");

  const options = {
    method: "GET",
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${searchTerm}`,
    headers: {
      "X-RapidAPI-Key": "7c5996bba2msh726006bfc80dfb6p18749fjsn6825db7901b8",
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  const getCardsFromSearch = (event) => {
    event?.preventDefault();

    if (!searchTerm) {
      return setCardSet(cardSet);
    }

    axios
      .request(options)
      .then(function (response) {
        const cardsData = response.data;
        const cardsList = cardsData.filter(
          (card) => card.img && card.collectible && card.cardSet != "Hero Skins"
        );
        setCardSet(cardsList);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  function getCardsBySet() {
    const options = {
      method: "GET",
      url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/%7B${selectedSet}%7D`,
      headers: {
        "X-RapidAPI-Key": "7c5996bba2msh726006bfc80dfb6p18749fjsn6825db7901b8",
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const cardsData = response.data;
        const cardsList = cardsData.filter(
          (card) => card.img && card.collectible && card.cardSet != "Hero Skins"
        );

        setCardSet(cardsList);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  async function applyFilters() {
    let filteredCardSet = cardSet;

    //Filter By Mana
    if (manaFilter !== "NONE" && manaFilter !== "SEVEN_UP") {
      filteredCardSet = filteredCardSet.filter(
        (card) => card.cost == manaFilter
      );
    } else if (manaFilter === "SEVEN_UP") {
      filteredCardSet = filteredCardSet.filter((card) => card.cost >= 7);
    }

    //Filter By Class
    if (selectedClass !== "NONE") {
      filteredCardSet = filteredCardSet.filter(
        (card) => card.playerClass === selectedClass
      );
    }

    //Filter By Creature Type
    if (selectedType !== "NONE") {
      filteredCardSet = filteredCardSet.filter(
        (card) => card.race === selectedType
      );
    }

    //Filter By Rarity
    if (selectedRarity !== "NONE") {
      filteredCardSet = filteredCardSet.filter(
        (card) => card.rarity === selectedRarity
      );
    }

    //Employ Sorts
    if (selectedSort === "MANA_LOW_TO_HIGH") {
      filteredCardSet.sort((a, b) => a.cost - b.cost);
    } else if (selectedSort === "MANA_HIGH_TO_LOW") {
      filteredCardSet.sort((a, b) => b.cost - a.cost);
    } else if (selectedSort === "A_TO_Z") {
      filteredCardSet.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "Z_TO_A") {
      filteredCardSet.sort((a, b) => b.name.localeCompare(a.name));
    }

    console.log(cardSet)
    setFilteredCardSet(filteredCardSet);
    if(cardSet.length != 0) {
      setLoading(false)
      console.log('done')
    }
  }

  useEffect(() => {
    if (!searchTerm) {
      getCardsBySet();
    }
  }, [
    manaFilter,
    selectedClass,
    selectedType,
    selectedRarity,
    selectedSort,
    selectedSet,
    searchTerm,
  ]);

  useEffect(() => {
    applyFilters();
  }, [cardSet]);

  return (
    <>
      <>
        <div className={`sidebar ${menuOpen && "active"}`}>
          <div className="sidebar__content">
            <IconButton
              onClick={() => setMenuOpen(false)}
              className="closeFilter__button"
            >
              <CloseIcon />
              <p>Close</p>
            </IconButton>
            <h1>Sort By:</h1>
            <ul className="sidebar__menuSection">
              <li>
                <select
                  className="sort"
                  onChange={(e) => setSelectedSort(e.target.value)}
                >
                  <option value="MANA_LOW_TO_HIGH">Mana: Low to High</option>
                  <option value="MANA_HIGH_TO_LOW">Mana: High to Low</option>
                  <option value="A_TO_Z">Card Name: A to Z</option>
                  <option value="Z_TO_A">Card Name: Z to A</option>
                </select>
              </li>
              <Button className="applyFilter__button" onClick={() => setMenuOpen(false)}>Apply Sort</Button>
            </ul>
            <h1>Filters:</h1>
            <ul className="sidebar__menuSection">
              <li>
                <select
                  className="filter"
                  onChange={(e) => setSelectedSet(e.target.value)}
                >
                  <option value="voyage-to-the-sunken-city">
                    Voyage to the Sunken City
                  </option>
                  <option value="NONE">All Sets(search required)</option>
                  <option value="murder-at-castle-nathria">
                    Murder at Castle Nathria
                  </option>
                  <option value="fractured-in-alterac-valley">
                    Fractured in Alterac Valley
                  </option>
                  <option value="united-in-stormwind">
                    United in Stormwind
                  </option>
                  <option value="forged-in-the-barrens">
                    Forged in the Barrens
                  </option>
                  <option value="core">Core Set</option>
                  <option value="madness-at-the-darkmoon-faire">
                    Madness at the Darkmoon Faire
                  </option>
                  <option value="scholomance-academy">
                    Scholomance Academy
                  </option>
                  <option value="ashes-of-outland">Ashes of Outland</option>
                  <option value="descent-of-dragons">Descent of Dragons</option>
                  <option value="saviors-of-uldum">Saviors of Uldum</option>
                  <option value="rise-of-shadows">Rise of Shadows</option>
                  <option value="rastakhans-rumble">Rastakhan's Rumble</option>
                  <option value="the-boomsday-project">
                    The Boomsday Project
                  </option>
                  <option value="the-witchwood">The Witchwood</option>
                  <option value="kobolds-catacombs">
                    Kobolds and Catacombs
                  </option>
                  <option value="knights-of-the-frozen-throne">
                    Knights of the Frozen Throne
                  </option>
                  <option value="journey-to-ungoro">Journey to Un'Goro</option>
                  <option value="mean-streets-of-gadgetzan">
                    Mean Streets of Gadgetzan
                  </option>
                  <option value="one-night-in-karazhan">
                    One Night in Karazhan
                  </option>
                  <option value="whispers-of-the-old-gods">
                    Whispers of the Old Gods
                  </option>
                  <option value="the-league-of-explorers">
                    League of Explorers
                  </option>
                  <option value="the-grand-tournament">
                    The Grand Tournament
                  </option>
                  <option value="blackrock-mountain">Blackrock Mountain</option>
                  <option value="goblins-vs-gnomes">Goblins vs Gnomes</option>
                  <option value="the-curse-of-naxxramas">
                    Curse of Naxxramas
                  </option>
                  <option value="legacy">Legacy</option>
                </select>
              </li>
              <li>
                <select
                  className="filter"
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="NONE">All Classes</option>
                  <option value="Druid">Druid</option>
                  <option value="Mage">Mage</option>
                  <option value="Paladin">Paladin</option>
                  <option value="Rogue">Rogue</option>
                  <option value="Warlock">Warlock</option>
                  <option value="Warrior">Warrior</option>
                  <option value="Priest">Priest</option>
                  <option value="Shaman">Shaman</option>
                  <option value="Hunter">Hunter</option>
                  <option value="Demon Hunter">Demon Hunter</option>
                  <option value="Neutral">Neutral</option>
                </select>
              </li>
              <li>
                <select
                  className="filter"
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="NONE">All Minion Types</option>
                  <option value="Beast">Beast</option>
                  <option value="Demon">Demon</option>
                  <option value="Dragon">Dragon</option>
                  <option value="Elemental">Elemental</option>
                  <option value="Mech">Mech</option>
                  <option value="Murloc">Murloc</option>
                  <option value="Naga">Naga</option>
                  <option value="Pirate">Pirate</option>
                  <option value="Quilboar">Quilboar</option>
                  <option value="Totem">Totem</option>
                </select>
              </li>
              <li>
                <select
                  className="filter"
                  onChange={(e) => setSelectedRarity(e.target.value)}
                >
                  <option value="NONE">All Rarities</option>
                  <option value="Common">Common</option>
                  <option value="Rare">Rare</option>
                  <option value="Epic">Epic</option>
                  <option value="Legendary">Legendary</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </>
      <Header />
      <Divider />
      <section id="search">
        <figure className="backgroundImg">
          <img src={SearchBG} />
        </figure>
        <div className="content">
          <form onSubmit={getCardsFromSearch}>
            <input
              type="text"
              placeholder="Search All Cards"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit">
              <SearchIcon />
            </Button>
          </form>
        </div>
      </section>
      <Divider />
      <section id="filters">
        <ul className="mana-cost">
          <li className="mana__title">Mana Cost</li>
          <li
            onClick={() => setManaFilter(0)}
            className={`mana-symbol ${manaFilter === 0 && "chosen-filter"}`}
          >
            <img src={ManaCrystal} alt="" />
            <h2>0</h2>
          </li>
          <li
            onClick={() => setManaFilter(1)}
            className={`mana-symbol ${manaFilter === 1 && "chosen-filter"}`}
          >
            <img src={ManaCrystal} alt="" />
            <h2>1</h2>
          </li>
          <li
            onClick={() => setManaFilter(2)}
            className={`mana-symbol ${manaFilter === 2 && "chosen-filter"}`}
          >
            <img src={ManaCrystal} alt="" />
            <h2>2</h2>
          </li>
          <li
            onClick={() => setManaFilter(3)}
            className={`mana-symbol ${manaFilter === 3 && "chosen-filter"}`}
          >
            <img src={ManaCrystal} alt="" />
            <h2>3</h2>
          </li>
          <li
            onClick={() => setManaFilter(4)}
            className={`mana-symbol ${manaFilter === 4 && "chosen-filter"}`}
          >
            <img src={ManaCrystal} alt="" />
            <h2>4</h2>
          </li>
          <li
            onClick={() => setManaFilter(5)}
            className={`mana-symbol ${manaFilter === 5 && "chosen-filter"}`}
          >
            <img src={ManaCrystal} alt="" />
            <h2>5</h2>
          </li>
          <li
            onClick={() => setManaFilter(6)}
            className={`mana-symbol ${manaFilter === 6 && "chosen-filter"}`}
          >
            <img src={ManaCrystal} alt="" />
            <h2>6</h2>
          </li>
          <li
            onClick={() => setManaFilter("SEVEN_UP")}
            className={`mana-symbol ${
              manaFilter === "SEVEN_UP" && "chosen-filter"
            }`}
          >
            <img src={ManaCrystal} alt="" />
            <h2 className="mana-seven">7+</h2>
          </li>
          <li
            onClick={() => setManaFilter("NONE")}
            className={`mana-symbol ${
              manaFilter === "NONE" && "chosen-filter"
            }`}
          >
            <img src={ManaCrystal} alt="" />
            <h2 className="mana-all">All</h2>
          </li>
        </ul>
        <IconButton
          onClick={() => setMenuOpen(true)}
          className="openFilter__button"
          disableRipple={true}
        >
          <TuneIcon />
          <p>Filters</p>
        </IconButton>
      </section>
      <Divider />
      <section id="card__list">
        {loading ? <CircularProgress className="card__listLoading"/> : filteredCardSet.map((card) => {
          return (
            <div className="tilt card pic" key={card.cardId}>
              <img src={card.img} />
            </div>
          );
        })}
      </section>
      <Divider />
      <Footer />
    </>
  );
};

export default Browse;
