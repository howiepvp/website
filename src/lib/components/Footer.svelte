<script lang="ts">
  import {
    PUBLIC_GITHUB_USERNAME,
    PUBLIC_TWITTER_HANDLE,
  } from "$env/static/public";
  import LogoWhite from "$lib/assets/img/logo_white.webp";
  import IconDiscord from "~icons/simple-icons/discord";
  import IconGitHub from "~icons/simple-icons/github";
  import IconTwitter from "~icons/simple-icons/twitter";
</script>

<footer class="p-10 footer bg-neutral text-neutral-content">
  <div>
    <img width="50" height="50" alt="HowiePvP logo" src={LogoWhite} />
    <p>HowiePvP<br />Breaking the boundaries of Minecraft</p>
  </div>
  <div>
    <span class="footer-title">Social</span>
    <div class="grid grid-flow-col gap-4">
      <a href="https://twitter.com/{PUBLIC_TWITTER_HANDLE}" target="_blank" aria-label="HowiePvP on Twitter">
        <IconTwitter width="24" height="24" />
      </a>
      <a href="/discord" target="_blank" aria-label="Join Discord server">
        <IconDiscord width="24" height="24" />
      </a>
      <a href="https://github.com/{PUBLIC_GITHUB_USERNAME}" target="_blank" aria-label="HowiePvP on GitHub">
        <IconGitHub width="24" height="24" />
      </a>
    </div>
  </div>
</footer>
