<template>
  <div id="portfolio">
    <div class="container-fluid p-0">
        <div class="row no-gutters">
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" @click="openGallery(0)">
                <img class="img-fluid" src="../../assets/portfolio/thumbnails/1.jpg" alt="" />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">Category</div>
                        <div class="project-name">Project Name</div>
                    </div>
                </a></div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" @click="openGallery(1)">
                <img class="img-fluid" src="../../assets/portfolio/thumbnails/2.jpg" alt="" />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">Category</div>
                        <div class="project-name">Project Name</div>
                    </div>
                </a></div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" @click="openGallery(2)">
                <img class="img-fluid" src="../../assets/portfolio/thumbnails/3.jpg" alt="" />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">Category</div>
                        <div class="project-name">Project Name</div>
                    </div>
                </a></div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" @click="openGallery(3)">
                <img class="img-fluid" src="../../assets/portfolio/thumbnails/4.jpg" alt="" />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">Category</div>
                        <div class="project-name">Project Name</div>
                    </div>
                </a></div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" @click="openGallery(4)">
                <img class="img-fluid" src="../../assets/portfolio/thumbnails/5.jpg" alt="" />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">Category</div>
                        <div class="project-name">Project Name</div>
                    </div>
                </a></div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" @click="openGallery(5)">
                <img class="img-fluid" src="../../assets/portfolio/thumbnails/6.jpg" alt="" />
                    <div class="portfolio-box-caption p-3">
                        <div class="project-category text-white-50">Category</div>
                        <div class="project-name">Project Name</div>
                    </div>
                </a></div>
        </div>
    </div>
    <silent-box ref="silentbox" :gallery="media" />
  </div>
</template>

<script>

import full1 from '../../assets/portfolio/thumbnails/1.jpg';
import full2 from '../../assets/portfolio/thumbnails/2.jpg';
import full3 from '../../assets/portfolio/thumbnails/3.jpg';
import full4 from '../../assets/portfolio/thumbnails/4.jpg';
import full5 from '../../assets/portfolio/thumbnails/5.jpg';
import full6 from '../../assets/portfolio/thumbnails/6.jpg';

console.log(full1);

export default {
  name: 'Portfolio',
  data() {
    return {
      media: [
        {
          src: full1,
          alt: 'Elephant',
          description: 'This is an elephant',
        },
        {
          src: full2,
          alt: 'Elephant',
          description: 'This is an elephant',
        },
        {
          src: full3,
          alt: 'Elephant',
          description: 'This is an elephant',
        },
        {
          src: full4,
          alt: 'Elephant',
          description: 'This is an elephant',
        },
        {
          src: full5,
          alt: 'Elephant',
          description: 'This is an elephant',
        },
        {
          src: full6,
          alt: 'Elephant',
          description: 'This is an elephant',
        },
      ],
    };
  },
  methods: {
    openGallery(index) {
      this.$refs.silentbox.openOverlay(this.media[index]);
    },
  },
};
</script>
