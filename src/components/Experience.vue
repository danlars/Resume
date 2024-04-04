<template>
  <article class="experience">
    <slot/>
  </article>
</template>
<style lang="scss" scoped>
.experience {
  border-left: 2px solid;
  position: relative;
  margin-top: 1rem;
  margin-inline-start: .5rem;
  padding-inline-start: .7rem;
  margin-bottom: 0;

  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-style: solid;
    border-width: 4px;
    border-color: inherit;
    border-radius: 50%;
    left: -9px;
    top: -16px;
  }
}
</style>
