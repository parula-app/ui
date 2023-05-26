<script lang="ts">
  export let hotel: IHotel;
</script>

<hbox class="shortInfos">
    <hbox class="rating">
      <span class="point">8,0</span>
      <span class="label">Very Good</span>
    </hbox>
    <vbox class="checkIn">
      <hbox>
        <span class="label"><b>Check-In</b> time:</span>
        <span>15:00</span>
      </hbox>
      <hbox>
        <span class="label"><b>Check-Out</b> time:</span>
        <span>11:00</span>
      </hbox>
    </vbox>
  </hbox>

<style>
  hbox.shortInfos {
    gap: 1rem;
    align-items: flex-start;
    justify-content: space-between;
  }

  hbox.rating {
    gap: 1rem;
    align-items: center;
    font-weight: 700;
  }
  hbox.rating .point {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    border: 2px solid black;
  }

  vbox.checkIn {
    gap: 0;
    justify-content: stretch;
  }

  vbox.checkIn hbox {
    gap: 0.5rem;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  vbox.checkIn hbox .label {
    flex-grow: 1;
  }
  
</style>

