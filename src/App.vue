<script setup>
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'
import { DataRow } from './components'

const dataArray = ref([])

onMounted(async () => {
  const parseDate = d3.timeParse('%-m/%-d/%Y %-I:%M:%S %p')
  const lines = await d3.csv('./balt_311.csv')

  const processed = lines.map((d) => ({
    ...d,
    Agency: d.Agency?.trim(),
    CreatedDate: d.CreatedDate ? parseDate(d.CreatedDate) : null,
    Neighborhood: d.Neighborhood?.trim(),
    ZipCode: d.ZipCode?.trim(),
    PoliceDistrict: d.PoliceDistrict?.trim()
  }))

  dataArray.value = processed
  console.log('Processed data:', processed)
})
</script>

<template>
  <main class="page">
  <header class="page-header">
  <h1>Recent Baltimore 311 Service Requests</h1>
  <p>
    A look at recent city service complaints and requests across Baltimore neighborhoods, from illegal dumping and potholes to water leaks and streetlight issues.
  </p>
</header>

    <section class="table">
      <div class="table-head">
        <div>Type</div>
        <div>Status</div>
        <div>Agency</div>
        <div>Neighborhood</div>
        <div>Created</div>
        <div>Address</div>
      </div>

      <DataRow
        v-for="item in dataArray.slice(0, 20)"
        :key="item.ServiceRequestNum"
        :data="item"
      />
    </section>
  </main>
</template>

<style scoped>
.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
}

.page-header {
  margin-bottom: 20px;
}

.page-header h1 {
  margin: 0 0 8px 0;
  font-size: 32px;
}

.page-header p {
  margin: 0;
  color: #666;
}

.table {
  border: 1px solid #d9d9d9;
  background: white;
}

.table-head {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 2fr;
  gap: 12px;
  padding: 14px 16px;
  background: #f2f2f2;
  border-bottom: 1px solid #d9d9d9;
  font-weight: bold;
}
</style>