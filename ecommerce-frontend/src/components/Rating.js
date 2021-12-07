import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        <FontAwesomeIcon
          icon={value >= 1 ? faStar : value >= 0.5 ? faStarHalf : faStar}
          style={{ color }}
        />
        <FontAwesomeIcon
          icon={value >= 2 ? faStar : value >= 1.5 ? faStarHalf : faStar}
          style={{ color }}
        />
        <FontAwesomeIcon
          icon={value >= 3 ? faStar : value >= 2.5 ? faStarHalf : faStar}
          style={{ color }}
        />
        <FontAwesomeIcon
          icon={value >= 4 ? faStar : value >= 3.5 ? faStarHalf : faStar}
          style={{ color }}
        />
        <FontAwesomeIcon
          icon={value > 5 ? faStar : value >= 4.5 ? faStarHalf : faStar}
          style={{ color }}
        />
      </span>
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
