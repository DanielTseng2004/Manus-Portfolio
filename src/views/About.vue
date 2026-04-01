<template>
  <article class="post">
    <header>
      <div class="title">
        <h2>關於我</h2>
        <p>了解我的背景、技能與職業生涯</p>
      </div>
      <div class="meta">
        <time class="published" datetime="2026-04-01">April 1, 2026</time>
        <a href="#" class="author"><span class="name">Jane Doe</span><img src="../assets/vue.svg" alt="" /></a>
      </div>
    </header>
    <span class="image featured"><div class="placeholder-featured">關於我</div></span>
    
    <section>
      <h3>我是誰</h3>
      <p>我是一名熱情的網頁設計師和開發者，專注於創造美觀、功能性強的數位體驗。我相信好的設計應該結合美學與實用性，為使用者帶來愉悅的互動體驗。</p>
      <p>在過去的幾年中，我累積了豐富的前端和全棧開發經驗，並致力於學習最新的技術和設計趨勢。我對北歐風格的簡潔設計特別感興趣，認為留白與自然色調能夠營造出寧靜而專業的氛圍。</p>
    </section>

    <hr />

    <section>
      <h3>專業技能</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>類別</th>
              <th>技術棧</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>前端開發</td>
              <td>Vue.js, React, TypeScript, Tailwind CSS, SCSS</td>
            </tr>
            <tr>
              <td>後端開發</td>
              <td>Node.js, Express, Python, MongoDB, PostgreSQL</td>
            </tr>
            <tr>
              <td>設計與工具</td>
              <td>Figma, Adobe XD, Git, Webpack, Vite</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <hr />

    <section>
      <h3>職業經歷</h3>
      <div class="timeline">
        <div class="timeline-item">
          <h4>資深前端開發工程師</h4>
          <p class="date">2023 - 現在</p>
          <p>領導前端團隊開發大規模應用程式，專注於效能最佳化和使用者體驗。</p>
        </div>
        <div class="timeline-item">
          <h4>全棧開發工程師</h4>
          <p class="date">2021 - 2023</p>
          <p>參與多個專案的全棧開發，從設計到部署的完整流程。</p>
        </div>
      </div>
    </section>

    <footer>
      <ul class="actions">
        <li><router-link to="/portfolio" class="button large">查看作品集</router-link></li>
      </ul>
    </footer>
  </article>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import '../assets/styles.scss';

.placeholder-featured {
  height: 20rem;
  background-color: var(--color-bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  border: solid 1px var(--color-border);
}

hr {
  border: 0;
  border-bottom: solid 1px var(--color-border);
  margin: 3rem 0;
}

.table-wrapper {
  overflow-x: auto;
  margin-bottom: 2rem;
  
  table {
    width: 100%;
    border-collapse: collapse;
    
    th {
      text-align: left;
      padding: 0.75rem;
      border-bottom: solid 2px var(--color-border);
      font-family: var(--font-family-sans);
      text-transform: uppercase;
      font-size: 0.7rem;
      letter-spacing: 0.1rem;
    }
    
    td {
      padding: 0.75rem;
      border-bottom: solid 1px var(--color-border);
      font-size: 0.9rem;
    }
  }
}

.timeline-item {
  margin-bottom: 2rem;
  
  h4 {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }
  
  .date {
    font-size: 0.7rem;
    color: var(--color-accent);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 0.5rem;
  }
}
</style>
