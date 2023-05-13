<script lang="ts">
  import CopyIp from "./CopyIp.svelte";
</script>

<div class="hero min-h-[50vh]">
  <div class="items-center justify-center text-center md:p-8 hero-content">
    <div>
      <h1 class="text-4xl font-bold md:text-5xl">
        Creating new Minecraft experiences
      </h1>
      <p class="py-6 text-xl">
        HowiePvP is not an average Minecraft server. Create kingdoms. Fight
        custom bosses. And the world's so realistic, you won't believe you're in
        Minecraft.
      </p>

      <div class="flex flex-col items-center justify-center md:flex-row gap-3">
        <CopyIp />
        <a class="btn btn-primary" href="/discord">Join Discord server</a>
      </div>
    </div>
  </div>
</div>
