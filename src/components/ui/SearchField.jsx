import { Icon } from "./Icon.jsx";

export function SearchField({ placeholder = "Search", className = "", value = "", onChange }) {
  return (
    <label className={`search-field ${className}`.trim()}>
      <Icon name="search" />
      <input type="search" placeholder={placeholder} value={value} onChange={onChange} />
    </label>
  );
}
