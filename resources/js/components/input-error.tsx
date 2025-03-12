
interface Pros {
  message?: string
}
const InputError = ({message}:Pros) => {
  return (
    message && <div className="text-rose-500 text-xs">{message}</div>
  )
}

export default InputError