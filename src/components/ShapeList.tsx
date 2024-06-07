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
  const upperRow = [shape[0], shape[1], shape[2]];
  const lowerRow = [shape[3], shape[4], shape[5]];
  return (
    <Flex vertical gap="middle">
      <Flex align="middle" justify={isActive ? "end" : "center"} gap="middle">
        {/* <Row align="middle" justify={isActive ? "end" : "center"} gutter={16}> */}
        {upperRow.map((value) => (
          <Shape shape={value} key={value} clickShape={clickShape} />
        ))}
        {/* </Row> */}
      </Flex>
      <Flex align="middle" justify={isActive ? "center" : "end"} gap="middle">
        {/* <Row align="middle" justify={isActive ? "center" : "end"} gutter={16}> */}
        {lowerRow.map((value) => (
          <Shape shape={value} key={value} clickShape={clickShape} />
        ))}
        {/* </Row> */}
      </Flex>
    </Flex>
  );
}

export default ShapeList;
