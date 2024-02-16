export default function ArticleView({ article: { topic, text } }) {
  return (
    <article>
      <h1>{topic}</h1>
      <p style={{ width: 300, height: 300}}>{text}</p>
    </article>
  );
}
