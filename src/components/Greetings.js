import "../styles/Greetings.css";

export const Greetings = ({ name }) => {
  return (
    <div className="greetings-container item item-1">
      <h1>
        Bonjour <span className="username">{name}</span>
      </h1>
      <h4>Félicitation ! Vous avex explosé vos objectifs hier 👏 </h4>
    </div>
  );
};
