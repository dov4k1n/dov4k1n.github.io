const footer = document.createElement('footer');
footer.innerHTML = `
    <footer>
  <div class="social-networks">
    <div class="social-networks-item">
      <a href="https://t.me/tatar_app" class="social-networks-item-logo"><img src="/res/tg_icon.svg" class="logo">Telegram</img></a>
      Подписывайтесь на @tatar_app в Telegram
    </div>
    <div class="social-networks-item">
      <a href="https://youtube.com/@tatarcham" class="social-networks-item-logo"><img src="/res/yt_icon.webp" class="logo">YouTube</img></a>
      Подписывайтесь на @tatarcham на YouTube
    </div>
    <div class="social-networks-item">
      <a href="https://vk.com/tatarcham" class="social-networks-item-logo"><img src="/res/vk_icon.svg" class="logo">VK</img></a>
      Подписывайтесь на @tatarcham в VK
    </div>
  </div>

  <div class="ios-waitlist">
    <div class="social-networks-item">
      <a href="https://t.me/tatar_app" class="social-networks-item-logo"><img src="/res/android_icon.svg" class="logo">Android</img></a>
      Скачайте приложение на Android
    </div>

    <div class="social-networks-item">
      <a href="https://t.me/tatarcham_ios" class="social-networks-item-logo"><img src="/res/apple_icon.svg" class="logo">iOS</img></a>
      Лист ожидания приложения для iOS
    </div>
  </div>

  <div class="developer">
    <a href="/index.html"><img src="/res/logo.svg"></a>
    <p class="label-small">Copyright © 2024 tatarcham inc. All rights reserved.</p>
    <span class="label-small">Developed by: <a href="https://t.me/dov4k1n" class="link">@dov4k1n</a></span>
  </div>
</footer>
`;
document.body.appendChild(footer);