<template>
  <div class="contact">
    <section class="section section-light">
      <div class="container">
        <h1 class="text-center mb-lg">聯絡我</h1>
        
        <div class="contact-grid">
          <div class="contact-info">
            <h2>讓我們保持聯繫</h2>
            <p>
              如果您對我的作品感興趣，或者想要討論新的專案合作機會，
              歡迎通過以下方式與我聯絡。
            </p>

            <div class="contact-items">
              <div class="contact-item">
                <h3>電子郵件</h3>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </div>

              <div class="contact-item">
                <h3>電話</h3>
                <a href="tel:+886123456789">+886 (123) 456-789</a>
              </div>

              <div class="contact-item">
                <h3>地址</h3>
                <p>台灣，台北市</p>
              </div>

              <div class="contact-item">
                <h3>社群媒體</h3>
                <div class="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer" class="social-link">GitHub</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="social-link">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">姓名</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name"
                placeholder="請輸入您的姓名"
                required
              >
            </div>

            <div class="form-group">
              <label for="email">電子郵件</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                placeholder="請輸入您的電子郵件"
                required
              >
            </div>

            <div class="form-group">
              <label for="subject">主旨</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject"
                placeholder="請輸入訊息主旨"
                required
              >
            </div>

            <div class="form-group">
              <label for="message">訊息</label>
              <textarea 
                id="message" 
                v-model="form.message"
                placeholder="請輸入您的訊息"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              發送訊息
            </button>

            <p v-if="submitMessage" class="submit-message" :class="{ success: submitSuccess }">
              {{ submitMessage }}
            </p>
          </form>
        </div>
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
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    submitMessage.value = '';
  }, 3000);
};
</script>

<style scoped lang="scss">
@import '../assets/styles.scss';

.contact {
  min-height: 100vh;
  background-color: var(--color-bg);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.contact-info {
  h2 {
    margin-bottom: 1.5rem;
    color: var(--color-text);
  }

  > p {
    margin-bottom: 3rem;
    line-height: 1.8;
    color: var(--color-text-muted);
  }
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.contact-item {
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: var(--color-accent);
  }

  a {
    color: var(--color-text-muted);
    transition: color $transition-base;
    font-size: 1.1rem;

    &:hover {
      color: var(--color-accent);
    }
  }

  p {
    color: var(--color-text-muted);
    margin-bottom: 0;
    font-size: 1.1rem;
  }
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text);
  transition: all $transition-base;
  text-decoration: none;
  background-color: var(--color-card-bg);

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    background-color: var(--color-bg-secondary);
  }
}

.contact-form {
  background-color: var(--color-bg-secondary);
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow-color);
  border: 1px solid var(--color-border);
  @media (max-width: 480px) { padding: 1.5rem; }
}

.form-group {
  margin-bottom: 1.5rem;

  &:last-of-type {
    margin-bottom: 2.5rem;
  }
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-text);
  font-size: 0.9rem;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-family: $font-family-primary;
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-card-bg);
  transition: all $transition-base;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba($color-forest-green, 0.1);
  }

  &::placeholder {
    color: var(--color-text-muted);
    opacity: 0.6;
  }
}

textarea {
  resize: vertical;
}

.submit-message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  background-color: rgba($color-forest-green, 0.1);
  color: var(--color-accent);
  font-weight: 500;

  &.success {
    background-color: rgba($color-sage-green, 0.1);
    color: $color-sage-green;
  }
}
</style>
