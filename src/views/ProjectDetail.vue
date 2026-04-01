<template>
  <div class="project-detail" v-if="project">
    <section class="section section-light">
      <div class="container">
        <router-link to="/portfolio" class="back-link">
          <i class="bi bi-arrow-left"></i> 返回作品集
        </router-link>

        <div class="detail-header">
          <h1 class="detail-title">{{ project.name }}</h1>
          <div class="detail-tags">
            <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>

        <div class="detail-content">
          <div class="detail-image">
            <div class="image-placeholder">{{ project.name }} 預覽圖</div>
          </div>

          <div class="detail-info">
            <div class="info-section">
              <h2>專案概述</h2>
              <p>{{ project.longDescription }}</p>
            </div>

            <div class="info-section">
              <h2>技術細節</h2>
              <ul class="tech-list">
                <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
              </ul>
            </div>

            <div class="info-section">
              <h2>專案連結</h2>
              <div class="action-buttons">
                <a :href="project.demoUrl" target="_blank" class="btn btn-primary">線上預覽</a>
                <a :href="project.repoUrl" target="_blank" class="btn btn-secondary">查看原始碼</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="container text-center py-lg">
    <h2>找不到該專案</h2>
    <router-link to="/portfolio" class="btn btn-primary mt-md">返回作品集</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const project = ref(null);

// 模擬資料庫
const projectsData = [
  {
    id: 1,
    name: '電商平台',
    longDescription: '這是一個完整的電子商務解決方案，包含產品目錄、購物車、使用者認證以及 Stripe 支付整合。前端使用 Vue 3 搭配 Composition API，後端則使用 Node.js 和 MongoDB。',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    technologies: ['Vue 3', 'Vite', 'Pinia', 'Express', 'Mongoose', 'Stripe API'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 2,
    name: '任務管理應用',
    longDescription: '專為團隊協作設計的任務管理工具。支援即時看板更新、任務分配、截止日期提醒以及檔案共享功能。',
    tags: ['React', 'Firebase', 'UI/UX'],
    technologies: ['React', 'Firebase Firestore', 'Firebase Auth', 'Tailwind CSS'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 3,
    name: '部落格平台',
    longDescription: '一個高效能的內容管理系統，支援 Markdown 編輯、SEO 優化、評論系統以及自動化部署。',
    tags: ['Next.js', 'PostgreSQL', 'CMS'],
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind CSS'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 4,
    name: '數據可視化儀表板',
    longDescription: '將複雜的商業數據轉化為直觀的圖表。支援多種圖表類型、即時數據流更新以及自訂報表匯出。',
    tags: ['Vue.js', 'D3.js', 'Analytics'],
    technologies: ['Vue 3', 'D3.js', 'Chart.js', 'WebSockets'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 5,
    name: '設計系統',
    longDescription: '為企業級應用建立的一套完整的 UI 元件庫和設計規範，確保不同產品之間的一致性。',
    tags: ['Figma', 'Storybook', 'Design'],
    technologies: ['Figma', 'Storybook', 'Styled Components', 'TypeScript'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 6,
    name: '行動應用',
    longDescription: '一款跨平台的行動應用程式，專注於提供流暢的使用者體驗和離線存取功能。',
    tags: ['React Native', 'TypeScript', 'Mobile'],
    technologies: ['React Native', 'Expo', 'Redux Toolkit', 'SQLite'],
    demoUrl: '#',
    repoUrl: '#'
  }
];

onMounted(() => {
  const id = parseInt(route.params.id);
  project.value = projectsData.find(p => p.id === id);
});
</script>

<style scoped lang="scss">
@import '../assets/styles.scss';

.project-detail {
  min-height: 100vh;
  background-color: var(--color-bg);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-weight: 500;
  color: var(--color-text-muted);
  &:hover { color: var(--color-accent); }
}

.detail-header {
  margin-bottom: 3rem;
}

.detail-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) { font-size: 2rem; }
}

.detail-tags {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.tag {
  background-color: var(--color-bg-secondary);
  color: var(--color-text);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--color-border);
}

.detail-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  @media (max-width: 992px) { grid-template-columns: 1fr; gap: 2rem; }
}

.detail-image {
  width: 100%;
  height: 400px;
  background-color: var(--color-bg-secondary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  @media (max-width: 768px) { height: 250px; }
}

.image-placeholder {
  color: var(--color-text-muted);
  font-size: 1.25rem;
}

.info-section {
  margin-bottom: 2.5rem;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-accent);
  }
  p {
    line-height: 1.8;
    font-size: 1.1rem;
  }
}

.tech-list {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  li {
    position: relative;
    padding-left: 1.5rem;
    color: var(--color-text-muted);
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--color-accent);
      font-weight: bold;
    }
  }
}

.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media (max-width: 480px) { flex-direction: column; }
}
</style>
