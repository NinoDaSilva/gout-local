<script setup lang="ts">
import { RouterView } from 'vue-router'
import PocketBase from 'pocketbase'

import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'
// PocketBase vps connection
var pocketbase_ip=''
if(import.meta.env.MODE === 'production')
  pocketbase_ip='https://gout-local.pockethost.io/'
else
  pocketbase_ip='http://127.0.0.1:8090'

const pb = new PocketBase(pocketbase_ip)
//
</script>

<template>
  <HeaderPage />
  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
  <FooterPage />
</template>
