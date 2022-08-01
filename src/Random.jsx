import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Divider from "./Divider";
import Footer from "./Footer";
import Header from "./Header";
import CardSkeleton from './CardSkeleton'

const Random = () => {
  const [loading, setLoading] = useState(true);
  const [chosenCard, setchosenCard] = useState({});

  //A Set of random 2 characters that return around 50 cards when used with the search API
  const rand2Char = [
    "ar",
    "aw",
    "at",
    "ay",
    "au",
    "ap",
    "as",
    "ad",
    "ah",
    "al",
    "ac",
    "ab",
    "an",
    "am",
    "er",
    "ew",
    "et",
    "ey",
    "eu",
    "ep",
    "es",
    "ed",
    "eh",
    "el",
    "ec",
    "eb",
    "en",
    "em",
    "ir",
    "it",
    "iu",
    "ip",
    "is",
    "id",
    "ih",
    "il",
    "ic",
    "ib",
    "in",
    "im",
    "or",
    "ow",
    "ot",
    "oy",
    "ou",
    "op",
    "os",
    "od",
    "oh",
    "ol",
    "oc",
    "ob",
    "on",
    "om",
    "oo",
    "ur",
    "ut",
    "up",
    "us",
    "ud",
    "uh",
    "ul",
    "uc",
    "ub",
    "un",
    "um",
  ];

  //Placeholder Card for styling
  const card = {
    artist: "Ian Ameling",
    attack: 0,
    cardId: "BOT_558",
    cardSet: "The Boomsday Project",
    collectible: true,
    cost: 1,
    dbfId: "49265",
    flavor: "“Now I feel... REALLY icky.”",
    health: 2,
    img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/5154e8c25586da7abc399cdfdd524d6a8030c7fcdc32998644a8858353d5e47e.png",
    imgGold:
      "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/147c22a27bc00cee4cb9e6c7b87cbcc3e99efe9f6eac46905ed85902f8eac4f8.png",
    length: 1,
    name: "Test Subject",
    playerClass: "Priest",
    rarity: "Rare",
    text: "<b>Deathrattle:</b> Return any spells you cast on this nminion to your hand.",
    type: "Minion",
  };

  function getRandomCard() {
    const options = {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${rand2Char[randomNumberInRange(0, rand2Char.length - 1)]}`,
    headers: {
        'X-RapidAPI-Key': '7c5996bba2msh726006bfc80dfb6p18749fjsn6825db7901b8',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        const cards = response.data.filter(card => card.img && card.collectible && card.cardSet != "Hero Skins")
        console.log(cards)
        const chosen = cards[randomNumberInRange(0, cards.length - 1)]
        console.log(chosen)
        setchosenCard(chosen)
        setLoading(false)
    })
    .catch(function (error) {
        console.error(error);
    });
  }

  function randomNumberInRange(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(num)
    return num
  }

  useEffect(() => {
    return () => {
        getRandomCard()
    };
  }, []);

  return (
    <>
      <Header />
      <Divider />
      {loading ? <CardSkeleton /> : <Card card={chosenCard} random={true}/>}
      <Divider />
      <Footer />
    </>
  );
};

export default Random;
