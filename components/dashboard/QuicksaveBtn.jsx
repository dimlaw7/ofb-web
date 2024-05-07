const QuicksaveBtn = ({ setShowModal }) => {
  return (
    <button
      onClick={() => setShowModal(true)}
      className="flex min-h-8 min-w-24 items-center justify-around rounded bg-white p-1 text-purple-800"
    >
      <span className="text-xs">Quick Save</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 6.49902H6.5V9.49903H5.5V6.49902H2.5V5.49902H5.5V2.49902H6.5V5.49902H9.5V6.49902Z"
          fill="#6420AA"
        />
      </svg>
    </button>
  );
};

export default QuicksaveBtn;
