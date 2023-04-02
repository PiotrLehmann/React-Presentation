const Slider = (props) => {
  return (
      <input
        type="range"
        defaultValue={props.value}
        onChange={props.handleChange}
        min={props.min}
        max={props.max}
        step={props.step}
      />
  );
};

export default Slider;
