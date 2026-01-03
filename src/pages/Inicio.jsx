import './Inicio.css'

function Inicio() {
  return (
    <main className='inicio'>
      <section>
        <header>
          <h2>
            Introducción
          </h2>
        </header>
        <p>
          La pandemia de COVID-19 ha transformado radicalmente distintos aspectos de la sociedad:
          desde la salud pública hasta la economía, pasando por la educación y la interacción
          social. Este sitio busca concienciar sobre los efectos con información confiable y
          actualizada.
        </p>
      </section>
      <video controls>
        <source src='video/Casos Covid en Ecuador  Visión 360.webm' type='video/mp4' />
        <source src='video/Casos Covid en Ecuador  Visión 360.mp4' type='video/webm' />
        Tu navegador no soporta el video
      </video>
    </main>
  )
}

export default Inicio