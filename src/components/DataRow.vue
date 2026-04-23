<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

const formatDate = (date) => {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString()
}
</script>

<template>
  <div class="table-row">
    <div>{{ data.SRType || 'N/A' }}</div>
    <div>{{ data.SRStatus || 'N/A' }}</div>
    <div>{{ data.Agency || 'N/A' }}</div>
    <div>{{ data.Neighborhood || 'N/A' }}</div>
    <div>{{ formatDate(data.CreatedDate) }}</div>
    <div>{{ data.Address || 'N/A' }}</div>
  </div>
</template>

<style scoped>
.table-row {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 2fr;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid #e3e3e3;
  font-size: 14px;
  background: white;
}

.table-row:hover {
  background: #fafafa;
}
</style>