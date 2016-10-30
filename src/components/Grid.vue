<template>
<div class="grid">
  <div class="container">
    <div class="row">
      <div class="col-xs-6 col-md-4" v-for="element in elements">
          <subject v-bind:data='element'></subject>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Subject from 'components/subject.vue'
import data from 'assets/data.json'

export default {
  name: 'grid',
  components: {
    'subject': Subject
  },
  data () {
    return {
      elements: []
    }
  },
  methods: {
    add: function (element) {
      this.elements.push(element)
    },
    load: function () {
      for (let element of data.subjects) {
        this.elements.push(element)
      }
    }
  },
  created: function () {
    this.load()
  }
}

</script>

<style scoped>
.item{
  padding: 2em;
  height: 15em;
}
</style>
