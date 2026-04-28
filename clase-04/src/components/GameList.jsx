import GameCard from "./GameCard";

function GameList({ games }) {
  return (
    <div className="card-list">
      {games.map((juego) => (
        <GameCard key={`game-${juego.id}`} game={juego} />
      ))}
    </div>
  );
}

export default GameList;