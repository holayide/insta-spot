import Card from "./card";
import { usePosts } from "./context/usePosts";

function Cards() {
  const { cards } = usePosts();

  return (
    <section className="section-grid" id="card-container">
      {cards.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </section>
  );
}

export default Cards;
