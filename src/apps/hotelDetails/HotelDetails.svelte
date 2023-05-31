<script lang="ts">
  import { io } from '@svelteuidev/composables';
  import HotelDetailsDescription from './HotelDetailsDescription.svelte';
  import HotelDetailsRooms from './HotelDetailsRooms.svelte';
  import HotelDetailsFacilities from './HotelDetailsFacilities.svelte';
  import HotelDetailsHouseRules from './HotelDetailsHouseRules.svelte';
  import HotelDetailsReviews from './HotelDetailsReviews.svelte';

  const content = [
    { title: 'Description', component: HotelDetailsDescription },
    { title: 'Rooms', component: HotelDetailsRooms },
    { title: 'Facilities', component: HotelDetailsFacilities },
    { title: 'House Rules', component: HotelDetailsHouseRules },
    { title: 'Reviews', component: HotelDetailsReviews },
  ]
  let isScrolled;
  let selected: { title: string; component: any } = content[0]; 

  function handleChange(event) {
    isScrolled = !event.detail.inView
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>


<div use:io={{ threshold: 1 }} on:change={handleChange} aria-hidden="true" style="visibility: hidden; height: 0px; margin-bottom: -2rem;">
  ************************************
  ** Scroll Detection (not visible) **
  ************************************
</div>

<svelte:component this={selected.component} />
  
<hbox class="tabBar">
  {#each content as item}
  <button on:click={() => selected = item} class:active={selected === item}>{item.title}</button>
  {/each}
  <hbox>
    {#if isScrolled}
      <button on:click={scrollToTop} style="margin-left: auto;">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM7 1L7 17L9 17L9 1L7 1Z" fill="#1F476A"/>
        </svg>
        <span>Scroll to top</span>
      </button>
    {/if}
  </hbox>
</hbox>


<style lang="scss">
  .tabBar {
    position: sticky;
    bottom: 0;
    inset-inline: 0;
    gap: 1px;
    border-radius: 0.125rem;
    border: 1px solid #1f476a;
    background-color: #1f476a;
    overflow: hidden;

    hbox {
      width: 100%;
      border: none;
      border-radius: 0;
      background-color: white;
    }
  }

  button {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border: none;
    outline: none;
    background: white;
    padding: 1rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    word-wrap: none;
    white-space: nowrap;

    &.active {
      color: white;
      background-color: #1f476a;
    }
  }
</style>