const Button = ({ name, isBeam = false, containerClass = "" }) => {
  return (
    <button
      className={`
        relative flex items-center gap-3 justify-center 
        active:scale-95 transition-all duration-200
        font-medium text-white rounded-lg
        ${containerClass}
      `}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3">
          {/* Ping */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

          {/* Solid Dot */}
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;