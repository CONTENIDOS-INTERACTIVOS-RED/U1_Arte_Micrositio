<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Patrimonio mundial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p Las bellas artes son la clasificación de las manifestaciones artísticas creativas que se enfocan en la expresión estética y la creación de obras valoradas por su belleza o su mensaje. Se considera que las bellas artes incluyen siete disciplinas principales: 

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8
    
            SlyderF(columnas="col-12 col-lg-6")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/1.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Arquitectura
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/2.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Escultura
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/3.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Pintura
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Música
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Danza
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/6.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Literatura
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/7.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Cine
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/8.png', alt='')
    
        #t_1_1.titulo-segundo(data-aos="flip-up")
          h2 #[span 1.1] El despertar del arte
        
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 El arte como expresión humana parece tener su origen en la prehistoria, justo cuando los primeros humanos expresaron “su mundo” en algunas pinturas que se denomina arte rupestre, que fueron halladas en cavernas (cuevas). Aunque no es muy claro el propósito de estas expresiones, se cuenta con hipótesis sobre su objetivo narrativo, chamánico o como parte de algunas ceremonias o ritos espirituales. 
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0  El término de arte rupestre está relacionado con las expresiones artísticas sobre roca, a través de pinturas, grabados (petroglifos), relieve escultórico y geoglifo. De manera descriptiva, estas primeras expresiones representaban escenas de la vida cotidiana de los humanos en sus contextos históricos, incluyendo animales, seres sobrenaturales y algunas representaciones que hoy son consideradas narrativas de la cosmovisión de los antiguos. 
        
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left")  Las escenas de arte rupestre más antiguas de la humanidad, datan de 51.200 años, y fueron encontradas en cuevas ubicadas en la isla de Célebes en Indonesia. Las pinturas incluyen un cerdo salvaje y algunas figuras humanas. En Colombia, las muestras de arte rupestre más antiguas se encuentran en del departamento del Guaviare, específicamente en la serranía de la Lindosa; datan de 8.000 – 12.000 años de antigüedad e incluyen patrones geométricos, figuras humanas y de animales como tapires y cueros de caimanes; algunos afirman que esas figuras de animales pertenecen a la megafauna que vivió junto a estos humanos en la edad del hielo.
    
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          p.mb-0 Estas primeras expresiones de arte no son solamente importantes para los artistas o para los conocedores del arte; son una valiosa fuente de información para arqueólogos, antropólogos e historiadores, porque brindan información valiosa sobre vida y cultura de los pueblos prehistóricos. Son una forma de preservar la memoria y la identidad de esos primeros habitantes y demuestran que el arte es tan humano como el lenguaje oral y escrito.  

        p Tomemos una pausa para hablar de Leonardo Da Vinci:
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7
              p Leonardo Da Vinci fue uno de los grandes maestros del renacimiento europeo, nacido en el año 1452 en Italia. Fue pintor, anatomista, arquitecto, paleontólogo, botánico, escritor, escultor, filósofo, ingeniero, inventor, músico, poeta y urbanista. Su curiosidad, interés por la invención y sus capacidades científicas y naturalistas, le concedieron un gran lugar en la historia del arte. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7
              p Dentro de sus obras emblemáticas están La Gioconda, La Última Cena, El Hombre de Vitruvio, La dama de armiño. Leonardo Da Vinci, vivió junto a otros artistas y compartió conocimientos, experiencias y hasta competencia artística.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7
              p Hoy se reconoce que ese gran movimiento artístico dejó uno de los mayores legados a la humanidad: el Renacimiento. Un período de gran transformación cultural y artística, durante los siglos XIV y XVI, su principal cualidad es el interés “renacido” por la cultura clásica grecorromana, haciendo del humano el centro de interés para todas las cosas, incluso con una gran herencia de arte asociado a la Iglesia Católica. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-4.png")
            .col-lg-7
              p Aunque se reconoce su influencia en el arte, el Renacimiento fue una transición entre la edad media y la edad moderna, con profundas influencias en la teología, filosofía y la ciencia; más que un movimiento artístico, fue un movimiento histórico – cultural. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-5.png")
            .col-lg-7
              p Dentro de los aportes de Da Vinci al arte, tenemos su gran innovación en las formas de expresión, la estética de sus trazos y el uso de recursos innovadores en la pintura. Sus paisajes, retratos humanos y estudios anatómicos, siguen siendo parte de las clases magistrales en la actualidad, la forma como usaba el arte y la expresión para mostrar el detalle, la composición y la iluminación, demuestran su gran capacidad de comunicar. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-6.png")
            .col-lg-7
              p Dentro de sus contribuciones más destacadas están en la anatomía humana, pues a través de su ejercicio autodidacta, llevó a la práctica disecciones humanas, que le permitieron representar con precisión, la figura humana, algo muy avanzado para su época. 


          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-7.png")
            .col-lg-7
              p No es posible saber qué sería del arte o de la medicina sin los aportes de Leonardo; lo que, sí se sabe, es que conocer a detalle su historia, sus obras y las formas como las construyó, siguen siendo motivo de admiración, curiosidad e interés, para artistas contemporáneos, historiadores y los apasionados de la cultura. 

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] El arte en las culturas orientales
    

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        p Aunque gran parte del conocimiento del arte se aborda desde la antigua Grecia y vincula todos los hitos europeos, las culturas china, persa, japonesa e hindú, tienen elementos del arte que reflejan la grandeza de su cultura, filosofías, creencias y tradiciones. En los siguientes videos, se reconocen algunos elementos diferenciales del arte en estas naciones:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card__text.p-4.d-flex.align-items-start
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=-m_hg5ZtGX8" target="_blank" rel="noopener noreferrer" class="h4") Arte antiguo China


          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/13.png" alt="")
              .custom-image-card__text.p-4.d-flex.align-items-start
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=o6yRcT8Iz-o" target="_blank" rel="noopener noreferrer" class="h4") Arte antiguo Japón
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/14.png" alt="")
              .custom-image-card__text.p-4.d-flex.align-items-start
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=lJGk9lRuG9Y" target="_blank" rel="noopener noreferrer" class="h4") Arte antiguo India
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/15.png" alt="")
              .custom-image-card__text.p-4.d-flex.align-items-start
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=a-0ux-mn5IM" target="_blank" rel="noopener noreferrer" class="h4") Arte antiguo Persia
        
        
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://artsandculture.google.com/partner/bogota-museum-of-modern-art-mambo" target="_blank" rel="noopener noreferrer") Google Arts and Culture. Museo de Arte Moderno de Bogotá – MAMBO. (Colombia).

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://inba.gob.mx/sitios/recorridos-virtuales/museo-palacio-bellas-artes/" target="_blank" rel="noopener noreferrer") Palacio de Bellas Artes. (México).

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=EWamLI-9cbo" target="_blank" rel="noopener noreferrer") Detrás del arte. (2019, 29 de enero). Introducción a la composición de la pintura. [Video] YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-m_hg5ZtGX8" target="_blank" rel="noopener noreferrer") Cápsulas del Conocimiento CUAIEED – UNAM. (2019, 5 de junio). Arte Antiguo China. [Video] YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=o6yRcT8Iz-o" target="_blank" rel="noopener noreferrer") Cápsulas del Conocimiento CUAIEED – UNAM. (2023, 12 de junio). Arte Antiguo Japón. [Video] YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=lJGk9lRuG9Y" target="_blank" rel="noopener noreferrer") Cápsulas del Conocimiento CUAIEED – UNAM. (2023, 16 de junio). Arte Antiguo India. [Video] YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=a-0ux-mn5IM" target="_blank" rel="noopener noreferrer") Cápsulas del Conocimiento CUAIEED – UNAM. (2019, 30 de mayo). Arte Antiguo Persia. [Video] YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.bbc.com/mundo/articles/c047kgd9zz8o#:~:text=El%20ejemplo%20m%C3%A1s%20antiguo%20de,arte%20rupestre%20m%C3%A1s%20antiguo%20anterior" target="_blank" rel="noopener noreferrer") Ghosh. P. (2024). El fascinante hallazgo de las pinturas rupestres más antiguas del mundo. BBC News Mundo.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
