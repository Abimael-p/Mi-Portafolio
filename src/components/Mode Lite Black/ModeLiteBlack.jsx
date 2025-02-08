import SelectorLiteIcon from "../icons/selector_lite_icon";
import SelectorBlackIcon from "../icons/selector_black_icon";
import "./ModeLiteBlack.css";

const ModeLiteBlack = ({ modeLite, buttonMode }) => {

  return (
    <section className="button_lite_black">
      <button className="button" onClick={buttonMode}>
        {modeLite ? (
          <SelectorBlackIcon className="icon_selector_black" />
        ) : (
          <SelectorLiteIcon className="icon_selector" />
        )}
      </button>
    </section>
  );
};

export default ModeLiteBlack;