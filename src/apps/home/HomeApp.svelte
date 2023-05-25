<vbox>
  <grid>
    {#each mockedData as item (item.id)}
      <Card src={item.src} alt={item.alt} prompt={item.prompt} />
    {/each}
  </grid>
  <Chat {messages} />
</vbox>

<script lang="ts">
  import { ArrayColl, type Collection } from "svelte-collections";
  import type { ChatMessage } from "../../logic/chat/Message";

  import Chat from "../lib/chat/Chat.svelte";
  import Card from "./Card.svelte";
  import { mockedData } from "./data";
  import { now } from "svelte/internal";
  import { Person } from "../../logic/abstract/Person";

  const MaxMustermann = new Person();
  MaxMustermann.name = "Max Mustermann";
  MaxMustermann.id = "123-456-789";
  MaxMustermann.firstName = "Max";
  MaxMustermann.lastName = "Mustermann";
  MaxMustermann.picture = "https://avatars.githubusercontent.com/u/100001?v=4";

  const JaneDoe = new Person();
  JaneDoe.name = "Jane Doe";
  JaneDoe.id = "abc-def-ghi";
  JaneDoe.firstName = "Jane";
  JaneDoe.lastName = "Doe";
  JaneDoe.picture = "https://avatars.githubusercontent.com/u/100001?v=4";

  const message1:ChatMessage = {
    sent: new Date(now() - 1000 * 60 * 60 * 24),
    contact: MaxMustermann,
    text: "first message by Max",
    outgoing: false,
    received: new Date(),
    html: "<p>first message by Max</p>",
  };

  const message2:ChatMessage = {
    sent: new Date(now() - 1000 * 60 * 60 * 24),
    contact: MaxMustermann,
    text: "first answer by Jane",
    outgoing: true,
    received: new Date(),
    html: "<p>first answer by Jane</p>",
  };

  const message3:ChatMessage = {
    sent: new Date(now() - 1000 * 60 * 60 * 24),
    contact: MaxMustermann,
    text: "second message by Max",
    outgoing: false,
    received: new Date(),
    html: "<p>second message by Max</p>",
  };

  const message4:ChatMessage = {
    sent: new Date(now() - 1000 * 60 * 60 * 24),
    contact: MaxMustermann,
    text: "second answer by Jane",
    outgoing: true,
    received: new Date(),
    html: "<p>second answer by Jane</p>",
  };
  const messages: Collection<ChatMessage> = new ArrayColl([message1, message2, message3, message4, message1, message2, message3, message4]);
</script>

<style>
  vbox {
    padding: 4rem;
    gap: 3rem;
  }
  grid   {
    --cols: auto-fit;
    display: grid;
    grid-template-columns: repeat(var(--cols), 200px);
    gap: 1rem;
    justify-content: center;
  }
  @media (width >= 880px) {
    grid {
      --cols: 4;
    }
  }
</style>