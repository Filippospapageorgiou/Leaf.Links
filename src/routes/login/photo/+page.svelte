<script lang="ts">
    import AuthCheck from "$lib/components/AuthCheck.svelte";
    import { user, userData, storage, db } from "$lib/firebase";
    import { doc, updateDoc } from "firebase/firestore";
    import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
  
    let previewURL: string;
    let uploading = false;
    $: href = `/${$userData?.username}/edit`;
  
    // Αυτή η συνάρτηση είναι μια ασύγχρονη συνάρτηση που χειρίζεται το ανέβασμα ενός αρχείου φωτογραφίας προφίλ.
    async function upload(e: any) {
    // Ορίζει την μεταβλητή uploading σε true, υποδεικνύοντας ότι το ανέβασμα είναι σε εξέλιξη.
        uploading = true;
    // Λαμβάνει το πρώτο αρχείο από την λίστα των αρχείων που έχουν επιλεχθεί στο πεδίο εισαγωγής αρχείων.
        const file = e.target.files[0];
    // Δημιουργεί ένα URL για το αρχείο που έχει επιλεχθεί, το οποίο μπορεί να χρησιμοποιηθεί για να προβληθεί μια προεπισκόπηση της φωτογραφίας.
        previewURL = URL.createObjectURL(file);
    // Δημιουργεί μια αναφορά στο χώρο αποθήκευσης του Firebase όπου θα ανεβαστεί το αρχείο.
        const storageRef = ref(storage, `users/${$user!.uid}/profile.png`);
    // Ανεβάζει το αρχείο στο χώρο αποθήκευσης του Firebase και παίρνει το αποτέλεσμα της λειτουργίας.
        const result = await uploadBytes(storageRef, file);
    // Λαμβάνει το URL για να κατεβάσει το αρχείο από το χώρο αποθήκευσης του Firebase.
        const url = await getDownloadURL(result.ref);
    // Ενημερώνει την φωτογραφία προφίλ του χρήστη στη βάση δεδομένων Firestore με το νέο URL της φωτογραφίας.
        await updateDoc(doc(db, "users", $user!.uid), { photoURL: url });
    // Ορίζει την μεταβλητή uploading σε false, υποδεικνύοντας ότι το ανέβασμα έχει ολοκληρωθεί.
        uploading = false;
    }

  </script>
  
  <AuthCheck>
    <h2 class="card-title">Upload a Profile Photo</h2>
  
    <form class="max-w-screen-md w-full">
      <div class="form-control w-full max-w-xs my-10 mx-auto text-center">
        <img
          src={previewURL ?? $userData?.photoURL ?? "/favicon.png"}
          alt="photoURL"
          width="256"
          height="256"
          class="mx-auto"
        />
        <label for="photoURL" class="label">
          <span class="label-text">Pick a file</span>
        </label>
        <input
          on:change={upload}
          name="photoURL"
          type="file"
          class="file-input file-input-bordered w-full max-w-xs"
          accept="image/png, image/jpeg, image/gif, image/webp"
        />
        {#if uploading}
          <p>Uploading...</p>
          <progress class="progress progress-info w-56 mt-6" />
        {/if}
      </div>
    </form>
  
    <a {href} class="btn btn-primary"> Finish </a>
  </AuthCheck>