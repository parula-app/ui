<hbox>
  <span class="promtIcon">
    <Microphone size="24"/>
  </span>
  <span class="text">
    <input bind:value on:keydown={onKey} placeholder="Parula, I need help!">
  </span>  
</hbox>

<script lang="ts">
  import Microphone from "svelte-material-icons/MicrophoneOutline.svelte";
  import { parula, messages } from "../../logic/chat/assistant";
  import { Message } from "../../logic/abstract/Message";

  let value = "";
  function startQuery() {
    let message = new Message();
    message.text = value;
    message.outgoing = true;
    message.contact = parula;
    messages.push(message);
    value = "";
  }

  function onKey(event: KeyboardEvent) {
    if (event.key == "Enter") {
      startQuery();
      event.preventDefault();
      event.stopPropagation();
    }
  }
</script>

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
