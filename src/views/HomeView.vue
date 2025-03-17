<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Full Degen Coin</h1>
        <p class="tagline">The Ultimate Cryptocurrency for True Degens</p>
        <div class="cta-buttons">
          <a href="#" class="primary-btn">Buy Now</a>
          <!--a href="#" class="secondary-btn">View Whitepaper</a> -->
        </div>
      </div>
      <div class="hero-image">
        <img src="/logo.png" alt="Full Degen Coin" class="coin-logo">
        <div class="glow-effect"></div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Why Choose Full Degen Coin?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Moon Potential</h3>
          <p>Designed for explosive growth with our innovative tokenomics model.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👥</div>
          <h3>Built for the trenches</h3>
          <p>Built for the trenches by the trenches - we will defend this shit</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💰</div>
          <h3>GM</h3>
          <p>Get money just by HODL-ing with our reward mechanisms</p>
        </div>
      </div>
    </section>

    <!-- Tokenomics Preview -->
    <section class="tokenomics-preview">
      <h2>Tokenomics at a Glance</h2>
      <div class="tokenomics-cards">
        <div class="tokenomics-card">
          <h3>1 Billion</h3>
          <p>Total Supply</p>
        </div>
        <div class="tokenomics-card">
          <h3>5%</h3>
          <p>Reflection to Holders</p>
        </div>
        <div class="tokenomics-card">
          <h3>3%</h3>
          <p>Liquidity Pool</p>
        </div>
        <div class="tokenomics-card">
          <h3>2%</h3>
          <p>Marketing & Development</p>
        </div>
      </div>
      <router-link to="/tokenomics" class="learn-more">Learn More About Tokenomics</router-link>
    </section>

    <!-- How to Buy Section -->
    <section class="how-to-buy">
      <h2>How to Buy Full Degen Coin</h2>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Create Wallet</h3>
          <p>Download and set up Phantom</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Buy BNB/ETH</h3>
          <p>Purchase SOL from an exchange</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Swap for FDC</h3>
          <p>Swap your SOL for Full Degen Coin</p>
        </div>
      </div>
      <a href="#" class="primary-btn">Buy Now</a>
    </section>

    <!-- Community Section -->
    <section class="community">
      <h2>Join Our Community</h2>
      <p>Be part of the fastest growing crypto community. Connect with fellow degens and stay updated.</p>
      <div class="social-buttons">
        <a href="#" class="social-btn twitter">Twitter</a>
        <a href="#" class="social-btn telegram">Telegram</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  color: #ffffff;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  z-index: 2;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #a627a8, #9bf6fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.primary-btn, .secondary-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
}

.primary-btn {
  background-color: #a627a8;
  color: #ffffff;
}

.primary-btn:hover {
  background-color: #f0c225;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(166, 39, 168, 0.4);
}

.secondary-btn {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #a627a8;
}

.secondary-btn:hover {
  background-color: rgba(166, 39, 168, 0.1);
  transform: translateY(-3px);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.coin-logo {
  max-width: 300px;
  animation: float 6s ease-in-out infinite;
  z-index: 2;
}

.glow-effect {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(166, 39, 168, 0.4) 0%, rgba(166, 39, 168, 0) 70%);
  border-radius: 50%;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.3;
  }
}

/* Features Section */
.features {
  padding: 4rem 0;
  text-align: center;
}

.features h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
}

.features h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #a627a8, #9bf6fd);
  border-radius: 2px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.08);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f0c225;
}

/* Tokenomics Preview */
.tokenomics-preview {
  padding: 4rem 0;
  text-align: center;
  background-color: rgba(166, 39, 168, 0.05);
  border-radius: 10px;
  margin: 2rem 0;
}

.tokenomics-preview h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.tokenomics-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.tokenomics-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  min-width: 200px;
}

.tokenomics-card h3 {
  font-size: 2rem;
  color: #f0c225;
  margin-bottom: 0.5rem;
}

.learn-more {
  display: inline-block;
  margin-top: 1rem;
  color: #f0c225;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.learn-more:hover {
  color: #ffffff;
}

/* How to Buy Section */
.how-to-buy {
  padding: 4rem 0;
  text-align: center;
}

.how-to-buy h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.step {
  flex: 1;
  min-width: 200px;
  position: relative;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #a627a8;
  color: #ffffff;
  border-radius: 50%;
  font-weight: 700;
  margin: 0 auto 1rem;
}

.step h3 {
  margin-bottom: 0.5rem;
  color: #f0c225;
}

/* Community Section */
.community {
  padding: 4rem 0;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  margin: 2rem 0;
}

.community h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.community p {
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.social-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  min-width: 150px;
}

.twitter {
  background-color: #a627a8;
  color: #ffffff;
}

.telegram {
  background-color: #f0c225;
  color: #000000;
}

.discord {
  background-color: #9bf6fd;
  color: #000000;
}

.social-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .hero {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .cta-buttons {
    justify-content: center;
  }
  
  .coin-logo {
    max-width: 250px;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .tagline {
    font-size: 1.2rem;
  }
  
  .tokenomics-cards {
    flex-direction: column;
    align-items: center;
  }
  
  .tokenomics-card {
    width: 100%;
    max-width: 300px;
  }
}
</style>
