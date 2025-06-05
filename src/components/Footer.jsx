export default function Footer() {
  return (
    <>
      <section className='relative pt-20'>
        <div className=''>
          <div className='container mx-auto'>
            <h1 className='text-xs text-slate-500 lg:text-lg'>
              Messaggio pubblicitario con finalità promozionale. Investire
              comporta rischi. I rendimenti passati non sono indicativi di
              quelli futuri.
            </h1>
          </div>

          <div className='bg-indigo-800 py-2 pl-4 text-indigo-100 lg:pl-0'>
            <footer className='container mx-auto grid grid-cols-3 gap-4 lg:grid-cols-4'>
              <div className='col-span-1'>
                <h1 className='py-3'> Informazioni e servizi</h1>
                <ul>
                  <li className='py-1 text-sm transition-colors hover:text-white'>
                    <a href=''> Guida ai servizi</a>
                  </li>
                </ul>
              </div>
              <div className='col-span-1'>
                <h1 className='py-3'>Assistenza e domande</h1>
                <ul>
                  <li className='py-1 text-sm transition-colors hover:text-white'>
                    <a href=''> Blocca la tua carta</a>
                  </li>
                  <li className='py-1 text-sm transition-colors hover:text-white'>
                    <a href=''>Sicurezza</a>
                  </li>
                  <li className='py-1 text-sm transition-colors hover:text-white'>
                    <a href=''>Disconoscimento</a>
                  </li>
                  <li className='py-1 text-sm transition-colors hover:text-white'>
                    <a href=''>Contatta un operatore</a>
                  </li>
                </ul>
              </div>
              <div className='col-span-1'>
                <h1 className='py-3'>Offerte</h1>
                <ul>
                  <li className='py-1 text-sm transition-colors hover:text-white'>
                    <a href=''> Investi</a>
                  </li>
                  <li className='py-1 text-sm transition-colors hover:text-white'>
                    <a href=''>Carta Fisica</a>
                  </li>
                  <li className='py-1 text-sm transition-colors hover:text-white'>
                    <a href=''>Assicurazioni</a>
                  </li>
                </ul>
              </div>
              <div className='col-span-1'></div>
            </footer>
          </div>
        </div>
      </section>
    </>
  )
}
