import { Picker } from 'wm-taro-design'

const columns = [
  {
    text: '杭州',
    disabled: true,
  },
  {
    text: '宁波',
  },
  {
    text: '温州',
  },
]
export default function Demo() {
  return <Picker columns={columns} />
}
