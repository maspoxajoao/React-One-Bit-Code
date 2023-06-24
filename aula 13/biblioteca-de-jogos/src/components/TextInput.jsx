import PropTypes from "prop-types";
TextImput.PropTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
};
export default function TextImput({ id, label, value, setValue }) {
  return (
    <div style={{display:"flex", gap:"2rem", alignItems:"center"}}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
