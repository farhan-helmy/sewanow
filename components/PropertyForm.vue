<template>
  <div class="py-10">
    <div>
      <form
        id="form"
        class="container mx-auto bg-white shadow rounded"
        v-on:submit.prevent
      >
        <div
          class="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5"
        >
          <div class="flex items-center w-11/12 mx-auto">
            <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
              Personal Information
            </p>
            <div class="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  class="heroicon-ui"
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-11/12 mx-auto">
          <div class="container mx-auto">
            <div class="my-8 mx-auto xl:w-full xl:mx-0">
              <div class="xl:flex lg:flex md:flex flex-wrap justify-between">
                <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                  <label
                    for="FirstName"
                    class="
                      pb-2
                      text-sm
                      font-bold
                      text-gray-800
                      dark:text-gray-100
                    "
                    >First Name</label
                  >
                  <input
                    type="text"
                    name="firstName"
                    required
                    id="FirstName"
                    class="
                      border border-gray-300
                      dark:border-gray-700
                      pl-3
                      py-3
                      shadow-sm
                      rounded
                      text-sm
                      focus:outline-none
                      bg-transparent
                      focus:border-indigo-700
                      text-gray-800
                      dark:text-gray-100
                    "
                    placeholder=""
                  />
                </div>
                <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                  <label
                    for="LastName"
                    class="
                      pb-2
                      text-sm
                      font-bold
                      text-gray-800
                      dark:text-gray-100
                    "
                    >Last Name</label
                  >
                  <input
                    type="text"
                    id="LastName"
                    name="lastName"
                    required
                    class="
                      border border-gray-300
                      dark:border-gray-700
                      pl-3
                      py-3
                      shadow-sm
                      rounded
                      text-sm
                      focus:outline-none
                      bg-transparent
                      focus:border-indigo-700
                      text-gray-800
                      dark:text-gray-100
                    "
                    placeholder=""
                  />
                </div>
                <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                  <label
                    for="email2"
                    class="
                      pb-2
                      text-sm
                      font-bold
                      text-gray-800
                      dark:text-gray-100
                    "
                    >Email</label
                  >
                  <div class="relative">
                    <div
                      class="
                        absolute
                        text-gray-600
                        dark:text-gray-400
                        flex
                        items-center
                        px-4
                        border-r
                        h-full
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-mail"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                      </svg>
                    </div>
                    <input
                      id="email2"
                      name="email"
                      required
                      class="
                        w-full
                        bg-transparent
                        text-gray-800
                        dark:text-gray-100
                        focus:outline-none
                        focus:border focus:border-indigo-700
                        font-normal
                        py-3
                        flex
                        items-center
                        pl-16
                        text-sm
                        rounded
                        border
                        shadow
                      "
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      pt-1
                      text-green-400
                    "
                  ></div>
                </div>
                <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                  <label
                    for="States"
                    class="
                      pb-2
                      text-sm
                      font-bold
                      text-gray-800
                      dark:text-gray-100
                    "
                    >States</label
                  >
                  <div
                    class="
                      border border-gray-300
                      dark:border-gray-700
                      shadow-sm
                      rounded
                      flex
                      relative
                    "
                  >
                    <select
                      type="text"
                      name="states"
                      required
                      id="States"
                      class="
                        bg-white
                        dark:bg-gray-800
                        appearance-none
                        z-10
                        pl-3
                        py-3
                        w-full
                        text-sm
                        border border-transparent
                        focus:outline-none
                        focus:border-indigo-700
                        text-gray-800
                        dark:text-gray-100
                        rounded
                      "
                    >
                      <option v-for="state in states" :key="state" :value="state">{{state}}</option>
                    </select>
                    <div
                      class="
                        px-4
                        flex
                        items-center
                        border-l border-gray-300
                        dark:border-gray-700
                        flex-col
                        justify-center
                        text-gray-500
                        dark:text-gray-400
                        absolute
                        right-0
                        bottom-0
                        top-0
                        mx-auto
                        z-20
                        pointer-events-none
                      "
                    >
                      <svg
                        tabindex="0"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-chevron-up"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 15 12 9 18 15" />
                      </svg>
                      <svg
                        tabindex="0"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-chevron-down"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                  <label
                    for="StreetAddress"
                    class="
                      pb-2
                      text-sm
                      font-bold
                      text-gray-800
                      dark:text-gray-100
                    "
                    >Street Address</label
                  >
                  <input
                    type="text"
                    id="StreetAddress"
                    name="streetAddress"
                    required
                    class="
                      border border-gray-300
                      dark:border-gray-700
                      pl-3
                      py-3
                      shadow-sm
                      rounded
                      text-sm
                      focus:outline-none
                      bg-transparent
                      focus:border-indigo-700
                      text-gray-800
                      dark:text-gray-100
                    "
                    placeholder=""
                  />
                </div>
                <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                  <label
                    for="City"
                    class="
                      pb-2
                      text-sm
                      font-bold
                      text-gray-800
                      dark:text-gray-100
                    "
                    >Country</label
                  >
                  <input
                    type="text"
                    id="City"
                    name="City"
                    required
                    class="
                      border border-gray-300
                      dark:border-gray-700
                      pl-3
                      py-3
                      shadow-sm
                      rounded
                      text-sm
                      focus:outline-none
                      bg-transparent
                      focus:border-indigo-700
                      text-gray-800
                      dark:text-gray-100
                    "
                    placeholder=""
                  />
                </div>
              </div>
              <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                <label
                  for="city"
                  class="
                    pb-2
                    text-sm
                    font-bold
                    text-gray-800
                    dark:text-gray-100
                  "
                  >City</label
                >
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  class="
                    border border-gray-300
                    dark:border-gray-700
                    pl-3
                    py-3
                    shadow-sm
                    rounded
                    text-sm
                    focus:outline-none
                    bg-transparent
                    focus:border-indigo-700
                    text-gray-800
                    dark:text-gray-100
                  "
                  placeholder=""
                />
              </div>
              <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                <div class="flex items-center pb-2">
                  <label
                    for="ZIP"
                    class="text-sm font-bold text-gray-800 dark:text-gray-100"
                    >ZIP/Postal Code</label
                  >
                  <div
                    class="ml-2 cursor-pointer text-gray-600 dark:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        class="heroicon-ui"
                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>

                <input
                  type="text"
                  id="ZIP"
                  name="zip"
                  class="
                    border
                    pl-3
                    py-3
                    shadow-sm
                    rounded
                    text-sm
                    focus:outline-none
                    bg-transparent
                    focus:border-indigo-700
                    text-gray-800
                    dark:text-gray-100
                  "
                  placeholder="e.g 86745"
                />
                <div
                  class="flex justify-between items-center pt-1 text-red-400"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            w-full
            py-4
            sm:px-12
            px-4
            bg-gray-100
            dark:bg-gray-700
            mt-6
            flex
            justify-end
            rounded-bl rounded-br
          "
        >
          <button
            class="
              btn
              text-sm
              focus:outline-none
              text-gray-600
              dark:text-gray-400
              border border-gray-300
              dark:border-gray-500
              py-2
              px-6
              mr-4
              rounded
              hover:bg-gray-200
              transition
              duration-150
              ease-in-out
            "
          >
            Restore
          </button>
          <button
            class="
              bg-indigo-700
              transition
              duration-150
              ease-in-out
              hover:bg-indigo-600
              rounded
              text-white
              px-8
              py-2
              text-sm
              focus:outline-none
            "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormCardWithInputs',
  async created() {
    this.fetchCities()
  },
  data: () => ({
    states: [],
  }),
  methods: {
    fetchCities() {
      const states = [
        'Selangor',
        'Perak',
        'Kelantan',
        'Kuala Lumpur',
        'Putrajaya',
        'Negeri Sembilan',
        'Terengganu',
        'Johor',
        'Kedah',
        'Penang',
        'Perak',
        'Perlis',
        'Sabah',
        'Sarawak',
        'Labuan',
        'Melaka',
      ]

      this.states = states
    },
  },
}
</script>
