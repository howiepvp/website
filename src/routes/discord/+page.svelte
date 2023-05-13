<script lang="ts">
  import {browser} from "$app/environment";
  import {goto} from "$app/navigation";
  import ContentBlock from "$lib/components/ContentBlock.svelte";
  import {PUBLIC_DISCORD_INVITE} from "$env/static/public";

  const FULL_INVITE_LINK = `https://discord.gg/${PUBLIC_DISCORD_INVITE}`;
  if (browser) {
    goto(FULL_INVITE_LINK);
  }
</script>

<ContentBlock
  title="Redirecting..."
  linkText="Go to site"
  link={FULL_INVITE_LINK}
  fullScreen
  sameTab
>
  You should be redirected momentarily. If you aren't redirected, click the
  button below.
</ContentBlock>
