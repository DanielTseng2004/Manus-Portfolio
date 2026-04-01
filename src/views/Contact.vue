<template>
  <div class="contact-page">
    <section class="wrapper style1">
      <div class="inner">
        <h2 class="major">聯絡我</h2>
        <p>如果您對我的作品感興趣，或者想要討論新的專案合作機會，歡迎通過以下表單與我聯絡。我通常會在 24 小時內回覆。</p>
        
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="fields">
            <div class="field half">
              <label for="name">姓名</label>
              <input type="text" v-model="form.name" id="name" required />
            </div>
            <div class="field half">
              <label for="email">電子郵件</label>
              <input type="email" v-model="form.email" id="email" required />
            </div>
            <div class="field">
              <label for="subject">主旨</label>
              <input type="text" v-model="form.subject" id="subject" required />
            </div>
            <div class="field">
              <label for="message">訊息內容</label>
              <textarea v-model="form.message" id="message" rows="6" required></textarea>
            </div>
          </div>
          <ul class="actions">
            <li><input type="submit" value="發送訊息" class="button primary large" /></li>
            <li><input type="reset" value="重設" class="button large" @click="resetForm" /></li>
          </ul>
        </form>
        
        <p v-if="submitMessage" class="submit-message" :class="{ success: submitSuccess }">
          {{ submitMessage }}
        </p>

        <section class="other-contact">
          <h3 class="major">其他聯絡方式</h3>
          <ul class="contact-list">
            <li><strong>電子郵件:</strong> <a href="mailto:hello@example.com">hello@example.com</a></li>
            <li><strong>電話:</strong> <a href="tel:+886123456789">+886 (123) 456-789</a></li>
            <li><strong>地址:</strong> 台灣，台北市</li>
          </ul>
        </section>
      </div>
    </section>
  </div>
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

.contact-page {
  padding-top: 4rem;
  @media (max-width: 736px) { padding-top: 3rem; }
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

.contact-form {
  margin-top: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 736px) {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  .fields {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media (max-width: 736px) {
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

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
        font-size: 1rem; // 防止 iOS 自動放大

        &:focus {
          outline: none;
          border-color: var(--color-accent);
        }
      }
    }
  }
}

.other-contact {
  margin-top: 4rem;
  
  .contact-list {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: var(--color-text-muted);
      
      strong {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.7rem;
        letter-spacing: 0.1rem;
        margin-right: 0.5rem;
        color: var(--color-text);
      }

      a {
        border-bottom: 0;
        color: inherit;
        &:hover { color: var(--color-accent); }
      }
    }
  }
}

.submit-message {
  margin-top: 1.5rem;
  padding: 1rem;
  background: var(--color-bg-alt);
  border: solid 1px var(--color-border);
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  
  &.success {
    color: var(--color-accent);
    border-color: var(--color-accent);
  }
}

.actions {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1.5rem;

  @media (max-width: 736px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    li { width: 100%; }
  }
}
</style>
