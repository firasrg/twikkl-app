import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Cancel = (props: SvgProps) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      fill="#F1FCF2"
      d="M7.625 18.375c.23.23.52.344.875.344.354 0 .646-.115.875-.344L13 14.75l3.656 3.656c.23.23.516.339.86.328.344-.01.63-.13.859-.359.23-.23.344-.52.344-.875 0-.354-.115-.646-.344-.875L14.75 13l3.656-3.656c.23-.23.339-.516.328-.86-.01-.344-.13-.63-.359-.859-.23-.23-.52-.344-.875-.344-.354 0-.646.115-.875.344L13 11.25 9.344 7.594a1.116 1.116 0 0 0-.859-.329c-.344.01-.63.13-.86.36-.23.23-.344.52-.344.875 0 .354.115.646.344.875L11.25 13l-3.656 3.656c-.23.23-.339.516-.328.859.01.344.13.63.359.86ZM13 25.5c-1.73 0-3.354-.328-4.875-.985a12.614 12.614 0 0 1-3.969-2.671 12.615 12.615 0 0 1-2.671-3.969C.828 16.355.5 14.729.5 13c0-1.73.328-3.354.985-4.875a12.614 12.614 0 0 1 2.671-3.969 12.632 12.632 0 0 1 3.969-2.672C9.645.828 11.271.5 13 .5c1.73 0 3.354.328 4.875.984a12.633 12.633 0 0 1 3.969 2.672 12.614 12.614 0 0 1 2.671 3.969c.657 1.52.985 3.146.985 4.875 0 1.73-.328 3.354-.985 4.875a12.614 12.614 0 0 1-2.671 3.969 12.614 12.614 0 0 1-3.969 2.671c-1.52.657-3.146.985-4.875.985Zm0-2.5c2.77 0 5.13-.974 7.079-2.921C22.026 18.13 23 15.77 23 13c0-2.77-.974-5.13-2.921-7.079C18.13 3.974 15.77 3 13 3c-2.77 0-5.13.974-7.077 2.921C3.974 7.87 3 10.23 3 13c0 2.77.974 5.13 2.923 7.079C7.87 22.026 10.229 23 13 23Z"
    />
  </Svg>
)
export default Cancel
