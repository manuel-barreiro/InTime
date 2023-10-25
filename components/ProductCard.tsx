import AddToCartButton from '@/components/AddToCartButton'
// import ProductQuantity from '@/components/ProductQuantity'

interface Producto {
  key: number
  nombre: string
  precio: string
}

export default function ProductCard ({
  nombre,
  precio
}: Producto): JSX.Element {
  return (
      <div className="bg-productCardBg p-3 flex w-[90%] md:w-[40%] items-center rounded-2xl">

      {/* Product Info */}
      <div className="flex flex-col justify-between items-start w-full gap-1">
        <p className="uppercase font-semibold text-md">
          {nombre}
        </p>
        <p className="text-cartPink font-bold text-lg my-1">
          {`${precio}`}
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
  )
}
