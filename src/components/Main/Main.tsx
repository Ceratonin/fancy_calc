import Input from "../Expression/Expression";
import Panel from "../Panel/Panel";
import Display from "../Display/Display";

const Main = () => {
  return (
    <div className="main-wrapper">
      <div className="main-background">
        <div className="main">
          <Input />
          <Display />
          <hr />
          <Panel />
        </div>
      </div>
    </div>
  );
};

export default Main;
