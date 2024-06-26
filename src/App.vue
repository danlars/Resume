<template>
  <SlideInAnimation />
  <div class="container-fluid h-100">
    <div class="row h-100 align-items-stretch">
      <div class="col-4 bg-tertiary text-light d-flex flex-column pe-0">
        <div class="ms-2 ms-md-3 ms-lg-4 ms-xl-5 mt-5 pt-3">
          <h1 class="fw-normal border-bottom border-light border-2 fs-3">
            Contact
          </h1>
          <List>
            <li>
              <a :href="'tel:' + mobilePhoneNumber" class="text-light text-decoration-none text-break">{{ mobilePhoneNumberVisual }}</a>
              &nbsp;
              <span class="text-quaternary">(Mobile)</span>
            </li>
            <li><a :href="'mailto:' + email" class="text-light text-decoration-none text-break">{{ email }}</a></li>
          </List>
          <h1 class="fw-normal border-bottom border-light border-2 fs-3">
            Educations
          </h1>
          <List>
            <ListItem>
              <p class="fs-7 text-quaternary m-0">OCT 2012 - OCT 2017</p>
              <p class="m-0 fw-semibold">Datatechnician specialty in programming</p>
              <p class="m-0">Tech College Aalborg</p>
            </ListItem>
            <ListItem>
              <p class="fs-7 text-quaternary m-0">JAN 2012 - JUN 2012</p>
              <p class="m-0 fw-semibold">EUC Kalundborg</p>
              <p class="m-0">Stock operator specialty in logistics</p>
            </ListItem>
            <ListItem>
              <p class="fs-7 text-quaternary m-0">OCT 2009 - OCT 2011</p>
              <p class="m-0 fw-semibold">Odense teknisk skole</p>
              <p class="m-0">Web integrator</p>
            </ListItem>
          </List>
          <h1 class="fw-normal border-bottom border-light border-2 fs-3">
            Certifications
          </h1>
          <List>
            <ListItem>
              <a href="https://www.codingame.com/certification/llw3pAE47xRiij7lIT5oZw" class="text-light text-decoration-none">Codingame certified Javascript developer</a>
            </ListItem>
          </List>
          <h1 class="fw-normal border-bottom border-light border-2 fs-3">
            Top skills
          </h1>
          <List>
            <ListItem>Node JS</ListItem>
            <ListItem>Vue.js</ListItem>
            <ListItem>Angular</ListItem>
            <ListItem>Typescript/Javascript</ListItem>
          </List>
          <h1 class="fw-normal border-bottom border-light border-2 fs-3">
            Languages
          </h1>
          <List>
            <ListItem>
              Dansk
            </ListItem>
            <ListItem>
              English
            </ListItem>
          </List>
          <div class="d-flex justify-content-end px-3 connects">
            <a :href="linkedin" target="_blank" class="linkedin-connect">
              <img src="/linkedin.png" alt="LinkedIn logo" class="image-source-dimensions bg-light" />
            </a>
            <a href="https://github.com/danlars/Resume" target="_blank" class="github-connect image-source-dimensions" />
          </div>
        </div>
      </div>
      <div class="col-8 text-secondary-emphasis">
        <h1 class="fw-normal mt-3 mb-1 text-dark">
          <span class="fw-semibold">Daniel Joachim</span> Larsen
        </h1>
        <h1 class="mt-1 fs-3 fw-normal">Dedicated developer</h1>
        <p class="mb-5 mt-4">
          Highly-driven and forward-thinking developer with a commitment to staying on the edge of web development.
          Eager to contribute to an environment that challenges my skills, values strategic decision-making, and fosters
          a culture of continuous growth and improvement.
        </p>
        <section>
          <h1 class="fs-3 border-bottom border-2 border-dark text-dark mb-5">
            Experience
          </h1>
          <Experience>
            <p class="fw-bold m-0">AUG 2023 - PRESENT</p>
            <p class="fw-light m-0">OnlineCity, Aalborg</p>
            <p class="fw-semibold">Senior Fullstack developer</p>
            <ul>
              <li>Enhanced user interfaces and functionalities, optimizing customer experiences and driving user engagement.</li>
              <li>Collaborated with across teams to ensure seamless integration between frontend and backend, resulting in efficient and scalable systems.</li>
              <li>Actively contributed to strategic decision-making processes, guiding the company's technical direction.</li>
            </ul>
          </Experience>
          <Experience>
            <p class="fw-bold m-0">MAR 2021 - JUL 2023</p>
            <p class="fw-light m-0">Netcompany, Aalborg</p>
            <p class="fw-semibold">Interface Consultant</p>
            <ul>
              <li>Developed and maintained innovative frontend applications for government services, streamlining processes and enhancing user experience.</li>
            </ul>
          </Experience>
          <Experience>
            <p class="fw-bold m-0">DEC 2016 - FEB 2021</p>
            <p class="fw-light m-0">Monsido Aps, Ballerup</p>
            <p class="fw-semibold">Senior Frontend developer</p>
            <ul>
              <li>Led the maintenance and improvement of key applications, including customer platform, internal platform, Chrome Extension, JavaScript applications running on clients' websites, and Node Web Services, ensuring seamless user experiences.</li>
            </ul>
          </Experience>
          <Experience>
            <p class="fw-bold m-0">DEC 2015 - NOV 2018</p>
            <p class="fw-light m-0">Interface Aps, Ballerup</p>
            <p class="fw-semibold">Fullstack developer</p>
            <ul>
              <li>Specialized in full-stack development, focusing on PHP and JavaScript (AngularJS and jQuery), to deliver high quality applications.</li>
            </ul>
          </Experience>
          <Experience>
            <p class="fw-bold m-0">NOV 2014 - NOV 2015</p>
            <p class="fw-light m-0">IT Center Nord, Aalborg</p>
            <p class="fw-semibold">Web developer Internship</p>
            <ul>
              <li>Collaborated with the Developer team to maintain existing products and actively participated in the development of new projects, honing my skills and contributing to the team's success.</li>
            </ul>
          </Experience>
        </section>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import {EnvironmentSingleton} from './singletons/environment.singleton';
import {environmentKey} from './constants/environmentKey.const';
import SlideInAnimation from './components/SlideInAnimation.vue';
import List from './components/List.vue';
import ListItem from './components/ListItem.vue';
import Experience from './components/Experience.vue';

const environment = EnvironmentSingleton.getInstance();
const mobilePhoneNumber = computed(() => environment.getEnvironmentValue(environmentKey.MOBILE_PHONE_NUMBER));
const mobilePhoneNumberVisual = computed(() => environment.getEnvironmentValue(environmentKey.MOBILE_PHONE_NUMBER_VISUAL));
const email = computed(() => environment.getEnvironmentValue(environmentKey.EMAIL));
const linkedin = computed(() => environment.getEnvironmentValue(environmentKey.LINKEDIN));
</script>
<style lang="scss" scoped>
.connects {
  gap: 1rem;
}

.image-source-dimensions {
  width: 40px;
  height: 40px;
}

.linkedin-connect {
  display: inline-block;

  &:hover {
    opacity: .7;
  }

  img {
    border-radius: 5px;
  }
}

.github-connect {
  background-image: var(--github-logo);
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;

  &:hover {
    opacity: .7;
  }
}
</style>
