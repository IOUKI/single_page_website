<template>
  <div class="h-auto w-full my-7 p-5 md:p-20 text-white">
    <div class="w-full border-b-2 pb-7">
      <h1 class="text-3xl md:text-5xl">
        <slot name="title"></slot>
      </h1>
    </div>
    <div class="w-full text-xl md:text-3xl mt-7">
      <p>
        <slot name="content"></slot>
      </p>
    </div>
  </div>
</template>