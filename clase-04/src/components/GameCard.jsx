function GameCard({ game }) {
  return (
    <article className="card">
      <h3>{game.title}</h3>
      <p>platform: {game.platform}</p>
    </article>
  );
}

export default GameCard;