<hbox>
  <img {src} {alt} />
  <vbox>
    <h3>{name}</h3>
    <StarRating {stars} />
    <CardHeaderFeatures {features} />
    <hbox>
      <h3>{price}€ <span>per Night</span></h3>
      <slot name="expandButton" />
    </hbox>
  </vbox>

</hbox>

<script lang="ts">
  import CardHeaderFeatures from "./CardHeaderFeatures.svelte";
  import StarRating from "./StarRating.svelte";

  export let hotel: IHotel;
  
  $: name = hotel.name;
  $: price = hotel.price;
  $: stars = hotel.stars;
  $: src = hotel.image;
  $: alt = hotel.name + " image";
  $: features = hotel.features;
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
</style>