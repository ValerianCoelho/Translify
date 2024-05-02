<script>
  import Title from "./lib/Title.svelte";
  import InputBox from "./lib/InputBox.svelte";
  import OutputBox from "./lib/OutputBox.svelte";
  import Illustration from "./lib/Illustration.svelte";
  import Waves from "./lib/Waves.svelte";
  import Tabs from "./lib/Tabs.svelte";
  import { onMount } from "svelte";
  import {chats}  from "./store";
  import Translations from "./lib/Translations.svelte";



</script>

<main class="main-view">
  <Tabs/>
  <div class="main-container">
    <Title />
    <div class="main">
      <div class="translate-section">
        <InputBox />
        <OutputBox />
      </div>
      <div class="illustration"><Illustration /></div>
    </div>
    <Translations/>
  </div>
</main>
<div class="waves">
  <Waves />
</div>

<style>
  .main-container{
    padding-inline: 50px;

  }

  .main-view {
    display: grid;
    grid-template-columns: 200px 2fr;
    grid-template-rows: 1fr;
    overflow-x: hidden;
  }
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }
  .translate-section {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 400px;
    overflow: hidden;
  }
  .waves {
    width: 100%;
    overflow: hidden;
    margin-top: 32px;
  }
  @media (width < 1100px) {
    .main {
      flex-direction: column-reverse;
      gap: 0;
    }
    .translate-section {
      width: 80%;
    }
  }
</style>
