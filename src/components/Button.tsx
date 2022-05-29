const Button = ({ classname, text }: IProps) => {
  return (
    <button type="button" className={classname}>
      {text}
    </button>
  );
};

type IProps = {
  classname: string;
  text: string;
};
export { Button };
