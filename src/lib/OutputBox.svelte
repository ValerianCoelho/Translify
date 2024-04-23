<script>
    import Voice from "./Voice.svelte"
    import Share from "./Share.svelte";
    import Copy from "./Copy.svelte";
  </script>
  
  <div class="input-box">
    <div class="tools">
      <div class="lang">
        <div class="icon"><Voice/></div>
        <div class="name">Konkani</div>
      </div>
      <div class="share"><Share/></div>
      <div class="copy"><Copy/></div>
    </div>
    <div class="text">I enjoy exploring new places and experiencing different cultures. Traveling allows me to broaden my horizons and gain a deeper understanding of the world around me</div>
  </div>
  
  <style>
    .input-box {
      background-color: #191B1E;
      font-family: 'Red Hat Display';
      padding: 28px;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    }
    .tools {
      display: flex;
      margin-bottom: 8px;
    }
    .lang {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
    }
    .name {
      color: #DB4D45;
    }
    .share {
      margin-right: 8px;
    }
    .text {
      color: white;
      margin-bottom: 20px;
    }
  </style>