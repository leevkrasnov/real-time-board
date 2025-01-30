import React from 'react';

interface ButtonProps {
  handleClick?: () => void;
}

const LoginButton: React.FC<ButtonProps> = ({ handleClick }) => {
  return (
    <button
      className="text-amethyst dark:text-lavander text-base md:text-xl"
      onClick={handleClick}
    >
      Log in
    </button>
  );
};

export default LoginButton;
