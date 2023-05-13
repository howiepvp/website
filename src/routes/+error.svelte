<script lang="ts">
  import ContentBlock from "$lib/components/ContentBlock.svelte";
  import {page} from "$app/stores";
</script>

<ContentBlock
  title="{$page.status} {$page.error?.message ?? ""}"
  caption="Error"
  image="https://http.cat/{$page.status}"
  imageAlt="Lolcat with caption {$page.status} {$page.error?.message ?? ""}"
  link="/"
  linkText="Go home"
  fullScreen
  sameTab
>
  Sorry, we couldn't get that page for you. If this persists, please join our
  Discord server and make a ticket.
</ContentBlock>
