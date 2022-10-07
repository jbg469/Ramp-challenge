import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>

      <input
        id={inputId}
        type="checkbox"
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked, 
        })}
        checked={checked}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
