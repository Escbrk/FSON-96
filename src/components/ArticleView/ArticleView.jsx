export default function ArticleView({ article: { topic, text } }) {
  return (
    <article>
      <h1>{topic}</h1>
      <p>{text}</p>
    </article>
  );
}
