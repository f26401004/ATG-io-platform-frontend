import Vue from 'vue'
import VueRouter from 'vue-router'
// import IndexPage from '@/pages/IndexPage.vue'
// import RankPage from '@/pages/RankPage.vue'
// import RulePage from '@/pages/RulePage.vue'
// import CompetitionPage from '@/pages/CompetitionPage.vue'
// import SimulationPage from '@/pages/SimulationPage.vue'
// import SimulationResultPage from '@/pages/SimulationResultPage.vue'
const IndexPage = () => import('@/pages/IndexPage.vue')
const RankPage = () => import('@/pages/RankPage.vue')
const RulePage = () => import('@/pages/RulePage.vue')
const CompetitionPage = () => import('@/pages/CompetitionPage.vue')
const SimulationPage = () => import('@/pages/SimulationPage.vue')
const SimulationResultPage = () => import('@/pages/SimulationResultPage.vue')

import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: IndexPage
  }, {
    path: '/rank',
    component: RankPage,
    beforeEnter: async (to, from, next) => {
      try {
        await store.dispatch('rank/getRankData')
        next()
      } catch (error) {
        alert(error.message)
        next(false)
      }
      
    }
  }, {
    path: '/rule',
    component: RulePage
  }, {
    path: '/competition',
    component: CompetitionPage
  }, {
    path: '/simulation',
    component: SimulationPage,
    meta: {
      requireSimulation: true
    }
  }, {
    path: '/simulationResult',
    component: SimulationResultPage,
    meta: {
      requireSimulationResult: true
    },
  }, {
    path: '*',
    redirect: function () {
      alert('404 - Page not found')
      return { path: '/' }
    }
  }],
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

// config the global router guard
router.beforeEach((to, from, next) => {
  // if the next page is playground, then stop routing
  if (to.fullPath === '/playground') {
    alert('error entry')
    next(from)
    return
  }
  // if the user use mobile device, then disable competition page
  if (to.fullPath === '/competition' && document.body.clientWidth < 768) {
    alert('You can not use mobile device to send competition request, please switch to computer.')
    next(from)
    return
  }
  if (to.matched.some(record => record.meta.requireSimulation)) {
    // route requires simulation label
    if (!store.state.competition.simulation.active) {
      alert("You need to register a competition to server in competition page! Now you are directed to competition page.")
      next({ path: '/competition' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requireSimulationResult)) {
    // route requires simulation label
    if (store.state.competition.simulation.elapsedTime === -1) {
      alert("You need to register a competition to server in competition page! Now you are directed to competition page.")
      next({ path: '/competition' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router