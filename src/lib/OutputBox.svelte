<script>
  import Voice from "./Voice.svelte";
  import Share from "./Share.svelte";
  import Copy from "./Copy.svelte";
  import NetworkError from "./NetworkError.svelte";
  import { outputText } from "./../store";
  import { networkErrorMsg } from "./constants";
</script>

<div class="input-box">
  <div class="tools">
    <div class="lang">
      <div class="icon"><Voice /></div>
      <div class="name">Konkani</div>
    </div>
    <div class="share"><Share /></div>
    <div class="copy"><Copy /></div>
  </div>
  <div class="text">
    {#if $outputText === networkErrorMsg}
      <NetworkError />
    {:else}
      {$outputText}
    {/if}
  </div>
</div>

<style>
  .input-box {
    background-color: #191b1e;
    font-family: "Red Hat Display";
    padding: 28px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
    color: #db4d45;
  }
  .share {
    margin-right: 8px;
  }
  .text {
    color: white;
    margin-bottom: 20px;
  }
  .text::selection {
    background: #b9b9b9;
    color: #000000;
  }
  .text::-moz-selection {
    background: #b9b9b9;
    color: #000000;
  }
  .text::-webkit-selection {
    background: #b9b9b9;
    color: #000000;
  }
</style>
