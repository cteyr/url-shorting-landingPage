const Input = ({ InputValue, handleInputChange, handleAddTodo }: IProps) => {
  return (
    <input
      type="text"
      placeholder="Shorten a link here..."
      value={InputValue}
      onChange={handleInputChange}
      // onKeyDown={handleAddTodo}
    />
  );
};

type IProps = {
  InputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};
export { Input };
