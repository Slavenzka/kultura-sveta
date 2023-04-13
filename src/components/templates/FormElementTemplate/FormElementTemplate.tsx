import { memo } from 'react'
import { FormElementTemplateProps } from 'components/templates/FormElementTemplate/FormElementTemplate.spec'
import InputLabel from 'components/atoms/InputLabel/InputLabel'

function FormElementTemplate ({
  className,
  inputLabelVariant,
  children,
  ...restProps
}: FormElementTemplateProps) {
  return (
    <InputLabel
      className={className}
      variant={inputLabelVariant}
      {...restProps}
    >
      {children}
    </InputLabel>
  )
}

export default memo(FormElementTemplate)
