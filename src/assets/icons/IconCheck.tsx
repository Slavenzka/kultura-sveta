import { IconProps } from 'assets/icons/Icon.spec'

function IconCheck ({
  className,
  itemRef
}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 12 9" version="1.1" xmlns="http://www.w3.org/2000/svg" ref={itemRef}>
        <g transform="translate(-386.000000, -238.000000)">
          <g transform="translate(355.000000, 148.000000)">
            <g transform="translate(26.000000, 20.000000)">
              <polyline points="6 75.0478516 9.4397352 78 15.7519531 71" />
            </g>
          </g>
        </g>
    </svg>
  )
}

export default IconCheck