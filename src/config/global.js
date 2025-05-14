export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Arte',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Bellas artes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El despertar del arte',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'El arte en las culturas orientales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Exhibiciones y visitas a centros culturales y artísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Los museos, espacios para la conservación, educación y fortalecimiento de la identidad',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Talleres y cursos virtuales de arte y cultura',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Pistas sobre el arte en Colombia',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Eventos culturales-artísticos <em>online</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Las siete artes',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'UNESCO. (S/A). Cultura. Proteger el patrimonio y fomentar la creatividad.',
      link:
        'https://www.unesco.org/es/culture#:~:text=Desde%20los%20c%C3%A9lebres%20monumentos%20hist%C3%B3ricos,conducir%20a%20una%20paz%20duradera.',
    },
    {
      referencia:
        'INSTITUTO DE GESTIÓN CULTURAL Y ARTÍSTICA. (2021). Patrimonio material e inmaterial: definición, diferencias y ejemplos.',
      link:
        'https://igeca.net/blog/389-patrimonio-material-e-inmaterial-definicion-diferencias-y-ejemplos#:~:text=Volviendo%20a%20las%20definiciones%2C%20el,determinado%20lugar%20o%20grupo%20social',
    },
  ],
  glosario: [
    {
      termino: 'Arte',
      significado:
        'Es la capacidad, destreza o habilidad para hacer algo, como la manifestación de la creatividad humana a través de expresiones visuales, sonoras o plásticas como la pintura, la escultura, la música, la literatura, entre otras.',
    },
    {
      termino: 'Cultura',
      significado:
        'Conjunto de conocimientos, creencias, costumbres, artes, leyes, valores, y hábitos compartidos por un grupo de personas, que son transmitidos de generación en generación. Es la forma de vida de una sociedad o grupo, que incluye tanto lo material como lo intangible.',
    },
    {
      termino: 'Exhibición de arte',
      significado:
        'Evento en el que se muestran al público obras de arte de uno o varios artistas. Estas exhibiciones pueden ser permanentes o temporales y suelen tener lugar en galerías de arte, museos o espacios públicos.',
    },
    {
      termino: 'Historia',
      significado:
        'Disciplina que estudia los acontecimientos pasados de la humanidad, basándose en documentos, registros, o testimonios confiables, para dar pruebas de lo ocurrido y sustentar las narraciones e interpretaciones escritas por los historiadores.',
    },
    {
      termino: 'Impresionismo',
      significado:
        'Movimiento artístico del siglo XIX que buscaba reproducir los efectos de luz y sombra en el momento exacto en que era observada. Significó un desafío a las convenciones académicas de su época, que imponían un modelo de representación detallista e idealizado.',
    },
    {
      termino: 'Identidad cultural',
      significado:
        'Sentido de pertenencia a un grupo social, caracterizado por el compartir costumbres, valores, creencias y tradiciones, que se recrean y se enriquecen a través del tiempo. La cultura, por otro lado, es el conjunto de formas de vida, valores y creencias que definen a un grupo social y que se transmiten de generación en generación.',
    },
    {
      termino: 'Memoria cultural',
      significado:
        'Forma en que una sociedad transmite y conserva su conocimiento, historia, valores y prácticas a través de generaciones. Se manifiesta a través de tradiciones, ritos, textos, lugares y otros símbolos.',
    },
    {
      termino: 'Museo',
      significado:
        'Institución sin fines de lucro que, de forma permanente, investiga, recopila, conserva, interpreta y exhibe el patrimonio tangible e intangible para la sociedad.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Conjunto de bienes, derechos y obligaciones de una persona o entidad, que pueden ser evaluados económicamente.',
    },
    {
      termino: 'Patrimonio inmaterial',
      significado:
        'Prácticas, representaciones, expresiones, conocimientos y habilidades, así como los instrumentos, objetos y artefactos, y espacios culturales asociados, que las comunidades, los grupos y en algunos casos los individuos reconocen como parte integrante de su patrimonio cultural.',
    },
    {
      termino: 'Patrimonio material',
      significado:
        'Patrimonio tangible, se refiere a los bienes culturales físicos, tanto muebles como inmuebles, que han sido creados por sociedades en el pasado y que son parte de su legado.',
    },
  ],
}
