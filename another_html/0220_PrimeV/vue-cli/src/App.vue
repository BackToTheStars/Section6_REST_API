<template>
  <div class="row">
    <div class="col-sm-6">
      <app-editor>
        <Editor v-model="text" editorStyle="height: 800px; "/>
      </app-editor>
    </div>
  </div>
</template>

<script>
import Editor from '../node_modules/primevue/editor';

export default {
  data () {
    return {
      text: '',
    };
  },
  components: {
    appEditor: Editor,
  }
};
</script>

<style>

</style>
