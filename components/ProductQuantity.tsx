import { FaPlus, FaMinus } from 'react-icons/fa6'

export default function ProductQuantity (): JSX.Element {
  return (
    <div className='flex gap-1 items-center'>
      <FaPlus className="text-cartPink" />
      <div className='bg-buttonSoftPink px-2 py-1 rounded-xl'>
        2
      </div>
      <FaMinus className='text-bgblue' />
    </div>
  )
}
