import '../../src/App.css';

export const NewCard = ({title, description, source, image }) => {


    const imgUrl = image ? image : "https://placehold.co/200x200";
    const sourceUrl = source.startsWith('http') ? source : `https://${source}`;

  return (
    <div className="news-card">
        <img src={imgUrl} alt={title} />
        <div className="news-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
              Fuente: <a href={sourceUrl} target="_blank" rel="noopener noreferrer">{source}</a>
            </p>
        </div>
    </div>
  )
}

