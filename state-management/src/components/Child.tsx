type Props = {
  message: string;
  onClick: () => void;
};

export const Child = ({ message, onClick }: Props) => {
  return (
    <div>
      <h1>{message}</h1>

      <button onClick={onClick}>Change message</button>
    </div>
  );
};
