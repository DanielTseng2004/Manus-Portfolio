<template>
  <article class="post">
    <header>
      <div class="title">
        <h2>聯絡我</h2>
        <p>讓我們保持聯繫，討論新的合作機會</p>
      </div>
      <div class="meta">
        <time class="published" datetime="2026-04-01">April 1, 2026</time>
        <a href="#" class="author"><span class="name">Jane Doe</span><img src="../assets/vue.svg" alt="" /></a>
      </div>
    </header>
    
    <section>
      <p>如果您對我的作品感興趣，或者想要討論新的專案合作機會，歡迎通過以下表單與我聯絡。我通常會在 24 小時內回覆。</p>
      
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="row gtr-uniform">
          <div class="col-6 col-12-xsmall">
            <input type="text" v-model="form.name" placeholder="姓名" required />
          </div>
          <div class="col-6 col-12-xsmall">
            <input type="email" v-model="form.email" placeholder="電子郵件" required />
          </div>
          <div class="col-12">
            <input type="text" v-model="form.subject" placeholder="主旨" required />
          </div>
          <div class="col-12">
            <textarea v-model="form.message" placeholder="訊息內容" rows="6" required></textarea>
          </div>
          <div class="col-12">
            <ul class="actions">
              <li><input type="submit" value="發送訊息" class="button large" /></li>
              <li><input type="reset" value="重設" class="button large" @click="resetForm" /></li>
            </ul>
          </div>
        </div>
      </form>
      
      <p v-if="submitMessage" class="submit-message" :class="{ success: submitSuccess }">
        {{ submitMessage }}
      </p>
    </section>

    <hr />

    <section>
      <h3>其他聯絡方式</h3>
      <ul class="contact-list">
        <li><strong>電子郵件:</strong> <a href="mailto:hello@example.com">hello@example.com</a></li>
        <li><strong>電話:</strong> <a href="tel:+886123456789">+886 (123) 456-789</a></li>
        <li><strong>地址:</strong> 台灣，台北市</li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitMessage = ref('');
const submitSuccess = ref(false);

const handleSubmit = () => {
  submitSuccess.value = true;
  submitMessage.value = '感謝您的訊息！我會盡快回覆您。';
  
  setTimeout(() => {
    resetForm();
    submitMessage.value = '';
  }, 3000);
};

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
};
</script>

<style scoped lang="scss">
@import '../assets/styles.scss';

.contact-form {
  margin-top: 2rem;
  
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    
    .col-6 { width: calc(50% - 0.75rem); }
    .col-12 { width: 100%; }
    
    @media (max-width: 736px) {
      .col-6 { width: 100%; }
    }
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    background: var(--color-bg-secondary);
    border: solid 1px var(--color-border);
    padding: 0.75rem 1rem;
    font-family: var(--font-family-serif);
    font-size: 0.9rem;
    color: var(--color-text);
    transition: border-color 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: var(--color-accent);
    }
  }
  
  input[type="submit"],
  input[type="reset"] {
    border-radius: 0;
  }
}

hr {
  border: 0;
  border-bottom: solid 1px var(--color-border);
  margin: 3rem 0;
}

.contact-list {
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    
    strong {
      font-family: var(--font-family-sans);
      text-transform: uppercase;
      font-size: 0.7rem;
      letter-spacing: 0.1rem;
      margin-right: 0.5rem;
    }
  }
}

.submit-message {
  margin-top: 1.5rem;
  padding: 1rem;
  background: var(--color-bg-secondary);
  border: solid 1px var(--color-border);
  text-align: center;
  font-family: var(--font-family-sans);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  
  &.success {
    color: var(--color-accent);
    border-color: var(--color-accent);
  }
}
</style>
