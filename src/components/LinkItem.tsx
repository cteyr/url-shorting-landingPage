import { Button } from "./Button";
import { useState, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";

const LinkItems = ({ element }: IProps) => {
  const [isCheked, setisCheked] = useState(false);

  const CopyItemLink = () => {
    navigator.clipboard.writeText(`${element.result.full_short_link}`);
    setisCheked(true);
  };

  useEffect(() => {
    if (isCheked) {
      setTimeout(() => {
        setisCheked(false);
      }, 2000);
    }
  }, [isCheked]);

  return (
    <div className="shortcut-link" key={element}>
      <div className="original-link">{element.result.original_link}</div>
      <div className="short-link">
        <a href={element.result.full_short_link} target="_blank">
          {element.result.full_short_link}
        </a>

        {isCheked ? (
          <Button
            text={<BsCheckLg color="white" />}
            classname="button-copy-shortlink"
            onclick={CopyItemLink}
          />
        ) : (
          <Button
            text="Copy"
            classname="button-copy-shortlink"
            onclick={CopyItemLink}
          />
        )}
      </div>
    </div>
  );
};
type IProps = {
  element: any;
  onclick?: () => void;
};

export { LinkItems };
