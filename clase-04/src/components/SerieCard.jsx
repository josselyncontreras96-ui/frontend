function SerieCard({ serie }) {
  return (
    <article className="card">
      <h3>{serie.title}</h3>
      <p>Año: ${serie.year}</p>

      {/* <p>{serie.year == 2026 ? "Estreno" : ""}</p> */}
      
      <p>{serie.year == 2026 && "Estreno"}</p>
      <p>{serie.year < 2010 && 'Clásico'}</p>
    </article>
  );
}

export default SerieCard;