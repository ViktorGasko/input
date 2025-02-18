import React, { ReactElement } from "react";

type InputProps = {
  id: string;
  label: string;
  description?: string;
  state?: "warning" | "danger" | "success";
  message?: string | ReactElement;
  messageState?: "warning" | "danger";
} & React.ComponentProps<"input">;

function Input({
  id,
  label,
  description,
  state,
  message,
  messageState,
  className,
  ref,
  ...props
}: InputProps) {
  const inputclass =
    "input__field" +
    (state ? ` input__field--${state}` : "") +
    (className ? " " + className : "");
  const messageclass =
    "input__message" + (messageState ? ` input__message--${messageState}` : "");
  const iconClass = "input__icon" + (state ? ` input__icon--${state}` : "");

  return (
    <div className="input">
      <label htmlFor={id} className="input__text">
        <span className="input__text-main">{label}</span>
        {description && <span className="input__text-desc">{description}</span>}
      </label>
      <div className="input__container">
        <input
          ref={ref}
          id={id}
          className={inputclass}
          aria-describedby={message ? id + "-message" : undefined}
          {...props}
        />
        {state && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={iconClass}
            aria-hidden={true}
          >
            {/* I had only 2 icons, so this was probably best option */}
            <path
              fill="currentColor"
              d={
                state != "success"
                  ? `M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 
              24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 
              24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z`
                  : `M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 
              9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 
              175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z`
              }
            />
          </svg>
        )}
      </div>
      {message && (
        <p className={messageclass} id={id + "-message"}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Input;
