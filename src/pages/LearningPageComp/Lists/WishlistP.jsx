import { Link } from "react-router-dom"

const WishlistP = () => {
  return (
    <div className=" h-[23.30rem] flex items-center justify-center">
      <Link className="inline-block py-3 px-5 bg-liColor text-white font-bold" to={'/'}>Browse courses now</Link>
    </div>
  )
}

export default WishlistP