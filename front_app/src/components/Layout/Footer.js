import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-light text-white">
      <div style={styles.footer}>
        <p>
          KKRIT-Online-Courses &copy; Площадка с образовательными материалами
          для студентов ККРИТ <i className="icon-small fas fa-globe"></i>
        </p>

        <a
          href="https://github.com/Foult080"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Created by @foult080{" "}
            <i className="icon-small fab fa-github-square"></i>
          </p>
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    paddingTop: "0.5rem",
    paddingBottom: "1rem",
    color: "#007bff",
  },
};

export default Footer;
