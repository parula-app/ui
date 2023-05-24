<hbox>
  <button><PiggyBankOutline size={32}/>Price</button>
  <button><StarOutline size={32} />Stars</button>
  <button><CarBrakeParking size={32} />Parking</button>
  <button><StarShootingOutline size={32} />Ratings</button>
  <button><CoffeeOutline size={32} />Breakfast</button>
</hbox>

<script lang="ts">
  import PiggyBankOutline from "svelte-material-icons/PiggyBankOutline.svelte";
  import StarOutline from "svelte-material-icons/StarOutline.svelte";
  import CarBrakeParking from "svelte-material-icons/CarBrakeParking.svelte";
  import StarShootingOutline from "svelte-material-icons/StarShootingOutline.svelte";
  import CoffeeOutline from "svelte-material-icons/CoffeeOutline.svelte";
</script>

<style>
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
</style>
