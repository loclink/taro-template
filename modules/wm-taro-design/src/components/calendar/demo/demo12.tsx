/* eslint-disable */
import { Calendar } from 'wm-taro-design'

export default function Demo() {
  return (
    <Calendar
      title="日历"
      poppable={false}
      showConfirm={false}
      minDate={new Date(2012, 0, 10).getTime()}
      maxDate={new Date(2012, 2, 20).getTime()}
    />
  )
}
