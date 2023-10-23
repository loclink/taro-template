/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, Popup } from 'wm-taro-design'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  return (
    <View>
      <Cell title="关闭图标" isLink onClick={() => setShow(true)} />
      <Popup
        closeable
        closeIcon="close"
        show={show}
        onClose={() => setShow(false)}
        closeIconPosition="top-right"
      >
        内容
      </Popup>
    </View>
  )
}
