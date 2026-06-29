import "./Loader.css";

function Loader({ label = "Loading..." }) {
  return (
    <section className="loader">
      <div className="loader__spinner"></div>
      <span className="loader__label">{label}</span>
    </section>
  );
}

export default Loader;