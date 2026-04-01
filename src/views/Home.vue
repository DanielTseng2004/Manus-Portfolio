<template>
  <div class="home">
    <HeroSection 
      title="歡迎來到我的作品集"
      subtitle="展示我的設計與開發技能"
    />

    <section class="section section-light">
      <div class="container">
        <h2 class="text-center mb-lg">最新作品</h2>
        <div class="grid grid-3">
          <div class="card project-card" v-for="project in projects" :key="project.id">
            <div class="card-image">
              <div class="placeholder">{{ project.name }}</div>
              <div class="overlay">
                <router-link :to="'/portfolio/' + project.id" class="btn btn-primary">查看詳情</router-link>
              </div>
            </div>
            <h3 class="mt-md">{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <div class="card-tags">
              <span class="tag" v-for="tag in project.tags" :key="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
        <div class="text-center mt-lg">
          <router-link to="/portfolio" class="btn btn-secondary">查看所有作品</router-link>
        </div>
      </div>
    </section>

    <section class="section section-secondary">
      <div class="container">
        <h2 class="text-center mb-lg">我的技能</h2>
        <div class="grid grid-2">
          <div class="skill-item" v-for="skill in skills" :key="skill.id">
            <h3>{{ skill.category }}</h3>
            <div class="skill-list">
              <span class="skill-tag" v-for="item in skill.items" :key="item">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    name: '電商平台',
    description: '現代化的電商網站，具有完整的購物功能和支付整合。',
    tags: ['Vue.js', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    name: '任務管理應用',
    description: '協作型任務管理工具，支援即時同步和團隊功能。',
    tags: ['React', 'Firebase', 'UI/UX']
  },
  {
    id: 3,
    name: '部落格平台',
    description: '內容管理系統，提供豐富的編輯功能和主題自訂。',
    tags: ['Next.js', 'PostgreSQL', 'CMS']
  }
]);

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
@use "sass:color";
@import '../assets/styles.scss';

.home {
  min-height: 100vh;
  background-color: var(--color-bg);
}

.section-light {
  background-color: var(--color-bg);
}

.section-secondary {
  background-color: var(--color-bg-secondary);
}

.card-image {
  width: 100%;
  height: 200px;
  background-color: var(--color-bg-secondary);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-border);

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(45, 90, 61, 0.8); // 使用森林綠的 RGBA
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity $transition-base;
  }

  &:hover .overlay {
    opacity: 1;
  }
}

.placeholder {
  color: var(--color-text-muted);
  font-size: 1.25rem;
  font-weight: 500;
}

.card-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.tag {
  display: inline-block;
  background-color: var(--color-bg-secondary);
  color: var(--color-text-muted);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--color-border);
}

.skill-item {
  h3 {
    margin-bottom: 1.5rem;
    color: var(--color-accent);
  }
}

.skill-list {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.skill-tag {
  display: inline-block;
  background-color: var(--color-card-bg);
  color: var(--color-text);
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all $transition-base;

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: translateY(-2px);
  }
}
</style>
