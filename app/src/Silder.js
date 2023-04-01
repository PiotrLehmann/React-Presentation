const Slider = (props) => {
  return (
      <input
        type="range"
        defaultValue={props.value}
        onChange={props.handleChange}
      />
  );
};

export default Slider;
