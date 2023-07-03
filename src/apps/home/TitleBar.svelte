<hbox class="titlebar">
  <hbox class="spacer" />
  <hbox class="title">{appName}</hbox>
  <hbox class="spacer" />
  <hbox class="buttons">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <hbox class="close button" on:click={onClose}>
      <Close size={32}/>
    </hbox>
  </hbox>
</hbox>

<script lang="ts">
  import Close from "svelte-material-icons/CloseBoxOutline.svelte";
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

  export const appName: string = "";

  function onClose() {
		dispatch('close', {});
  }
</script>

<style>
  .titlebar {
    margin-top: -1rem;
  }
  .spacer {
    flex: 1 0 0;
  }
  .buttons {
    margin: 0 2rem;
  }
</style>
