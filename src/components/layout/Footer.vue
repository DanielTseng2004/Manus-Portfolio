<template>
  <section id="footer">
    <ul class="icons">
      <li><a href="#" class="icon brands bi bi-twitter"><span class="label">Twitter</span></a></li>
      <li><a href="#" class="icon brands bi bi-facebook"><span class="label">Facebook</span></a></li>
      <li><a href="#" class="icon brands bi bi-instagram"><span class="label">Instagram</span></a></li>
      <li><a href="#" class="icon brands bi bi-rss-fill"><span class="label">RSS</span></a></li>
      <li><a href="#" class="icon solid bi bi-envelope"><span class="label">Email</span></a></li>
    </ul>
    <p class="copyright">&copy; 2026 My Portfolio. Design: <a href="https://html5up.net">HTML5 UP</a>. Images: <a href="https://unsplash.com">Unsplash</a>.</p>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import '../../assets/styles.scss';

#footer {
  padding: 3rem 0;
  text-align: center;
  border-top: solid 1px var(--color-border);
  margin-top: 3rem;

  .icons {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 0;

    li {
      a {
        border-bottom: 0;
        color: var(--color-text-muted);
        font-size: 1.25rem;
        transition: color 0.2s ease;

        &:hover {
          color: var(--color-accent);
        }

        .label {
          display: none;
        }
      }
    }
  }

  .copyright {
    color: var(--color-text-muted);
    font-family: var(--font-family-sans);
    font-size: 0.6rem;
    font-weight: 400;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    margin: 0;

    a {
      border-bottom: dotted 1px rgba(160, 160, 160, 0.65);
      color: inherit;

      &:hover {
        color: var(--color-accent);
        border-bottom-color: transparent;
      }
    }
  }
}
</style>
