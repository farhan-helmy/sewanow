<template>
  <div>
    <tenant-table />
    <!-- <TenantForm v-if="isFormOpen" /> -->
  </div>
</template>

<script>
import TenantTable from '~/components/TenantTable.vue'
export default {
  components: { TenantTable },
  name: 'CompactTableWithActionsAndSelect',
}
</script>
