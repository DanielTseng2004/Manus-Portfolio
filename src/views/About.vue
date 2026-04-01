<template>
  <div class="about">
    <section class="wrapper style1">
      <div class="inner">
        <h2 class="major">關於我</h2>
        <p>我是一名熱情的網頁設計師和開發者，專注於創造美觀、功能性強的數位體驗。我相信好的設計應該結合美學與實用性，為使用者帶來愉悅的互動體驗。</p>
        
        <section>
          <h3 class="major">我是誰</h3>
          <p>在過去的幾年中，我累積了豐富的前端和全棧開發經驗，並致力於學習最新的技術和設計趨勢。我對現代風格的設計特別感興趣，認為大膽的色彩與動態佈局能夠營造出充滿活力的專業氛圍。</p>
          <p>我擅長將複雜的商業需求轉化為直觀的技術解決方案，並始終將使用者體驗放在首位。</p>
        </section>

        <section>
          <h3 class="major">專業技能</h3>
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

        <section>
          <h3 class="major">職業經歷</h3>
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

        <ul class="actions">
          <li><router-link to="/portfolio" class="button primary">查看作品集</router-link></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import '../assets/styles.scss';

.about {
  padding-top: 4rem;
}

.major {
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3rem;
    height: 2px;
    background-image: var(--gradient-accent);
  }
}

.table-wrapper {
  overflow-x: auto;
  margin-bottom: 3rem;
  
  table {
    width: 100%;
    border-collapse: collapse;
    
    th {
      text-align: left;
      padding: 1rem;
      border-bottom: solid 2px var(--color-border);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
      color: var(--color-text);
    }
    
    td {
      padding: 1rem;
      border-bottom: solid 1px var(--color-border);
      font-size: 0.9rem;
      color: var(--color-text-muted);
    }
  }
}

.timeline-item {
  margin-bottom: 3rem;
  padding-left: 2rem;
  border-left: solid 2px var(--color-border);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -0.5rem;
    top: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-image: var(--gradient-accent);
  }
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--color-text);
  }
  
  .date {
    font-size: 0.8rem;
    color: var(--color-accent);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
  }
}

.actions {
  list-style: none;
  padding: 0;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
}
</style>
