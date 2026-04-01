<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-subtitle">{{ subtitle }}</p>
        <div class="hero-actions">
          <router-link
            to="/portfolio"
            class="btn btn-primary"
          >
            查看作品集
          </router-link>
          <router-link
            to="/contact"
            class="btn btn-secondary"
          >
            聯絡我
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "歡迎來到我的作品集",
  },
  subtitle: {
    type: String,
    default: "展示我的設計與開發技能",
  },
});
</script>

<style scoped lang="scss">
@import "../assets/styles.scss";

.hero {
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 100%
  );
  padding: 6rem 0;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: background-color $transition-base;

  @media (max-width: 768px) {
    min-height: 400px;
    padding: 4rem 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba($color-sage-green, 0.15) 0%,
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30%;
    left: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba($color-warm-brown, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
  }
}

.hero-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-muted);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
