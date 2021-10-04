<template>
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
        Tenant #MC001
      </h4>
      <NuxtLink to="/admin/tenants">
        <button
          class="
            focus:outline-none
            bg-red-400
            transition
            duration-150
            ease-in-out
            hover:bg-red-500
            rounded
            text-white
            px-3
            py-2
            text-xs
          "
        >
          Back
        </button>
      </NuxtLink>
    </div>
    <div class="flex items-center justify-center w-full py-8">
      <!-- Card code block start -->
      <div class="bg-white dark:bg-gray-800 shadow rounded">
        <div class="relative">
          <img
            class="h-56 shadow rounded-t w-full object-cover object-center"
            src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
            alt=""
          />
          <div
            class="
              inset-0
              m-auto
              w-24
              h-24
              absolute
              bottom-0
              -mb-12
              xl:ml-10
              rounded
              border-2
              shadow
              border-white
            "
          ></div>
        </div>
        <div class="px-5 xl:px-10 pb-10">
          <div class="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
            <div class="flex items-center"></div>
          </div>
          <div
            class="
              pt-3
              xl:pt-5
              flex flex-col
              xl:flex-row
              items-start
              xl:items-center
              justify-between
            "
          >
            <div class="xl:pr-16 w-full xl:w-2/3">
              <div
                class="
                  text-center
                  xl:text-left
                  mb-3
                  xl:mb-0
                  flex flex-col
                  xl:flex-row
                  items-center
                  justify-between
                  xl:justify-start
                "
              >
                <h2
                  class="
                    mb-3
                    xl:mb-0
                    xl:mr-4
                    text-2xl text-gray-800
                    dark:text-gray-100
                    font-medium
                    tracking-normal
                  "
                >
                  Farhan
                </h2>
              </div>
            </div>
            <div
              class="
                xl:px-10
                xl:border-l xl:border-r
                w-full
                py-5
                flex
                items-start
                justify-center
                xl:w-1/3
              "
            >
              <div class="mr-6 xl:mr-6">
                <h2
                  class="
                    text-gray-600
                    dark:text-gray-400
                    font-bold
                    text-xl
                    xl:text-2xl
                    leading-6
                    mb-2
                    text-center
                  "
                >
                  3
                </h2>
                <p
                  class="
                    text-gray-800
                    dark:text-gray-100
                    text-sm
                    xl:text-l
                    leading-5
                  "
                >
                  Property Owned
                </p>
              </div>
            </div>
            <div
              class="
                w-full
                xl:w-2/3
                flex-col
                md:flex-row
                justify-center
                xl:justify-center
                flex
                md:pl-6
              "
            >
              <div
                class="
                  flex
                  items-center
                  justify-center
                  mt-1
                  md:mt-0
                  mb-5
                  md:mb-0
                "
              >
                <div
                  class="
                    rounded-full
                    bg-green-200
                    text-gray-600
                    dark:text-gray-400
                    text-sm
                    px-6
                    py-2
                    flex
                    justify-center
                    items-center
                  "
                >
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Card code block end -->
    </div>

    <PropertyTable />
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>