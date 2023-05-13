<script lang="ts">
  import ContentBlock from "$lib/components/ContentBlock.svelte";
  import Hero from "./Hero.svelte";
  import CopyIp from "./CopyIp.svelte";
  import GameplayImage from "$lib/assets/img/gameplay.webp";
</script>

<Hero />
<ContentBlock
  title="Unifying AI and Minecraft"
  caption="Innovative technology"
  linkText="Learn more about AI on HowiePvP"
  link="https://howiepvp.github.io/newsroom/march_28_2023_howiepvp_announces_ai_integration_features"
>
  <!-- TODO: Change link -->
  HowiePvP is proud to be one of the first Minecraft servers to have built-in natural
  language processing capabilities. Powered by OpenAI ChatGPT, users can ask questions
  and get instant responses about gameplay and other topics.
</ContentBlock>

<ContentBlock
  title="&ldquo;Wait, this is Minecraft?&rdquo;"
  caption="Breaking boundaries"
>
  Our server introduces features never seen in the Minecraft space. A realistic
  world. Custom dimensions. New items. Overpowered mobs. <strong
    >It's so unique, you won't believe you're in Minecraft.</strong
  >
</ContentBlock>

<ContentBlock
  title="A new experience"
  caption="Gameplay"
  image={GameplayImage}
  imageAlt="A green dragon in a Minecraft forest"
>
  <strong>Our gameplay experience is like no other.</strong> Start out in the
  Overworld, where you choose from six RPG-style classes, and receive your class
  weapon. Find a spot to place your kingdom, but beware of mobs!<br /><br />

  Once you've found a spot, get a job (an in-game one; we're not pay-to-win!)
  and start collecting resources for money. Fight mobs for special rings,
  amulets, and armor.<br /><br />

  When you're ready, you can advance to the Nether. Be sure to take some friends
  (if you have any); the mobs there are much stronger! But it's worth it—there
  are new ores that you can use to upgrade your armor or get some extra cash.<br
  /><br />

  Is the Nether too easy for you? Build a portal to the Aether, where you can
  fight mythical creatures for extra-rare items. On HowiePvP, the possibilities
  are endless.
</ContentBlock>
<ContentBlock title="Lightning speed" caption="Performance">
  <strong>Say goodbye to lag disrupting your fights.</strong> HowiePvP runs on blazing-fast
  hardware in highly secured datacenters. Our software is optimized for the maximum
  performance possible, using tested and proven technologies. On top of that, our
  servers have amazing networking capabilities, so you'll have a smooth experience
  no matter where you are.
</ContentBlock>

<ContentBlock title="So what are you waiting for?">
  Don't miss out on the fun for any longer.
  <div class="flex flex-col pt-3 md:flex-row gap-2">
    <CopyIp />
    <a class="self-center btn w-fit" href="/discord">Join Discord server</a>
  </div>
</ContentBlock>
