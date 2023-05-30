<hbox class="prompt">
  <!-- TODO use hbox, not span, not grid -->
  <span class="prompt icon">
    <Microphone size="24"/>
  </span>
  <hbox class="text">
    <input bind:value on:keydown={onKey} placeholder="Parula, I need help!">
  </hbox>  
</hbox>

<script lang="ts">
  import Microphone from "svelte-material-icons/MicrophoneOutline.svelte";
  import { parula, messages } from "../../logic/chat/assistant";
  import { ChatMessage } from "../../logic/chat/Message";

  let value = "";
  function startQuery() {
    let message = new ChatMessage();
    message.text = value;
    message.html = value;
    message.outgoing = true;
    message.contact = parula;
    messages.add(message);
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
  hbox.prompt {
    gap: 1rem;
    align-items: flex-start;
    padding: 0.25rem;
    border: 1px solid #ccc;
    border-radius: 1.25rem; 
    background-color: #eee;
    box-shadow: 0 16px 16px -16px  rgba(0,0,0,0.2);
  }

  .text {
    flex: 1 0 0;
  }

  input {
    display: flex;
    flex: 1 0 0;
    background-color: unset;
    border: none;
  }

  .prompt.icon {
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
