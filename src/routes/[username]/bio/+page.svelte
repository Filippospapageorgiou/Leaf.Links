<script lang="ts">
    import type { PageData } from "./$types";
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";
    import {  userData } from "$lib/firebase";
    export let data: PageData;
    $: href_prof = `/${$userData?.username}`;

    function gotoProf() {
      window.location.href = href_prof;
    }
  </script>
  
  <main class="max-w-lg prose text-center mx-auto my-6">
    <div class="flex justify-between items-center gap-10">
      <button
        on:click={() => gotoProf()}
        class="btn btn-link block mx-auto my-4 rounded-full"
        >
          See Profile
        </button>
      <p>Current Bio: <span class="text-info">{data.bio}</span></p>
    </div>
  
    <p>Status Code: {$page.status}</p>
    <p class="text-error">{$page.form?.problem ?? ""}</p>
  
    <form method="POST" use:enhance>
      <div class="form-control">
        <label for="bio" class="label">
          <span class="label-text">Your bio</span>
        </label>
        <textarea
          name="bio"
          class="textarea textarea-bordered textarea-accent"
          value={data.bio}
        />
      </div>
      <button class="btn btn-primary my-5">Update Bio</button>
    </form>
  </main>