import React, { useState } from "react";
import extensionsData from "../../../data/extensions";
import { Card } from "../../ui/Card/Card";
import { CategoryButtons } from "../../ui/CategoryButtons";
import "./dashboard.css";

export const Dashboard = () => {
  // Estado local de extensiones y filtro
  const [extensions, setExtensions] = useState(extensionsData);
  const [filter, setFilter] = useState("all");

  // Handler para alternar el estado activo de una extensión
  const toggleActive = (id) => {
    setExtensions(
      extensions.map((ext) =>
        ext.id === id ? { ...ext, active: !ext.active } : ext
      )
    );
  };

  // Filtrado según el filtro seleccionado
  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "active") return ext.active;
    if (filter === "inactive") return !ext.active;
    return true; // "all"
  });

  return (
    <>
      <div className="container-cards">
        <div className="align-container">
          <div className="header-c">
            <h1 className="item1">Extensions List</h1>
            <div className="item2">
              <CategoryButtons filter={filter} setFilter={setFilter} />
            </div>
          </div>
          <div className="cards-c">
            {filteredExtensions.map((e) => (
              <Card
                key={e.id}
                title={e.title}
                description={e.description}
                image={e.image}
                active={e.active}
                onToggleActive={() => toggleActive(e.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
