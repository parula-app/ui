<vbox>
  <hbox>
    <button on:click={() => toggleFilter('FilterPrice')} class:inActive={filter && filter !== 'FilterPrice'}><PiggyBankOutline size={32}/>Price</button>
    <button on:click={() => toggleFilter('FilterStars')} class:inActive={filter && filter !== 'FilterStars'}><StarOutline size={32} />Stars</button>
    <button on:click={() => toggleFilter('FilterParking')} class:inActive={filter && filter !== 'FilterParking'}><CarBrakeParking size={32} />Parking</button>
    <button on:click={() => toggleFilter('FilterRatings')} class:inActive={filter && filter !== 'FilterRatings'}><StarShootingOutline size={32} />Ratings</button>
    <button on:click={() => toggleFilter('FilterBreakfast')} class:inActive={filter && filter !== 'FilterBreakfast'}><CoffeeOutline size={32} />Breakfast</button>
  </hbox>
  <svelte:component this={filterComponent} />
</vbox>

<script lang="ts">
  import PiggyBankOutline from "svelte-material-icons/PiggyBankOutline.svelte";
  import StarOutline from "svelte-material-icons/StarOutline.svelte";
  import CarBrakeParking from "svelte-material-icons/CarBrakeParking.svelte";
  import StarShootingOutline from "svelte-material-icons/StarShootingOutline.svelte";
  import CoffeeOutline from "svelte-material-icons/CoffeeOutline.svelte";
  import FilterPrice from "./FilterPrice.svelte";
  
  let filter = '';
  $: filterComponent = getFilterComponent(filter);

  function toggleFilter(filterType: string) {
    filter = filterType === filter ? '' : filterType;
  }

  function getFilterComponent(filter: any) {
    if(filter === 'FilterPrice') return FilterPrice;
    return null;
  }
</script>

<style>
  vbox {
    gap: 1rem;
  }
  hbox {
    gap: 1px;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    background-color: #ccc;
    overflow: hidden;
    width: fit-content;
  }
  button {
    display: flex;
    width: 5rem;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    border: none;
    outline: none;
    padding-block: 0.5rem;
    background: white;
  }

  button.inActive {
    color: #bebebe;
  }
</style>
