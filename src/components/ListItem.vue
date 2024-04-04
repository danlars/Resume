<template>
  <li class="list-item"><slot/></li>
</template>
<style lang="scss" scoped>
.list-item:not(:last-child) {
  margin-bottom: .6rem;
}
</style>
