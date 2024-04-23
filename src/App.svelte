<script>
  import Title from "./lib/Title.svelte";
  import InputBox from "./lib/InputBox.svelte";
  import OutputBox from "./lib/OutputBox.svelte";
  import Illustration from "./lib/Illustration.svelte";
  import Waves from "./lib/Waves.svelte";
</script>

<Title />
<main class="main">
  <div class="translate-section">
    <InputBox />
    <OutputBox />
  </div>
  <div class="illustration"><Illustration /></div>
</main>
<div class="waves">
  <Waves />
</div>

<style>
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
  }
  .waves {
    width: 100%;
    overflow: hidden;
  }
</style>
