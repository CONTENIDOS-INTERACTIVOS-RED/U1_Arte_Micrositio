<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Eventos culturales-artísticos <em>online</em>'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-5
        .col-lg
          p.mb-0 Existen cientos de plataformas gratuitas en las que es posible tener la experiencia de galerías de arte, exhibiciones o noticias para los interesados en el arte y sus diversas manifestaciones:

        .col-lg-auto
          figure
            img(src="@/assets/curso/tema4/1.svg", style="max-width: 295px").mx-auto


      .tabla-a.color-acento-contenido.mb-5
        table

          thead
            tr
              th.bg-color-tabla Recurso
              th.bg-color-tabla Descripción

          tbody
            tr
              td 
                h4 Artsy
                a.anexo.mb-4.bg-white.w-fit(href="https://www.artsy.net/institutions" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Artsy
              td 
                p Plataforma digital que ofrece noticias, análisis y recursos, sobre el mercado del arte y la cultura visual.
                p Dentro de sus categorías están: museos, arte al aire libre, colecciones privadas, arte moderno y contemporáneo, museos universitarios, fundaciones, galerías, artistas, etc.
            tr
              td 
                h4 Google Arts & Culture
                a.anexo.mb-4.bg-white.w-fit(href="https://artsandculture.google.com/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Google Arts & Culture
              td 
                p Plataforma dispuesta al público que ofrece exhibiciones virtuales de museos y galerías de todo el mundo. 
            tr
              td 
                h4 Kunstmatriz. 
                a.anexo.mb-4.bg-white.w-fit(href="https://artspaces.kunstmatrix.com/en/exhibitions" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Sito web. artspaces
              td 
                p Plataforma dispuesta al público que ofrece exhibiciones con artistas contemporáneos e independientes.

      #t_4_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.1] Las siete artes

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 En el año 1911, el poeta italiano Riccioto Canudo, publicó el Manifiesto de las siete artes, en el cual enumeran las artes desde la antigüedad, demostrando, a su vez, que el arte es un lenguaje universal para disfrutar la belleza, la estética y la cultura. Plantea que su origen viene de la antigua Grecia y que su evolución ha llevado a la enumeración de las "artes" que en su expresión más académica son las Bellas Artes. Estas son:
      
          .bg-color-3.p-4(data-aos="fade-left")
            .row.justify-content-start.align-items-center
              .col-lg-3
                span.mb-0.me-4
                  i.fas.fa-arrow-circle-right.me-2
                  | Arquitectura 
              .col-lg-3
                span.mb-0.me-4
                  i.fas.fa-arrow-circle-right.me-2
                  | Pintura
              .col-lg-3
                span.mb-0.me-4
                  i.fas.fa-arrow-circle-right.me-2
                  | Escultura
              .col-lg-3
                span.mb-0.me-4
                  i.fas.fa-arrow-circle-right.me-2
                  | Danza
            .row.justify-content-start.align-items-center
              .col-lg-3
                span.mb-0.me-4
                  i.fas.fa-arrow-circle-right.me-2
                  | Música
              .col-lg-3
                span.mb-0.me-4
                  i.fas.fa-arrow-circle-right.me-2
                  | Poesía
              .col-lg-3
                span.mb-0.me-4
                  i.fas.fa-arrow-circle-right.me-2
                  | Cine
              

      .row.mb-5
        .col-lg-8
          .bg-color-1.px-4.py-4(data-aos="fade-left").mb-4
            p.mb-0 Esa es la razón por la cual se le llama al cine el séptimo arte o la séptima manifestación artística, pues sus productos combinan todas las artes anteriores entre imágenes, sonido, movimiento y narrativa. 
          
          p(data-aos="fade-left") En otra clasificación, las artes plásticas incluyen aquellas que usan materiales susceptibles de ser moldeados, aquí en la clasificación, estarían la pintura, la escultura, la arquitectura, el dibujo y la artesanía.
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in").mb-4.mb-lg-0

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://artspaces.kunstmatrix.com/en/exhibitions" target="_blank" rel="noopener noreferrer") Kunstmatriz. (Estados Unidos).

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://cursosgratisunam.com/arte/apreciacion/" target="_blank" rel="noopener noreferrer") Cursos Gratis UNAM. Curso de apreciación del arte para no artistas.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://cursosgratisunam.com/arte/museologia/" target="_blank" rel="noopener noreferrer") Cursos Gratis UNAM. Curso de Museología.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.artsy.net/institutions" target="_blank" rel="noopener noreferrer") Plataforma Artsy.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://evemuseografia.com/2015/11/30/breve-historia-de-los-museos/" target="_blank" rel="noopener noreferrer") EVE MUSEOS+ INNOVACIÓN. (2025). Una nueva era para nuestros museos.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'El arte es una forma de expresión humana que no manifiesta la visión personal de la realidad o la imaginación, lo que podría afectar su apreciación por cualquiera de los sentidos.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El arte sí manifiesta la visión personal de la realidad o la imaginación.',
            mensaje_incorrecto:
              'Incorrecto. El arte sí manifiesta la visión personal de la realidad o la imaginación.',
          },
          {
            id: 2,
            texto: 'No es una categoría de las artes:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Bellas artes: pintura, escultura, música, teatro, danza, cine y arquitectura',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Artes aplicadas: diseño gráfico, diseño de moda, oficios y cerámica.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Artes migratorias: las que están asociadas a episodios de migración y guerra',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Artes performáticas: teatro, danza, música y performance.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! No existe la categoría de artes migratorias.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es Artes migratorias.',
          },
          {
            id: 3,
            texto: '¿Quién fue Leonardo Da Vinci?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Uno de los grandes maestros del renacimiento europeo. Pintor, anatomista, arquitecto, paleontólogo, botánico, escritor, escultor, filósofo, ingeniero, inventor, músico, poeta y urbanista.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'El Astrólogo más popular de la edad media por su curiosidad y capacidades científicas del espacio celeste, concediéndole un gran lugar en la historia del arte.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Un pintor rechazado de la edad antigua cuyas obras vieron la luz en la modernidad y actualmente se encuentran en los principales museos del mundo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Un Papa Católico extraordinario al crear el arte que hace parte de la capilla Sixtina.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Da Vinci fue uno de los grandes maestros del renacimiento europeo y un polímata.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es la opción A.',
          },
          {
            id: 4,
            texto: 'El arte en la cultura Oriental:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'No tuvo un desarrollo hasta después de la edad moderna',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Tuvo sus principales hitos fueron en la edad contemporánea',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Está inspirado en el desarrollo cultural y artístico de la cultura occidental',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Demuestra los grandes desarrollos, innovaciones, creaciones y expresiones, desde la edad antigua, siendo fuente de inspiración también en algunos momentos históricos de la cultura occidental.',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El arte oriental ha sido fuente de inspiración y desarrollo desde la antigüedad.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es la opción D.',
          },
          {
            id: 5,
            texto:
              'El Museo del Prado es uno de los museos de arte más importantes del mundo, reconocido por su extensa colección de pintura europea, principalmente de los siglos XVI al XIX.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El Museo del Prado es reconocido mundialmente por su colección de pintura europea.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es Verdadero.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
