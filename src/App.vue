<template>
  <div class="container-animate container-fluid">
    <div class="row h-100 align-items-stretch">
      <div class="col-4 bg-tertiary text-light d-flex flex-column pe-0">
        <div class="ms-2 ms-md-3 ms-lg-4 ms-xl-5 mt-5 pt-3">
          <h1 class="fw-normal border-bottom border-light border-2 fs-3">
            Contact
          </h1>
          <ul class="custom-list">
            <li>
              <a :href="'tel:' + mobilePhoneNumber" class="text-light text-decoration-none">{{ mobilePhoneNumberVisual }}</a>
              &nbsp;
              <span class="text-quaternary">(Mobile)</span>
            </li>
            <li><a :href="'mailto:' + email" class="text-light text-decoration-none">{{ email }}</a></li>
            <li><a :href="linkedin" target="_blank" class="text-light text-decoration-none">LinkedIn</a></li>
          </ul>
          <h1 class="fw-normal border-bottom border-light border-2 fs-3">
            Educations
          </h1>
          <ul class="custom-list">
            <li>
              <p class="fs-7 text-quaternary m-0">OCT 2012 - OCT 2017</p>
              <p class="m-0 fw-semibold">Datatechnician specialty in programming</p>
              <p class="m-0">Tech College Aalborg</p>
            </li>
            <li>
              <p class="fs-7 text-quaternary m-0">JAN 2012 - JUN 2012</p>
              <p class="m-0 fw-semibold">EUC Kalundborg</p>
              <p class="m-0">Stock operator specialty in logistics</p>
            </li>
            <li>
              <p class="fs-7 text-quaternary m-0">OCT 2009 - OCT 2011</p>
              <p class="m-0 fw-semibold">Odense teknisk skole</p>
              <p class="m-0">Web integrator</p>
            </li>
          </ul>
          <h1 class="fw-normal border-bottom border-light border-2 fs-3">
            Certifications
          </h1>
          <ul class="custom-list">
            <li>
              <a href="https://www.codingame.com/certification/llw3pAE47xRiij7lIT5oZw" class="text-light text-decoration-none">Codingame certified Javascript developer</a>
            </li>
          </ul>
          <h1 class="fw-normal border-bottom border-light border-2 fs-3">
            Top skills
          </h1>
          <ul class="custom-list">
            <li>
              Node JS
            </li>
            <li>
              Vue.js
            </li>
            <li>
              Angular
            </li>
            <li>
              Typescript/Javascript
            </li>
          </ul>
          <h1 class="fw-normal border-bottom border-light border-2 fs-3">
            Languages
          </h1>
          <ul class="custom-list">
            <li>
              Dansk
            </li>
            <li>
              English
            </li>
          </ul>
          <div class="d-flex justify-content-end px-3">
            <a href="https://github.com/danlars/Resume" target="_blank" class="github-referral" />
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
          <article class="experience">
            <p class="fw-bold m-0">AUG 2023 - PRESENT</p>
            <p class="fw-light m-0">OnlineCity, Aalborg</p>
            <p class="fw-semibold">Senior Fullstack developer</p>
            <ul>
              <li>Enhanced user interfaces and functionalities, optimizing customer experiences and driving user engagement.</li>
              <li>Collaborated with across teams to ensure seamless integration between frontend and backend, resulting in efficient and scalable systems.</li>
              <li>Actively contributed to strategic decision-making processes, guiding the company's technical direction.</li>
            </ul>
          </article>
          <article class="experience">
            <p class="fw-bold m-0">MAR 2021 - JUL 2023</p>
            <p class="fw-light m-0">Netcompany, Aalborg</p>
            <p class="fw-semibold">Interface Consultant</p>
            <ul>
              <li>Developed and maintained innovative frontend applications for government services, streamlining processes and enhancing user experience.</li>
            </ul>
          </article>
          <article class="experience">
            <p class="fw-bold m-0">DEC 2016 - FEB 2021</p>
            <p class="fw-light m-0">Monsido Aps, Ballerup</p>
            <p class="fw-semibold">Senior Frontend developer</p>
            <ul>
              <li>Led the maintenance and improvement of key applications, including customer platform, internal platform, Chrome Extension, JavaScript applications running on clients' websites, and Node Web Services, ensuring seamless user experiences.</li>
            </ul>
          </article>
          <article class="experience">
            <p class="fw-bold m-0">DEC 2015 - NOV 2018</p>
            <p class="fw-light m-0">Interface Aps, Ballerup</p>
            <p class="fw-semibold">Fullstack developer</p>
            <ul>
              <li>Specialized in full-stack development, focusing on PHP and JavaScript (AngularJS and jQuery), to deliver high quality applications.</li>
            </ul>
          </article>
          <article class="experience">
            <p class="fw-bold m-0">NOV 2014 - NOV 2015</p>
            <p class="fw-light m-0">IT Center Nord, Aalborg</p>
            <p class="fw-semibold">Web developer Internship</p>
            <ul>
              <li>Collaborated with the Developer team to maintain existing products and actively participated in the development of new projects, honing my skills and contributing to the team's success.</li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import {EnvironmentSingleton} from './singletons/environment.singleton';
import {environmentKey} from './constants/environmentKey.const';
const environment = EnvironmentSingleton.getInstance();
const mobilePhoneNumber = computed(() => environment.getEnvironmentValue(environmentKey.MOBILE_PHONE_NUMBER));
const mobilePhoneNumberVisual = computed(() => environment.getEnvironmentValue(environmentKey.MOBILE_PHONE_NUMBER_VISUAL));
const email = computed(() => environment.getEnvironmentValue(environmentKey.EMAIL));
const linkedin = computed(() => environment.getEnvironmentValue(environmentKey.LINKEDIN));
</script>
<style lang="scss" scoped>
.custom-list {
  list-style-type: none;
  padding-left: .8rem;

  li:not(:last-child) {
    margin-bottom: .6rem;
  }
}

.experience {
  border-left: 2px solid;
  position: relative;
  margin-top: 1rem;
  margin-inline-start: .5rem;
  padding-inline-start: .7rem;
  margin-bottom: 0;

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
    border: 4px solid;
    border-color: inherit;
    border-radius: 50%;
    left: -9px;
    top: -16px;
  }
}

.github-referral {
  background-image: var(--github-logo);
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  width: 40px;
  height: 40px;

  &:hover {
    opacity: .7;
  }
}

.container-animate {
  animation-name: containerAnimate;
  animation-duration: .6s;
  height: 100%;
}

@keyframes containerAnimate {
  0% {
    overflow: hidden;
    width: 80px;
    margin-top: -100%;
    height: 100vh;
  }
  50% {
    overflow: initial;
    width: 80px;
    margin-top: 0;
    height: 100vh;
  }
  100% {
    width: 100%;
    height: auto;
  }
}
</style>