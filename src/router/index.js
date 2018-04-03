import Vue from 'vue'
import VueRouter from 'vue-router'
import { storage } from '../utils'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: require('../pages/Login.vue')
    },
    {
      path: '/',
      name: 'index',
      component: require('../pages/Index.vue'),
      meta: { requiresAuth: true }
    },

    // Inputs
    {
      path: '/inputs',
      name: 'inputs',
      component: require('../pages/Inputs/Index.vue'),
      redirect: { name: 'inputs-plan' },
      children: [
        {
          path: 'plan',
          name: 'inputs-plan',
          component: require('../pages/Inputs/Plan.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'result',
          name: 'inputs-result',
          component: require('../pages/Inputs/Result.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },

    // Items Incomes
    {
      path: '/items-incomes',
      name: 'items-incomes',
      component: require('../pages/ItemsIncomes/Index.vue'),
      redirect: { name: 'items-incomes-new-1' },
      children: [

        // New
        {
          path: 'new',
          name: 'items-incomes-new',
          component: require('../pages/ItemsIncomes/New/Index.vue'),
          redirect: { name: 'items-incomes-new-1' },
          children: [
            {
              path: '1',
              name: 'items-incomes-new-1',
              component: require('../pages/ItemsIncomes/New/1.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: '2',
              name: 'items-incomes-new-2',
              component: require('../pages/ItemsIncomes/New/2.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: '3',
              name: 'items-incomes-new-3',
              component: require('../pages/ItemsIncomes/New/3.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'each',
              name: 'items-incomes-new-each',
              component: require('../pages/ItemsIncomes/New/Each.vue'),
              meta: { requiresAuth: true }
            }
          ]
        },

        // Recruit
        {
          path: 'recruit',
          name: 'items-incomes-recruit',
          component: require('../pages/ItemsIncomes/Recruit/Index.vue'),
          redirect: { name: 'items-incomes-recruit-1' },
          children: [
            {
              path: '1',
              name: 'items-incomes-recruit-1',
              component: require('../pages/ItemsIncomes/Recruit/1.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: '2',
              name: 'items-incomes-recruit-2',
              component: require('../pages/ItemsIncomes/Recruit/2.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: '3',
              name: 'items-incomes-recruit-3',
              component: require('../pages/ItemsIncomes/Recruit/3.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'each',
              name: 'items-incomes-recruit-each',
              component: require('../pages/ItemsIncomes/Recruit/Each.vue'),
              meta: { requiresAuth: true }
            }
          ]
        },

        // Sales
        {
          path: 'sales',
          name: 'items-incomes-sales',
          component: require('../pages/ItemsIncomes/Sales/Index.vue'),
          redirect: { name: 'items-incomes-sales-1' },
          children: [
            {
              path: '1',
              name: 'items-incomes-sales-1',
              component: require('../pages/ItemsIncomes/Sales/1.vue'),
              meta: { requiresAuth: true },
              children: [
                {
                  path: 'prospect/:id/:type',
                  name: 'items-incomes-sales-prospect',
                  component: require('../pages/ItemsIncomes/Sales/Prospect/Index.vue'),
                  props: true,
                  meta: { requiresAuth: true }
                }
              ]
            },
            {
              path: '2',
              name: 'items-incomes-sales-2',
              component: require('../pages/ItemsIncomes/Sales/2.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: '3',
              name: 'items-incomes-sales-3',
              component: require('../pages/ItemsIncomes/Sales/3.vue'),
              meta: { requiresAuth: true }
            }
          ]
        },

        // Cross
        {
          path: 'cross',
          name: 'items-incomes-cross',
          component: require('../pages/ItemsIncomes/Cross/Index.vue'),
          redirect: { name: 'items-incomes-cross-1' },
          children: [
            {
              path: '1',
              name: 'items-incomes-cross-1',
              component: require('../pages/ItemsIncomes/Cross/1.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'each',
              name: 'items-incomes-cross-each',
              component: require('../pages/ItemsIncomes/Cross/Each.vue'),
              meta: { requiresAuth: true }
            }
          ]
        },

        // MSA
        {
          path: 'msa',
          name: 'items-incomes-msa',
          component: require('../pages/ItemsIncomes/Msa/Index.vue'),
          redirect: { name: 'items-incomes-msa-1' },
          children: [
            {
              path: '1',
              name: 'items-incomes-msa-1',
              component: require('../pages/ItemsIncomes/Msa/1.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: '2',
              name: 'items-incomes-msa-2',
              component: require('../pages/ItemsIncomes/Msa/2.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: '3',
              name: 'items-incomes-msa-3',
              component: require('../pages/ItemsIncomes/Msa/3.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'each',
              name: 'items-incomes-msa-each',
              component: require('../pages/ItemsIncomes/Msa/Each.vue'),
              meta: { requiresAuth: true }
            }
          ]
        },

        // Nissay
        {
          path: 'nissay',
          name: 'items-incomes-nissay',
          component: require('../pages/ItemsIncomes/Nissay/Index.vue'),
          redirect: { name: 'items-incomes-nissay-1' },
          children: [
            {
              path: '1',
              name: 'items-incomes-nissay-1',
              component: require('../pages/ItemsIncomes/Nissay/1.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: '2',
              name: 'items-incomes-nissay-2',
              component: require('../pages/ItemsIncomes/Nissay/2.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: '3',
              name: 'items-incomes-nissay-3',
              component: require('../pages/ItemsIncomes/Nissay/3.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'each',
              name: 'items-incomes-nissay-each',
              component: require('../pages/ItemsIncomes/Nissay/Each.vue'),
              meta: { requiresAuth: true }
            }
          ]
        }
      ]
    },

    // Schedules
    {
      path: '/schedules',
      name: 'schedules',
      component: require('../pages/Schedules/Index.vue'),
      redirect: { name: 'schedules-calendar', query: { type: 'plan-result', period: 'week' } },
      children: [
        {
          path: 'calendar/',
          name: 'schedules-calendar',
          component: require('../pages/Schedules/Calendar.vue')
        },
        {
          path: 'approved-list/',
          name: 'approved-list',
          component: require('../pages/Schedules/Approved-list.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // When user isn't logged in
    if (!storage.get('isLoggedIn')) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
