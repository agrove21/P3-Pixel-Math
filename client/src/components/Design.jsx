

function Design({pixels}) {
  return (
    <div
    style={{
      display: "grid",
      padding: "20px",
      gridTemplateColumns: `repeat(${ Math.sqrt(pixels?.length) }, 40px)`,
      gap: "2px",
    }}
  >
    {/* Render each pixel */}
    {pixels?.map((color, index) => (
      <div
        key={index}
        style={{
          width: 40,
          height: 40,
          backgroundColor: color,
          border: "1px solid #ddd",
          cursor: "pointer",
        }}
      />
    ))}
  </div>
  )
}

export default Design