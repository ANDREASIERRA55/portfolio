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
    { name: 'HTML', icon: 'assets/logos/html.png' },
    { name: 'CSS', icon: 'assets/logos/css.png' },
    { name: 'SASS', icon: 'assets/logos/sass.png' },
    { name: 'Tailwind CSS', icon: 'assets/logos/tailwindcss.png' },
    { name: 'Bootstrap', icon: 'assets/logos/bootstrap.png' },
    { name: 'Vuetify', icon: 'assets/logos/vuetify.png' },
    { name: 'JavaScript', icon: 'assets/logos/javascript.png' },
    { name: 'Vue.js 3', icon: 'assets/logos/vuejs.png' },
    { name: 'Java', icon: 'assets/logos/java.png' },
    { name: 'Spring Boot', icon: 'assets/logos/springboot.png' },
    { name: 'MySQL', icon: 'assets/logos/mysql.png' },
    { name: 'Jest', icon: 'assets/logos/jest.png' },
    { name: 'JUnit', icon: 'assets/logos/junit.png' },
    { name: 'GitHub Pages', icon: 'assets/logos/githubpages.png' },
    { name: 'Netlify', icon: 'assets/logos/netlify.png' },
    { name: 'Git', icon: 'assets/logos/git.png' },
    { name: 'GitHub', icon: 'assets/logos/github.png' },
    { name: 'Postman', icon: 'assets/logos/postman.png' },
    { name: 'Jira', icon: 'assets/logos/jira.png' },
    { name: 'Trello', icon: 'assets/logos/trello.png' },
    { name: 'Scrum', icon: 'assets/logos/scrum.png' },
    { name: 'Figma', icon: 'assets/logos/figma.png' },
  ];
  constructor() {
    this.information = [
      {
        title: 'Mi Perfil Profesional y Personal',
        paragraphs: [
          'Soy Andrea, apasionada Desarrolladora Web Junior con habilidades destacadas y un fuerte compromiso con el aprendizaje y el logro de metas. Además, mi naturaleza extrovertida me permite colaborar eficazmente en equipos y establecer conexiones significativas. Soy amable, empática y generosa, creando ambientes armoniosos y compartiendo conocimientos. Mi coordinación y adaptabilidad me ayudan a superar desafíos con determinación y persistencia en cada proyecto.',
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
