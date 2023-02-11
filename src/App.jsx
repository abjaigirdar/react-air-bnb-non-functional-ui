import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./components/Data";

function App() {
  const cardElements = Data.map((elements) => {
    return <Card key={elements.id} {...elements} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="main-card-div">{cardElements}</div>
    </div>
  );
}

export default App;

/* <Card
key={elements.id}
img={elements.coverImg}
ratings={elements.stats.rating}
reviewCount={elements.stats.reviewCount}
country={elements.location}
title={elements.title}
price={elements.price}
openSpots={elements.openSpots}
location={elements.location}
/> */
