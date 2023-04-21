import { memo } from 'react'
import { InputProps, InputTypes, InputVariants } from 'components/atoms/Input/Input.spec'
import InputText from 'components/atoms/Input/InputText/InputText'
import InputCheckbox from 'components/atoms/Input/InputCheckbox/InputCheckbox'
import { InputCheckboxProps } from 'components/atoms/Input/InputCheckbox/InputCheckbox.spec'
import { InputTextProps } from 'components/atoms/Input/InputText/InputText.spec'

function Input (props: InputProps) {
  const {variant} = props

  switch (variant) {
    case InputVariants.CHECKBOX_DEFAULT: {
      return <InputCheckbox {...(props as InputCheckboxProps)} />
    }
    case InputVariants.TEXTAREA: {
      return <InputText TagName="textarea" {...(props as InputTextProps)} />
    }
    default: {
      return <InputText type={InputTypes.TEXT} {...(props as InputTextProps)} />
    }
  }
}

export default memo(Input)
