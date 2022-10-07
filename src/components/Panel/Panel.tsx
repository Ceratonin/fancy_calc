import { buttonsArr } from "../../utils/buttonsArr";
import Button from "./Button";

const Panel = () => {
  return (
    <div className="panel">
      {[...buttonsArr].map(([name, literal]) => (
        <Button name={name} literal={literal} key={name} />
      ))}
    </div>
  );
};

export default Panel;
