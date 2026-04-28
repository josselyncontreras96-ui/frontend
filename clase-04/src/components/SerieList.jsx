import SerieCard from "./SerieCard";

function SerieList({ series }) {
  return (
    <div className="card-list">
      {series.map((serie) => (
        <SerieCard key={serie.id} serie={serie} />
      ))}
    </div>
  );
}

export default SerieList;