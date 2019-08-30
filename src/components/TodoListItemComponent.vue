<template>
  <div class="flex items-center">
    <div class="flex-grow">
      <!-- <span v-if="taskItem.title" class="text-gray-800 font-bold">{{ taskItem.title }}</span> -->
      <p class="text-gray-800">{{ taskItem.content }}</p>
    </div>
    <button
      class="btn flex-no-shrink font-thin mr-1"
      v-bind:class="doneButtonClasses"
      @click="toggleDone(taskItem.id)"
    >
      {{ taskItem.done ? '' : 'not' }} done
    </button>
    <button class="btn btn-red flex-no-shrink font-thin" @click="$emit('remove')">remove</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Task } from '../types/types';

@Component
export default class TodoListItemComponent extends Vue {
  @Prop({ type: Object })
  taskItem: Task;

  get doneButtonClasses() {
    return {
      'btn-green': this.taskItem.done,
      'btn-gray': !this.taskItem.done,
    };
  }

  toggleDone(taskId: number) {
    this.$store.dispatch('todolist/toggleDoneTask', taskId);
  }
}
</script>
