export default function Badge({ state }) {
  const getBadgeColor = () => {
    if (state === "Publicado") return "#16a34a";
    if (state === "Conectado") return "#16a34a";
    if (state === "Programado") return "orange";
    if (state === "Desconectado") return "orange";
    return "default";
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: getBadgeColor(),
        padding: "7px",
        borderRadius: "50px",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <p
        style={{
          color: "var(--text-color)",
          fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        {state}
      </p>
    </div>
  );
}
