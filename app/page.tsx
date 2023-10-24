import { nigeria } from '../constants/nigeriaNuevo'
import ProductCard from '@/components/ProductCard'

export default function Home (): JSX.Element {
  return (
    <main className="">
      <h1 className="text-white font-black text-3xl text-center mt-4 mb-6">{nigeria.nombre}</h1>

      {nigeria.categorias_productos.map((categoria) => (
        <>
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-white uppercase font-medium text-2xl mb-3">
              {categoria.nombre}
            </h2>
          </div>

          <div className="flex flex-col">
              {categoria.subcategorias.map((subcategoria) => (
                <>
                  {subcategoria.descripcion !== '' ? <h2 className="text-white uppercase font-normal text-md text-center mb-3">{subcategoria.nombre}</h2> : <h2 className="text-white uppercase font-normal text-md text-center mb-0">{subcategoria.nombre}</h2>}

                  {subcategoria.descripcion !== '' && <h3 className="text-white uppercase font-thin text-xs text-center">{subcategoria.descripcion}</h3>}

                  <div className="flex flex-col items-center gap-5 mt-6 mb-6">
                    {subcategoria.productos.map((producto) => (
                      <ProductCard
                        key={producto.prod_id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                      />
                    ))}
                  </div>
                </>
              ))}
          </div>
        </>
      ))}
    </main>
  )
}
