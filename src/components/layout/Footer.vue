<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">關於</h3>
          <p class="footer-text">
            這是一個展示我的作品與專業技能的個人網站。
          </p>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">導覽</h3>
          <ul class="footer-links">
            <li><router-link to="/">首頁</router-link></li>
            <li><router-link to="/about">關於我</router-link></li>
            <li><router-link to="/portfolio">作品集</router-link></li>
            <li><router-link to="/contact">聯絡我</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">社群媒體</h3>
          <ul class="footer-links">
            <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import '../../assets/styles.scss';

.footer {
  background-color: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
  transition: background-color $transition-base, border-color $transition-base;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.footer-text {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    a {
      color: var(--color-text-muted);
      font-size: 0.95rem;
      transition: color $transition-base;

      &:hover {
        color: var(--color-accent);
      }
    }
  }
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 0.875rem;
}
</style>
