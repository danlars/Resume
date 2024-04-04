<template>
  <div class="overlay d-print-none">
    <div class="curtain bg-light" />
    <div class="curtain bg-light" />
  </div>
</template>
<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 1;
  justify-content: space-between;
  animation-name: overlayAnimation;
  animation-duration: .6s;
  animation-fill-mode: forwards;
}

.curtain {
  animation-name: curtainAnimation;
  animation-duration: .6s;
  animation-fill-mode: forwards;
}

@keyframes curtainAnimation {
  0% {
    width: 50%;
  }

  100% {
    width: 0;
  }
}

@keyframes overlayAnimation {
  0% {
    display: flex;
  }

  100% {
    display: none;
  }
}
</style>
