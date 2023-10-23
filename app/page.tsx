import { nigeria } from '../constants/nigeria'
import ProductCard from '@/components/ProductCard'

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
        {nigeria.productos.map((producto) => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre}
            categoria={producto.categoria}
            descripcion={producto.descripcion}
            precio={producto.precio}
           />
        ))
      }
      </div>

    </main>
  )
}
