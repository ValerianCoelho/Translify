<script>
  import Voice from "./Voice.svelte";
  import Share from "./Share.svelte";
  import Copy from "./Copy.svelte";
  import { outputText } from "./../store";

  let placeholderText = "Enter something";
  let inputdata = "";

  const getTranslatedText = async () => {
    outputText.set('Translating...')
    if (inputdata != "") {
      fetch(`http://127.0.0.1:3000/${inputdata}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          outputText.set(data);
        })
        .catch((error) =>
          console.error("There was a problem with your fetch operation:", error)
        );
    }
  };
</script>

<div class="input-box">
  <div class="tools">
    <div class="lang">
      <div class="icon"><Voice /></div>
      <div class="name">English</div>
    </div>
    <div class="share"><Share /></div>
    <div class="copy"><Copy /></div>
  </div>
  <textarea
    class="text"
    placeholder={placeholderText}
    bind:value={inputdata}
    cols="40"
    rows="5"
  />
  <div class="action">
    <button
      class="button"
      on:click={() => {
        getTranslatedText();
      }}>Translate</button
    >
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
  .text,
  .text:focus,
  .text::selection,
  .text:active {
    color: white;
    margin-bottom: 20px;
    background-color: transparent;
    border-style: none;
    font-family: "Red Hat Display";
    /* outline: none; */
    padding: 12px;
    resize: vertical;

    font-size: 16px;
  }
  .action {
    display: flex;
    justify-content: flex-end;
  }
  .button {
    color: white;
    background-color: #ef4e40;
    padding: 8px 18px;
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 18px;
  }
  .button:hover {
    background-color: #c44135;
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
