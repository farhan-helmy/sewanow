<template>
  <!-- Vertical navigation starts -->
  <div class="flex flex-no-wrap h-screen">
    <div class="h-full bg-gray-900 p-4">
      <div class="flex w-full h-full">
        <div class="h-full flex flex-col h-full justify-between">
          <div class="">
            <div class="flex items-center">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                  fill="white"
                />
              </svg>
              <div
                :class="menu === false ? 'hidden' : 'true'"
                class="pl-3"
                id="closed"
              >
                <div class="font-mono text-xl text-white">SewaNow</div>
              </div>
            </div>

            <div class="mt-10 flex items-center relative">
              <div
                arial-label="search"
                id="search"
                class="w-56 relative w-full"
              >
                <div
                  :class="menu === false ? 'hidden' : 'true'"
                  class="absolute p-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.1665 1.66667C13.3065 1.66667 16.6665 5.02667 16.6665 9.16667C16.6665 13.3067 13.3065 16.6667 9.1665 16.6667C5.0265 16.6667 1.6665 13.3067 1.6665 9.16667C1.6665 5.02667 5.0265 1.66667 9.1665 1.66667ZM9.1665 15C12.389 15 14.9998 12.3892 14.9998 9.16667C14.9998 5.94333 12.389 3.33333 9.1665 3.33333C5.94317 3.33333 3.33317 5.94333 3.33317 9.16667C3.33317 12.3892 5.94317 15 9.1665 15ZM16.2373 15.0592L18.5948 17.4158L17.4157 18.595L15.059 16.2375L16.2373 15.0592Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <input
                  :class="menu === false ? 'hidden' : 'true'"
                  type="seach"
                  class="
                    w-full
                    py-2
                    pl-10
                    bg-gray-800
                    rounded
                    text-base
                    leading-none
                    text-white
                    placeholder-white
                  "
                  placeholder="Search"
                />
              </div>
              <div id="search1" :class="menu === true ? 'hidden' : 'true'">
                <svg
                  class="-ml-8"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.1665 1.66667C13.3065 1.66667 16.6665 5.02667 16.6665 9.16667C16.6665 13.3067 13.3065 16.6667 9.1665 16.6667C5.0265 16.6667 1.6665 13.3067 1.6665 9.16667C1.6665 5.02667 5.0265 1.66667 9.1665 1.66667ZM9.1665 15C12.389 15 14.9998 12.3892 14.9998 9.16667C14.9998 5.94333 12.389 3.33333 9.1665 3.33333C5.94317 3.33333 3.33317 5.94333 3.33317 9.16667C3.33317 12.3892 5.94317 15 9.1665 15ZM16.2373 15.0592L18.5948 17.4158L17.4157 18.595L15.059 16.2375L16.2373 15.0592Z"
                    fill="white"
                  />
                </svg>
              </div>
              <button
                aria-label="minimize sidebar"
                id="close"
                class="
                  w-6
                  h-6
                  right-0
                  -mr-7
                  bg-indigo-500
                  absolute
                  shadow
                  rounded-full
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
                "
                @click="menu = false"
                :class="menu === false ? 'hidden' : 'true'"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 4L6 8L10 12"
                    stroke="white"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                id="open"
                class="
                  w-6
                  h-6
                  right-0
                  -mr-7
                  bg-indigo-500
                  absolute
                  shadow
                  rounded-full
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
                "
                @click="menu = true"
                :class="menu === true ? 'hidden' : 'true'"
              >
                <svg
                  aria-label="expand sidebar"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="white"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="flex items-center">
              <ul aria-orientation="vertical">
                <li
                  tabindex="0"
                  role="button"
                  aria-label="Overview"
                  class="cursor-pointer mt-10"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 2.5H9.16667V9.16667H2.5V2.5ZM2.5 10.8333H9.16667V17.5H2.5V10.8333ZM10.8333 2.5H17.5V9.16667H10.8333V2.5ZM10.8333 10.8333H17.5V17.5H10.8333V10.8333ZM12.5 4.16667V7.5H15.8333V4.16667H12.5ZM12.5 12.5V15.8333H15.8333V12.5H12.5ZM4.16667 4.16667V7.5H7.5V4.16667H4.16667ZM4.16667 12.5V15.8333H7.5V12.5H4.16667Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </li>
                <li
                  tabindex="0"
                  role="button"
                  aria-label="People"
                  class="cursor-pointer mt-6"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.6665 18.3333C1.6665 16.5652 2.36888 14.8695 3.61913 13.6193C4.86937 12.369 6.56506 11.6667 8.33317 11.6667C10.1013 11.6667 11.797 12.369 13.0472 13.6193C14.2975 14.8695 14.9998 16.5652 14.9998 18.3333H13.3332C13.3332 17.0073 12.8064 15.7355 11.8687 14.7978C10.931 13.8601 9.65925 13.3333 8.33317 13.3333C7.00709 13.3333 5.73532 13.8601 4.79764 14.7978C3.85995 15.7355 3.33317 17.0073 3.33317 18.3333H1.6665ZM8.33317 10.8333C5.57067 10.8333 3.33317 8.59584 3.33317 5.83334C3.33317 3.07084 5.57067 0.833336 8.33317 0.833336C11.0957 0.833336 13.3332 3.07084 13.3332 5.83334C13.3332 8.59584 11.0957 10.8333 8.33317 10.8333ZM8.33317 9.16667C10.1748 9.16667 11.6665 7.675 11.6665 5.83334C11.6665 3.99167 10.1748 2.5 8.33317 2.5C6.4915 2.5 4.99984 3.99167 4.99984 5.83334C4.99984 7.675 6.4915 9.16667 8.33317 9.16667ZM15.2365 12.2525C16.4076 12.7799 17.4015 13.6344 18.0987 14.7131C18.7958 15.7918 19.1666 17.0489 19.1665 18.3333H17.4998C17.5 17.37 17.222 16.4271 16.6991 15.618C16.1762 14.8089 15.4307 14.1681 14.5523 13.7725L15.2357 12.2525H15.2365ZM14.6632 2.84417C15.5028 3.19025 16.2206 3.77795 16.7257 4.53269C17.2307 5.28744 17.5002 6.1752 17.4998 7.08334C17.5002 8.22695 17.0729 9.32936 16.302 10.174C15.531 11.0187 14.4721 11.5446 13.3332 11.6483V9.97084C13.9506 9.8824 14.5235 9.59835 14.9676 9.16038C15.4117 8.72242 15.7037 8.1536 15.8008 7.53745C15.8979 6.92129 15.7948 6.29025 15.5068 5.73696C15.2188 5.18368 14.761 4.73729 14.2007 4.46334L14.6632 2.84417Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </li>
              </ul>
              <div
                id="navi"
                class="w-full mt-10"
                :class="menu === false ? 'hidden' : 'true'"
              >
                <NuxtLink to="/home">
                  <p
                    class="text-base leading-4 pl-3 cursor-pointer"
                    :class="
                      this.$route.path === '/home'
                        ? 'text-gray-100'
                        : 'text-gray-400'
                    "
                  >
                    Dashboard
                  </p>
                </NuxtLink>
                <NuxtLink to="/tenants">
                  <p
                    class="text-base leading-4 pl-3 cursor-pointer pt-7"
                    :class="
                      this.$route.path === '/tenants'
                        ? 'text-gray-100'
                        : 'text-gray-400'
                    "
                  >
                    Tenants
                  </p>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between relative" id="profile">
            <div class="flex items-center">
              <img
                src="https://i.ibb.co/fDyfmVz/pic.png"
                alt="profile picture"
                class="w-7 h-7 rounded-full"
              />
              <p
                :class="menu === false ? 'hidden' : 'true'"
                class="text-base leading-4 pl-3 text-gray-100"
              >
                User
              </p>
            </div>
            <div
              :class="menu === false ? 'hidden' : 'true'"
              v-on:mouseover="tool = true"
              v-on:mouseleave="tool = false"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00016 14.6666C4.31816 14.6666 1.3335 11.682 1.3335 7.99998C1.3335 4.31798 4.31816 1.33331 8.00016 1.33331C11.6822 1.33331 14.6668 4.31798 14.6668 7.99998C14.6668 11.682 11.6822 14.6666 8.00016 14.6666ZM7.3335 7.33331V11.3333H8.66683V7.33331H7.3335ZM7.3335 4.66665V5.99998H8.66683V4.66665H7.3335Z"
                  fill="white"
                />
              </svg>
              <div
                id="tooltip1"
                role="tooltip"
                :class="tool === false ? 'hidden' : 'true'"
                class="
                  z-20
                  md:w-52
                  top-0
                  md:-mt-2
                  -mt-8
                  absolute
                  transition
                  duration-150
                  ease-in-out
                  ml-8
                  shadow
                  bg-white
                  p-4
                  rounded
                "
              >
                <svg
                  class="absolute left-0 -ml-2 -mt-1.5 bottom-0 top-0 h-full"
                  width="9px"
                  height="16px"
                  viewBox="0 0 9 16"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Tooltips-"
                      transform="translate(-874.000000, -1029.000000)"
                      fill="#FFFFFF"
                    >
                      <g
                        id="Group-3-Copy-16"
                        transform="translate(850.000000, 975.000000)"
                      >
                        <g
                          id="Group-2"
                          transform="translate(24.000000, 0.000000)"
                        >
                          <polygon
                            id="Triangle"
                            transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                            points="4.5 57.5 12.5 66.5 -3.5 66.5"
                          ></polygon>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <p class="text-sm font-bold text-gray-800 pb-1">
                  Profile Picture and name
                </p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between hidden" id="profile1">
            <img
              src="https://i.ibb.co/fDyfmVz/pic.png"
              alt="profile picture"
              class="w-7 h-7 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
      <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
      <div class="w-full h-full rounded">
        <!-- Place your content here -->
        <Nuxt />
      </div>
    </div>
  </div>
  <!-- Vertical navigation ends -->
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      menu: true,
      tool: false,
    }
  },
}
</script> 
