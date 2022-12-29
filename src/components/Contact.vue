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
              <input v-model="username" type="text" id="username"
                class="bg-gray-50 border text-center border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="您的稱呼..." required>
            </div>
            <div class="mb-6">
              <label for="phone" class="block mb-2 font-medium">
                聯絡電話
              </label>
              <input v-model="phone" type="phone" id="phone"
                class="bg-gray-50 border text-center border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="您的電話..." required>
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 font-medium dark:text-white">
                電子信箱
              </label>
              <input v-model="email" type="email" id="email"
                class="bg-gray-50 border text-center border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="您的電子郵件信箱..." required>
            </div>
            <div class="w-full flex justify-end">
              <button @click="submit" type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                送出
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { Url } from '@/api_url'

export default {
  data() {
    return {
      api_url: Url + '/exchange_contact',
      username: '',
      phone: '',
      email: '',
    }
  },

  methods: {
    fetch_loading() {
      this.$swal({
        title: '資料寄送中...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 10000,
        didOpen: () => {
          this.$swal.showLoading()
        }
      })
    },
    async submit() {
      if ((this.username.length !== 0) & (this.phone.length !== 0) & (this.email.length !== 0)) {
        this.fetch_loading()
        await fetch(this.api_url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            phone: this.phone,
            email: this.email
          })
        }).then(async (res) => {
          if (res.status === 200) {
            this.$swal({
              title: '聯絡資料寄送成功！',
              icon: 'success'
            })
            this.username = ''
            this.phone = ''
            this.email = ''
          } else {
            this.$swal({
              title: '聯絡資料寄送失敗...',
              icon: 'error'
            })
          }
        })
      } else {
        let info = [
          {
            name: '姓名',
            len: this.username.length
          },
          {
            name: '電話',
            len: this.phone.length
          },
          {
            name: '電子郵件',
            len: this.email.length
          }
        ]
        let title = '';
        for (let i = 0; i < info.length; i++) {
          if (info[i].len == 0) {
            title += info[i].name + '、'
          }
        }
        title = title.substring(0, title.length - 1) + '請勿留空！'
        this.$swal({
          icon: 'warning',
          title: title
        })
      }
    }
  }
}
</script>