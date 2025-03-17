<template>
  <div class="about">
    <section class="about-hero">
      <h1>About Full Degen Coin</h1>
      <p class="subtitle">The Story Behind the Ultimate Degen Cryptocurrency</p>
    </section>

    <section class="about-section">
      <h2>Our Story</h2>
      <div class="about-content">
        <div class="about-text">
          <p>Full Degen Coin (FDC) was born out of a simple idea: create a cryptocurrency that embraces the spirit of the degen community while providing real utility and value.</p>
          <p>Founded in 2023 by a team of blockchain enthusiasts and crypto veterans, FDC quickly gained traction among traders looking for the next moonshot with actual substance behind it.</p>
          <p>What started as a meme has evolved into a thriving ecosystem with a passionate community of holders who believe in the long-term vision of the project.</p>
        </div>
        <div class="about-image">
          <img src="/logo.png" alt="Full Degen Coin Logo" class="about-logo">
        </div>
      </div>
    </section>

    <section class="about-section alt-bg">
      <h2>Our Mission</h2>
      <div class="mission-cards">
        <div class="mission-card">
          <h3>Community First</h3>
          <p>Build and nurture the strongest community in crypto, where every holder has a voice in the project's future.</p>
        </div>
        <div class="mission-card">
          <h3>Transparency</h3>
          <p>Maintain complete transparency in all operations, from tokenomics to development roadmap and treasury management.</p>
        </div>
        <div class="mission-card">
          <h3>Innovation</h3>
          <p>Continuously innovate and develop new features and utilities that add real value to the Full Degen ecosystem.</p>
        </div>
      </div>
    </section>

    <section class="about-section">
      <h2>Meet the Team</h2>
      <div class="team-grid">
        <div class="team-member">
          <div class="member-avatar">👨‍💻</div>
          <h3>Alex "DegenKing" Johnson</h3>
          <p class="member-role">Founder & Lead Developer</p>
          <p>Blockchain developer with 7+ years of experience in DeFi projects.</p>
        </div>
        <div class="team-member">
          <div class="member-avatar">👩‍💼</div>
          <h3>Sarah Williams</h3>
          <p class="member-role">Marketing Director</p>
          <p>Former marketing executive for multiple successful crypto startups.</p>
        </div>
        <div class="team-member">
          <div class="member-avatar">👨‍🚀</div>
          <h3>Mike "Moonshot" Chen</h3>
          <p class="member-role">Community Manager</p>
          <p>Crypto enthusiast and community builder since the early days of Bitcoin.</p>
        </div>
        <div class="team-member">
          <div class="member-avatar">👩‍🔬</div>
          <h3>Dr. Lisa Kumar</h3>
          <p class="member-role">Tokenomics Specialist</p>
          <p>PhD in Economics with expertise in designing sustainable token economies.</p>
        </div>
      </div>
    </section>

    <section class="about-section alt-bg">
      <h2>Our Vision</h2>
      <div class="vision-content">
        <p class="vision-text">
          We envision Full Degen Coin becoming more than just another cryptocurrency. Our goal is to build a comprehensive ecosystem that bridges the gap between the degen trading culture and practical financial applications.
        </p>
        <p class="vision-text">
          By 2025, we aim to have established FDC as a recognized brand in the crypto space, with a suite of dApps, NFT collections, and real-world partnerships that provide tangible benefits to our holders.
        </p>
        <p class="vision-text">
          The future of Full Degen Coin is in the hands of our community. Together, we're building something that will stand the test of time in the volatile world of cryptocurrency.
        </p>
        <div class="vision-cta">
          <router-link to="/roadmap" class="vision-btn">View Our Roadmap</router-link>
        </div>
      </div>
    </section>

    <section class="about-section">
      <h2>Join the Full Degen Movement</h2>
      <p class="join-text">Become part of our growing community and help shape the future of Full Degen Coin.</p>
      <div class="social-links">
        <a href="#" class="social-link">Twitter</a>
        <a href="#" class="social-link">Telegram</a>
        <a href="#" class="social-link">Discord</a>
        <a href="#" class="social-link">Medium</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  color: #ffffff;
}

.about-hero {
  text-align: center;
  padding: 4rem 0;
  position: relative;
}

.about-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #a627a8, #9bf6fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
}

.about-section {
  padding: 4rem 0;
}

.alt-bg {
  background-color: rgba(166, 39, 168, 0.05);
  border-radius: 10px;
  margin: 2rem 0;
}

.about-section h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.about-section h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #a627a8, #9bf6fd);
  border-radius: 2px;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;
}

.about-text {
  flex: 2;
}

.about-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.about-logo {
  max-width: 250px;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.mission-cards {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.mission-card {
  flex: 1;
  min-width: 250px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.mission-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.mission-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f0c225;
}

.mission-card p {
  line-height: 1.6;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.team-member {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.member-avatar {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.team-member h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #f0c225;
}

.member-role {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1rem;
}

.vision-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.vision-text {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.vision-cta {
  margin-top: 2rem;
}

.vision-btn {
  display: inline-block;
  background-color: #a627a8;
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
}

.vision-btn:hover {
  background-color: #f0c225;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(166, 39, 168, 0.4);
}

.join-text {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.social-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
  position: relative;
}

.social-link:after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #f0c225;
  transition: width 0.3s;
}

.social-link:hover {
  color: #f0c225;
}

.social-link:hover:after {
  width: 100%;
}

@media (max-width: 992px) {
  .about-content {
    flex-direction: column-reverse;
    gap: 2rem;
  }
  
  .about-image {
    margin-bottom: 2rem;
  }
  
  .mission-cards {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .vision-text {
    font-size: 1.1rem;
  }
  
  .social-links {
    gap: 1rem;
  }
}
</style>
