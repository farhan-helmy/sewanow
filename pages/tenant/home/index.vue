<template>
  <!-- Code block starts -->
  <div class="w-full py-10">
    <div
      class="
        container
        px-6
        py-6
        mx-auto
        flex flex-col
        md:flex-row
        items-start
        md:items-center
        justify-between
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
        Dashboard
      </h4>
    </div>
    <div class="w-full flex items-center justify-center">
      <div class="py-4 sm:py-6 md:py-8 bg-white shadow rounded-lg">
        <div
          class="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            px-6
            xl:px-10
            gap-y-8 gap-x-12
            2xl:gap-x-28
          "
        >
          <div class="w-full">
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-xs
                md:text-sm
                font-medium
                leading-none
                text-gray-500
                uppercase
              "
            >
              Property Owned
            </p>
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-3xl
                font-bold
                leading-3
                text-gray-800
                mt-3
                md:mt-5
              "
            >
              3
            </p>
            <div class="flex flex-col">
              <div class="h-4"></div>
              <div class="md:w-64 mt-2.5">
                <div class="w-full h-1 bg-gray-200 rounded-full">
                  <div class="w-40 h-1 bg-lime-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <p
              tabindex="0"
              class="focus:outline-none mt-1.5 text-xs leading-3 text-gray-500"
            >
              Total Property
            </p>
          </div>
          <div class="w-full">
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-xs
                md:text-sm
                font-medium
                leading-none
                text-gray-500
                uppercase
              "
            >
              Overdue
            </p>
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-3xl
                font-bold
                leading-3
                text-gray-800
                mt-3
                md:mt-5
              "
            >
              0
            </p>
            <div class="flex flex-col">
              <div class="h-4"></div>
              <div class="md:w-64 mt-2.5">
                <div class="w-full h-1 bg-gray-200 rounded-full">
                  <div class="w-40 h-1 bg-lime-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <p
              tabindex="0"
              class="focus:outline-none mt-1.5 text-xs leading-3 text-gray-500"
            >
              Rent Overdue
            </p>
          </div>
          <div class="w-full">
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-xs
                md:text-sm
                font-medium
                leading-none
                text-gray-500
                uppercase
              "
            >
              total transactions
            </p>
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-3xl
                font-bold
                leading-3
                text-gray-800
                mt-3
                md:mt-5
              "
            >
              RM 9999
            </p>
            <div class="flex flex-col md:w-64">
              <div class="w-full flex justify-end">
                <div class="flex items-center">
                  <svg
                    tabindex="0"
                    class="focus:outline-none text-green-700"
                    aria-label="up icon"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 3.33334V12.6667"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12 7.33334L8 3.33334"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4 7.33334L8 3.33334"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p
                    tabindex="0"
                    class="
                      focus:outline-none
                      text-xs
                      leading-none
                      text-green-700
                    "
                  >
                    
                  </p>
                </div>
              </div>
              <div class="mt-2.5">
                <div class="w-full h-1 bg-gray-200 rounded-full">
                  
                </div>
              </div>
            </div>
            <p
              tabindex="0"
              class="focus:outline-none mt-1.5 text-xs leading-3 text-gray-500"
            >
              
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Code block ends -->
</template>

<script>
export default {
  layout: "tenant"
}
</script>
