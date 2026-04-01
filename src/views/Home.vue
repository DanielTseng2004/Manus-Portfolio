<template>
  <div class="home">
    <Banner 
      title="歡迎來到我的作品集"
      subtitle="展示我的設計與開發技能"
    />

    <!-- Spotlight 1 -->
    <section class="wrapper spotlight style1">
      <div class="inner">
        <div class="image"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="" /></div>
        <div class="content">
          <h2 class="major">電商平台</h2>
          <p>這是一個現代化的電商網站，具有完整的購物功能和支付整合。我們採用了最新的 Vue 3 技術棧，並結合了 Node.js 後端，為使用者提供流暢的購物體驗。</p>
          <router-link to="/portfolio/1" class="button">了解更多</router-link>
        </div>
      </div>
    </section>

    <!-- Spotlight 2 -->
    <section class="wrapper spotlight style2">
      <div class="inner">
        <div class="image"><img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" alt="" /></div>
        <div class="content">
          <h2 class="major">任務管理應用</h2>
          <p>協作型任務管理工具，支援即時看板更新、任務分配、截止日期提醒以及檔案共享功能。這款應用程式旨在提高團隊的工作效率，透過直觀的介面讓任務分配與進度追蹤變得前所未有的簡單。</p>
          <router-link to="/portfolio/2" class="button">了解更多</router-link>
        </div>
      </div>
    </section>

    <!-- Spotlight 3 -->
    <section class="wrapper spotlight style3">
      <div class="inner">
        <div class="image"><img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" /></div>
        <div class="content">
          <h2 class="major">部落格平台</h2>
          <p>內容管理系統，提供豐富的編輯功能和主題自訂。無論是個人部落格還是企業新聞發佈，這套系統都能滿足您對內容呈現的所有想像。</p>
          <router-link to="/portfolio/3" class="button">了解更多</router-link>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="wrapper style1">
      <div class="inner">
        <h2 class="major">我的技能</h2>
        <p>我擁有多樣化的技術棧，能夠應對各種網頁開發與設計的挑戰。</p>
        <section class="features">
          <article v-for="skill in skills" :key="skill.id">
            <h3 class="major">{{ skill.category }}</h3>
            <p>{{ skill.items.join(', ') }}</p>
            <router-link to="/about" class="button">了解更多</router-link>
          </article>
        </section>
        <ul class="actions">
          <li><router-link to="/portfolio" class="button primary">查看所有作品</router-link></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import Banner from '../components/Banner.vue';
import { ref } from 'vue';

const skills = ref([
  {
    id: 1,
    category: '前端開發',
    items: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'SCSS']
  },
  {
    id: 2,
    category: '後端開發',
    items: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL']
  },
  {
    id: 3,
    category: '設計與工具',
    items: ['Figma', 'Adobe XD', 'Git', 'Webpack', 'Vite']
  },
  {
    id: 4,
    category: '其他技能',
    items: ['UI/UX Design', 'Responsive Design', 'SEO', 'Web Performance']
  }
]);
</script>

<style scoped lang="scss">
@import '../assets/styles.scss';

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

.actions {
  list-style: none;
  padding: 0;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}
</style>
