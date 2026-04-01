<template>
  <section id="banner">
    <div class="inner">
      <div class="logo"><img src="../assets/vue.svg" alt="" /></div>
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
      <ul class="actions">
        <li><router-link to="/portfolio" class="button primary large">查看作品集</router-link></li>
      </ul>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Solid State'
  },
  subtitle: {
    type: String,
    default: '這是一個由 HTML5 UP 打造的響應式網站模板'
  }
});
</script>

<style scoped lang="scss">
@import '../assets/styles.scss';

#banner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 0 8rem 0;
  background-image: linear-gradient(rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
  min-height: 100vh;

  @media (max-width: 980px) {
    padding: 8rem 0 6rem 0;
    min-height: 80vh;
    background-attachment: scroll; // 行動裝置上禁用 fixed 以提升效能
  }

  @media (max-width: 736px) {
    padding: 6rem 0 4rem 0;
    min-height: 70vh;
  }

  .inner {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
    width: 100%;

    .logo {
      display: inline-block;
      margin-bottom: 2rem;
      img {
        width: 6rem;
        height: 6rem;
        filter: drop-shadow(0 0 10px var(--color-accent));

        @media (max-width: 736px) {
          width: 4rem;
          height: 4rem;
        }
      }
    }

    h2 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      letter-spacing: 0.5rem;
      text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      word-wrap: break-word;

      @media (max-width: 980px) {
        font-size: 2.8rem;
        letter-spacing: 0.3rem;
      }

      @media (max-width: 736px) {
        font-size: 2.2rem;
        letter-spacing: 0.2rem;
      }

      @media (max-width: 480px) {
        font-size: 1.8rem;
      }
    }

    p {
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.25rem;
      color: #ffffff;
      margin-bottom: 3rem;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

      @media (max-width: 980px) {
        font-size: 1rem;
        letter-spacing: 0.2rem;
      }

      @media (max-width: 736px) {
        font-size: 0.9rem;
        letter-spacing: 0.15rem;
        margin-bottom: 2rem;
      }
    }

    .actions {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
      gap: 1.5rem;

      @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        
        li { width: 100%; }
      }
    }
  }
}
</style>
