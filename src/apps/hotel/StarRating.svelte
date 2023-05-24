<hbox>
  <hbox class="stars">
    {#each Array(5) as _, i}
      {#if i < Math.floor(stars)}
          <Star size={20} color="#FFA800" />
      {:else}
        <StarOutline size={20} color="#ccc"/>
      {/if}
    {/each}
    
  </hbox>
  {stars}
</hbox>

<script lang="ts">
  import Star from "svelte-material-icons/Star.svelte";
  import StarOutline from "svelte-material-icons/StarOutline.svelte";

  export let stars: number;
</script>

<style>
  hbox {
    gap: 0.5rem;
    align-items: center;
  }

  hbox.stars {
    gap: 0;
    align-items: center;
  }

  hbox.stars .outline {
    color: #ccc;
  }
</style>