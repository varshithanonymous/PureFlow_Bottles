import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          background: "linear-gradient(to right, #00AEEF, #1B5E20)",
          color: "#fff",
          textAlign: "center",
          padding: "5rem 0",
        }}
      >
        <div className="container">
          <h1>Eco-Friendly Water Bottles</h1>
          <p>
            Stay hydrated and eco-conscious with our sustainable, stylish water
            bottles.
          </p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="features"
        style={{ padding: "3rem 0", backgroundColor: "#f5f5f5" }}
      >
        <div className="container grid grid-3">
          <div>
            <h2>Durable Design</h2>
            <p>Built to last with premium, sustainable materials.</p>
          </div>
          <div>
            <h2>Leak-Proof</h2>
            <p>Perfect for on-the-go hydration without spills.</p>
          </div>
          <div>
            <h2>Custom Branding</h2>
            <p>
              Add your logo or design for unique and personalized bottles.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="about"
        style={{ padding: "3rem 0", textAlign: "center" }}
      >
        <div className="container">
          <h2>About Us</h2>
          <p>
            We’re dedicated to providing eco-friendly, high-quality water
            bottles that help reduce plastic waste and keep you hydrated.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" style={{ padding: "3rem 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Our Services</h2>
          <div className="grid grid-2">
            <div>
              <h3>Wholesale Orders</h3>
              <p>Perfect for businesses and events.</p>
            </div>
            <div>
              <h3>Custom Design</h3>
              <p>Create bottles that match your brand perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="testimonials"
        style={{
          padding: "3rem 0",
          background: "#1B5E20",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2>What Our Customers Say</h2>
          <p>
            "Best water bottles I’ve ever owned! Stylish, durable, and eco-friendly."
          </p>
          <p>- Alex D.</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" style={{ padding: "3rem 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Pricing Plans</h2>
          <div className="grid grid-3">
            <div>
              <h3>Starter</h3>
              <p>$19.99 per bottle</p>
            </div>
            <div>
              <h3>Premium</h3>
              <p>$29.99 per bottle</p>
            </div>
            <div>
              <h3>Custom</h3>
              <p>Contact us for bulk pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="faq"
        style={{ padding: "3rem 0", backgroundColor: "#f5f5f5" }}
      >
        <div className="container">
          <h2>FAQ</h2>
          <div className="faq-item">
            <h3>What materials are your bottles made of?</h3>
            <p>We use stainless steel and BPA-free materials.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="contact"
        style={{ padding: "3rem 0", textAlign: "center" }}
      >
        <div className="container">
          <h2>Contact Us</h2>
          <p>Email: support@waterbottles.com</p>
        </div>
      </section>
    </div>
  );
}