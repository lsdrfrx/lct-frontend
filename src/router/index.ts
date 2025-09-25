import type { PATH } from '@/utils'

import { createRouter, createWebHistory } from 'vue-router'
import { pageManager } from '@/entities/pageManager'
import { DynamicRenderer, ComponentShowcase } from '@/blocks'

const { fetchPageConfig } = pageManager()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/showcase', name: 'showcase', component: ComponentShowcase },
    { path: '/', name: 'index', component: DynamicRenderer, meta: { config: null } },
  ],
})

router.beforeEach(async (to, from, next) => {
  const uri = to.fullPath as PATH
  await fetchPageConfig({ uri })
  next()
})

export default router
