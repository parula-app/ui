<script>
  import Microphone from "svelte-material-icons/MicrophoneOutline.svelte";
</script>

<hbox>
  <span class="promtIcon">
    <Microphone size="24"/>
  </span>
  <span class="text">
    <slot/>
  </span>  
</hbox>

<style>
  hbox {
    gap: 1rem;
    align-items: flex-start;
    padding: 0.25rem;
    border: 1px solid #ccc;
    border-radius: 1.25rem; 
    background-color: #eee;
    box-shadow: 0 16px 16px -16px  rgba(0,0,0,0.2);
  }

  .text {
    flex-grow: 1;
    padding-top: 0.25rem;
  }
  
  .promtIcon {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 2rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: red;
    color: white
  }

</style>
