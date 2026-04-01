<template>
  <div class="about">
    <section class="section section-light">
      <div class="container">
        <h1 class="mb-lg">關於我</h1>
        
        <div class="about-grid">
          <div class="about-text">
            <h2>我是誰</h2>
            <p>
              我是一名熱情的網頁設計師和開發者，專注於創造美觀、功能性強的數位體驗。
              我相信好的設計應該結合美學與實用性，為使用者帶來愉悅的互動體驗。
            </p>
            <p>
              在過去的幾年中，我累積了豐富的前端和全棧開發經驗，
              並致力於學習最新的技術和設計趨勢。
            </p>
            <p>
              我對北歐風格的簡潔設計特別感興趣，認為留白與自然色調能夠營造出寧靜而專業的氛圍。
            </p>
          </div>

          <div class="about-stats">
            <div class="stat-item">
              <h3 class="stat-number">5+</h3>
              <p class="stat-label">年開發經驗</p>
            </div>
            <div class="stat-item">
              <h3 class="stat-number">20+</h3>
              <p class="stat-label">完成的專案</p>
            </div>
            <div class="stat-item">
              <h3 class="stat-number">15+</h3>
              <p class="stat-label">滿意的客戶</p>
            </div>
            <div class="stat-item">
              <h3 class="stat-number">100%</h3>
              <p class="stat-label">專業承諾</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-secondary">
      <div class="container">
        <h2 class="text-center mb-lg">教育與經歷</h2>
        
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>資深前端開發工程師</h3>
              <p class="timeline-date">2023 - 現在</p>
              <p>
                領導前端團隊開發大規模應用程式，專注於效能最佳化和使用者體驗。
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>全棧開發工程師</h3>
              <p class="timeline-date">2021 - 2023</p>
              <p>
                參與多個專案的全棧開發，從設計到部署的完整流程。
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>初級網頁開發工程師</h3>
              <p class="timeline-date">2019 - 2021</p>
              <p>
                開始職業生涯，學習前端基礎和最佳實踐。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import '../assets/styles.scss';

.about {
  min-height: 100vh;
  background-color: var(--color-bg);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.about-text {
  h2 {
    margin-bottom: 1.5rem;
    color: var(--color-text);
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: var(--color-text-muted);
  }
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.stat-item {
  background-color: var(--color-card-bg);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px var(--shadow-color);
  border: 1px solid var(--color-border);
}

.stat-number {
  font-size: 2.5rem;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.timeline {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--color-border);
  }
}

.timeline-item {
  position: relative;
  padding-left: 5rem;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 60px;
  background-color: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 4px var(--color-bg), 0 0 0 6px var(--color-accent);
  z-index: 1;
}

.timeline-content {
  background-color: var(--color-card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow-color);
  border: 1px solid var(--color-border);

  h3 {
    margin-bottom: 0.5rem;
    color: var(--color-text);
  }

  .timeline-date {
    font-size: 0.875rem;
    color: var(--color-accent);
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 0;
    color: var(--color-text-muted);
  }
}
</style>
