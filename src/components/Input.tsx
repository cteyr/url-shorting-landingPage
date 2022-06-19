const Input = ({
  InputValue,
  handleInputChange,
  handleAddShortLink,
}: IProps) => {
  return (
    <input
      type="text"
      placeholder="Shorten a link here..."
      value={InputValue}
      onChange={handleInputChange}
      onKeyDown={handleAddShortLink}
    />
  );
};

type IProps = {
  InputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddShortLink?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};
export { Input };
