<script lang="ts">
  import Progress from '../lib/Progress.svelte';
  import HotelShortInfos from './HotelShortInfos.svelte';

  export let hotel: IHotel;
</script>

<vbox>
  <hbox class="images">
    <img />
    <img />
    <img />
    <img />
    <img />
  </hbox>
  <HotelShortInfos {hotel} />
  <hbox class="features">
    <grid>
      <vbox>
        <hbox class="label">
          <span>Cleaning</span>
          <span>4,7</span>
        </hbox>
        <Progress progress={78} />
      </vbox>
      <vbox>
        <hbox class="label">
          <span>Cleaning</span>
          <span>4,7</span>
        </hbox>
        <Progress progress={78} />
      </vbox>
      <vbox>
        <hbox class="label">
          <span>Cleaning</span>
          <span>4,7</span>
        </hbox>
        <Progress progress={78} />
      </vbox>
      <vbox>
        <hbox class="label">
          <span>Cleaning</span>
          <span>4,7</span>
        </hbox>
        <Progress progress={78} />
      </vbox>
      <vbox>
        <hbox class="label">
          <span>Cleaning</span>
          <span>4,7</span>
        </hbox>
        <Progress progress={78} />
      </vbox>
    </grid>
    <button>Go to Hotel</button>
  </hbox>
</vbox>

<style>
  vbox {
    gap: 1rem;
  }
  hbox.images {
    gap: 0.5rem;
    overflow-x: scroll;
    margin-inline: -1rem;
    padding-inline: 1rem;
    padding-bottom: 1rem;
  }

  img {
    width: 8rem;
    flex-shrink: 0;
    aspect-ratio: 5/3;
    object-fit: cover;
    background: #eee;
    border-radius: 0.25rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    background-color: #1F476A;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    border: 0;
    outline: none;
  }

  hbox.features {
    gap: 1rem;
    justify-content: space-between;
    align-items: end;
  }

  hbox.features vbox {
    gap: 0.25rem;
    justify-content: space-between;
    align-items: end;
  }

  hbox.features hbox.label {
    width: 100%;
    gap: 0.25rem;
    font-size: 0.75rem;
    align-items: center;
    justify-content: space-between;
  }

  grid {
    flex-grow: 1;
    flex-shrink: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: auto;
  }
</style>
