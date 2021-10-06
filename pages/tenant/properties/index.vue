<template>
  <div class="w-full py-10">
    <div
      class="
        mx-auto
        container
        bg-white
        dark:bg-gray-800 dark:bg-gray-800
        shadow
        rounded
      "
    >
      <div
        class="
          flex flex-col
          lg:flex-row
          p-4
          lg:p-8
          justify-between
          items-start
          lg:items-stretch
          w-full
        "
      >
        <div
          class="
            w-full
            lg:w-1/3
            flex flex-col
            lg:flex-row
            items-start
            lg:items-center
          "
        >
          <h4
            class="
              text-2xl
              font-bold
              leading-tight
              text-gray-800
              dark:text-gray-100
            "
          >
            Properties
          </h4>
        </div>
        <div
          class="
            w-full
            lg:w-2/3
            flex flex-col
            lg:flex-row
            items-start
            lg:items-center
            justify-end
          "
        >
          
        </div>
      </div>
      <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
        <table class="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr class="w-full h-16 border-gray-300 border-b py-8">
              <th
                class="
                  pl-8
                  text-gray-600
                  dark:text-gray-400
                  font-normal
                  pr-6
                  text-left text-sm
                  tracking-normal
                  leading-4
                "
              >
                <input
                  type="checkbox"
                  class="
                    cursor-pointer
                    relative
                    w-5
                    h-5
                    border
                    rounded
                    border-gray-400
                    bg-white
                    dark:bg-gray-800
                    outline-none
                  "
                  onclick="checkAll(this)"
                />
              </th>

              <th
                class="
                  text-gray-600
                  dark:text-gray-400
                  font-normal
                  pr-6
                  text-left text-sm
                  tracking-normal
                  leading-4
                "
              >
                Property ID
              </th>
              <th
                class="
                  text-gray-600
                  dark:text-gray-400
                  font-normal
                  pr-6
                  text-left text-sm
                  tracking-normal
                  leading-4
                "
              >
                Rent Due
              </th>
              <td
                class="
                  text-gray-600
                  dark:text-gray-400
                  font-normal
                  pr-8
                  text-left text-sm
                  tracking-normal
                  leading-4
                "
              >
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            <tr class="h-24 border-gray-300 border-b">
              <td
                class="
                  pl-8
                  pr-6
                  text-left
                  whitespace-no-wrap
                  text-sm text-gray-800
                  dark:text-gray-100
                  tracking-normal
                  leading-4
                "
              >
                <input
                  type="checkbox"
                  class="
                    cursor-pointer
                    relative
                    w-5
                    h-5
                    border
                    rounded
                    border-gray-400
                    bg-white
                    dark:bg-gray-800
                    outline-none
                  "
                  onclick="tableInteract(this)"
                />
              </td>
              <td
                class="
                  text-sm
                  pr-6
                  whitespace-no-wrap
                  text-gray-800
                  dark:text-gray-100
                  tracking-normal
                  leading-4
                "
              >
                TESTID123
              </td>
              <td
                class="
                  text-sm
                  pr-6
                  font-bold
                  whitespace-no-wrap
                  text-gray-1000
                  dark:text-gray-500
                  tracking-normal
                  leading-4
                "
              >
                30/1/2021
              </td>
              <td class="pr-8 relative">
                <NuxtLink to="/tenant/properties/1">
                <button
                  class="
                    focus:ring-2 focus:ring-offset-2 focus:ring-red-300
                    text-sm
                    leading-none
                    text-gray-600
                    py-3
                    px-5
                    bg-gray-100
                    rounded
                    hover:bg-gray-200
                    focus:outline-none
                  "
                >
                  View
                </button>
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <TenantForm v-if="isFormOpen" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompactTableWithActionsAndSelect',
  layout: 'tenant',
  data() {
    return {
      temp: 0,
      isFormOpen: false,
    }
  },
  methods: {},
}
</script>
