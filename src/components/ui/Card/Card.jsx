import "./Card.css";
export const Card = ({ title, description, image, active, onToggleActive }) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm card1">
        <div className="card-body">
          <figure className="contain">
            <img src={image || "src/assets/extension-icon.jpg"} alt={title} />
          </figure>
          <div className="contain">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="buttons">
          <div className="btn-c1">
            <button className="btn btn-outlin">Remove</button>
          </div>
          <div className="btn-c2">
            <input
              type="checkbox"
              checked={active}
              onChange={onToggleActive}
              className="toggle"
            />
          </div>
        </div>
      </div>
    </>
  );
};
