export default function FailedPage() {
  return (
    <div className='h-full flex flex-col justify-center'>
      <div className="p-6 md:mx-auto">
        <svg viewBox="0 0 512 512" className="text-cartPink w-20 h-20 mx-auto my-6">
          <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
        </svg>
        {/* <svg viewBox="0 0 24 24" className="text-cartPink w-20 h-20 mx-auto my-6">
            <path fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z">
            </path>
        </svg> */}
        <div className="text-center max-w-[80%] mx-auto flex flex-col gap-6">
            <h3 className="text-3xl text-white font-black text-center">Algo salió mal</h3>
            <p className='text-white text-lg'>Probá seleccionando otro medio de pago o intentalo más tarde.</p>
        </div>
      </div>
    </div>
  );
}