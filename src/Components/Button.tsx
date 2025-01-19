import React, {
  ComponentElement,
  ComponentProps,
  ComponentPropsWithoutRef,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

let url = "http://localhost";
function converCurrency(amount: number, currency: string) {
  ///
}
type color = "black" | "red" | "blue" | "yellow";
// interface ButtonProps  or
type ButtonProps = {
  backgroundColor: color;
  textColor: color;
  fontSize: number;
  pillShape?: boolean;
  padding: [number, number];
  setCount: React.Dispatch<SetStateAction<number>>;
  count: number; // initial count of 0
  type: "submit" | "reset" | "button";
  autoFocus?: boolean;
};
// // intersection(&)
// type superButtonProps = ButtonProps & {
//   userId: number;
//   name: string;
//   email: string;
//   age: number;
// };

// // intersection with interfaces(&)

// interface superButtonProps extends ButtonProps {
//   userId: number;
//   name: string;
//   email: string;
//   age: number;
// }
type ButtonPropsBtn = ComponentPropsWithoutRef<"button">;
converCurrency(200, "currency");

////typing event handler functions
const handleClick = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  console.log("Button clicked");
};

type User = {
  name: string;
  id: number;
};
const Button = ({
  // backgroundColor,
  // textColor,
  //setCount
  //count
  // padding
  type,
  autoFocus,
}: ButtonPropsBtn): React.JSX.Element => {
  //typeScript with UseState
  // const [count, setCount] = useState(0);
  // const [title, setTitle] = useState("hello");
  // const [isLoading, setIsLoading] = useState(false);
  // const [user, setUser] = useState<User | null>(null);

  // const name = user?.name;

  const ref = useRef<HTMLButtonElement>(null);

  //as const
  const buttonTExtOptions = [
    "Choose",
    "Select",
    "Choose your option",
    "click",
  ] as const;

  // //omit
  // type omitUSer = {
  //   sessionId: string;
  //   name: string;
  // };
  // type Guest = Omit<omitUSer, "name">;

  // //as type assertion
  // type buttonColor = "primary" | "secondary" | "danger";
  // useEffect(() => {
  //   const data = localStorage.getItem("buttonColor") as buttonColor;
  // }, []);

  //Generics
  // const convertToArray = <T,>(value: T): T[] => {
  //   return [value];
  // };
  // function convertToArray<T>(value: T): T[] {
  //   return [value];
  // }
  // convertToArray(5);
  // convertToArray("hello");
  // type genericButtonProps<T> = {
  //   countValue: T;
  //   countHistory: T;
  // };
  // const Button = <T,>({ countValue, countHistory }: genericButtonProps<T>) => {
  //   return countValue;
  //   countHistory;
  // };
  return (
    <div
    // className={`bg-blue${backgroundColor}-500 text-white px-4 py-2 text-[${fontSize}px]`}
    // onClick={() => setCount(count + 1)}
    >
      <button type={type} autoFocus={autoFocus} onClick={handleClick} ref={ref}>
        Click Me
      </button>
      {/* <div
        className={`inline-block rounded-[50%] p-[${padding[0]}px] ${padding[1]}`}
      >
        : {count}
      </div> */}
      {buttonTExtOptions.map((option) => {
        return option;
      })}
    </div>
  );
};

export default Button;
