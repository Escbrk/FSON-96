export default function ArticleList({ items }) {
  return (
    <ul>
      {items.map(({ objectID, title, author, url }) => {
        return (
          <li key={objectID}>
            <h2>{author}</h2>
            <a href={url} target="_blank" rel="noreferrer noopener">
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
