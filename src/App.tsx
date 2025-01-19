import { useState } from "react";
import Button from "./Components/Button";

const App = () => {
  const [count, setCount] = useState(2);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Button
        // backgroundColor="blue"
        // fontSize={3}
        // textColor="yellow"
        // padding={[8, 7]}
        // setCount={setCount}
        // count={count}
        type="submit"
        autoFocus={true}
      />
    </div>
  );
};

export default App;
