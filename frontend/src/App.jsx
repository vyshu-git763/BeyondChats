import Header from "./components/Header";
import ArticlesPage from "./pages/ArticlesPage";

function App() {
  return (
    <div>
      <Header />
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #f8fafc, #ffffff)",
          textAlign: "center",
          padding: "0 16px"
        }}
      >
        <div>
          <h1>Explore Beyond<span style={{ color: "#6366f1" }}>Chats</span> Articles</h1>
          <p style={{ color: "#555", maxWidth: "600px" }}>
            Browse original blog posts and their AI-updated versions,
            enhanced using insights from top-ranking articles.
          </p>
        </div>
      </div>

      <div id="articles-anchor">
        <ArticlesPage />
      </div>

    </div>
  );
}

export default App;
