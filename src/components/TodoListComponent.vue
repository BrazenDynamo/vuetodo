<template>
  <div class="card flex flex-col justify-start">
    <div class="flex w-full" :class="{'mb-3': !taskInputError}">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-1"
        :class="taskInputClass"
        type="text"
        placeholder="Add a new task..."
        v-model="newTaskInput"
      >
      <button
        class="btn btn-green flex-no-shrink font-thin"
        @click="addTask()"
      >
        Add
      </button>
    </div>
    <transition name="slide-error">
      <p
        class="text-red-500 text-xs italic mb-3 error-text"
        v-if="taskInputError"
      >
        {{ taskInputError }}
      </p>
    </transition>
    <template v-for="(task, n) in taskList">
      <TodoListItemComponent
        class="mb-1"
        :key="`task-${n}`"
        :taskItem="task"
        @remove="removeTask(n)"
      ></TodoListItemComponent>
      <hr class="mb-1" :key="`hr-${n}`">
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task } from '../types/types';
import TodoListItemComponent from './TodoListItemComponent.vue';

@Component({
  components: { TodoListItemComponent },
})
export default class TodoListComponent extends Vue {
  newTaskInput: string = '';

  taskInputError: string = '';

  get taskList() {
    return this.$store.state.todolist.tasks;
  }

  get taskInputClass() {
    return { 'border-red-500': this.taskInputError };
  }

  mounted() {
    this.$store.dispatch('todolist/fetchTasks');
  }

  beforeUpdate() {
    if (this.newTaskInput) {
      this.taskInputError = '';
    }
  }

  addTask() {
    if (!this.newTaskInput) {
      this.taskInputError = 'Please input a task.';
      return;
    }

    this.$store.dispatch('todolist/addTask', {
      content: this.newTaskInput,
      dateCreated: Date.now(),
      done: false,
    });
  }

  removeTask(id: number) {
    this.$store.dispatch('todolist/removeTask', id);
  }
}
</script>

<style scoped>
  .slide-error-enter-active, .slide-error-leave-active {
    transition: all 0.3s ease;
  }

  .slide-error-enter, .slide-error-leave-to {
    transform: translateY(-0.5rem);
    opacity: 0;
  }
</style>
