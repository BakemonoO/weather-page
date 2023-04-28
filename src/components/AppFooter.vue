<template>
  <div class="app-footer">
    <div class="company-logo">
      <img src="../assets/image/FullLogo.png" width="150" height="80" class="logo">
      <div class="company__full">
        <img src="../assets/image/GooglePlay.png" width="160" height="50">
        <img src="../assets/image/AppStore.png" class="app-store" width="140" height="50">
      </div>
     
    </div>
    <div class="footer-links">
      <footer-list :title="'Курорт'" :links="resort"/>
      <footer-list :title="'Катания'" :links="riding"/>
      <footer-list :title="'Инфо'" :links="info"/>
      <footer-list :title="'Контакты'" :links="contacts">
        <div class="social-links">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-facebook">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM16 8C20.4 8 24 11.6 24 16C24 20 21.1 23.4 17.1 24V18.3H19L19.4 16H17.2V14.5C17.2 13.9 17.5 13.3 18.5 13.3H19.5V11.3C19.5 11.3 18.6 11.1 17.7 11.1C15.9 11.1 14.7 12.2 14.7 14.2V16H12.7V18.3H14.7V23.9C10.9 23.3 8 20 8 16C8 11.6 11.6 8 16 8Z" fill="white"/>
        </svg>
        
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-youtube">
          <path d="M18.6 16L14.4 13.6V18.4L18.6 16Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM22.2 10.7C22.9 10.9 23.4 11.4 23.6 12.1C24 13.4 24 16 24 16C24 16 24 18.6 23.7 19.9C23.5 20.6 23 21.1 22.3 21.3C21 21.6 16 21.6 16 21.6C16 21.6 10.9 21.6 9.7 21.3C9 21.1 8.5 20.6 8.3 19.9C8 18.6 8 16 8 16C8 16 8 13.4 8.2 12.1C8.4 11.4 8.90001 10.9 9.60001 10.7C10.9 10.4 15.9 10.4 15.9 10.4C15.9 10.4 21 10.4 22.2 10.7Z" fill="white"/>
        </svg>


        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-instagram">
          <path d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z" fill="white"/>
        </svg>

        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-vk">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM9.12 9.12C8 10.2507 8 12.0587 8 15.68V16.32C8 19.936 8 21.744 9.12 22.88C10.2507 24 12.0587 24 15.68 24H16.32C19.936 24 21.744 24 22.88 22.88C24 21.7493 24 19.9413 24 16.32V15.68C24 12.064 24 10.256 22.88 9.12C21.7493 8 19.9413 8 16.32 8H15.68C12.064 8 10.256 8 9.12 9.12Z" fill="white"/>
          <path d="M16.512 19.5253C12.864 19.5253 10.784 17.0293 10.6987 12.8693H12.5333C12.592 15.92 13.936 17.2106 15.0027 17.4773V12.8693H16.7253V15.4986C17.776 15.3867 18.8853 14.1866 19.2587 12.864H20.976C20.836 13.5487 20.5563 14.1971 20.1543 14.7688C19.7524 15.3405 19.2369 15.8232 18.64 16.1866C19.3061 16.5182 19.8943 16.9872 20.366 17.5626C20.8376 18.1381 21.1818 18.8071 21.376 19.5253H19.4827C19.0773 18.2613 18.064 17.28 16.7253 17.1467V19.5253H16.512Z" fill="white"/>
        </svg>
        </div>
        
      </footer-list>
    </div>

    <div class="company">
      <img src="../assets/image/GooglePlay.png" width="160" height="50">
      <img src="../assets/image/AppStore.png" class="app-store" width="140" height="50">
    </div>
    
  </div>
</template>

<script>
import FooterList from './FooterList.vue'
  export default {
  components: { FooterList },
    name: 'app-footer',

    data() {
      return {
        resort: ['Отели', 'Рестораны', 'Развлечения', 'Магазины', 'Детям'],
        riding: ['Билеты', 'Прокат', 'Школа', 'Паркинг'],
        info: ['Правила курорта', 'Новости', 'Как добраться', 'Техническая поддержка'],
        contacts: ['E-mail: olya101394@gmail.com', 'Тел: +7 727 331 77 77']
      }
    }
  }
</script>

<style lang="scss" scoped>

.app-footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #212225;
  padding: 0 50px 30px 50px;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.social-links {
  margin-top: 20px;
  svg {
    border-radius: 16px;
    transition: all 0.5s ease;
    cursor: pointer;
    margin-right: 15px;
  }
  
}

.svg-facebook:hover {
  background: #3b5998;
  transition: all 0.5s ease;
}

.svg-youtube:hover {
  background: #c4302b;
  transition: all 0.5s ease;
}

.svg-instagram:hover {
  background: linear-gradient(#ffaf1a, #ec0ab3, #c504ab);
  transition: all 0.5s ease;
}

.svg-vk:hover {
  background: #2d5cc2;
  transition: all 0.5s ease;
}

.company, .company__full {
  display: flex;
  margin-top: 30px;
   img {
    cursor: pointer;
  }
}

.logo {
  cursor: pointer;
  margin-top: 30px;
}

.app-store {
  margin-left: 30px;
}

.company-logo {
  display: flex;
}

@media (width < 850px) {
  .app-footer {
    padding: 0 15px 30px 15px;
  }
}

@media (width < 480px) {
  .footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
}

@media (width < 1400px) {
  .company__full {
    display: none;
  }
}

@media (width > 1400px) {
  .app-footer {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 150px 30px 150px;
  }
  .company-logo, .company__full {
    display: flex;
    flex-direction: column;
    .app-store {
      margin-left: 0;
      margin-top: 30px
    }
  }
  .footer-links {
    width: 70%;
  }
  .company {
    display: none;
  }
}

</style>