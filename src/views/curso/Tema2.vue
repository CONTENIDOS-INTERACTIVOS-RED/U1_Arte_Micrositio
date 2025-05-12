<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Exhibiciones y visitas a centros culturales y artísticos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Es un sueño para muchos contar con el tiempo disponible y los recursos necesarios para visitar los grandes museos del mundo, en donde además de los recorridos, se viven experiencias de contemplación, admiración y educación a través del arte y la cultura. Ahora es posible visitar de manera gratuita, cientos de museos, exhibiciones y escenarios artísticos, a través de sus páginas web, plataformas de arte y colaboraciones entre gobiernos locales y el sector privado.
      
          p(data-aos="fade-left") A continuación, lo invitamos a ver el siguiente video:
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      

      .bg-full-width.bg-fondo-slider
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/f9VqUFHQwBo?si=466T16N5MmomzzxO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .bg-full-width.bg-fondo-3.mb-5
        .p-4.p-md-5
          p.mb-5 Existen múltiples recursos digitales para acercarse al arte como parte del uso del tiempo libre y educación informal.

          .row.justify-content-center.align-items-center
            .col-lg-9
              .bg-color-white.shadow-soft.py-4.px-lg-5
                .row.justify-content-around.align-items-center
                  .col-md-auto
                    img(src="@/assets/template/bg-icono-video.svg", style="width: 90px;")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1 Adivina la pintura | Quiz/Trivia/Test/Arte
                        p A continuación puede visualizar una trivia sobre obras de arte de reconocimiento mundial.
                      .col-sm-auto
                        a.boton.color-primario.texto-blanco(href="https://www.youtube.com/watch?v=KkgHxtqGSok" target="_blank")
                          span Ver video
                          i.fas.fa-arrow-right
      p Conozcamos algunos de los principales museos en Colombia y el mundo:
              
      AcordionA(tipo="b").mb-5
        .div(titulo="Museo del Louvre (Francia)")
          .p-4
            .row.justify-content-center
              .col-lg-8
                p El Museo del Louvre, ubicado en París, conserva obras de las bellas artes, la arqueología y las artes decorativas, anteriores al Impresionismo. 
                p El Impresionismo es un movimiento artístico que nació en el siglo XIX en Francia que adoptó nuevas técnicas innovadoras y una paleta de colores vibrante, para representar escenas cotidianas y paisajes, con frescura y espontaneidad. Algunos de los artistas impresionistas son Claude Monet, Edgar Degas y Édouard Manet.
                p Obras emblemáticas:

                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | La Gioconda de Leonardo da Vinci.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | La Venus de Milo.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | La Victoria de Samotracia.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | La Balsa de la Medusa de Géricault.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | La Libertad Guiando al pueblo de Delacroix.
                
                p.mb-2 Enlace para visita o recorridos virtuales: 

                a.anexo.mb-4.bg-white.w-fit(href="https://www.louvre.fr/es/visitas-virtuales" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Louvre
                

              .col-lg-4
                figure
                  img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
        
        .div(titulo="Museo del Prado (España)")
          .p-4
            .row.justify-content-center
              .col-lg-8
                p El Museo del Prado es uno de los museos de arte más importantes del mundo, reconocido por su extensa colección de pintura europea, principalmente de los siglos XVI al XIX. Forbes lo considera uno de los diez museos mejor valorados del mundo.
                p A través de la visita virtual al Museo y una selección de exposiciones temporales, se pueden recorrer las salas y espacios y apreciar detalles en algunas obras digitalizadas en alta resolución. En los recorridos temáticos y en las exposiciones virtuales, se ofrecen adicionalmente visitas guiadas con tours de audio.
                p Artistas y obras emblemáticas:
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | La Crucifixión, Juan de Flandes.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | El caballero de la mano en el pecho, El Greco.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | La familia de Felipe IV o Las Meninas, Velázquez.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | El sueño de Jacob, Ribera.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | 3 de mayo, Goya.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | La Anunciación, Fra Angélico.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | El Cardenal, Rafael.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | El emperador Carlos V, a caballo, en Mühlberg, Tiziano.
                p.mb-2 Enlace de visita o recorridos virtuales:
                a.anexo.mb-4.bg-white.w-fit(href="https://www.museodelprado.es/visita-virtual-coleccion-2023" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Museo del Prado
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
        
        .div(titulo="Palacio de Bellas Artes (México)")
          .p-4
            .row.justify-content-center
              .col-lg-8
                p El Palacio de Bellas Artes es un edificio reconocido por su arquitectura de estilo Art nouveau y Art déco, decorado con obras de importantes artistas mexicanos.
                p El recinto posee la colección de 17 murales creados por Rivera, Orozco y Siqueiros, en un lapso de 35 años, donde plasmaron sus obras en los muros del recinto con obras representativas de la Escuela Mexicana de Pintura.
                p.mb-2 Enlace de visita o recorridos virtuales:
                a.anexo.mb-4.bg-white.w-fit(href="https://inba.gob.mx/sitios/recorridos-virtuales/museo-palacio-bellas-artes/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> inba
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
        
        .div(titulo="Museo de Antioquia (Colombia)")
          .p-4
            .row.justify-content-center
              .col-lg-8
                p El Museo de Antioquia, ubicado en Medellín, Colombia, es un epicentro cultural por contar con obras de reconocidos artistas nacionales e internacionales, y su gestión social y cultural. Dentro de las salas de exhibiciones se encuentran: Diálogos Interculturales, Colonial y Republicana, Sala Botero, Sala de Arte Internacional, Sala Siglo XIX, Sala Siglo XX y Sala Luis Caballero.
                p El museo ofrece la participación de pinturas, dibujos y esculturas de Botero, Francisco Antonio Cano, Pedro Nel Gómez, Débora Arango, Alejandro Obregón, Enrique Grau, Edgar Negret, Santiago Cárdenas, Luis Fernando Peláez y Luis Caballero.
                p.mb-2 Enlace de visita o recorridos virtuales:
                a.anexo.mb-4.bg-white.w-fit(href="https://museodeantioquia.co/exposiciones/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> museodeantioquia
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
        
        .div(titulo="Museo de Arte Moderno de Bogotá (Colombia)")
          .p-4
            .row.justify-content-center
              .col-lg-8
                p Museo de Arte Moderno de Bogotá, MAMBO, brinda un espacio que visibiliza las manifestaciones artísticas y culturales en Bogotá; un lugar cercano, seguro e incluyente que se abre para el diálogo, el aprendizaje y el entretenimiento a través del arte. Afirma que el arte es una herramienta de transformación social.
                p Cuenta con más de 4.700 obras de reconocidos artistas colombianos como Juan Antonio Roda, Carlos Rojas, Guillermo Wiedemann, Ruvan Afanador, Omar Rayo, Antonio Caro, Beatriz González, Miguel Ángel Rojas, David Manzur, María José Arjona, Juan Manuel Echavarría, Feliza Bursztyn, Óscar Muñoz, y de internacionales como Salvador Dalí, Carlos Cruz-Diez, Marcel Broodthaers, Andy Warhol, Man Ray, Leo Matiz y Cildo Meireles.
                p.mb-2 Enlace de visita o recorridos virtuales:
                a.anexo.mb-4.bg-white.w-fit(href="https://artsandculture.google.com/partner/bogota-museum-of-modern-art-mambo" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> artsandculture
                p.mt-3 En esta página abierta, es posible apreciar visitas virtuales, exposiciones online y las principales obras del museo.
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Los museos, espacios para la conservación, educación y fortalecimiento de la identidad
      

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Los museos han sido históricamente repositorios de bienes culturales, objetos de gran valor, en determinados momentos históricos. 

          p(data-aos="fade-left").mb-4 Aunque los museos en la actualidad, tienen la posibilidad de acoger a todos los públicos sin discriminación, en la antigüedad eran espacios restringidos para la élite, quienes ostentaban poder a través de la adquisición de piezas únicas y de gran valor. 
      
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                p Un ejemplo de esta mirada coleccionista de los museos, fue el gran “gabinete de las maravillas de la humanidad” en Babilonia, en el palacio del Rey Nabucodonosor II entre los años 605 – 562 a. C. Allí, a través de los botines de guerra, se saqueaban los grandes tesoros y pertenencias de poblaciones y primeras naciones.

                p.mb-0 Actualmente, el ICON (Consejo Internacional de Museos) plantea que los museos son espacios que investigan, adquieren, comunican y exhiben colecciones de gran valor histórico, científico, artístico y técnico, con propósitos educativos, contemplativos y fines de estudio. 
            


      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
