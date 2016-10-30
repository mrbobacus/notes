<template>
<div class="subject">
  <div class="panel item">
    <h1>{{ data.name }}</h1>
    <p>
      Contains:
    </p>
    <p v-for="topic in data.topics">
      {{ topic.name }}
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'subject',
  props: ['data']
}
</script>

<style scoped>
.item{
  padding: 2em;
  word-wrap: break-word;
}
h1{
  font-size: 32px;
}
p{
  line-height: 12px;
}

</style>
