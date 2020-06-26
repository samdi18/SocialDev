import React from "react";

const Home = () => {
  return (
    <div className="home-flex">
      <main>
        <div className="content">
          <p>Collaborate.</p>
          <p>Share.</p>
          <p>Learn.</p>
        </div>

        <img
          src={require("../../images/main.svg")}
          alt=""
          className="main-img"
        />
      </main>

      <section>
        <div className="visual-buttons">
          <div className="round-btn round-1"></div>
          <div className="round-btn round-2"></div>
          <div className=" round-btn exit">
            <img
              src={require("../../images/cross.svg")}
              alt=""
              className="cross-img"
            />
          </div>
        </div>
        {/* In line style test */}
        <p className="code">
          <span style={{ color: "#AEA9DE" }}>function </span>
          <span style={{ color: "#CDE871" }}>
            welcome<span>()</span>
          </span>
          <span>{" {"}</span>
          <p style={({ color: "#958BF1" }, { marginLeft: "20px" })}>
            let
            <span style={{ color: "white" }}> initial =</span>{" "}
            <span style={{ color: "#CDE871" }}> 10;</span>
          </p>
          <p style={({ color: "#AEA9DE" }, { marginLeft: "20px" })}>
            return
            <span style={{ color: "#958BF1" }}>
              ` <span style={{ color: "#F4FFCC" }}>To</span>
              <span>
                ${" "}
                <span style={{ color: "white" }}>
                  {" "}
                  {"{initial"} / 0 {"} "}
                </span>
                <span style={{ color: "#F4FFCC" }}>and Beyond</span>
              </span>
              `<span style={{ color: "#F4FFCC" }}>;</span>
              <p style={{ marginLeft: "-20px" }}>{" }"}</p>
            </span>
          </p>
        </p>

        <div className="code-box">
          <input type="text" />
          <button className="submit-btn">
            <img
              src={require("../../images/arrow.svg")}
              alt=""
              className="arrow-img"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
