<template>
  <div class="flex flex-col justify-center max-w-lg mx-auto">
    <p class="font-medium font-sans text-base">
      Welcome, {{ currentUser.username }}!
    </p>
    <TodoListComponent></TodoListComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoListComponent from '@/components/TodoListComponent.vue';

@Component({
  components: {
    TodoListComponent,
  },
})
export default class TodoList extends Vue {
  get currentUser() {
    return this.$store.state.user.user;
  }
}
</script>
