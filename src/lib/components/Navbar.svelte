<script lang="ts">
  import {
    PUBLIC_GITHUB_USERNAME,
    PUBLIC_TERMS_LINK,
    PUBLIC_TWITTER_HANDLE,
  } from "$env/static/public";
  import LogoBlack from "$lib/assets/img/logo_black.webp";
  import IconMenu from "~icons/heroicons/bars-3-20-solid";
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- I am a terrible programmer. -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <IconMenu class="w-5 h-5" />
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="p-2 mt-3 shadow menu dropdown-content bg-base-100 rounded-box
  w-52"
      >
        <li class="menu-title">
          <span>Links</span>
        </li>
        <li><a href={PUBLIC_TERMS_LINK}>Legal</a></li>
        <li class="menu-title">
          <span>Social</span>
        </li>
        <li>
          <a href="https://twitter.com/{PUBLIC_TWITTER_HANDLE}">Twitter</a>
        </li>
        <li><a href="/discord">Discord</a></li>
        <li>
          <a href="https://github.com/{PUBLIC_GITHUB_USERNAME}">GitHub</a>
        </li>
      </ul>
    </div>
    <a class="text-xl normal-case btn btn-ghost" href="/">
      <img src={LogoBlack} alt="HowiePvP logo" width="32" height="32" /> &nbsp; HowiePvP</a
    >
  </div>
</div>
