<template>
  <div class="loader-container" :class="{ 'fade-out': isAnimationComplete }">
    <div class="lightning-container">
      <div class="lightning"></div>
      <div class="mountains">
        <div class="mountain"></div>
        <div class="mountain"></div>
        <div class="mountain"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InitialLoader',
  data() {
    return {
      isAnimationComplete: false
    }
  },
  mounted() {
    // Trigger fade out after 5.5 seconds
    setTimeout(() => {
      this.isAnimationComplete = true
    }, 5500)

    // Emit complete event after 6 seconds
    setTimeout(() => {
      this.$emit('animation-complete')
    }, 6000)
  }
}
</script>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #1a1a1a;
  z-index: 9999;
  transition: opacity 0.5s ease-out;
}

.fade-out {
  opacity: 0;
}

.lightning-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.lightning {
  position: absolute;
  width: 2px;
  height: 0%;
  background: white;
  left: 50%;
  top: 0;
  animation: lightning 6s ease-in-out;
}

.mountains {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.mountain {
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 200px solid #333;
  transform: translateY(100%);
  animation: mountain-rise 1.5s ease-out forwards;
  animation-delay: 2s;
}

.mountain:nth-child(2) {
  border-bottom-color: #444;
  animation-delay: 2.2s;
}

.mountain:nth-child(3) {
  border-bottom-color: #555;
  animation-delay: 2.4s;
}

@keyframes lightning {
  0% { height: 0%; opacity: 0; }
  20% { height: 80%; opacity: 1; }
  22% { opacity: 0; }
  25% { opacity: 1; }
  27% { opacity: 0; }
  30% { opacity: 1; }
  40% { height: 80%; opacity: 0; }
  100% { height: 80%; opacity: 0; }
}

@keyframes mountain-rise {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style> 