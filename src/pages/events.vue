<script setup>
import Hero from '@/components/Hero.vue'
import CardEvents from '@/components/CardEvents.vue'
import { pb, allEvents } from '@/backend';
import { ref } from 'vue';
import btn from '@/components/btn.vue';
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Événements'
}) 
//
const eventsListe = await allEvents();

// Fonction d'envoie de données vers pocketbase
const email = ref("");
const name = ref("");
const first_name = ref("");

const doInscription = async () => {
    try {
        const data = {
            "name": name.value,
            "first_name": first_name.value,
            "email": email.value,
            "autorization": true,
        };
        
        const record = await pb.collection('newsletter').create(data);
      }
    catch (error) {
        alert(error.message);
    }
}
</script>

<template>
  <Hero
    title="Calendrier des évènements"
    imgPath="/img/hero/events.webp"
    imgAlt="Image bannière page evenements"
  >
  </Hero>
  <section class="max-sm:grid max-sm:grid-cols-1">
    <CardEvents v-for="events of eventsListe" :v-key="events.id" v-bind="{ ...events}"/>
  </section>

  <section class="mt-10 mb-10 sm:mb-20">
    <div class="underligne bg-bleuTurquoise mx-auto w-full sm:w-5/6"></div>
    <h2 class="max-sm:text-2xs text-center mt-8">Suivez les infos avec notre Newsletter</h2>
    <form onsubmit="sendEmail(); reset(); return false" 
      class="md:max-w-2xl mx-auto px-5 sm:p-14 sm:px-20 mt-8 sm:border-2 border-bleuTurquoise rounded-3xl">
      <div class="mb-4">
        <label class="form-label--home" for="name">
          Nom
        </label>
        <input v-model="name" class="form-champ border-bleuTurquoise"
          id="name" type="text" placeholder="Entrez votre nom" required autocomplete="name">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="first-name">
          Prénom
        </label>
        <input v-model="first_name" class="form-champ border-bleuTurquoise"
          id="first-name" type="text" placeholder="Entrez votre prénom" autocomplete="first-name">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="email">
          Mail
        </label>
        <input v-model="email" class="form-champ border-bleuTurquoise"
          id="email" type="email" placeholder="Entrez votre adresse mail" required autocomplete="email">
      </div>
      <div class="mt-5 items-center">
        <input class="mr-3 sm:mr-5" id="confidential" type="checkbox" required>
        <label for="confidential">J'accepte <RouterLink to="/mentions" class="link"><strong>la politique de confidentialité</strong></RouterLink></label>
      </div>
      <div class="flex items-center justify-center mt-6 sm:mt-10">
        <button type="submit">
          <btn text="Envoyez" @click="doInscription" class="bg-bleuTurquoise lg:px-12"/>
        </button>
      </div>
    </form>
  </section>
</template>