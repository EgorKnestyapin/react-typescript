import "./styles.css";

function Homework20() {
  let firstName: string = "John";
  let lastName: string = "Doe";
  let job: string = "Software Engineer";
  let isManager: boolean = false;
  let experience: number = 5;
  let email: string = "john.doe@google.com";
  let programLangs: string[] = ["JavaScript", "Python", "Machine Learning"];

  const mapProgramLangs = programLangs.map((programLang) => {
    return <li>{programLang}</li>;
  });

  return (
    <div className="card-container">
      <ul>
        <li>firstName: {firstName}</li>
        <li>lastName: {lastName}</li>
        <li>job: {job}</li>
        <li>position: {isManager ? "Manager" : "Employee"}</li>
        <li>experience: {experience} year(s)</li>
        <li>email: {email}</li>
        <li>
          programLangs:
          <ul>{mapProgramLangs}</ul>
        </li>
      </ul>
    </div>
  );
}

export default Homework20;
