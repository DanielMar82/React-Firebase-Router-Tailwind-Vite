import ButtonLoading from "./ButtonLoading";

const Button = ({ text, type, color, loading, onclick }) => {
  if (loading) return <ButtonLoading />;

  const classButtonBase = `text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center `;

  let classColor;

  switch (color) {
    case "yellow":
      classColor = `bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800`;
      break;
    case "red":
      classColor = `bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`;
      break;
    case "green":
      classColor = `bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`;
      break;
    case "purple":
      classColor = `bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800`;
      break;
    default:
      classColor = `bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
  }
  return (
    <button
      onClick={onclick}
      type={type}
      className={classButtonBase + classColor}
    >
      {text}
    </button>
  );
};

export default Button;
