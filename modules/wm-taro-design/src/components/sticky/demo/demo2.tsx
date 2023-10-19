import { Sticky, Button } from 'wm-taro-design'

export default function Demo() {
  return (
    <Sticky offsetTop={50}>
      <Button type="primary" style="margin-left: 120px">
        吸顶距离
      </Button>
    </Sticky>
  )
}
