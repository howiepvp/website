<script lang="ts">
  import IconExternalLink from "~icons/heroicons/arrow-top-right-on-square-solid";

  export let caption = "";
  export let title: string;
  export let image = "";
  export let imageAlt = "";
  export let link = "";
  export let linkText = "Learn more";
  export let fullScreen = false;
  export let sameTab = false;
</script>

<section class="{fullScreen ? "min-h-screen " : ""}max-w-6xl p-8 m-auto">
  <div class="flex flex-col gap-3">
    {#if caption}
      <p class="text-lg">
        {caption}
      </p>
    {/if}

    <h2 class="text-4xl font-bold">
      {title}
    </h2>
    <p class="text-xl">
      <slot />
    </p>
    {#if image}
      <img
        alt={imageAlt}
        src={image}
        class="object-cover max-w-md rounded-md"
      />
    {/if}
    {#if link}
      <a class="btn w-fit" href={link} target={sameTab ? "_self" : "_blank"}
        >{linkText}&nbsp;<IconExternalLink /></a
      >
    {/if}
  </div>
</section>
