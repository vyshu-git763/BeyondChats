import logo from "../assets/logo.jpg";
function Header() {
    return (
        <header
            style={{
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #eee",
                backgroundColor: "#ffffff",
                position: "sticky",
                top: 0,
                zIndex: 10
            }}

        >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                    src={logo}
                    alt="BeyondChats Logo"
                    style={{ height: "36px", width: "36px", objectFit: "contain" }}
                />
                <div>
                    <h2 style={{ margin: 0 }}>
                        Beyond<span style={{ color: "#6366f1" }}>Chats</span>
                    </h2>
                    <small style={{ color: "#666" }}>
                        Original & AI-updated blog articles
                    </small>
                </div>
            </div>

            <button
                onClick={() => {
                    const section = document.getElementById("articles-anchor");
                    if (section) {
                        const yOffset = -80;
                        const y =
                            section.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;

                        window.scrollTo({ top: y, behavior: "smooth" });
                    }
                }}
                style={{
                    padding: "8px 14px",
                    borderRadius: "6px",
                    border: "1px solid #6366f1",
                    background: "transparent",
                    color: "#6366f1",
                    cursor: "pointer"
                }}
            >
                View Articles
            </button>
        </header>
    );
}

export default Header;
