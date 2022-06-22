const Button = ({ classname, text, onclick }: IProps) => {
  return (
    <button type="button" className={classname} onClick={onclick}>
      {text}
    </button>
  );
};

type IProps = {
  classname: string;
  text: any;

  onclick?: () => void;
};
export { Button };
