<template>
  <div class="user-card" @click="emitUserClick">
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['user-click']);

const emitUserClick = () => {
  emit('user-click', props.user.id);
};
</script>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  background-color: #f9f9f9;
  border-radius: 8px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.user-card:hover {
  background-color: #e9e9e9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-card p {
  margin: 4px 0;
}

.user-card strong {
  color: #333;
}
</style>
