import "../styles/Greetings.css";

export const Greetings = () => {
  // const firstname = name.userInfos.firstName;

  return (
    <div className="greetings-container">
      <h1>
        Bonjour <span className="username">Sandy</span>
      </h1>
      <h4>Félicitation ! Vous avex explosé vos objectifs hier 👏 </h4>
    </div>
  );
};
