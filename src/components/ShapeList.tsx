import { Flex } from "antd";
import Shape from "./Shape";

function ShapeList({
  shape,
  isActive,
  clickShape,
}: {
  shape: string[];
  isActive: boolean;
  clickShape: () => void;
}) {
  const upperRow = shape.slice(0, Math.floor(shape.length / 2));
  const lowerRow = shape.slice(Math.floor(shape.length / 2));
  return (
    <Flex vertical gap="middle">
      <Flex align="middle" justify={isActive ? "end" : "center"} gap="middle">
        {upperRow.map((value) => (
          <Shape shape={value} key={value} clickShape={clickShape} />
        ))}
      </Flex>
      <Flex align="middle" justify={isActive ? "center" : "end"} gap="middle">
        {lowerRow.map((value) => (
          <Shape shape={value} key={value} clickShape={clickShape} />
        ))}
      </Flex>
    </Flex>
  );
}

export default ShapeList;
