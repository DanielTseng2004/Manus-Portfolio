<template>
  <div class="portfolio">
    <section class="wrapper style1">
      <div class="inner">
        <h2 class="major">我的作品集</h2>
        <p>展示我過去完成的專案與設計作品，涵蓋網頁開發、應用程式設計與數據分析。</p>
        
        <div class="features">
          <article v-for="project in projects" :key="project.id">
            <div class="placeholder-box">{{ project.name }}</div>
            <h3 class="major">{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <router-link :to="'/portfolio/' + project.id" class="button">查看詳情</router-link>
          </article>
        </div>

        <ul class="actions">
          <li><router-link to="/" class="button primary">返回首頁</router-link></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    name: '電商平台',
    category: 'Web Development',
    description: '現代化的電商網站，具有完整的購物功能和支付整合。'
  },
  {
    id: 2,
    name: '任務管理應用',
    category: 'App Design',
    description: '協作型任務管理工具，支援即時看板更新、任務分配、截止日期提醒以及檔案共享功能。'
  },
  {
    id: 3,
    name: '部落格平台',
    category: 'Content Management',
    description: '內容管理系統，提供豐富的編輯功能和主題自訂。'
  },
  {
    id: 4,
    name: '數據可視化儀表板',
    category: 'Data Analytics',
    description: '實時數據分析儀表板，展示複雜的數據關係。'
  },
  {
    id: 5,
    name: '設計系統',
    category: 'UI/UX Design',
    description: '完整的設計系統和元件庫，用於企業應用。'
  },
  {
    id: 6,
    name: '行動應用',
    category: 'Mobile Development',
    description: '跨平台行動應用，提供優秀的使用者體驗。'
  }
]);
</script>

<style scoped lang="scss">
@import '../assets/styles.scss';

.portfolio {
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

.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 736px) {
    grid-template-columns: 1fr;
  }

  article {
    background-color: var(--color-bg-alt);
    padding: 3rem;
    border: solid 1px var(--color-border);
    border-radius: 4px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      border-color: var(--color-accent);
    }

    h3 { font-size: 1.2rem; margin-bottom: 1rem; }
    p { font-size: 0.9rem; margin-bottom: 2rem; height: 4.5rem; overflow: hidden; }
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
