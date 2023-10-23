import { Component } from '@angular/core';
import { TitleText } from 'src/app/models/title-text';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  information?: TitleText[];

  skills = [
    'HTML',
    'CSS',
    'SASS',
    'Tailwind CSS',
    'Bootstrap',
    'Vuetify',
    'JavaScript',
    'Vue.js 3',
    'Java',
    'Spring Boot',
    'MySQL',
    'Jest',
    'JUnit',
    'GitHub Pages',
    'Netlify',
    'Git',
    'GitHub',
    'Postman',
    'Jira',
    'Trello',
    'Scrum',
    'Figma',
  ];
  constructor() {
    this.information = [
      {
        title: 'Mi Perfil Profesional y Personal',
        paragraphs: [
          'Soy Andrea, una apasionada Desarrolladora Web Junior con una amplia gama de habilidades y características que me definen como profesional y como persona. En mi camino hacia el desarrollo web, he demostrado ser inteligente y dedicada, siempre dispuesta a aprender y avanzar en mi carrera. Mi entusiasmo y ganas de superarme me impulsan a establecer metas concretas y trabajar arduamente para alcanzarlas.',
          'Además, me considero una persona participativa y extrovertida, lo que me permite colaborar efectivamente en equipos de trabajo y establecer conexiones significativas con mis compañeros. Mi habilidad para escuchar activamente y aceptar críticas me ayuda a mejorar continuamente y aportar soluciones más innovadoras.',
          'Soy amable, educada y empática, lo que me permite crear un ambiente positivo y armonioso tanto en el trabajo como en la vida diaria. Mi espíritu generoso me impulsa a compartir mis conocimientos y apoyar a otros en su crecimiento profesional. La coordinación y adaptabilidad son habilidades que me permiten enfrentar desafíos con facilidad y mantenerme firme ante los obstáculos. Siempre me esfuerzo por superar cualquier dificultad y mantener mi fuerza y persistencia en cada proyecto.',
        ],
      },
      {
        title: 'Educación',
        paragraphs: [
          'Completé un riguroso bootcamp de Desarrollador Web Full Stack en la escuela digital Factoria F5, con una duración de 850 horas. Este programa de formación me proporcionó una sólida base en el desarrollo web, incluyendo tanto el frontend como el backend. A través de este bootcamp, adquirí habilidades esenciales en tecnologías web actuales y metodologías de desarrollo ágil, preparándome para enfrentar desafíos en proyectos web del mundo real.',
        ],
      },
      {
        title: 'Experiencia',
        paragraphs: [
          'Durante el bootcamp de Factoria F5, tuve la oportunidad de sumergirme en un entorno similar al ámbito laboral durante seis meses. Esto me permitió aplicar mis conocimientos recién adquiridos en proyectos prácticos, colaborar con compañeros de equipo y enfrentar desafíos del mundo real. Fue una experiencia valiosa que consolidó mis habilidades y me preparó para una carrera exitosa en el desarrollo web.',
        ],
      },
    ];
  }
}
