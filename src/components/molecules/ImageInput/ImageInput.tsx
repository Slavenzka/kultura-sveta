import { memo, useCallback, useMemo } from 'react'
import css from './ImageInput.module.scss'
import classnames from 'classnames'
import { toggleModal } from 'store/actions'
import { CodeFilesType, ImageInputProps, ImageInputValueItem } from './ImageInput.spec'
import { convertFileAndProcessEncoding } from 'utils/helpers'
import InputLabel from 'components/atoms/InputLabel/InputLabel'
import { InputLabelVariants } from 'components/atoms/InputLabel/InputLabel.spec'
import { useAppDispatch } from 'store/spec/global.spec'

function ImageInput ({
  accept = `.jpg, .jpeg`,
  className,
  error,
  ImagePreview,
  isMultiple = true,
  name,
  onChange,
  value = [],
  label,
}: ImageInputProps) {
  const dispatch = useAppDispatch()

  const codeFiles: CodeFilesType = useCallback(files => {
    const filesReady = [] as ImageInputValueItem[]

    const requests = files.reduce((total, file) => {
      const codingRequest: Promise<void> = convertFileAndProcessEncoding(file)
        .then(code => {
          filesReady.push({
            content: code,
            name: file.name
          })
        })
      total.push(codingRequest)
      return total
    }, [] as Promise<void>[])

    return Promise.all(requests)
      .then(() => {
        return filesReady
      })
  }, [])

  const handleChange = useCallback(evt => {
    const files = [...evt.target.files]

    codeFiles(files)
      .then(result => {
        onChange([...value, ...result])
      })
  }, [value, onChange, codeFiles])

  const handleDeletePreview = useCallback(index => {
    const updatedValue = [...value.slice(0, index), ...value.slice(index + 1)]
    onChange(updatedValue)
  }, [value, onChange])

  const handleClickPreview = useCallback((image, name) => {
    dispatch(toggleModal((
      <img
        src={`data:image/jpeg;base64,${image}`}
        className={css.image}
        alt={name}
      />
    ), {
      isContentOnly: true
    }))
  }, [dispatch])

  const previews = useMemo(() => {
    const isNotArray = !Array.isArray(value)
    const isEmptyArray = Array.isArray(value) && value.length === 0
    const isWithoutPreview = !ImagePreview

    if (!value || isNotArray || isEmptyArray || isWithoutPreview) return null

    const items = value.map(({content, name}, index) => (
      <ImagePreview
        image={content}
        name={name}
        onDelete={() => handleDeletePreview(index)}
        handleClickPreview={() => handleClickPreview(content, name)}
        className={css.item}
        key={index}
      />
    ))

    return (
      <ul className={css.list}>
        { items }
      </ul>
    )
  }, [value, handleDeletePreview, ImagePreview, handleClickPreview])

  return (
    <div className={classnames(css.wrapper, className)}>
      <InputLabel
        label={label}
        isError={Boolean(error)}
        variant={InputLabelVariants.IMAGE_DEFAULT}
      >
        <input
          onChange={handleChange}
          name={name}
          className={css.input}
          accept={accept}
          multiple={isMultiple}
          type="file"
        />
      </InputLabel>
      { previews }
    </div>
  )
}

export default memo(ImageInput)
