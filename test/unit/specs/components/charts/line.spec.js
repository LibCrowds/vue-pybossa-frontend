import BootstrapVue from 'bootstrap-vue'
import VueChartist from 'vue-chartist'
import 'chartist-plugin-tooltips'
import noSSR from '@/.nuxt/components/no-ssr'

import { mount, createLocalVue } from '@vue/test-utils'
import LineChart from '@/components/charts/Line'

describe('Line chart', () => {
  let localVue = null
  let wrapper = null

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(BootstrapVue)
    localVue.use(VueChartist)
    localVue.component(noSSR.name, noSSR)
    wrapper = mount(LineChart, {
      localVue,
      propsData: {
        chartData: {
          labels: ['A', 'B', 'C'],
          series: [[1, 3, 2], [4, 6, 5]]
        },
        unit: 'task'
      }
    })
  })

  it('renders correctly', () => {
    const renderer = require('vue-server-renderer').createRenderer()
    renderer.renderToString(wrapper.vm, (err, str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
