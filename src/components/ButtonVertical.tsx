import { Flex } from "antd";
import { useTranslation } from "react-i18next";

function ButtonVertical({ clickMove }: { clickMove: () => void }) {
  const [t] = useTranslation("global");
  return (
    <Flex
      className="double "
      component="button"
      justify="space-between"
      title="vertical-button"
      onClick={clickMove}
    >
      <div className="triangle-up center"></div>
      <div className="triangle-down center"></div>
      <div className="movePosition">{t("content.movePosition")}</div>
    </Flex>
  );
}

export default ButtonVertical;
