import Content from "../content";
import { SectiontWrapper } from "./styles";

// interface UserData {
//   userName: string;
//   age: number;
//   email: string;
// }

// interface SectionProps {
//   // Как тип для userData можно использовать interface UserData
//   userData: {
//     userName: string;
//     age: number;
//     email: string;
//   };
// }

function Section() {
  return (
    <SectiontWrapper>
      <h2>Section Component</h2>
      <Content />
    </SectiontWrapper>
  );
}

export default Section;
