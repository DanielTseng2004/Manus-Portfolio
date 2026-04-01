<template>
  <section id="footer" class="wrapper style1">
    <div class="inner">
      <h2 class="major">聯絡我</h2>
      <p>如果您對我的作品感興趣，或者想要討論新的專案合作機會，歡迎與我聯絡。</p>
      <form @submit.prevent="handleSubmit">
        <div class="fields">
          <div class="field">
            <label for="name">姓名</label>
            <input type="text" name="name" id="name" v-model="form.name" required />
          </div>
          <div class="field">
            <label for="email">電子郵件</label>
            <input type="email" name="email" id="email" v-model="form.email" required />
          </div>
          <div class="field">
            <label for="message">訊息內容</label>
            <textarea name="message" id="message" rows="4" v-model="form.message" required></textarea>
          </div>
        </div>
        <ul class="actions">
          <li><input type="submit" value="發送訊息" class="button primary" /></li>
        </ul>
      </form>
      <ul class="contact">
        <li class="icon solid bi bi-house-fill">
          台灣，台北市
        </li>
        <li class="icon solid bi bi-telephone-fill">
          <a href="tel:+886123456789">+886 (123) 456-789</a>
        </li>
        <li class="icon solid bi bi-envelope-fill">
          <a href="mailto:hello@example.com">hello@example.com</a>
        </li>
        <li class="icon brands bi bi-twitter">
          <a href="#">twitter.com/untitled-tld</a>
        </li>
        <li class="icon brands bi bi-facebook">
          <a href="#">facebook.com/untitled-tld</a>
        </li>
        <li class="icon brands bi bi-instagram">
          <a href="#">instagram.com/untitled-tld</a>
        </li>
      </ul>
      <ul class="copyright">
        <li>&copy; 2026 My Portfolio.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  alert('感謝您的訊息！我會盡快回覆您。');
  form.value = { name: '', email: '', message: '' };
};
</script>

<style scoped lang="scss">
@import '../../assets/styles.scss';

#footer {
  padding: 6rem 0 4rem 0;
  background-color: var(--color-bg);
  border-top: solid 1px var(--color-border);

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

  form {
    margin-bottom: 4rem;

    .fields {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin-bottom: 2rem;

      .field {
        width: 100%;
        
        &.half {
          width: calc(50% - 0.75rem);
          @media (max-width: 736px) { width: 100%; }
        }

        label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          margin-bottom: 0.5rem;
          color: var(--color-text);
        }

        input[type="text"],
        input[type="email"],
        textarea {
          width: 100%;
          background: var(--color-bg-alt);
          border: solid 1px var(--color-border);
          padding: 0.75rem 1rem;
          color: var(--color-text);
          border-radius: 4px;
          transition: border-color 0.2s ease;

          &:focus {
            outline: none;
            border-color: var(--color-accent);
          }
        }
      }
    }
  }

  .contact {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 4rem;

    @media (max-width: 736px) {
      grid-template-columns: 1fr;
    }

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 0.9rem;
      color: var(--color-text-muted);

      &::before {
        font-size: 1.2rem;
        color: var(--color-accent);
      }

      a {
        border-bottom: 0;
        color: inherit;
        &:hover { color: var(--color-accent); }
      }
    }
  }

  .copyright {
    list-style: none;
    padding: 0;
    text-align: center;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--color-text-muted);
    border-top: solid 1px var(--color-border);
    padding-top: 3rem;

    li {
      display: inline-block;
      margin: 0 1rem;
      border-left: solid 1px var(--color-border);
      padding-left: 1rem;

      &:first-child {
        border-left: 0;
        padding-left: 0;
      }

      a {
        border-bottom: 0;
        color: inherit;
        &:hover { color: var(--color-accent); }
      }
    }
  }
}
</style>
