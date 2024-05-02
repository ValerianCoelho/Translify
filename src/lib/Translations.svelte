<script>
  import { chats } from "../store";
  import { currentChat } from "../store";
  import { inputText } from "../store";
  import { outputText } from "../store";
</script>

<div class="box-wrapper">
  {#each $chats.find((ch) => ch.id == $currentChat)?.translations || [] as translation}
    <button
      class="translation"
      on:click={() => {
        inputText.set(translation.input);
        outputText.set(translation.output);
      }}>{translation.input}</button
    >
  {/each}
</div>

<style>
  .box-wrapper {
    background-color: #111215;
    max-height: 250px;
    border-radius: 12px;
    overflow-y: scroll;
    padding: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .translation {
    background-color: #212328;
    padding: 20px;
    color: white;
    font-family: "Red Hat Display";
    min-height: 50px;
    width: 100%;
    border-radius: 4px;
    border-style: none;
    &:hover {
      background-color: #212328be;
    }
  }
</style>
