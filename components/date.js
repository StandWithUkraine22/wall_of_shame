import { parseISO, format } from 'date-fns'

export default function Date({ date }) {

  return <time dateTime={date.toLocaleString()}>{format(date, 'd LLLL yyyy')}</time>
}
