<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <Editor v-model="value" editorStyle="height: 500px;"/>
      </div>
      <div class="col">
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from '../node_modules/primevue/editor';

export default {
  data: function() {
    return {
      value: '',
    };
  },
  components: {
    Editor,
  },
};
</script>

<style>

</style>
