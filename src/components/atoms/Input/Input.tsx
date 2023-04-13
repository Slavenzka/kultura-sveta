import { memo } from 'react'
import { InputProps, InputVariants } from 'components/atoms/Input/Input.spec'
import InputText from 'components/atoms/Input/InputText/InputText'
import { InputTextProps } from 'components/atoms/Input/InputText/InputText.spec'
import InputCheckbox from 'components/atoms/Input/InputCheckbox/InputCheckbox'
import { InputCheckboxProps } from 'components/atoms/Input/InputCheckbox/InputCheckbox.spec'

function Input (props: InputProps) {
  const {variant} = props

  switch (variant) {
    case InputVariants.CHECKBOX_DEFAULT: {
      return <InputCheckbox {...(props as InputCheckboxProps)} />
    }
    default: {
      return <InputText {...(props as InputTextProps)} />
    }
  }
}

export default memo(Input)
