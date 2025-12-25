import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000")
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        Loading articles...
      </div>
    );
  }

  return (
    <div
      id="articles"
      style={{ maxWidth: "900px", margin: "40px auto", padding: "0 16px" }}
    >
      {articles.length === 0 && (
        <div style={{ textAlign: "center", color: "#777" }}>
          No articles available.
        </div>
      )}

      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticlesPage;
