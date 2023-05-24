<hbox>
  <img {src} {alt} />
  <vbox>
    <h3>{name}</h3>
    <StarRating {stars} />
    <CardHeaderFeatures {features} />
    <hbox>
      <h3>{price}€ <span>per Night</span></h3>
      <button on:click={toggleCard}>Show details</button>
    </hbox>
  </vbox>

</hbox>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import CardHeaderFeatures from "./CardHeaderFeatures.svelte";
  import StarRating from "./StarRating.svelte";

  export let hotel: IHotel;
  
  $: name = hotel.name;
  $: price = hotel.price;
  $: stars = hotel.stars;
  $: src = hotel.image;
  $: alt = hotel.name + " image";
  $: features = hotel.features;


	const dispatch = createEventDispatcher();

	function toggleCard() {
		dispatch('toggle', hotel.id);
	}
</script>

<style>
  hbox, vbox {
    gap: 1rem;
  }

  vbox hbox {
    align-items: center;
  }

  h3 {
    margin: 0;
    padding: 0;
    flex-grow: 1;
    line-height: 1.3rem;
  }

  h3 span {
    font-weight: 300;
    font-size: 0.75rem;
  }

  img {
    width: 180px;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 0.25rem;
  }

  vbox {
    flex-grow: 1;
  }

  button {
    flex-grow: 1;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 0.25rem;
    background: #20466A;
    color: white;
  }
</style>