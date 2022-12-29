<template>
  <div id="Contact" class="h-auto w-full p-5 md:p-20 text-white">
    <div class="w-full pb-7 text-center flex justify-center">
      <div class="w-5/6 h-auto border-2 divide-white rounded-xl">

        <div class="w-full flex justify-center text-3xl md:text-5xl py-3 md:py-7">
          <h1>聯繫我們💙</h1>
        </div>

        <div class="w-full pb-3 md:pb-7 flex justify-center">

          <form id="contact_form" class="w-5/6 text-3xl">
            <div class="mb-6">
              <label for="username" class="block mb-2 font-medium">
                姓名
              </label>
              <input 
                type="text"
                id="username"
                class="bg-gray-50 border text-center border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="您的稱呼..." 
                required
                >
            </div>
            <div class="mb-6">
              <label 
                for="phone"
                class="block mb-2 font-medium"
                >
                聯絡電話
              </label>
              <input 
                type="phone" 
                id="phone"
                class="bg-gray-50 border text-center border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="您的電話"
                required
                >
            </div>
            <div class="mb-6">
              <label 
                for="email" 
                class="block mb-2 font-medium dark:text-white">
                電子信箱
              </label>
              <input 
                type="email" 
                id="email"
                class="bg-gray-50 border text-center border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="您的電子郵件信箱" 
                required
                >
            </div>
            <div class="w-full flex justify-end">
              <button 
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                送出
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  </div>
</template>