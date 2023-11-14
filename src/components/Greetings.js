import "../styles/Greetings.css";

export const Greetings = (props) => {
  return (
    <div className="greetings-container item item-1">
      <h1>
        Bonjour <span className="username">{props.name}</span>
      </h1>
      <h4>Félicitation ! Vous avex explosé vos objectifs hier 👏 </h4>
    </div>
  );
};
