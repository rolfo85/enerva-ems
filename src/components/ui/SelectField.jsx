import { Icon } from "./Icon.jsx";

export function SelectField({ options, value, onChange, className = "", ariaLabel }) {
  return (
    <label className={`select-field ${className}`.trim()}>
      <select aria-label={ariaLabel} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon name="chevronDown" />
    </label>
  );
}
