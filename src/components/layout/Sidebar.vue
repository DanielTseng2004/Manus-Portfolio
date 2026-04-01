<template>
  <section id="sidebar">
    <!-- Intro -->
    <section id="intro">
      <router-link to="/" class="logo"><img src="../../assets/vue.svg" alt="" /></router-link>
      <header>
        <h2>Future Imperfect</h2>
        <p>另一個由 <a href="https://html5up.net">HTML5 UP</a> 打造的響應式網站模板</p>
      </header>
    </section>

    <!-- Mini Posts -->
    <section>
      <div class="mini-posts">
        <h3 class="section-title">精選專案</h3>
        <!-- Mini Post -->
        <article class="mini-post" v-for="project in featuredProjects" :key="project.id">
          <header>
            <h3><router-link :to="'/portfolio/' + project.id">{{ project.name }}</router-link></h3>
            <time class="published" datetime="2026-04-01">April 1, 2026</time>
            <router-link :to="'/portfolio/' + project.id" class="author"><img src="../../assets/vue.svg" alt="" /></router-link>
          </header>
          <router-link :to="'/portfolio/' + project.id" class="image"><div class="placeholder">{{ project.name }}</div></router-link>
        </article>
      </div>
    </section>

    <!-- Posts List -->
    <section>
      <ul class="posts">
        <h3 class="section-title">熱門文章</h3>
        <li v-for="post in recentPosts" :key="post.id">
          <article>
            <header>
              <h3><a href="#">{{ post.title }}</a></h3>
              <time class="published" datetime="2026-03-25">{{ post.date }}</time>
            </header>
            <a href="#" class="image"><div class="placeholder-small">Post</div></a>
          </article>
        </li>
      </ul>
    </section>

    <!-- About -->
    <section class="blurb">
      <h3 class="section-title">關於我</h3>
      <p>我是一名熱衷於網頁開發與設計的工程師，致力於將美學與功能完美結合。這個網站展示了我對現代網頁技術的探索與實踐。</p>
      <ul class="actions">
        <li><router-link to="/about" class="button">了解更多</router-link></li>
      </ul>
    </section>

    <!-- Footer -->
    <section id="footer">
      <ul class="icons">
        <li><a href="#" class="icon brands bi bi-twitter"><span class="label">Twitter</span></a></li>
        <li><a href="#" class="icon brands bi bi-facebook"><span class="label">Facebook</span></a></li>
        <li><a href="#" class="icon brands bi bi-instagram"><span class="label">Instagram</span></a></li>
        <li><a href="#" class="icon brands bi bi-rss-fill"><span class="label">RSS</span></a></li>
        <li><a href="#" class="icon solid bi bi-envelope"><span class="label">Email</span></a></li>
      </ul>
      <p class="copyright">&copy; 2026 My Portfolio. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const featuredProjects = ref([
  { id: 1, name: '電商平台' },
  { id: 2, name: '任務管理應用' }
]);

const recentPosts = ref([
  { id: 1, title: '探索 Vue 3 的 Composition API', date: 'March 25, 2026' },
  { id: 2, title: '如何設計一個完美的深色模式', date: 'March 20, 2026' },
  { id: 3, title: 'Sass 模組化開發最佳實踐', date: 'March 15, 2026' }
]);
</script>

<style scoped lang="scss">
@import '../../assets/styles.scss';

#sidebar {
  padding: 0;

  #intro {
    margin-bottom: 3rem;
    text-align: center;

    .logo {
      display: inline-block;
      margin-bottom: 1.5rem;
      border-bottom: 0;
      img {
        width: 4rem;
        height: 4rem;
      }
    }

    header {
      h2 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        color: var(--color-text-muted);
        margin-bottom: 0;
      }
    }
  }

  .mini-posts {
    margin-bottom: 3rem;

    .mini-post {
      background: var(--color-card-bg);
      border: solid 1px var(--color-border);
      margin-bottom: 1.5rem;

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.25rem 1.5rem;
        border-bottom: solid 1px var(--color-border);

        h3 {
          font-size: 0.7rem;
          margin: 0;
          flex: 1;
          a { border-bottom: 0; }
        }

        .published {
          font-family: var(--font-family-sans);
          font-size: 0.6rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          color: var(--color-text-muted);
          margin-right: 1rem;
        }

        .author {
          border-bottom: 0;
          img {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
          }
        }
      }

      .image {
        display: block;
        border-bottom: 0;
        .placeholder {
          height: 10rem;
          background-color: var(--color-bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-muted);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
        }
      }
    }
  }

  .posts {
    list-style: none;
    padding: 0;
    margin-bottom: 3rem;

    li {
      border-top: solid 1px var(--color-border);
      padding: 1.5rem 0;

      &:first-of-type {
        border-top: 0;
        padding-top: 0;
      }

      article {
        display: flex;
        align-items: center;
        justify-content: space-between;

        header {
          flex: 1;
          h3 {
            font-size: 0.7rem;
            margin-bottom: 0.25rem;
            a { border-bottom: 0; }
          }
          .published {
            font-family: var(--font-family-sans);
            font-size: 0.6rem;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            color: var(--color-text-muted);
          }
        }

        .image {
          border-bottom: 0;
          margin-left: 1.5rem;
          .placeholder-small {
            width: 4rem;
            height: 4rem;
            background-color: var(--color-bg-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 0.6rem;
            text-transform: uppercase;
          }
        }
      }
    }
  }

  .blurb {
    margin-bottom: 3rem;
    p {
      font-size: 0.9rem;
      color: var(--color-text-muted);
    }
  }

  #footer {
    border-top: 0;
    margin-top: 0;
    padding: 0;
    text-align: left;

    .icons {
      justify-content: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
      li a { font-size: 1rem; }
    }

    .copyright {
      font-size: 0.5rem;
    }
  }
}
</style>
