// import { Col } from "antd";

function Shape({
  shape,
  clickShape,
}: {
  shape: string;
  clickShape: () => void;
}) {
  return (
    // <Col>
    <button
      className="single"
      type="button"
      title={`${shape}`}
      onClick={clickShape}
    >
      <div className={`${shape} shape center`}></div>
    </button>
    // </Col>
  );
}

export default Shape;
