<script>
  import { onMount } from "svelte";
  import { chats } from "./../store";
  import { currentChat } from "./../store";
  import { v4 as uuidv4 } from "uuid";
</script>

<div class="test-tab">
  <div class="tab">
    <button
      class="chat-button"
      on:click={() => {
        let newid = uuidv4();
        chats.createNewChat(newid);
        currentChat.set(newid);
      }}>New Chat</button
    >
    {#each $chats as chat}
      <button
        class={`chat-toggle ${$currentChat == chat.id ? "chat-selected" : ""}`}
        on:click={() => {
          currentChat.set(chat.id);
        }}>{chat.date}</button
      >
    {/each}
  </div>
</div>
<div class="spacers"></div>

<style>
  .chat-selected {
    background-color: #000000 !important;
    &:hover {
      background-color: #0000008f;
      cursor: pointer;
    }
  }
  .chat-toggle {
    color: white;
    background-color: #282828;
    width: 100%;
    padding: 8px 18px;
    border: none;
    outline: none;
    font-family: "Red Hat Display";
    border-radius: 4px;
    font-size: 10px;
    &:hover {
      background-color: #0000008f;
      cursor: pointer;
    }
  }

  .chat-button {
    color: white;
    background-color: #ef4e40;
    padding: 8px 18px;
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 15px;
    &:hover {
      background-color: #ef4f40b3;
      cursor: pointer;
    }
  }
  .test-tab {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 100vh;
    width: 200px;
    position: fixed;
  }
  .tab {
    padding: 20px;
    background-color: #111215;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;

    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
</style>
