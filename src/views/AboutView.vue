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
          <p>Full Degen Coin (FDC) was born from the wildest dreams of the crypto trenches, crafted by the true degens for the degens.</p>
          <p>Launched in 2025 by a squad of blockchain fanatics and crypto OGs, FDC quickly became the talk of the town among moonshot hunters who crave real substance.</p>
          <p>We're on a mission to create a memecoin that stands as the BTC of memecoins, destined to evolve into a vibrant ecosystem with a community of diamond hands who are all in on the long-term vision of this epic project.</p>
        </div>
        <div class="about-image">
          <img src="/logo_transparent.png" alt="Full Degen Coin Logo" class="about-logo">
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
          <h3>Make people money</h3>
          <p>We're not just another meme coin. We're a community coin, built by the community, for the community. We're here to make people money.</p>
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
          <h3>Alex "PhantomSol" Phillips</h3>
          <p class="member-role">Co-founder</p>
          <p>One of the original founders of the Full Degen Coin project. He's been in the trenches since the early days of Bitcoin and has a proven track record of success.</p>
          <a href="https://t.me/AlexDegenKing" class="telegram-link">Telegram</a>
        </div>
        <div class="team-member">
          <div class="member-avatar">👩‍💼</div>
          <h3>Mark "MoneyMoon" Johnson</h3>
          <p class="member-role">Co-founder</p>
          <p>Mark is a seasoned trader with a knack for spotting undervalued gems. He's been in the trenches since the early days of Bitcoin and has a proven track record of success.</p>
          <a href="https://t.me/SarahWilliams" class="telegram-link">Telegram</a>
        </div>
        <div class="team-member">
          <div class="member-avatar">👩‍🔬</div>
          <h3>Sam "WhaleWatcher" Abramovich</h3>
          <p class="member-role">Lead Developer and Co-founder</p>
          <p>Sam is the lead developer and co-founder of the Full Degen Coin project. He has been a blockchain developer for 5 years and has worked with some of the biggest names in the industry.</p>
          <a href="https://t.me/MikeMoonshot" class="telegram-link">Telegram</a>
        </div>
      </div>
    </section>

   

    <section class="about-section">
      <h2>Join the Full Degen Movement</h2>
      <p class="join-text">Become part of our growing community and help shape the future of Full Degen Coin.</p>
      <div class="social-links">
        <a href="#" class="social-link">Twitter</a>
        <a href="#" class="social-link">Telegram</a>
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
  animation: circleFloat 8s linear infinite;
}

.about-logo:hover {
  background-color: #a526a6;
  border-radius: 18px
}

@keyframes circleFloat {
  0% {
    transform: rotate(0deg) translateX(30px) rotate(0deg);
  }
  25% {
    transform: rotate(90deg) translateX(30px) rotate(-90deg);
  }
  50% {
    transform: rotate(180deg) translateX(30px) rotate(-180deg);
  }
  75% {
    transform: rotate(270deg) translateX(30px) rotate(-270deg);
  }
  100% {
    transform: rotate(360deg) translateX(30px) rotate(-360deg);
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

.telegram-link {
  display: inline-block;
  margin-top: 1rem;
  color: #ffffff;
  background-color: #0088cc;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.telegram-link:hover {
  background-color: #005f8c;
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
