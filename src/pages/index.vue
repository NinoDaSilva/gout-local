<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import CardProduit from "@/components/CardProduit.vue";
</script>

<template>
  <Hero class="z-0"
    title="Découvrez nos produits 100% locaux !"
    imgPath=""
    imgAlt="Image bannière page d'accueil"
  >
  <template>
    <div>
    
    </div>
  </template>
  </Hero>

  <div>
    <h2>Vert, écolo et proche de chez vous !</h2>
    <h1>Goût local</h1>
  </div>

  <section>
    <div class="flex">
      <img src="" alt="illustration">
      <RouterLink to="/pages/partenaires" class="block-home">
        <div>
          <p>Avec nous, plus besoin de chercher des heures un producteur qui favorise le circuit court près de chez vous.</p>
          <p>Retrouver les facilement grâce à notre carte.</p>
        </div>
        <ArrowIcon class="block-home--arrow"/>
      </RouterLink>
    </div>

    <div>
      <div>
        <p>Vous ne savez pas quoi cuisiner ?</p>
        <div class="w-full h-1 bg-vertFonce"></div>
      </div>

      <div>
        <p>Pas de problème !</p>
        <div class="w-full h-1 bg-vertFonce"></div>
      </div>
    </div>

    <div class="flex">
      <img src="" alt="illustration">
      <RouterLink to="/pages/recettes" class="block-home">
        <p>Nous vous proposons une variété d'idées de recettes à faire avec les produits que vous venez d'acheter. 
          Alors n'hésitez plus et faites vous plaisir avec de bons petits plats.</p>
        <ArrowIcon class="block-home--arrow"/>
      </RouterLink>
    </div>
  </section>

  <section>
    <div>
      <div>
        <h2>Des produit frais</h2>
        <div class="w-full h-1 bg-vertFonce"></div>
      </div>

      <div>
        <h2>et de saison !</h2>
        <div class="w-full h-1 bg-vertFonce"></div>
      </div>
    </div>

    <div class="flex justify-between p-10 lg:px-40">
      <RouterLink to="/pages/produits"><CardProduit :id="1" title="" imgPath="" imgAlt=""/></RouterLink>
      <RouterLink to="/pages/produits"><CardProduit :id="2" title="" imgPath="" imgAlt=""/></RouterLink>
      <RouterLink to="/pages/produits"><CardProduit :id="3" title="" imgPath="" imgAlt=""/></RouterLink>
    </div>
  </section>

  <section>
    <div class="md:flex">
      <img src="/img/map-france.webp" alt="carte" class="mx-auto w-60 h-60 md:w-2/5 md:h-2/5">

      <div>
        <div>
          <h2>Quelques producteurs</h2>
          <div class="w-full h-1 bg-vertFonce"></div>
        </div>
        <p>Goût local n'hésite pas à se rapprocher directement auprès des producteurs.</p> 
        <p>Cela permet notamment de mettre en place des ventes directes pour vous offrir la possibilité de récupérer des produits frais directement à la source.</p>
        <p>Un geste écologique...</p>
        <p>Et cela permet aux producteurs de vendre leurs produits invendus avant leur péremption, <strong>à des prix réduits !</strong></p>
        <p>Ce qui leur évitent de jeter, et donc d'avoir de trop grosses pertes.</p>
        <p>Un grand geste pour l'écologie et les producteurs locaux.</p>
      </div>
    </div>

    <div class="flex">
      <div>
        <p>Pour en savoir plus, nous vous invitons à cliquer</p>
        <div class="w-full h-1 bg-vertFonce"></div>
      </div>
      <RouterLink to="/pages/partenaires">
        <p>juste ici</p>
      </RouterLink>
    </div>
  </section>

  <section>
    <div class="flex">
      <img src="" alt="illustration">
      <RouterLink to="/pages/events" class="block-home bg-vertClair">
        <p>Retrouver toute l'actualité concernants des évènements communautaire locaux, 
          tels que les marchés, les foires écologiques, les ateliers de jardinage, etc.</p> 
        <ArrowIcon class="block-home--arrow"/>
      </RouterLink>
    </div>

    <div>
      <div>
        <p>Vous ne savez pas quoi cuisiner ?</p>
        <div class="w-full h-1 bg-vertFonce"></div>
      </div>

      <div>
        <p>Pas de problème !</p>
        <div class="w-full h-1 bg-vertFonce"></div>
      </div>
    </div>

    <div class="flex">
      <img src="" alt="illustration">
      <RouterLink to="/pages/conseils" class="block-home bg-vertClair">
        <p>On vous propose quelques conseils afin de mieux consommer et adapter vos habitudes.</p>
        <ArrowIcon class="block-home--arrow"/>
      </RouterLink>
    </div>
  </section>

</template>