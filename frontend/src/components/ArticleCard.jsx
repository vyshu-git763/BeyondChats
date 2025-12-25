function ArticleCard({ article }) {
  const preview = article.content.slice(0, 160) + "...";
  const isUpdated = article.status === "updated";

  return (
    <div
      style={{
        background: "#fff",
        padding: "18px",
        borderRadius: "10px",
        marginBottom: "18px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
      }}
    >
      <span
        style={{
          fontSize: "12px",
          padding: "4px 10px",
          borderRadius: "999px",
          backgroundColor: isUpdated ? "#ecfeff" : "#eef2ff",
          color: isUpdated ? "#0f766e" : "#4338ca",
          fontWeight: 500
        }}
      >
        {isUpdated ? "AI-UPDATED" : "ORIGINAL"}
      </span>

      <h3 style={{ marginTop: "12px" }}>{article.title}</h3>

      <p style={{ color: "#444", lineHeight: "1.6" }}>
        {preview}
      </p>

      <small style={{ color: "#777" }}>
        By {article.author} • {article.category} • {article.published_at}
      </small>
    </div>
  );
}

export default ArticleCard;
