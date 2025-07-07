import "./Card.css";
export const Card = ({
  title,
  description,

  active,
  onToggleActive,
  onDelete,
}) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm card1">
        <div className="card-body">
          <figure className="contain">
            <img src={"src/assets/extension-icon.jpg"} alt={title} />
          </figure>
          <div className="contain">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="buttons">
          <div className="btn-c1">
            <button onClick={onDelete} className="btn btn-outline">
              Remove
            </button>
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
