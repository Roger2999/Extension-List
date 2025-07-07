export const CategoryButtons = ({ filter, setFilter }) => {
  const CATEGORIES = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "inactive", label: "Inactive" },
  ];

  return (
    <>
      {CATEGORIES.map(({ key, label }) => (
        <button
          key={key}
          className={`btn btn-outline${filter === key ? " btn-active" : ""}`}
          onClick={() => setFilter(key)}
        >
          {label}
        </button>
      ))}
    </>
  );
};
