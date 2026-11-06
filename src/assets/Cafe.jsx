
import React from "react";

const menuItems = [
  {
    name: "Cappuccino",
    category: "Coffee",
    price: "Rs. 450",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=85",
    description: "Rich espresso with creamy steamed milk.",
  },
  {
    name: "Iced Coffee",
    category: "Iced Drinks",
    price: "Rs. 500",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=85",
    description: "Refreshing chilled coffee for your day.",
  },
  {
    name: "Chocolate Cake",
    category: "Cakes",
    price: "Rs. 650",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85",
    description: "Soft chocolate cake with delicious frosting.",
  },
  {
    name: "Sweet Desserts",
    category: "Desserts",
    price: "Rs. 400",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=85",
    description: "A little sweetness to make your day special.",
  },
  {
    name: "Latte",
    category: "Coffee",
    price: "Rs. 480",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85",
    description: "Smooth coffee blended with steamed milk.",
  },
  {
    name: "Cold Coffee",
    category: "Iced Drinks",
    price: "Rs. 520",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85",
    description: "Creamy chilled coffee for coffee lovers.",
  },
  {
    name: "Strawberry Cake",
    category: "Cakes",
    price: "Rs. 600",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=85",
    description: "A lovely fruity treat for cake lovers.",
  },
  {
    name: "Chocolate Dessert",
    category: "Desserts",
    price: "Rs. 450",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=85",
    description: "A delicious chocolate-inspired treat.",
  },
  {
    name: "Americano",
    category: "Coffee",
    price: "Rs. 350",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=85",
    description: "Classic coffee with a rich, bold flavour.",
  },
  {
    name: "Vanilla Cake",
    category: "Cakes",
    price: "Rs. 550",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85",
    description: "Soft cake for a sweet moment.",
  },
  {
    name: "Iced Latte",
    category: "Iced Drinks",
    price: "Rs. 530",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=85",
    description: "Espresso and milk served over ice.",
  },
  {
    name: "Sweet Treats",
    category: "Desserts",
    price: "Rs. 420",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=85",
    description: "Make your coffee break extra special.",
  },
];

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    color: "#4b2921",
    background: "#fff7f4",
    margin: 0,
  },
  nav: {
    background: "#4b2921",
    color: "#fff",
    padding: "18px 6%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
  },
  logo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffc5d0",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  hero: {
    minHeight: 300,
    padding: "55px 7%",
    background:
      "linear-gradient(90deg, #4b2921ee, #4b292188), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=85') center/cover",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },
  heroTitle: {
    fontSize: "clamp(34px, 5vw, 58px)",
    margin: "12px 0",
    maxWidth: 600,
  },
  button: {
    display: "inline-block",
    background: "#e88c9e",
    color: "#fff",
    padding: "13px 23px",
    borderRadius: 30,
    textDecoration: "none",
    fontWeight: "bold",
    marginTop: 12,
  },
  section: {
    padding: "45px 6%",
  },
  heading: {
    textAlign: "center",
    marginBottom: 28,
  },
  title: {
    fontSize: "clamp(27px, 4vw, 38px)",
    margin: "8px 0",
  },
  intro: {
    textAlign: "center",
    lineHeight: 1.8,
    maxWidth: 700,
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 22,
  },
  card: {
    background: "#fff",
    border: "1px solid #f0c5c9",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 5px 16px #54291b12",
    transition: "transform 0.25s, box-shadow 0.25s",
  },
  image: {
    display: "block",
    width: "100%",
    height: 185,
    objectFit: "cover",
    background: "#f7e5df",
  },
  cardBody: {
    padding: 16,
  },
  category: {
    display: "inline-block",
    background: "#ffe0e6",
    color: "#7a302f",
    padding: "6px 11px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "bold",
  },
  cardTitle: {
    fontSize: 20,
    margin: "12px 0 7px",
  },
  description: {
    color: "#725b55",
    lineHeight: 1.5,
    minHeight: 42,
    fontSize: 14,
  },
  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #f5e4df",
    paddingTop: 12,
    marginTop: 12,
  },
  price: {
    color: "#9b4a48",
    fontSize: 17,
    fontWeight: "bold",
  },
  about: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    alignItems: "center",
    gap: 30,
  },
  aboutImage: {
    width: "100%",
    height: 300,
    objectFit: "cover",
    borderRadius: 18,
  },
  banner: {
    background:
      "linear-gradient(90deg, #4b2921e8, #4b292180), url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=85') center/cover",
    color: "#fff",
    borderRadius: 18,
    padding: "35px 7%",
    margin: "0 6%",
  },
  footer: {
    background: "#4b2921",
    color: "#fff",
    padding: 25,
    textAlign: "center",
    marginTop: 35,
  },
};

function Cafe() {
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <a href="#home" style={styles.logo}>Tessa Café ☕</a>
        <div style={styles.links}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#menu" style={styles.link}>Menu</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </nav>

      <section id="home" style={styles.hero}>
        <div>
          <p>WELCOME TO TESSA CAFÉ 💗</p>
          <h1 style={styles.heroTitle}>Fresh Coffee & Sweet Moments</h1>
          <p>Your cozy little corner for coffee & sweets.</p>
          <a href="#menu" style={styles.button}>Explore Our Menu ↓</a>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <div style={styles.about}>
          <img
            style={styles.aboutImage}
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85"
            alt="Cozy café interior"
          />
          <div>
            <p style={{ color: "#b45b69", fontWeight: "bold" }}>OUR STORY</p>
            <h2 style={styles.title}>A Little Place Full of Love</h2>
            <p style={{ lineHeight: 1.9 }}>
              Welcome to Tessa Café, where every cup of coffee brings
              happiness and every dessert makes life sweeter. Enjoy
              beautiful moments, delicious treats and warm memories.
            </p>
            <a href="#menu" style={styles.button}>Discover Our Menu</a>
          </div>
        </div>
      </section>

      <section id="menu" style={styles.section}>
        <div style={styles.heading}>
          <p style={{ color: "#b45b69", fontWeight: "bold" }}>MADE WITH LOVE</p>
          <h2 style={styles.title}>Our Special Menu</h2>
          <p>Discover your favourite coffee and sweet treats.</p>
        </div>

        <div style={styles.grid}>
          {menuItems.map((item) => (
            <article
              key={item.name}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 24px #54291b22";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 16px #54291b12";
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={styles.image}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/700x450/ffe0e6/6b352d?text=Tessa+Cafe";
                }}
              />
              <div style={styles.cardBody}>
                <span style={styles.category}>{item.category}</span>
                <h3 style={styles.cardTitle}>{item.name}</h3>
                <p style={styles.description}>{item.description}</p>
                <div style={styles.cardBottom}>
                  <strong style={styles.price}>{item.price}</strong>
                  <span style={{ color: "#d87588", fontSize: 24 }}>♡</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.banner}>
        <p>A LITTLE TREAT FOR YOU</p>
        <h2 style={styles.title}>Life Is Better with Coffee & Cake!</h2>
        <p>Make your everyday moments extra special with Tessa Café.</p>
        <a href="#contact" style={styles.button}>Contact Us</a>
      </section>

      <section id="contact" style={styles.section}>
        <div style={styles.heading}>
          <p style={{ color: "#b45b69", fontWeight: "bold" }}>LET'S CONNECT</p>
          <h2 style={styles.title}>We Would Love to Hear from You</h2>
          <p>Questions or feedback? Get in touch with Tessa Café.</p>
          <a href="mailto:hello@tessacafe.com" style={styles.button}>
            Email Us
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        <h2>Tessa Café ☕</h2>
        <p>Your cozy little corner for coffee & sweets 💗</p>
        <p>© 2026 Tessa Café. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Cafe;
