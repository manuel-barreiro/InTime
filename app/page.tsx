import { nigeria } from '../constants/nigeria'
import AddToCartButton from '@/components/AddToCartButton'
import ProductQuantity from '@/components/ProductQuantity'

export default function Home (): JSX.Element {
  return (
    <main className="">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-white font-black text-2xl">{nigeria.nombre}</h1>
        <h2 className="text-white uppercase font-thin text-xl">
          {nigeria.categorias_productos[0]}
        </h2>
      </div>

      {/* Menu */}
      <div className="flex flex-col items-center gap-5 mt-6">

        {/* ProductCard */}
        <div className="bg-productCardBg p-3 flex w-[90%] items-center rounded-2xl">

          {/* Product Info */}
          <div className="flex flex-col justify-between items-start w-full gap-1">
            <p className="uppercase font-semibold text-md">
              {'Fernet con Coca-Cola'}
            </p>
            <p className="text-xs text-gray-500">
              Descripción opcional del producto
            </p>
            <p className="text-cartPink font-medium text-lg my-1">
              $ 3000
            </p>
          </div>

          {/* Botones */}
          <div>
            {/* Add to Cart */}
            <AddToCartButton />

            {/* Add or substract */}
            {/* <ProductQuantity /> */}
          </div>

        </div>
      </div>

    </main>
  )
}
