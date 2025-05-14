<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Talleres y cursos virtuales de arte y cultura'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

      .row.align-items-center.mb-4
        .col-lg
          p.mb-0 Además de las visitas guiadas y apreciación de las grandes obras de arte, se puede vivenciar el arte a partir de la formación permanente sobre historia del arte, apreciación, productos artísticos o de gestión cultural. Algunos de los talleres y cursos virtuales sobre arte más recomendados, son:
        .col-lg-auto
          img(src="@/assets/curso/tema3/1.svg", style="max-width: 295px").mx-auto


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-1.png")
              .col-lg-7
                h4 Cursos Gratis UNAM
                p Profundizar en el entendimiento de las obras plásticas sin tener una formación previa en arte.
                p Adquirir las herramientas necesarias para disfrutar y entender el arte desde una perspectiva más detallada, con el objetivo de hacer que su próxima visita a una galería o museo, sea más significativa y gratificante.
                p Construir una visión integral sobre el actuar de los museos y su papel social.
                p #[strong Curso de apreciación del arte para no artistas:]
                a.anexo.mb-4.bg-white.w-fit(href="https://cursosgratisunam.com/arte/apreciacion/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Cursos gratis UNAM

                p #[strong Curso de museología: ]
                a.anexo.mb-4.bg-white.w-fit(href="https://cursosgratisunam.com/arte/museologia/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Cursos gratis UNAM
                    
                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-2.png")
              .col-lg-7
                h4 Edutin Academy
                p Abordaje de los hitos más importantes del desarrollo artístico, teniendo en cuenta los artistas más influyentes y sus aportes al desarrollo humano.

                p #[strong Curso de historia del arte:]
                a.anexo.mb-4.bg-white.w-fit(href="https://edutin.com/curso-de-historia-del-arte" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Edutin Academy
      

      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Pistas sobre el arte en Colombia


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 El arte, en Colombia, tiene una trayectoria de cerca de 3.500 años, la cual inicia con culturas prehispánicas, reflejando a través del tiempo, la diversidad cultural, geográfica y social del país.
      
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Al ser un país colonizado por España, existe una alta influencia del arte europeo, en especial en la pintura, principalmente de la corriente del barroco. Sin embargo, a raíz de los fenómenos independentistas, se observan cambios a partir del siglo XIX hacia el arte moderno y contemporáneo.
      
          p(data-aos="fade-left").mb-4 Dentro de los hitos de la historia del arte en Colombia, se encuentran:
      

      .bg-full-width.bg-fondo-info.mb-5
        .px-4.px-md-5.pt-4.pt-md-5
          .row.justify-content-center.align-items-center
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/info1.png', alt='', style="max-width: 1064px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="37.5%" y="11%" numero="+")
                  h5 Expresiones artísticas prehispánicas
                  p Las expresiones artísticas prehispánicas reflejan conocimientos, creencias y cosmovisiones de los pueblos indígenas de los diferentes territorios colombianos. Es evidente, incluso en la actualidad, cómo las artesanías, las expresiones del folclore como la música y las danzas, la gastronomía y otras tradiciones, reflejan el origen indígena, a partir de las comunidades. Al norte en la Costa Atlántica, tenemos a los Wayuu, Kogui, Sinú, Tayrona y Calima. En Nariño, Putumayo y la Amazonía colombiana, estaban los pueblos Awa, Ticuna, Huitoto, Guahibo, Nukak, Cubeo. En la zona de la Orinoquia, la comunidad Sikuani. Hacia Nariño, está el grupo indígena de los Pastos. En el centro del país, los Chibchas, Muiscas y Quimbayas.
      
                .bg-color-white.box-shadow.p-3(x="63.5%" y="11%" numero="+")
                  h5 Período colonial
                  p Hacia el período colonial la influencia del arte español se evidenció en la pintura y la arquitectura, aún vigente en gran parte de los municipios del país en las Iglesias y plazas fundacionales. Se desarrollaron estilos como el Barroco, el Rococó y el Neoclásico, influenciados por las corrientes europeas. La temática religiosa fue evidente a lo largo de este período.
      
                .bg-color-white.box-shadow.p-3(x="89%" y="11%" numero="+")
                  h5 Siglos XX y XXI
                  p Durante los siglos XX y XXI, Colombia refleja su arte moderno, principalmente en el campo de la arquitectura y la pintura. Artistas como Alejandro Obregón, Fernando Botero y Olga de Amaral, se caracterizaron por la diversidad de estilos y la manifestación, en sus obras, de temas sociales y políticos. También es importante reflejar cómo el arte incide en la literatura con figuras como Gabriel García Márquez, una narrativa de gran impacto latinoamericano.   
      

      .row.mb-4
        .col-lg-8
          .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 Es importante destacar que la diversidad cultural de Colombia no tiene límites, recorrer el país es también identificar las influencias ancestrales y contemporáneas en la música, la literatura, las artes escénicas y plásticas. Así como en el folclore y el periodismo, que guardan una conexión relevante con la cultura y el arte, ejemplo de esto, las obras, crónicas e investigaciones del escritor Manuel Zapata Olivella y el periodista David Sánchez Juliao. 
          
          p(data-aos="fade-left") Ahora, las musas eran diosas (deidades) que iluminaban a través de la inspiración a los poetas, músicos, pintores y escritores, eran parte de la mitología griega para explicar cómo estas personas podían tener esos momentos “sublimes” de inspiración para convertirlos en un producto material. 

        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in").mb-4.mb-lg-0


      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
        .col-lg-7
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            p.mb-0 Las musas eran consideradas fuente entre la divinidad y la humanidad que habitaban en las laderas del Parnaso y del Helicón, su función principal era proteger las artes y las ciencias. Algunos artistas antiguos daban relatos sobre la inspiración que llegaba a ellos de fuentes extraordinarias y seres celestiales, en donde también había paso para el consumo de ciertas sustancias alucinógenas o alcohólicas que llevaban a esas visiones.
      
          p(data-aos="fade-left") En la actualidad, la denominación de musas sigue usándose para cualquier fuente de inspiración de los artistas, sin importar si son una deidad, una figura humana o una expresión de la naturaleza.
      
    

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=-y3HF5OtK8M" target="_blank" rel="noopener noreferrer") HISTORY LATINOAMÉRICA. (2019, 27 de julio). Biografías en un minuto - Leonardo da Vinci. [Video] YouTube.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.senalmemoria.co/arte-rupestre-en-colombia" target="_blank" rel="noopener noreferrer") RTVC. SEÑAL MEMORIA. (2021). Arte rupestre en Colombia: comunicaciones ancestrales.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span SOLANO, J. LOZADA, N. ACOSTA, O. (2022). Historias del arte en Colombia: identidades, materialidades, migraciones y geografías. Universidad de los Andes. Colombia.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>
