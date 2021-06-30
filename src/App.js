import React, { useState } from "react";
import "./App.css";

// data
import { data } from "./data";

// global varibale
var wlist = [];

const Layout = () => {
  const [people, setPeople] = useState(data);
  const [wished, setWished] = useState([]);

  const markall = () => {
    setPeople([]);
    setWished(data);
  };

  const removePerson = (id) => {
    const list = people.filter((p) => p.id !== id);

    for (var x of people) {
      if (x.id === id) {
        wlist.push(x);
        break;
      }
    }

    setPeople(list);
    setWished(wlist);
  };
  return (
    <React.Fragment>
      <div className="list-container">
        <section>
          <h2>{people.length} wishes left</h2>
          {people.map((person) => {
            const { profile, name, age, id } = person;
            return (
              <div className="person-wrapper" key={id}>
                <div className="info">
                  <img src={profile} alt="" />
                  <div className="id">
                    <h3>{name}</h3>
                    <span>{age} years</span>
                  </div>
                </div>
                <button type="button" onClick={() => removePerson(id)}>
                  Mark Wished
                </button>
              </div>
            );
          })}

          <button id="clear" type="button" onClick={markall}>
            mark all
          </button>
        </section>
        <section>
          <h2>{wished.length} wished</h2>
          {wished.map((person) => {
            const { profile, name, age, id } = person;
            return (
              <div className="person-wrapper" key={id}>
                <div className="info">
                  <img src={profile} alt="" />
                  <div className="id">
                    <h3>{name}</h3>
                    <span>{age} years</span>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </React.Fragment>
  );
};

export default Layout;
