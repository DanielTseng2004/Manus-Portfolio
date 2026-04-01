<template>
  <div class="portfolio">
    <section class="section section-light">
      <div class="container">
        <h1 class="text-center mb-lg">我的作品集</h1>
        
        <div class="filter-buttons">
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'all' }"
            @click="activeFilter = 'all'"
          >
            全部
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'web' }"
            @click="activeFilter = 'web'"
          >
            網頁設計
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'app' }"
            @click="activeFilter = 'app'"
          >
            應用程式
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'other' }"
            @click="activeFilter = 'other'"
          >
            其他
          </button>
        </div>

        <div class="grid grid-2">
          <div class="project-card" v-for="project in filteredProjects" :key="project.id">
            <div class="project-image">
              <div class="image-placeholder">{{ project.name }}</div>
              <div class="project-overlay">
                <router-link :to="'/portfolio/' + project.id" class="project-link">查看詳情</router-link>
              </div>
            </div>
            <div class="project-info">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                <span class="project-tag" v-for="tag in project.tags" :key="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeFilter = ref('all');

const projects = ref([
  {
    id: 1,
    name: '電商平台',
    description: '現代化的電商網站，具有完整的購物功能 and 支付整合。',
    category: 'web',
    tags: ['Vue.js', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    name: '任務管理應用',
    description: '協作型任務管理工具，支援即時同步和團隊功能。',
    category: 'app',
    tags: ['React', 'Firebase', 'UI/UX']
  },
  {
    id: 3,
    name: '部落格平台',
    description: '內容管理系統，提供豐富的編輯功能和主題自訂。',
    category: 'web',
    tags: ['Next.js', 'PostgreSQL', 'CMS']
  },
  {
    id: 4,
    name: '數據可視化儀表板',
    description: '實時數據分析儀表板，展示複雜的數據關係。',
    category: 'app',
    tags: ['Vue.js', 'D3.js', 'Analytics']
  },
  {
    id: 5,
    name: '設計系統',
    description: '完整的設計系統和元件庫，用於企業應用。',
    category: 'other',
    tags: ['Figma', 'Storybook', 'Design']
  },
  {
    id: 6,
    name: '行動應用',
    description: '跨平台行動應用，提供優秀的使用者體驗。',
    category: 'app',
    tags: ['React Native', 'TypeScript', 'Mobile']
  }
]);

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value;
  }
  return projects.value.filter(p => p.category === activeFilter.value);
});
</script>

<style scoped lang="scss">
@use "sass:color";
@import '../assets/styles.scss';

.portfolio {
  min-height: 100vh;
  background-color: var(--color-bg);
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.6rem 1.5rem;
  border: 2px solid var(--color-border);
  background-color: transparent;
  color: var(--color-text);
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all $transition-base;

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  &.active {
    background-color: var(--color-accent);
    color: #ffffff;
    border-color: var(--color-accent);
  }
}

.project-card {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: all $transition-base;
  background-color: var(--color-card-bg);
  border: 1px solid var(--color-border);

  &:hover {
    box-shadow: 0 10px 15px var(--shadow-color);
    transform: translateY(-4px);
  }
}

.project-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background-color: var(--color-bg-secondary);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 1.25rem;
  font-weight: 500;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(45, 90, 61, 0.9); // 使用森林綠的 RGBA
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity $transition-base;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-link {
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid #ffffff;
  padding: 0.6rem 1.5rem;
  border-radius: 4px;
  transition: all $transition-base;
  text-decoration: none;

  &:hover {
    background-color: #ffffff;
    color: var(--color-accent);
  }
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.project-info p {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-muted);
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.project-tag {
  display: inline-block;
  background-color: var(--color-bg-secondary);
  color: var(--color-text-muted);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--color-border);
}
</style>
