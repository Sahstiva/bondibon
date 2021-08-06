<template class="site">
  <div class="site_wrapper">
    <header class="header">
      <section class="header-address">
        <img src="~/assets/images/logo_bondibon.png" width="131" height="36" alt="Бондибон" class="header-address--logo">
        <a class="header-link" href="mailto:info@bondibon.ru"><font-awesome-icon class="header-icon" :icon="['fas', 'envelope']" />info@bondibon.ru</a>
        <a class="header-link" href="tel:88005500528"><font-awesome-icon class="header-icon" :icon="['fas', 'phone-alt']" />8(800)550-05-28</a>
      </section>
      <section class="header-wheretobuy">
        <font-awesome-icon class="header-icon" :icon="['fas', 'map-marker-alt']" />
        <p class="header-text">Узнай, где купить  в своем городе</p>
      </section>
      <section class="header-social">
        <div class="header-social--wrapper">
          <font-awesome-icon class="header-social--icon" :icon="['fab', 'vk']" />
        </div>
        <div class="header-social--wrapper">
          <font-awesome-icon class="header-social--icon" :icon="['fab', 'facebook-f']" />
        </div>
        <div class="header-social--wrapper">
          <font-awesome-icon class="header-social--icon" :icon="['fab', 'instagram-square']" />
        </div>
        <div class="header-social--wrapper">
          <font-awesome-icon class="header-social--icon" :icon="['fab', 'youtube']" />
        </div>
      </section>
    </header>
    <section class="title">
      <img src="~/assets/images/title_children.png" alt="Дети" class="title-img">
      <div class="title-benefit--wrapper container">
        <div class="title-benefit title-benefit--cyan">
          <svg class="title-benefit--img" xmlns="http://www.w3.org/2000/svg" height="90.68" width="88.013" xml:space="preserve">
            <g transform="scale(0.05)">
              <path d="M554.352 306.234H105.73l36.274-255.43h376.098l36.25 255.43zm-2.247 365.282c9.239 10.5 25.196 11.55 35.696 2.379 10.496-9.165 11.609-25.184 2.383-35.684L349.055 361.578c-9.098-10.531-25.192-11.586-35.688-2.41-.98.875-1.953 1.816-2.73 2.793l-240.77 276.25c-9.207 10.5-8.117 26.519 2.414 35.684 10.488 9.171 26.52 8.121 35.684-2.379l222.051-254.797 222.089 254.797zm-98.242-427.215c0 8.437 6.797 15.254 15.196 15.254a15.219 15.219 0 0 0 15.246-15.254V99.848c0-8.399-6.789-15.227-15.246-15.227-8.399 0-15.196 6.828-15.196 15.227V244.3zm-92.703 0c0 8.437 6.785 15.254 15.184 15.254a15.218 15.218 0 0 0 15.254-15.254V99.848c0-8.399-6.785-15.227-15.254-15.227-8.399 0-15.184 6.828-15.184 15.227V244.3zm-92.711 0c0 8.437 6.856 15.254 15.25 15.254 8.395 0 15.254-6.817 15.254-15.254V99.848c0-8.399-6.859-15.227-15.254-15.227-8.394 0-15.25 6.828-15.25 15.227V244.3zm-92.644 0c0 8.437 6.859 15.254 15.254 15.254 8.394 0 15.183-6.817 15.183-15.254V99.848c0-8.399-6.789-15.227-15.183-15.227-8.395 0-15.254 6.828-15.254 15.227V244.3zM25.402 438.27h174.895c13.992 0 25.324-11.372 25.324-25.368 0-14.027-11.332-25.398-25.324-25.398H50.766v-50.801h558.586v50.801H459.754c-13.996 0-25.332 11.371-25.332 25.398 0 13.996 11.336 25.368 25.332 25.368h174.93c13.996 0 25.461-11.372 25.461-25.368V311.301c0-13.992-11.465-25.399-25.461-25.399h-32.051L565.125 21.828A25.293 25.293 0 0 0 540.074.063v-.06H120.035c-13.336 0-24.281 10.274-25.297 23.36L57.445 285.902H25.402c-14.03 0-25.398 11.407-25.398 25.399v101.601c0 13.996 11.367 25.368 25.398 25.368"/>
            </g>
          </svg>
          <div class="title-benefit--textbox">
            <p class="title-benefit--litera">5000</p>
            <p class="title-benefit--text">наименований</p>
            <p class="title-benefit--text">игр и игрушек</p>
          </div>
        </div>
        <div class="title-benefit title-benefit--orange">
          <svg class="title-benefit--img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               viewBox="0 0 130.58667 124.37333"
               height="124.37333"
               width="130.58667"
               xml:space="preserve">
            <g transform="scale(0.13)">
              <path d="m 904.109,357.055 c 0,-13.801 -5.925,-26.672 -15.273,-36.028 -17.434,-17.441 -41.941,-17.441 -64.363,-12.039 -8.625,2.078 -16.621,5.078 -23.782,8.614 v 0.105 c -7.793,3.848 -14.953,8.098 -21.074,12.461 v 0.109 c -6.23,4.461 -12.351,9.649 -17.859,15.254 l -2.285,2.078 c -24.914,23.575 -55.239,32.598 -84.407,32.598 -37.168,0 -73.718,-15.781 -93.132,-33.75 l -1.965,-1.855 c -12.989,-11.739 -27.012,-21.493 -42.071,-28.25 -14.726,-6.75 -30.82,-10.579 -48.277,-10.579 -32.074,0 -59.691,24.192 -84.508,45.891 -57.621,50.352 -106.312,92.918 -187.601,0.203 -13.289,-15.164 -26.903,-26.992 -41.742,-34.773 -13.395,-7.063 -29.907,-11.739 -45.883,-11.438 l -3.02,0.117 h -0.312 -0.414 -0.301 c -13.094,1.036 -25.652,5.606 -35.3087,15.254 -9.3516,9.356 -15.2657,22.227 -15.2657,36.028 v 62.195 c 0,27.715 23.4649,51.289 51.2894,51.289 242.023,0 484.246,0 726.265,0 27.825,0 51.289,-23.574 51.289,-51.289 z M 815.848,75.375 H 163.523 V 233.82 c 16.297,3.321 32.176,9.035 46.93,16.719 23.883,12.453 44.535,30.109 63.637,51.906 31.773,36.239 54.621,16.297 81.609,-7.375 34.992,-30.515 73.817,-64.57 133.922,-64.57 28.563,0 54.93,6.223 79.234,17.227 22.317,10.07 42.774,24.406 61.77,41.523 l 2.281,1.984 c 7.785,7.168 24.192,13.594 42.16,13.594 11.524,0 23.157,-3.117 32.082,-11.308 l 1.344,-1.348 c 16.821,-16.828 37.59,-31.359 58.977,-41.848 h 0.097 c 12.051,-5.918 25.125,-10.898 39.153,-14.324 l 9.129,-1.973 z M 165.121,612.512 H 278.113 V 545.918 H 165.121 Z m 38.805,98.508 -0.086,0.082 h 0.086 c -5.946,10.449 -9.274,22.171 -9.274,34.605 0,22.168 10.77,41.809 26.922,56.297 16.231,-14.406 27.008,-34.129 27.008,-56.297 0,-12.434 -3.336,-24.156 -9.269,-34.605 l -0.235,-0.473 v 19.082 c 0,9.578 -7.683,17.262 -17.258,17.262 -9.504,0 -17.183,-7.684 -17.183,-17.262 V 709.836 Z M 415.609,633.234 H 563.758 V 545.918 H 415.609 Z m 50.871,129.153 -0.105,0.105 h 0.105 c -7.792,13.703 -12.152,29.078 -12.152,45.371 0,29.075 14.121,54.821 35.293,73.825 21.293,-18.899 35.414,-44.75 35.414,-73.825 0,-16.293 -4.363,-31.668 -12.144,-45.371 l -0.305,-0.613 v 25.012 c 0,12.566 -10.078,22.636 -22.637,22.636 -12.461,0 -22.527,-10.07 -22.527,-22.636 V 760.832 Z M 699.961,612.512 H 812.957 V 545.918 H 699.961 Z m 38.809,98.508 -0.09,0.082 h 0.09 c -5.95,10.449 -9.282,22.171 -9.282,34.605 0,22.168 10.774,41.809 26.926,56.297 16.231,-14.406 27.012,-34.129 27.012,-56.297 0,-12.434 -3.34,-24.156 -9.27,-34.605 l -0.23,-0.473 v 19.082 c 0,9.578 -7.696,17.262 -17.27,17.262 -9.5,0 -17.176,-7.684 -17.176,-17.262 V 709.836 Z M 852.82,545.918 h -5.34 v 83.777 c 0,9.586 -7.753,17.262 -17.257,17.262 h -56.297 v 12.199 c 26.289,21.137 43.941,52.102 43.941,86.551 0,37.606 -20.906,70.707 -51.07,91.856 l -0.246,0.156 -0.235,0.16 c -5.703,4.031 -13.625,4.266 -19.636,0.078 -30.492,-21.148 -51.633,-54.477 -51.633,-92.25 0,-34.687 17.82,-65.734 44.433,-86.867 v -11.883 h -56.308 -0.469 c -9.512,0 -17.195,-7.676 -17.195,-17.262 v -83.777 h -56.477 v 109.32 0.528 c 0,12.562 -10.176,22.629 -22.636,22.629 h -73.809 v 15.992 c 34.465,27.715 57.617,68.316 57.617,113.476 0,49.313 -27.422,92.711 -66.965,120.442 l -0.32,0.199 -0.313,0.215 c -7.468,5.293 -17.863,5.601 -25.746,0.101 -39.976,-27.722 -67.691,-71.429 -67.691,-120.957 0,-45.476 23.359,-86.175 58.254,-113.89 v -15.578 h -73.828 -0.617 c -12.461,0 -22.543,-10.067 -22.543,-22.629 V 545.918 h -57.793 v 83.379 0.398 c 0,9.586 -7.758,17.262 -17.262,17.262 h -56.301 v 12.199 c 26.289,21.137 43.953,52.102 43.953,86.551 0,37.606 -20.914,70.707 -51.074,91.856 l -0.246,0.156 -0.234,0.16 c -5.704,4.031 -13.625,4.266 -19.641,0.078 -30.496,-21.148 -51.629,-54.477 -51.629,-92.25 0,-34.687 17.816,-65.734 44.43,-86.867 v -11.883 h -56.309 -0.469 c -9.507,0 -17.199,-7.676 -17.199,-17.262 v -83.777 h -4.105 C 57.5117,545.918 0,488.5 0,419.25 V 357.055 C 0,322.387 14.3203,290.609 37.2734,267.766 52.1133,252.914 69.5625,242.855 88.25,236.938 V 38.625 37.6875 c 0,-20.7617 16.82,-37.68359375 37.59,-37.68359375 h 726.66 1.031 c 20.774,0 37.59,16.92189375 37.59,37.68359375 V 236.938 c 18.582,5.71 35.93,15.781 50.977,30.828 22.949,22.843 37.277,54.621 37.277,89.289 v 62.195 c 0,69.043 -57.426,126.668 -126.555,126.668" />
            </g>
          </svg>
          <div class="title-benefit--textbox">
            <p class="title-benefit--litera">15 лет</p>
            <p class="title-benefit--text">бренду</p>
          </div>
        </div>
        <div class="title-benefit title-benefit--magenta">
          <svg class="title-benefit--img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 133.56 154.85333"
              height="154.85333"
              width="133.56"
              xml:space="preserve">
            <g transform="scale(0.13)">
              <path d="m 630.688,537.719 -0.118,0.058 c -33.136,-33.203 -79.093,-53.781 -129.738,-53.781 -50.644,0 -96.598,20.578 -129.734,53.781 l -1.305,1.239 c -32.398,32.961 -52.461,78.41 -52.461,128.488 0,50.703 20.563,96.598 53.766,129.801 33.136,33.136 79.09,53.715 129.734,53.715 50.645,0 96.602,-20.579 129.738,-53.715 33.192,-33.203 53.77,-79.098 53.77,-129.801 0,-50.707 -20.52,-96.652 -53.652,-129.727 z m 38.339,-38.328 c 43.067,43.004 69.766,102.586 69.766,168.113 0,65.715 -26.699,125.238 -69.707,168.254 -43.02,43.004 -102.609,69.707 -168.254,69.707 -65.648,0 -125.227,-26.703 -168.25,-69.707 -43.016,-43.016 -69.707,-102.539 -69.707,-168.254 0,-64.707 26.066,-123.672 68.207,-166.555 l 1.5,-1.621 c 43.074,-43.094 102.602,-69.781 168.25,-69.781 65.645,0 125.168,26.687 168.254,69.781 z M 805.004,202.152 c -10.254,0.118 -19.191,-5.5 -23.879,-13.879 l -0.066,0.071 -59.961,-106.3557 -93.157,161.3087 54.961,-12.512 1.309,-0.371 c 20.949,-4.816 42.07,-1.621 59.894,7.684 l 3.692,1.886 c 17.5,10.125 31.641,26.563 38.828,47.2 l 1.055,3.004 21.211,68.515 0.175,0.567 22.821,7.074 95.468,-165.442 z M 586.371,333.195 c -12.324,-3.875 -23.574,-10.429 -33.273,-19.5 l -2.313,-2.312 -49.953,-46.203 -52.332,48.457 0.133,0.058 c -10.695,9.942 -23.27,16.875 -36.899,20.567 l -0.371,0.129 v 0.066 c -13.379,3.555 -27.64,3.809 -41.957,0.625 l -69.707,-15.957 -21.015,68.164 -0.063,0.176 h 0.063 c -4.426,14.14 -11.817,26.457 -21.688,36.258 -9.758,9.828 -22.141,17.199 -36.391,21.586 l -68.082,21.062 15.817,69.719 c 3.187,14.312 2.941,28.562 -0.633,42.008 l -1.238,4.004 c -3.883,12.199 -10.449,23.449 -19.453,33.195 l -2.317,2.32 -46.1365,49.832 0.6289,0.875 47.7576,51.508 0.067,-0.062 c 9.886,10.695 16.824,23.203 20.515,36.828 l 0.114,0.449 0.062,-0.067 c 3.574,13.497 3.82,27.696 0.633,41.95 l -15.879,69.769 68.144,21.016 c 14.25,4.437 26.633,11.816 36.391,21.629 9.817,9.816 17.262,22.136 21.688,36.258 l 0.504,1.82 20.511,66.518 69.707,-15.88 c 14.379,-3.185 28.516,-2.927 41.957,0.57 l 0.184,0.06 v -0.06 c 13.637,3.69 26.266,10.75 37.086,20.76 l 2.305,2.37 49.832,46.08 0.804,-0.62 51.594,-47.77 -0.07,-0.06 c 10.82,-10.07 23.449,-17.07 37.023,-20.7 13.496,-3.557 27.813,-3.881 42.313,-0.56 l 1.32,0.3 68.211,15.51 21.066,-68.081 0.067,-0.195 h -0.067 c 8.758,-28.191 29.949,-49.191 58.094,-57.949 l 68.145,-21.016 -15.821,-69.578 h -0.058 c -3.25,-14.445 -3.008,-28.824 0.617,-42.332 3.574,-13.383 10.574,-25.879 20.703,-36.824 l 48.457,-52.399 -0.625,-0.804 -47.773,-51.524 -0.059,0.059 c -10.07,-10.75 -17.063,-23.379 -20.703,-37 l -0.676,-2.883 c -2.949,-12.754 -2.949,-26.133 0.059,-39.523 l 0.371,-1.297 15.508,-68.223 -68.145,-21.062 c -14.324,-4.387 -26.648,-11.758 -36.453,-21.586 -9.824,-9.801 -17.199,-22.118 -21.641,-36.258 l -0.5,-1.809 -20.566,-66.465 -69.707,15.891 c -14.324,3.184 -28.516,2.93 -41.961,-0.625 z M 280.57,81.9883 220.605,188.344 l -0.066,-0.071 c -4.687,8.379 -13.621,13.997 -23.883,13.879 l -122.3552,-1.25 95.5352,165.442 22.828,-7.074 21.316,-69.082 h 0.055 c 6.766,-22.008 21.512,-39.579 40.016,-50.204 18.578,-10.761 41.074,-14.699 63.41,-9.57 l 56.199,12.883 z M 998.078,186.828 884.777,382.973 c 18.887,7.566 34.016,21.062 43.645,37.625 l -0.117,0.07 0.117,0.129 c 10.633,18.504 14.629,40.945 9.629,63.199 l -15.949,69.961 -0.118,0.891 46.77,50.515 2.312,2.364 c 15.754,16.89 23.625,38.453 23.625,59.777 0,21.316 -7.871,42.894 -23.625,59.836 l -0.058,-0.067 -49.082,53.024 16.125,70.836 c 5,22.199 1.004,44.652 -9.629,63.152 -10.742,18.629 -28.262,33.317 -50.195,40.145 l -69.161,21.316 -21.386,69.144 h -0.059 c -6.75,22.07 -21.437,39.65 -39.824,50.21 l -0.07,-0.07 -0.125,0.07 c -18.567,10.69 -40.95,14.63 -63.204,9.63 l -70.031,-15.88 -0.801,-0.19 -50.593,46.83 -2.305,2.31 c -16.887,15.7 -38.391,23.64 -59.77,23.64 -21.32,0 -42.769,-7.94 -59.71,-23.64 l -51.653,-47.82 -1.562,-1.39 -70.703,16.14 c -22.258,5 -44.641,1.06 -63.219,-9.63 -18.571,-10.76 -33.25,-28.26 -40.071,-50.21 l -21.136,-68.515 -0.242,-0.629 -69.094,-21.316 C 101.563,947.602 83.9922,932.914 73.3008,914.285 62.6094,895.785 58.6133,873.402 63.6719,851.133 L 79.8047,780.363 32.9766,729.656 30.6641,727.34 C 14.9102,710.465 6.97266,688.887 6.97266,667.504 c 0,-21.371 7.93754,-42.949 23.69144,-59.777 l 0.0625,0.07 47.7109,-51.582 1.3672,-1.563 -15.75,-69.14 -0.3203,-1.387 C 58.6133,461.809 62.6094,439.359 73.3008,420.797 82.9297,404.098 98,390.539 116.887,382.973 L 3.59375,186.828 c -7.44141,-12.93 -2.945312,-29.566 10.00005,-37 4.3164,-2.508 9.0664,-3.629 13.6835,-3.578 v -0.051 L 181.086,147.77 256.563,13.8398 c 7.308,-13.011675 23.945,-17.69136 37,-10.39058 4.75,2.62891 8.386,6.5 10.695,11.01168 l 116.48,201.7541 20.45,-18.938 c 16.941,-15.632 38.39,-23.574 59.644,-23.574 21.262,0 42.637,7.871 59.648,23.574 l 20.45,18.938 116.418,-201.7541 c 2.363,-4.51168 5.996,-8.38277 10.742,-11.01168 13.074,-7.30078 29.707,-2.621095 37.019,10.39058 l 75.52,133.9302 153.75,-1.571 v 0.051 c 4.629,-0.051 9.383,1.07 13.699,3.578 12.932,7.434 17.432,24.07 10,37" />
            </g>
          </svg>
          <div class="title-benefit--textbox">
            <p class="title-benefit--litera">Выбор</p>
            <p class="title-benefit--text">педагогов</p>
            <p class="title-benefit--text">и психологов</p>
          </div>
        </div>
      </div>
      <div class="title-learnmore-wrapper">
        <div class="title-learnmore">
          <p class="title-learnmore--text">узнай больше о полезных играх</p>
        </div>
        <a href="#" v-scroll-to="'#sliderpage'" @click="isScrolling = true">
          <svg class="title-learnmore--icon" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3961 25.1602C38.2546 26.0461 38.2546 27.4835 37.3961 28.3694L26.3406 39.7816C25.4821 40.6675 24.0899 40.6675 23.2314 39.7816C22.3727 38.8952 22.3727 37.4583 23.2314 36.5719L34.2867 25.1602C35.1454 24.2738 36.5374 24.2738 37.3961 25.1602Z" fill="#E2BD9E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5923 25.2579C12.4543 24.3677 13.8519 24.3677 14.714 25.2579L25.8132 36.7147C26.6752 37.6044 26.6752 39.0472 25.8132 39.9368C24.9512 40.8265 23.5535 40.8265 22.6916 39.9368L11.5923 28.4801C10.7303 27.5904 10.7303 26.1476 11.5923 25.2579Z" fill="#CA042C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6476 10.3119C25.8745 10.3038 26.8627 11.3107 26.8549 12.5614L26.7546 28.6619C26.7468 29.9126 25.7459 30.9325 24.5191 30.9401C23.2921 30.9483 22.3038 29.9408 22.3116 28.6907L22.412 12.5901C22.4198 11.34 23.4207 10.3195 24.6476 10.3119Z" fill="#E2BD9E"/>
            <path d="M24.5 2C36.9263 2 47 12.0734 47 24.4996C47 36.9259 36.9263 46.9998 24.5 46.9998C12.0735 46.9998 2 36.9259 2 24.4996C2 12.0733 12.0735 2 24.5 2Z" fill="black" fill-opacity="0.01" stroke="#E2BD9E" stroke-width="4"/>
          </svg>
        </a>
      </div>
    </section>
    <section class="slider" id="sliderpage" v-scroll="handleScroll">
      <div class="slider-wrapper">
        <swiper class="swiper" :options="swiperOption" ref="swiperMain">
          <swiper-slide><img src="~/assets/images/slider_tablegames.png" alt="Настольные игры"></swiper-slide>
          <swiper-slide><img src="~/assets/images/slider_mosaic.png" alt="Пазлы и мозаики"></swiper-slide>
          <swiper-slide><img src="~/assets/images/slider_roadgames.png" alt="Игры в дорогу"></swiper-slide>
        </swiper>
      </div>
    </section>
    <button @click="goNextMain" class="slider-button">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56px" height="56px">
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M27.285,13.907 C28.172,13.049 29.609,13.049 30.495,13.907 L41.907,24.963 C42.793,25.822 42.793,27.213 41.907,28.072 C41.020,28.931 39.583,28.931 38.697,28.072 L27.285,17.017 C26.399,16.158 26.399,14.766 27.285,13.907 Z"/>
        <path fill-rule="evenodd"  fill="rgb(202, 4, 44)"
              d="M27.383,39.711 C26.493,38.849 26.493,37.452 27.383,36.590 L38.840,25.491 C39.730,24.629 41.172,24.629 42.062,25.491 C42.952,26.353 42.952,27.750 42.062,28.612 L30.605,39.711 C29.715,40.573 28.273,40.573 27.383,39.711 Z"/>
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M12.437,26.656 C12.429,25.429 13.436,24.441 14.687,24.449 L30.787,24.549 C32.038,24.557 33.058,25.558 33.066,26.785 C33.074,28.011 32.066,29.000 30.816,28.992 L14.716,28.892 C13.465,28.884 12.445,27.883 12.437,26.656 Z"/>
        <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
              d="M26.625,2.312 C40.156,2.312 51.125,13.281 51.125,26.812 C51.125,40.343 40.156,51.312 26.625,51.312 C13.094,51.312 2.125,40.343 2.125,26.812 C2.125,13.281 13.094,2.312 26.625,2.312 Z"/>
      </svg>
    </button>
    <section class="knowledge" v-scroll="handleScroll">
      <div class="knowledge-title">
        <p class="knowledge-title--title">знания сила!</p>
        <p class="knowledge-title--subtitle">познавательные и обучающие игры для развития и подготовки к школьным заданиям</p>
      </div>
      <div class="knowledge-grid">
        <div class="knowledge-item">
          <img src="~/assets/images/grid_playthinklearn.png" alt="Игры из дерева" class="knowledge-item--img">
          <p class="knowledge-item--text">ИГРАЙ, ДУМАЙ, УЧИСЬ ИГРАЙ, ДУМАЙ, ТВОРИ</p>
        </div>
        <div class="knowledge-item">
          <img src="~/assets/images/grid_smartowl.png" alt="Игры из дерева" class="knowledge-item--img">
          <p class="knowledge-item--text">УМНАЯ СОВА</p>
        </div>
        <div class="knowledge-item">
          <img src="~/assets/images/grid_learneasy.png" alt="Игры из дерева" class="knowledge-item--img">
          <p class="knowledge-item--text">ОБУЧЕНИЕ ЛЕГКО И ИНТЕРЕСНО</p>
        </div>
        <div class="knowledge-item">
          <img src="~/assets/images/grid_smartgames.png" alt="Игры из дерева" class="knowledge-item--img">
          <p class="knowledge-item--text">SMARTGAMES</p>
        </div>
        <div class="knowledge-item">
          <img src="~/assets/images/grid_cultivategames.png" alt="Игры из дерева" class="knowledge-item--img">
          <p class="knowledge-item--text">РАЗВИВАЮЩИЕ И ОБУЧАЮЩИЕ ИГРЫ</p>
        </div>
        <div class="knowledge-item">
          <img src="~/assets/images/grid_roadgames.png" alt="Игры из дерева" class="knowledge-item--img">
          <p class="knowledge-item--text">МИНИ-ИГРЫ В ДОРОГУ</p>
        </div>
        <div class="knowledge-item">
          <img src="~/assets/images/grid_bondilogika.png" alt="Игры из дерева" class="knowledge-item--img">
          <p class="knowledge-item--text">СЕРИЯ БОНДИЛОГИКА</p>
        </div>
        <div class="knowledge-item">
          <img src="~/assets/images/grid_familygames.png" alt="Игры из дерева" class="knowledge-item--img">
          <p class="knowledge-item--text">НАСТОЛЬНЫЕ СЕМЕЙНЫЕ ИГРЫ</p>
        </div>
        <div class="knowledge-item">
          <img src="~/assets/images/grid_woodengames.png" alt="Игры из дерева" class="knowledge-item--img">
          <p class="knowledge-item--text">игры из дерева</p>
        </div>
        <div class="knowledge-item">
          <img src="~/assets/images/grid_mosaic.png" alt="Игры из дерева" class="knowledge-item--img">
          <p class="knowledge-item--text">МОЗАИКИ И ПАЗЛЫ BABY YOU</p>
        </div>
      </div>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56px" height="56px">
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M39.918,27.973 C40.776,28.859 40.776,30.296 39.918,31.182 L28.862,42.594 C28.003,43.480 26.611,43.480 25.753,42.594 C24.894,41.708 24.894,40.271 25.753,39.384 L36.808,27.973 C37.667,27.086 39.059,27.086 39.918,27.973 Z"/>
        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
              d="M14.114,28.070 C14.976,27.181 16.373,27.181 17.235,28.070 L28.335,39.527 C29.197,40.417 29.197,41.860 28.335,42.749 C27.473,43.639 26.075,43.639 25.213,42.749 L14.114,31.292 C13.252,30.403 13.252,28.960 14.114,28.070 Z"/>
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M27.169,13.124 C28.396,13.116 29.384,14.124 29.376,15.374 L29.276,31.474 C29.268,32.725 28.267,33.745 27.041,33.753 C25.814,33.761 24.825,32.754 24.833,31.503 L24.933,15.403 C24.941,14.152 25.942,13.132 27.169,13.124 Z"/>
        <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
              d="M27.000,2.812 C40.531,2.812 51.500,13.781 51.500,27.312 C51.500,40.843 40.531,51.812 27.000,51.812 C13.469,51.812 2.500,40.843 2.500,27.312 C2.500,13.781 13.469,2.812 27.000,2.812 Z"/>
      </svg>
    </section>
    <section class="microscope">
      <div class="microscope-wrapper--img">
        <img src="~/assets/images/microscope.png" alt="Микроскопы" class="microscope-img">
        <div class="microscope-wrapper--wrapper">
          <p class="microscope-text">хочу всё знать</p>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56px" height="56px"
              class="microscope-icon">
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M39.530,27.473 C40.388,28.359 40.388,29.796 39.530,30.682 L28.475,42.094 C27.616,42.980 26.224,42.980 25.365,42.094 C24.507,41.208 24.507,39.770 25.365,38.884 L36.420,27.473 C37.279,26.586 38.671,26.586 39.530,27.473 Z"/>
            <path fill-rule="evenodd"  fill="rgb(202, 4, 44)"
                  d="M13.726,27.570 C14.588,26.680 15.986,26.680 16.847,27.570 L27.947,39.027 C28.809,39.917 28.809,41.360 27.947,42.249 C27.085,43.139 25.687,43.139 24.825,42.249 L13.726,30.792 C12.864,29.902 12.864,28.460 13.726,27.570 Z"/>
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M26.782,12.624 C28.008,12.616 28.997,13.623 28.989,14.874 L28.888,30.974 C28.881,32.225 27.880,33.245 26.653,33.253 C25.426,33.261 24.438,32.253 24.445,31.003 L24.546,14.903 C24.554,13.653 25.554,12.632 26.782,12.624 Z"/>
            <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                  d="M26.625,2.312 C40.156,2.312 51.125,13.281 51.125,26.812 C51.125,40.343 40.156,51.312 26.625,51.312 C13.094,51.312 2.125,40.343 2.125,26.812 C2.125,13.281 13.094,2.312 26.625,2.312 Z"/>
          </svg>
        </div>
      </div>
      <div class="microscope-wrapper--items">
        <div class="microscope-item microscope-item--microscope">МИКРОСКОПЫ</div>
        <div class="microscope-item microscope-item--science">НАУЧНЫЕ ОПЫТЫ</div>
        <div class="microscope-item microscope-item--digger">НАБОРЫ ДЛЯ РАСКОПОК:<span class="microscope-item--small"> АРХЕОЛОГИЯ И ПАЛЕОНТОЛИЯ</span></div>
        <div class="microscope-item microscope-item--entertainment">РАЗВЛЕКАТЕЛЬНЫЕ ЭКСПЕРИМЕНТЫ</div>
        <div class="microscope-item microscope-item--magic">НАБОРЫ ФОКУСНИКА</div>
      </div>
    </section>
    <section class="mosaic">
      <div class="mosaic-wrapper--img">
        <img src="~/assets/images/mosaic.png" alt="Микроскопы" class="mosaic-img">
        <div class="mosaic-wrapper--wrapper">
          <p class="mosaic-text">ИНТЕЛЛЕКТ НА КОНЧИКАХ ПАЛЬЦев</p>
          <p class="mosaic-text mosaic-text--small">НАБОРЫ ДЛЯ ТВОРЧЕСТВА И РУКОДЕЛИЯ</p>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56px" height="56px"
              class="mosaic-icon">
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M39.530,27.473 C40.388,28.359 40.388,29.796 39.530,30.682 L28.475,42.094 C27.616,42.980 26.224,42.980 25.365,42.094 C24.507,41.208 24.507,39.770 25.365,38.884 L36.420,27.473 C37.279,26.586 38.671,26.586 39.530,27.473 Z"/>
            <path fill-rule="evenodd"  fill="rgb(202, 4, 44)"
                  d="M13.726,27.570 C14.588,26.680 15.986,26.680 16.847,27.570 L27.947,39.027 C28.809,39.917 28.809,41.360 27.947,42.249 C27.085,43.139 25.687,43.139 24.825,42.249 L13.726,30.792 C12.864,29.902 12.864,28.460 13.726,27.570 Z"/>
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M26.782,12.624 C28.008,12.616 28.997,13.623 28.989,14.874 L28.888,30.974 C28.881,32.225 27.880,33.245 26.653,33.253 C25.426,33.261 24.438,32.253 24.445,31.003 L24.546,14.903 C24.554,13.653 25.554,12.632 26.782,12.624 Z"/>
            <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                  d="M26.625,2.312 C40.156,2.312 51.125,13.281 51.125,26.812 C51.125,40.343 40.156,51.312 26.625,51.312 C13.094,51.312 2.125,40.343 2.125,26.812 C2.125,13.281 13.094,2.312 26.625,2.312 Z"/>
          </svg>
        </div>
      </div>
      <div class="mosaic-wrapper--items">
        <div class="mosaic-item mosaic-item--aquatermo">АКВА- И ТЕРМО- МОЗАИКИ</div>
        <div class="mosaic-item mosaic-item--engraving">ГРАВЮРЫ, ФРЕСКИ И АППЛИКАЦИИ</div>
        <div class="mosaic-item mosaic-item--modeling">ПОДЕЛКИ, ЛЕПКА, ВЫЖИГАНИЕ</span></div>
        <div class="mosaic-item mosaic-item--drawing">РИСОВАНИЕ, РОСПИСЬ, РАСКРАШИВАНИе</div>
        <div class="mosaic-item mosaic-item--knitting">РУКОДЕЛИЕ: ВЯЗАНИЕ, ШИТЬЁ, ВЫШИВКА, ПЛЕТЕНИЕ</div>
      </div>
    </section>
    <section class="constructor">
      <div class="constructor-wrapper--img">
        <img src="~/assets/images/constructor.png" alt="Микроскопы" class="constructor-img">
        <div class="constructor-wrapper--wrapper">
          <p class="constructor-text">МЫСЛИ КОНСТРУКТИВНО</p>
          <p class="constructor-text constructor-text--small">КОНСТРУКТОРЫ И РОБОТОТЕХНИКА, СБОРНЫЕ МОДЕЛИ, 3D ПАЗЛЫ</p>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56px" height="56px"
              class="constructor-icon">
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M39.530,27.473 C40.388,28.359 40.388,29.796 39.530,30.682 L28.475,42.094 C27.616,42.980 26.224,42.980 25.365,42.094 C24.507,41.208 24.507,39.770 25.365,38.884 L36.420,27.473 C37.279,26.586 38.671,26.586 39.530,27.473 Z"/>
            <path fill-rule="evenodd"  fill="rgb(202, 4, 44)"
                  d="M13.726,27.570 C14.588,26.680 15.986,26.680 16.847,27.570 L27.947,39.027 C28.809,39.917 28.809,41.360 27.947,42.249 C27.085,43.139 25.687,43.139 24.825,42.249 L13.726,30.792 C12.864,29.902 12.864,28.460 13.726,27.570 Z"/>
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M26.782,12.624 C28.008,12.616 28.997,13.623 28.989,14.874 L28.888,30.974 C28.881,32.225 27.880,33.245 26.653,33.253 C25.426,33.261 24.438,32.253 24.445,31.003 L24.546,14.903 C24.554,13.653 25.554,12.632 26.782,12.624 Z"/>
            <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                  d="M26.625,2.312 C40.156,2.312 51.125,13.281 51.125,26.812 C51.125,40.343 40.156,51.312 26.625,51.312 C13.094,51.312 2.125,40.343 2.125,26.812 C2.125,13.281 13.094,2.312 26.625,2.312 Z"/>
          </svg>
        </div>
      </div>
      <div class="constructor-wrapper--items">
        <div class="constructor-item constructor-item--robots">наборы робототехники</div>
        <div class="constructor-item constructor-item--magnit">магнитные,<br>блочные и игольчатые конструкторы</div>
        <div class="constructor-item constructor-item--sqrew">конструкторы<br>с отвёрткой,<br>с шестеренками<br>и треками</div>
        <div class="constructor-item constructor-item--puzzles">3d пазлы</div>
        <div class="constructor-item constructor-item--models">сборные модели</div>
      </div>
    </section>
    <section class="evamoda">
      <div class="evamoda-wrapper--img">
        <img src="~/assets/images/evamoda.png" alt="КОСМЕТИКА ДЕТСКАЯ, НАБОРЫ ДЛЯ СОЗДАНИЯ УКРАШЕНИЙ, СУМОЧКИ И АКСЕССУАРЫ" class="evamoda-img">
        <div class="evamoda-wrapper--wrapper">
          <p class="evamoda-text">красота<br>спасёт мир!</p>
          <p class="evamoda-text evamoda-text--small">косметика детская, наборы для создания украшений, сумочки и аксессуары</p>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56px" height="56px"
              class="evamoda-icon">
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M39.530,27.473 C40.388,28.359 40.388,29.796 39.530,30.682 L28.475,42.094 C27.616,42.980 26.224,42.980 25.365,42.094 C24.507,41.208 24.507,39.770 25.365,38.884 L36.420,27.473 C37.279,26.586 38.671,26.586 39.530,27.473 Z"/>
            <path fill-rule="evenodd"  fill="rgb(202, 4, 44)"
                  d="M13.726,27.570 C14.588,26.680 15.986,26.680 16.847,27.570 L27.947,39.027 C28.809,39.917 28.809,41.360 27.947,42.249 C27.085,43.139 25.687,43.139 24.825,42.249 L13.726,30.792 C12.864,29.902 12.864,28.460 13.726,27.570 Z"/>
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M26.782,12.624 C28.008,12.616 28.997,13.623 28.989,14.874 L28.888,30.974 C28.881,32.225 27.880,33.245 26.653,33.253 C25.426,33.261 24.438,32.253 24.445,31.003 L24.546,14.903 C24.554,13.653 25.554,12.632 26.782,12.624 Z"/>
            <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                  d="M26.625,2.312 C40.156,2.312 51.125,13.281 51.125,26.812 C51.125,40.343 40.156,51.312 26.625,51.312 C13.094,51.312 2.125,40.343 2.125,26.812 C2.125,13.281 13.094,2.312 26.625,2.312 Z"/>
          </svg>
        </div>
      </div>
      <div class="evamoda-wrapper--items">
        <div class="evamoda-item evamoda-item--evamoda">eva moda<br>косметика<br>детская</div>
        <div class="evamoda-item evamoda-item--bodyart">боди-арт, переводные татуировки,<br>дизайн ногтей</div>
        <div class="evamoda-item evamoda-item--accesoires">наборы для создания украшений и аксессуаров</div>
        <div class="evamoda-item evamoda-item--umbrella">десткие зонтики и сумочки</div>
        <div class="evamoda-item evamoda-item--bags">сумки для раскрашивания</div>
      </div>
    </section>
    <section class="tablegames">
      <div class="tablegames-wrapper--img">
        <img src="~/assets/images/tablegames.png" alt="ДЕЛУ ВРЕМЯ, ПОТЕХЕ - ЧАC" class="tablegames-img">
        <div class="tablegames-wrapper--wrapper">
          <p class="tablegames-text">делу время,<br>потехе - чаc</p>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56px" height="56px"
              class="tablegames-icon">
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M39.530,27.473 C40.388,28.359 40.388,29.796 39.530,30.682 L28.475,42.094 C27.616,42.980 26.224,42.980 25.365,42.094 C24.507,41.208 24.507,39.770 25.365,38.884 L36.420,27.473 C37.279,26.586 38.671,26.586 39.530,27.473 Z"/>
            <path fill-rule="evenodd"  fill="rgb(202, 4, 44)"
                  d="M13.726,27.570 C14.588,26.680 15.986,26.680 16.847,27.570 L27.947,39.027 C28.809,39.917 28.809,41.360 27.947,42.249 C27.085,43.139 25.687,43.139 24.825,42.249 L13.726,30.792 C12.864,29.902 12.864,28.460 13.726,27.570 Z"/>
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M26.782,12.624 C28.008,12.616 28.997,13.623 28.989,14.874 L28.888,30.974 C28.881,32.225 27.880,33.245 26.653,33.253 C25.426,33.261 24.438,32.253 24.445,31.003 L24.546,14.903 C24.554,13.653 25.554,12.632 26.782,12.624 Z"/>
            <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                  d="M26.625,2.312 C40.156,2.312 51.125,13.281 51.125,26.812 C51.125,40.343 40.156,51.312 26.625,51.312 C13.094,51.312 2.125,40.343 2.125,26.812 C2.125,13.281 13.094,2.312 26.625,2.312 Z"/>
          </svg>
        </div>
      </div>
      <div class="tablegames-wrapper--items">
        <div class="tablegames-item tablegames-item--antistress">игрушки-антистресс:<span class="tablegames-item--small">сквиши, тянучки, пружинки, мякиши и лизуны</span></div>
        <div class="tablegames-item tablegames-item--transport">транспорт:<span class="tablegames-item--small">машинки, треки, железные дороги</span></div>
        <div class="tablegames-item tablegames-item--rolegames">сюжетно-ролевые игрушки</div>
        <div class="tablegames-item tablegames-item--dolls">куклы и пупсы</div>
        <div class="tablegames-item tablegames-item--newborn">игрушки для малышей</div>
      </div>
    </section>
    <section class="gift" id="giftpage" v-scroll="handleScroll">
      <div class="gift-wrapper">
        <swiper class="swiper" :options="swiperOption" ref="swiperGift">
          <swiper-slide><img src="~/assets/images/slider_cup.png" alt="Настольные игры"></swiper-slide>
          <swiper-slide><img src="~/assets/images/slider_newyear.png" alt="Пазлы и мозаики"></swiper-slide>
          <swiper-slide><img src="~/assets/images/slider_xmastree.png" alt="Игры в дорогу"></swiper-slide>
        </swiper>
      </div>
    </section>
    <button @click="goNextGift" class="gift-button">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56px" height="56px">
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M27.285,13.907 C28.172,13.049 29.609,13.049 30.495,13.907 L41.907,24.963 C42.793,25.822 42.793,27.213 41.907,28.072 C41.020,28.931 39.583,28.931 38.697,28.072 L27.285,17.017 C26.399,16.158 26.399,14.766 27.285,13.907 Z"/>
        <path fill-rule="evenodd"  fill="rgb(202, 4, 44)"
              d="M27.383,39.711 C26.493,38.849 26.493,37.452 27.383,36.590 L38.840,25.491 C39.730,24.629 41.172,24.629 42.062,25.491 C42.952,26.353 42.952,27.750 42.062,28.612 L30.605,39.711 C29.715,40.573 28.273,40.573 27.383,39.711 Z"/>
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M12.437,26.656 C12.429,25.429 13.436,24.441 14.687,24.449 L30.787,24.549 C32.038,24.557 33.058,25.558 33.066,26.785 C33.074,28.011 32.066,29.000 30.816,28.992 L14.716,28.892 C13.465,28.884 12.445,27.883 12.437,26.656 Z"/>
        <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
              d="M26.625,2.312 C40.156,2.312 51.125,13.281 51.125,26.812 C51.125,40.343 40.156,51.312 26.625,51.312 C13.094,51.312 2.125,40.343 2.125,26.812 C2.125,13.281 13.094,2.312 26.625,2.312 Z"/>
      </svg>
    </button>
    <section class="newyear">
      <div class="newyear-title">
        <p class="newyear-title--title">новый год к нам мчится!</p>
        <p class="newyear-title--subtitle">новогодние наборы для творчества, ёлочные игрушки hand-made, настольные игр</p>
      </div>
      <div class="newyear-grid">
        <div class="newyear-item">
          <img src="~/assets/images/newyear_roadgames.png" alt="Мини-игры в дорогу новогодние" class="newyear-item--img">
          <p class="newyear-item--text">мини-игры в дорогу новогодние</p>
        </div>
        <div class="newyear-item">
          <img src="~/assets/images/newyear_ceramic.png" alt="Керамические ёлочные украшения для росписи" class="newyear-item--img">
          <p class="newyear-item--text">керамические ёлочные украшения для росписи</p>
        </div>
        <div class="newyear-item">
          <img src="~/assets/images/newyear_felt.png" alt="Наборы для создания ёлочных игрушек из фетра" class="newyear-item--img">
          <p class="newyear-item--text">наборы для создания ёлочных игрушек из фетра</p>
        </div>
        <div class="newyear-item">
          <img src="~/assets/images/newyear_compact.png" alt="Самая компактная ёлка" class="newyear-item--img">
          <p class="newyear-item--text">самая компактная ёлка</p>
        </div>
        <div class="newyear-item">
          <img src="~/assets/images/newyear_crystall.png" alt="Новогодние наборы для выращивани кристаллов" class="newyear-item--img">
          <p class="newyear-item--text">новогодние наборы для выращивани кристаллов</p>
        </div>
        <div class="newyear-item">
          <img src="~/assets/images/newyear_cups.png"alt="Керамические кружки и сувениры для росписи" class="newyear-item--img">
          <p class="newyear-item--text">керамические кружки и сувениры для росписи</p>
        </div>
        <div class="newyear-item">
          <img src="~/assets/images/newyear_aquatermo.png" alt="Аква- и термо- мозаики новогодние" class="newyear-item--img">
          <p class="newyear-item--text">аква- и термо- мозаики новогодние</p>
        </div>
        <div class="newyear-item">
          <img src="~/assets/images/newyear_cards.png" alt="Новогодние открытки своими руками" class="newyear-item--img">
          <p class="newyear-item--text">новогодние открытки своими руками</p>
        </div>
        <div class="newyear-item">
          <img src="~/assets/images/newyear_cultivate.png" alt="Развивающие игры под ёлку" class="newyear-item--img">
          <p class="newyear-item--text">развивающие игры под ёлку</p>
        </div>
        <div class="newyear-item">
          <img src="~/assets/images/newyear_3dxmaxtree.png" alt="3d ёлочки деревянные" class="newyear-item--img">
          <p class="newyear-item--text">3d ёлочки деревянные</p>
        </div>
      </div>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56px" height="56px">
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M39.918,27.973 C40.776,28.859 40.776,30.296 39.918,31.182 L28.862,42.594 C28.003,43.480 26.611,43.480 25.753,42.594 C24.894,41.708 24.894,40.271 25.753,39.384 L36.808,27.973 C37.667,27.086 39.059,27.086 39.918,27.973 Z"/>
        <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
              d="M14.114,28.070 C14.976,27.181 16.373,27.181 17.235,28.070 L28.335,39.527 C29.197,40.417 29.197,41.860 28.335,42.749 C27.473,43.639 26.075,43.639 25.213,42.749 L14.114,31.292 C13.252,30.403 13.252,28.960 14.114,28.070 Z"/>
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M27.169,13.124 C28.396,13.116 29.384,14.124 29.376,15.374 L29.276,31.474 C29.268,32.725 28.267,33.745 27.041,33.753 C25.814,33.761 24.825,32.754 24.833,31.503 L24.933,15.403 C24.941,14.152 25.942,13.132 27.169,13.124 Z"/>
        <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
              d="M27.000,2.812 C40.531,2.812 51.500,13.781 51.500,27.312 C51.500,40.843 40.531,51.812 27.000,51.812 C13.469,51.812 2.500,40.843 2.500,27.312 C2.500,13.781 13.469,2.812 27.000,2.812 Z"/>
      </svg>
    </section>
    <section class="teachers">
      <div class="teachers-wrapper--img">
        <div class="teachers-wrapper--wrapper">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="218px" height="53px">
            <image  x="0px" y="0px" width="218px" height="53px"  xlink:href="data:img/png;base64,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" />
          </svg>
          <p class="teachers-text">полезно педагогам</p>
        </div>
        <img src="~/assets/images/teachers.png" alt="Полезно педагогам" class="teachers-img">
      </div>
      <div class="teachers-wrapper--items">
        <div class="teachers-item teachers-item--speech">речевое развитие</div>
        <div class="teachers-item teachers-item--discovery">познавательное развитие</div>
        <div class="teachers-item teachers-item--art">художественно- эстетическое развитие</div>
        <div class="teachers-item teachers-item--social">социально- коммуника- тивное развитие</div>
        <div class="teachers-item teachers-item--catalog">Получите<span class="teachers-item--large"> каталог</span> рекомендованной продукции</div>
      </div>
      <svg class="teachers-download"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="55px" height="56px">
        <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="rgb(255, 255, 255)"
              d="M26.505,2.187 C40.036,2.187 51.005,13.156 51.005,26.687 C51.005,40.218 40.036,51.187 26.505,51.187 C12.974,51.187 2.005,40.218 2.005,26.687 C2.005,13.156 12.974,2.187 26.505,2.187 Z"/>
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M40.376,22.699 C41.231,23.577 41.231,24.999 40.376,25.876 L29.359,37.170 C28.503,38.047 27.116,38.047 26.260,37.170 C25.405,36.293 25.405,34.871 26.260,33.993 L37.277,22.699 C38.133,21.822 39.520,21.822 40.376,22.699 Z"/>
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M14.661,22.796 C15.520,21.916 16.913,21.916 17.772,22.796 L28.833,34.135 C29.692,35.016 29.692,36.444 28.833,37.324 C27.974,38.205 26.581,38.205 25.722,37.324 L14.661,25.985 C13.802,25.105 13.802,23.677 14.661,22.796 Z"/>
        <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
              d="M27.672,8.004 C28.894,7.997 29.879,8.993 29.871,10.231 L29.771,26.165 C29.763,27.402 28.766,28.412 27.544,28.420 C26.321,28.428 25.336,27.431 25.343,26.194 L25.444,10.259 C25.452,9.022 26.449,8.012 27.672,8.004 Z"/>
        <path fill-rule="evenodd"  fill="rgb(202, 4, 44)"
              d="M36.996,41.568 C37.003,42.917 36.026,44.005 34.813,43.995 L19.196,43.885 C17.983,43.876 16.994,42.776 16.986,41.427 C16.978,40.078 17.955,38.991 19.168,38.999 L34.785,39.110 C35.998,39.119 36.988,40.219 36.996,41.568 Z"/>
      </svg>
    </section>
    <section class="links">
      <div class="links-wrapper">
          <div class="links-item--opinion">интересует мнение профессионалов?
            <span class="links-item--small">cмотрите<br>отзывы практикующих<br>педагогов</span>
          </div>
          <div class="links-item--instagram">
            <div class="links-item--wrapper">
              <img src="~/assets/images/links_instagram.jpg" alt="Подписывайтесь на наш инстаграм!">
            </div>
          </div>
          <div class="links-item--come">заходите на наш youtube канал</div>
          <div class="links-item--youtube">
            <img src="~/assets/images/arrow.svg" class="arrow" alt="">
            <div class="links-item--wrapper">
              <img src="~/assets/images/links_youtube.png" alt="Cмотрите отзывы практикующих педагогов">
            </div>
          </div>
          <div class="links-item--bgames">
            <div class="links-item--wrapper">
              <div class="links-item--redcircle">
                <img src="~/assets/images/links_bondibongames.png" alt="заходите на наш youtube канал">
              </div>
            </div>
            <p class="links-item--small">Веселые и увлекательные<br>видео для детей, подростков и их родителей</p>
          </div>
        <div class="links-item--subscribe">подписывайтесь<br>на наш инстаграм!
          <span class="links-item--small">Узнавайте первыми о новинках, акциях и розыгрышах призов от бренда</span>
          <svg class="links-arrow"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="56px" height="56px">
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M27.659,14.394 C28.546,13.535 29.983,13.535 30.869,14.394 L42.281,25.450 C43.167,26.308 43.167,27.700 42.281,28.559 C41.394,29.418 39.957,29.418 39.71,28.559 L27.659,17.503 C26.773,16.645 26.773,15.253 27.659,14.394 Z"/>
            <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                  d="M27.757,40.198 C26.867,39.336 26.867,37.938 27.757,37.76 L39.214,25.977 C40.103,25.115 41.546,25.115 42.436,25.977 C43.326,26.839 43.326,28.237 42.436,29.99 L30.979,40.198 C30.90,41.60 28.647,41.60 27.757,40.198 Z"/>
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M12.811,27.143 C12.803,25.916 13.810,24.928 15.61,24.935 L31.161,25.36 C32.412,25.44 33.432,26.44 33.440,27.271 C33.447,28.498 32.441,29.487 31.190,29.479 L15.89,29.378 C13.839,29.371 12.819,28.370 12.811,27.143 Z"/>
            <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                  d="M26.999,2.811 C40.530,2.811 51.499,13.781 51.499,27.312 C51.499,40.842 40.530,51.812 26.999,51.812 C13.469,51.812 2.499,40.842 2.499,27.312 C2.499,13.781 13.469,2.811 26.999,2.811 Z"/>
          </svg>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import '~/assets/style/style.scss';

export default {
  name: 'Bondibon',
  title: 'Bondibon landing',
   components: {
     Swiper,
     SwiperSlide
   },
  data() {
    return {
      isScrolling: false,
        swiperOption: {
          mousewheel: false,
          slidesPerView: 1,
          spaceBetween: 70,
          loop: true,
          breakpoints: {
            // when window width is >= 1025px
            1025: {
              slidesPerView: 1,
              spaceBetween: 50
            }
          }
        }
      }
    },
  mounted() {
      this.$nextTick(() => {
        const swiperMain = this.$refs.swiperMain.$swiper;
        swiperMain.init();
        const swiperGift = this.$refs.swiperGift.$swiper;
        swiperGift.init();
      });
  },
  methods: {
      goNextMain() {
        //console.log('goNext');
        this.$refs.swiperMain.$swiper.slideNext();
      },
      goNextGift() {
        //console.log('goNext');
        this.$refs.swiperGift.$swiper.slideNext();
      },
      handleScroll: function (evt, el) {
        // console.log('scrolling', el.className);
        // console.log(window.scrollY);
        // console.log(evt);
        // if(!this.isScrolling && el.className === 'slider' && window.scrollY < 680) {
        //   const _done = this.doneScrolling;
        //   const options = { offset: -20, onDone: _done };
        //   this.$scrollTo(el, 500, options);
        //   this.isScrolling = true;
        // }
        // else if(!this.isScrolling && el.className === 'knowledge' && window.scrollY > 680) {
        //   const _done = this.doneScrolling;
        //   const options = { offset: 0, onDone: _done };
        //   this.$scrollTo(el, 500, options);
        //   this.isScrolling = true;
        // }
        if (window.scrollY > 50 && el.className === 'slider') {
          el.setAttribute(
              'style',
              'opacity: 1; transform: translate3d(0, -10px, 0)'
          );
          //window.scrollY = 250;
        } else if(window.scrollY > 680 && el.className === 'knowledge') {
          el.setAttribute(
              'style',
              'opacity: 1; transform: translate3d(0, -10px, 0)'
          );
        }
        return window.scrollY > 1000
      },
      doneScrolling: function(el) {
        this.isScrolling = false;
        console.log('scrolling',this.isScrolling);
      }
    }
  }
</script>

