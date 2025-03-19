<template>
  <div class="loader-container" :class="{ 'fade-out': isAnimationComplete }">
    <div class="lightning-container">
      <!-- Left side lightning bolts -->
      <div class="lightning left-main"></div>
      <div class="lightning left-branch-1"></div>
      <div class="lightning left-branch-2"></div>
      
      <!-- Center lightning bolts -->
      <div class="lightning center-main"></div>
      <div class="lightning center-branch-1"></div>
      
      <!-- Right side lightning bolts -->
      <div class="lightning right-main"></div>
      <div class="lightning right-branch-1"></div>
      <div class="lightning right-branch-2"></div>
    </div>
    <div class="mountains">
      <div class="mountain"></div>
      <div class="mountain"></div>
      <div class="mountain"></div>
    </div>
    
    <!-- Added logo overlay -->
    <div class="logo-container">
      <img src="/logo_transparent.png" alt="Logo" class="logo" />
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
    // Adjusted timers to 4s and 4.5s
    setTimeout(() => {
      this.isAnimationComplete = true
    }, 4000)
    
    setTimeout(() => {
      this.$emit('animation-complete')
    }, 4500)
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
  background: #0a1527;
  z-index: 9999;
  transition: opacity 0.25s ease-out;
}

.lightning-container {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  z-index: 100;
}

.lightning {
  position: absolute;
  background: white;
  width: 3px;
  height: 80%;
  top: 0;
  box-shadow: 
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 30px #4a9eff,
    0 0 40px #4a9eff;
  animation: flash 4.5s infinite;
}

/* Position the bolts */
.lightning.left-main {
  left: 30%;
  transform: rotate(15deg);
  animation-delay: 0.1s;
}

.lightning.left-branch-1 {
  left: 25%;
  top: 30%;
  transform: rotate(-25deg);
  animation-delay: 0.15s;
}

.lightning.left-branch-2 {
  left: 35%;
  top: 40%;
  transform: rotate(35deg);
  animation-delay: 0.12s;
}

.lightning.center-main {
  left: 50%;
  transform: rotate(-5deg);
  animation-delay: 0.08s;
}

.lightning.center-branch-1 {
  left: 48%;
  top: 20%;
  transform: rotate(20deg);
  animation-delay: 0.13s;
}

.lightning.right-main {
  left: 70%;
  transform: rotate(-20deg);
  animation-delay: 0.11s;
}

.lightning.right-branch-1 {
  left: 65%;
  top: 25%;
  transform: rotate(-35deg);
  animation-delay: 0.14s;
}

.lightning.right-branch-2 {
  left: 75%;
  top: 35%;
  transform: rotate(15deg);
  animation-delay: 0.09s;
}

@keyframes flash {
  0%, 100% { opacity: 0; }
  
  /* First flash around 0.75 seconds */
  15% { opacity: 0; }
  15.1% { opacity: 1; }
  15.4% { opacity: 1; }
  15.5% { opacity: 0; }
  15.6% { opacity: 1; }
  15.9% { opacity: 1; }
  16% { opacity: 0; }
  
  /* Second flash around 1.8 seconds */
  40% { opacity: 0; }
  40.1% { opacity: 1; }
  40.4% { opacity: 1; }
  40.5% { opacity: 0; }
  40.6% { opacity: 1; }
  40.9% { opacity: 1; }
  41% { opacity: 0; }
  
  /* Third flash around 3 seconds */
  65% { opacity: 0; }
  65.1% { opacity: 1; }
  65.4% { opacity: 1; }
  65.5% { opacity: 0; }
  65.6% { opacity: 1; }
  65.9% { opacity: 1; }
  66% { opacity: 0; }
  
  /* Fourth flash around 4 seconds */
  90% { opacity: 0; }
  90.1% { opacity: 1; }
  90.4% { opacity: 1; }
  90.5% { opacity: 0; }
  90.6% { opacity: 1; }
  90.9% { opacity: 1; }
  91% { opacity: 0; }
}

/* Keep the zigzag effect */
.lightning::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  clip-path: polygon(
    0 0, 20% 15%,
    40% 0, 60% 15%,
    80% 0, 100% 15%,
    100% 100%, 80% 85%,
    60% 100%, 40% 85%,
    20% 100%, 0 85%
  );
}

.mountains {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  gap: 20px;
  filter: brightness(0.3);
  z-index: 50;
}

.mountain {
  width: 0;
  height: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-bottom: 300px solid #2c3e50;
  transform: translateY(100%);
  animation: mountain-rise 2s ease-out forwards;
  animation-delay: 1s;
}

.mountain:nth-child(2) {
  border-bottom-color: #34495e;
  animation-delay: 1.2s;
  transform: scale(1.2);
}

.mountain:nth-child(3) {
  border-bottom-color: #2c3e50;
  animation-delay: 1.4s;
  transform: scale(0.8);
}

@keyframes mountain-rise {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.fade-out {
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.logo-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  opacity: 0;
  animation: fadeInLogo 4.5s forwards;
}

.logo {
  max-width: 300px;
  height: auto;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
}

@keyframes fadeInLogo {
  0%, 44% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  55% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style> 