import { useTranslation } from "react-i18next";

function ButtonLeft({ clickLeft }: { clickLeft: () => void }) {
  const [t] = useTranslation("global");
  return (
    <button
      type="button"
      className="single moveShape"
      title="left-button"
      onClick={clickLeft}
    >
      <div className="triangle-left center"></div>
      <div className="moveshape">{t("content.moveShape")}</div>
    </button>
  );
}

export default ButtonLeft;
