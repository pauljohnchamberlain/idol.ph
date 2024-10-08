const TextShine = ({ text }) => {
  return (
    <span className='inline-flex bg-gradient-to-r from-pink-400 via-[#8678f9] to-blue-400 bg-[200%_auto] bg-clip-text text-lg text-transparent'>
      {text}
    </span>
  );
};

export default TextShine;
