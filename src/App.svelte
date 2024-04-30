<script>
  import Title from "./lib/Title.svelte";
  import InputBox from "./lib/InputBox.svelte";
  import OutputBox from "./lib/OutputBox.svelte";
  import Illustration from "./lib/Illustration.svelte";
  import Waves from "./lib/Waves.svelte";

  fetch("http://127.0.0.1:3000/How%20are%20you")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("There was a problem with your fetch operation:", error)
    );
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
