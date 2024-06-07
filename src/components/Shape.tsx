function Shape({
  shape,
  clickShape,
}: {
  shape: string;
  clickShape: () => void;
}) {
  return (
    <button
      className="single"
      type="button"
      title={`${shape}`}
      onClick={clickShape}
    >
      <div className={`${shape} shape center`}></div>
    </button>
  );
}

export default Shape;
