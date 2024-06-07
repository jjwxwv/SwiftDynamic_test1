import { useState } from "react";
import ButtonLeft from "./components/ButtonLeft";
import ButtonRight from "./components/ButtonRight";
import ButtonVertical from "./components/ButtonVertical";
import { Divider, Flex, Select } from "antd";
import ShapeList from "./components/ShapeList";
import { useTranslation } from "react-i18next";

const data = [
  "square",
  "circle",
  "oval",
  "trapezoid",
  "rectangle",
  "parallelogram",
];
// const options: SelectProps["options"] = [
//   { value: 1, label: "EN" },
//   { value: 2, label: "TH" },
// ];
function shuffleItem(array: string[]) {
  const newArr = Array.from(array);
  newArr.forEach((_, i) => {
    const randomNum = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[randomNum]] = [newArr[randomNum], newArr[i]];
  });
  return newArr;
}
function App() {
  const [shape, setShape] = useState<string[]>(data);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [t, i18n] = useTranslation("global");
  function handleClickLeft() {
    setShape((prev) => {
      const firstItem = prev[0];
      const deletedFirstItemArray = prev.slice(1);
      return [...deletedFirstItemArray, firstItem];
    });
  }
  function handleClickRight() {
    setShape((prev) => {
      const lastItem = prev.at(-1)!;
      const deletedFirstItemArray = prev.slice(0, -1);
      return [lastItem, ...deletedFirstItemArray];
    });
  }
  function handleMovePosition() {
    setIsActive((prev) => !prev);
  }
  function handleClickShape() {
    setShape((prev) => shuffleItem(prev));
    console.log(shape);
  }
  function handleChangeLng(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <>
      <Flex justify="space-between" align="center">
        <h1>{t("home.h1")}</h1>
        <Select
          defaultValue={i18n.language}
          style={{ width: 100 }}
          options={[
            { value: "en", label: "en" },
            { value: "th", label: "th" },
          ]}
          onChange={handleChangeLng}
        />
      </Flex>
      <div className="center" style={{ width: "1425px" }}>
        <Flex justify="space-between" gap="middle">
          <ButtonLeft clickLeft={handleClickLeft} />
          <ButtonVertical clickMove={handleMovePosition} />
          <ButtonRight clickRight={handleClickRight} />
        </Flex>
        <Divider />
        <ShapeList
          shape={shape}
          isActive={isActive}
          clickShape={handleClickShape}
        />
      </div>
    </>
  );
}

export default App;
