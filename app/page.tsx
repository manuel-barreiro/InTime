import { FaCartPlus, FaPlus, FaMinus } from 'react-icons/fa6'
// crear un json con nombre_trago y precio
const bar = {
  nombre: 'Nigeria Club',
  categorias_productos: ['Tragos', 'Botellas'],
  productos: [
    {
      id: 1,
      nombre: 'Fernet con Coca-Cola',
      categoria: 'Tragos',
      descripcion: '',
      precio: 3000
    },
    {
      id: 2,
      nombre: 'Vodka con Naranja',
      categoria: 'Tragos',
      descripcion: '',
      precio: 3000
    },
    {
      id: 3,
      nombre: 'Gin Tonic',
      categoria: 'Tragos',
      descripcion: '',
      precio: 3000
    },
    {
      id: 4,
      nombre: 'Caipirinha',
      categoria: 'Tragos',
      descripcion: '',
      precio: 3000
    },
    {
      id: 5,
      nombre: 'Bacardi con Coca-Cola',
      categoria: 'Tragos',
      descripcion: '',
      precio: 3000
    },
    {
      id: 6,
      nombre: 'Chandon Extra Brut',
      categoria: 'Botellas',
      descripcion: '',
      precio: 3000
    },
    {
      id: 7,
      nombre: 'Chandon Extra Brut',
      categoria: 'Botellas',
      descripcion: '',
      precio: 9000
    },
    {
      id: 8,
      nombre: 'Fernet Branca',
      categoria: 'Botellas',
      descripcion: '',
      precio: 9000
    },
    {
      id: 9,
      nombre: 'Vodka Smirnoff',
      categoria: 'Botellas',
      descripcion: '',
      precio: 9000
    },
    {
      id: 10,
      nombre: 'Vodka Smirnoff Saborizado',
      categoria: 'Botellas',
      descripcion: '',
      precio: 9000
    },
    {
      id: 11,
      nombre: 'Jaggermeister',
      categoria: 'Botellas',
      descripcion: '',
      precio: 12000
    }
  ]
}

export default function Home (): JSX.Element {
  return (
    <main className="">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-white font-black text-2xl">{bar.nombre}</h1>
        <h2 className="text-white uppercase font-thin text-xl">
          {bar.categorias_productos[0]}
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
            {/* <button className="bg-bgblue text-[10px] text-white font-semibold rounded-3xl px-2 py-2 flex items-center justify-between gap-2 hover:scale-105 ease-out duration-300 hover:shadow-2xl">
              <FaCartPlus className="w-6 h-4" />
              Agregar
            </button> */}

            {/* Add or substract */}
            <div className='flex gap-1 items-center'>
              <FaPlus />
              <div className='bg-buttonSoftPink px-2 py-1 rounded-xl'>
                2
              </div>
              <FaMinus />
            </div>

          </div>
        </div>
      </div>

    </main>
  )
}
