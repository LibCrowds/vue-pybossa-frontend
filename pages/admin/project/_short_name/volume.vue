<template>
  <card-base
    :title="title"
    :description="description"
    docs="/projects/volume/">

    <p slot="guidance">
      The volume associated with a project will be set during project
      creation. However, on the rare occasion that it is necessary, the
      volume can be changed via the form below.
    </p>

    <volumes-table :volumes="volumes">
      <template slot="action" slot-scope="row">
        <b-btn
          :variant="row.item.id !== currentVolumeId ? 'success' : 'warning'"
          size="sm"
          @click="updateVolume(row.item)">
          {{ row.item.id !== currentVolumeId ? 'Select' : 'Deselect' }}
        </b-btn>
      </template>
    </volumes-table>

  </card-base>
</template>

<script>
import { fetchProjectAndCollection } from '@/mixins/fetchProjectAndCollection'
import { metaTags } from '@/mixins/metaTags'
import CardBase from '@/components/cards/Base'
import VolumesTable from '@/components/tables/Volumes'

export default {
  layout: 'admin-project-dashboard',

  middleware: 'is-admin',

  mixins: [ fetchProjectAndCollection, metaTags ],

  data () {
    return {
      title: 'Volume',
      description: 'Choose the volume associated with this project.'
    }
  },

  components: {
    CardBase,
    VolumesTable
  },

  computed: {
    project () {
      return this.$store.state.currentProject
    },

    volumes () {
      return this.$store.state.currentCollection.info.volumes
    },

    currentVolumeId () {
      return this.project.info.volume_id
    }
  },

  methods: {
    /**
     * Update the volume for the project.
     * @param {Object} volume
     *   The volume.
     */
    updateVolume (volume) {
      let infoClone = Object.assign({}, this.project.info)

      if (this.currentVolumeId === volume.id) {
        infoClone.volume_id = null
      } else {
        infoClone.volume_id = volume.id
      }

      this.$axios.$put(`/api/project/${this.project.id}`, {
        info: infoClone
      }).then(data => {
        this.$notifications.success({ message: 'Volume updated' })
        this.$store.dispatch('UPDATE_CURRENT_PROJECT', data)
      }).catch(err => {
        this.$nuxt.error(err)
      })
    }
  }
}
</script>
