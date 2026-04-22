import { Icon } from "./Icon.jsx";

export function Button({ children, variant = "primary", iconLeft, iconRight, className = "", ...props }) {
  return (
    <button type="button" className={`cta-button cta-button--${variant} ${className}`.trim()} {...props}>
      {iconLeft ? <Icon name={iconLeft} /> : null}
      <span>{children}</span>
      {iconRight ? <Icon name={iconRight} /> : null}
    </button>
  );
}
