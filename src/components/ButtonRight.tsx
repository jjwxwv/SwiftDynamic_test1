import { useTranslation } from "react-i18next";

function ButtonRight({ clickRight }: { clickRight: () => void }) {
  const [t] = useTranslation("global");
  return (
    <button
      className="single moveShape"
      title="right-button"
      type="button"
      onClick={clickRight}
    >
      <div className="triangle-right center"></div>
      <div className="moveshape">{t("content.moveShape")}</div>
    </button>
  );
}

export default ButtonRight;
