<template>
  <div class="home">
    <Nav />
    <Hero2 />
    <div style="min-height: 800px;">
      <h1>About</h1>
    </div>
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import $ from 'jquery';
import 'jquery.easing';
import Nav from '@/components/layout/Nav.vue';
import Portfolio from '@/components/layout/Portfolio.vue';
import Contact from '@/components/layout/Contact.vue';
import Footer from '@/components/layout/Footer.vue';
import Hero2 from '@/components/layout/Hero2.vue';

export default {
  name: 'Home',
  components: {
    Nav,
    Portfolio,
    Contact,
    Footer,
    Hero2,
  },
  mounted() {
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(() => {
      if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $(`[name='${this.hash.slice(1)}]`);
        if (target.length) {
          $('html, body').animate({ scrollTop: target.offset().top - 70 }, 1000, 'easeInOutExpo');
          return false;
        }
      }
      return true;
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(() => {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 60,
    });

    // Collapse Navbar
    const navbarCollapse = () => {
      if ($('#mainNav').offset().top > 60) {
        $('#mainNav').addClass('navbar-shrink');
      } else {
        $('#mainNav').removeClass('navbar-shrink');
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  },
};
</script>
