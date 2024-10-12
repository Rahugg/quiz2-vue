<template>
  <div class="user-card" @click="emitUserClick">
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emitUserClick() {
      this.$emit('user-click', this.user.id);
    },
  },
};
</script>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 8px;
  cursor: pointer;
}
</style>
