<template>
<div class="bar">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-title navbar-brand" href="#">{{ title }}</a>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
      title: 'Notes'
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  text-align: center;
  margin: auto;
}

.navbar>.container-fluid .navbar-brand {
  color: #fafafa;
}
</style>
