<script>
  import FilterButton from "./FilterButton.svelte";
  import Stars5Icon from "../../../icons/Stars5Icon.svelte";
  import Stars4Icon from "../../../icons/Stars4Icon.svelte";
  import Stars3Icon from "../../../icons/Stars3Icon.svelte";
  import Stars2Icon from "../../../icons/Stars2Icon.svelte";
  import Stars1Icon from "../../../icons/Stars1Icon.svelte";
  
  let stars = 3;

  $: starsIcon = getIcon(stars);
  $: label = stars === 1 ? '1 Star' : `${stars} Stars`;

  function getIcon(stars) {
    if(stars === 5) return Stars5Icon;
    if(stars === 4) return Stars4Icon;
    if(stars === 3) return Stars3Icon;
    if(stars === 2) return Stars2Icon;
    return Stars1Icon;
  }
</script>

<FilterButton>
  <svelte:component slot="icon" this={starsIcon} size={32} /> 
  <svelte:fragment slot="label">
    {label}
  </svelte:fragment>
  <hbox slot="settings">
      <button on:click={() => stars = 1} class:active={stars === 1}><Stars1Icon size={32} /> 1 Star</button>
      <button on:click={() => stars = 2} class:active={stars === 2}><Stars2Icon size={32} /> 2 Stars</button>
      <button on:click={() => stars = 3} class:active={stars === 3}><Stars3Icon size={32} /> 3 Stars</button>
      <button on:click={() => stars = 4} class:active={stars === 4}><Stars4Icon size={32} /> 4 Stars</button>
      <button on:click={() => stars = 5} class:active={stars === 5}><Stars5Icon size={32} /> 5 Stars</button>
  </hbox>
</FilterButton>

<style lang="scss">
  hbox {
    gap: 1px;
    background: #1f476a;
    border-radius: 0.25rem;
    overflow: hidden;
    border: 1px solid #1f476a;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    border: none;
    border-radius: 0;
    min-width: 5rem;
    padding-block: 0.5rem;

        &.active {
      background-color: #1f476a;
      color: white;
    }
  }
</style>