export const CategoryButtons = ({ filter, setFilter }) => {
  return (
    <>
      <button
        className={`btn btn-outline b${filter === "all" ? " btn-active" : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`btn btn-outline b${
          filter === "active" ? " btn-active" : ""
        }`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`btn btn-outline b${
          filter === "inactive" ? " btn-active" : ""
        }`}
        onClick={() => setFilter("inactive")}
      >
        Inactive
      </button>
    </>
  );
};
