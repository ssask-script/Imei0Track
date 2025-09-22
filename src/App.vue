<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
    <!-- Header -->
    <header class="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-400" viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path
              d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
          <h1 class="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            PhantomTracker</h1>
        </div>
        <nav class="hidden md:flex space-x-6">
          <RouterLink to="/" class="text-gray-300 hover:text-indigo-400 transition">Home</RouterLink>
          <RouterLink to="/how-to-use" class="text-gray-300 hover:text-indigo-400 transition">How to Use</RouterLink>
          <RouterLink to="/about" class="text-gray-300 hover:text-indigo-400 transition">About</RouterLink>
          <RouterLink to="/faq" class="text-gray-300 hover:text-indigo-400 transition">Faq</RouterLink>
        </nav>
        <div class="flex items-center space-x-4">
          <button class="p-2 rounded-full hover:bg-gray-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <div
            class="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold">
            U
          </div>
        </div>
      </div>
    </header>
    <RouterView />
    <!-- Footer -->
    <footer class="bg-gray-800 border-t border-gray-700 py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path
                  d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              <span class="font-bold">PhantomTracker</span>
            </div>
            <p class="text-gray-400 text-sm">
              A sophisticated simulation tool for educational purposes. Experience what IMEI tracking might look like in
              a professional environment.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="/" class="text-gray-400 hover:text-indigo-400 transition">Home</a></li>
              <li><a href="/how-to-use" class="text-gray-400 hover:text-indigo-400 transition">How to Use</a></li>
              <li><a href="#" class="text-indigo-400">About</a></li>
              <li><a href="/faq" class="text-gray-400 hover:text-indigo-400 transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Legal</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-gray-400 hover:text-indigo-400 transition">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-400 hover:text-indigo-400 transition">Terms of Service</a></li>
              <li><a href="#" class="text-gray-400 hover:text-indigo-400 transition">Disclaimer</a></li>
              <li><a href="#" class="text-gray-400 hover:text-indigo-400 transition">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Support</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-gray-400 hover:text-indigo-400 transition">Help Center</a></li>
              <li><a href="#" class="text-gray-400 hover:text-indigo-400 transition">Documentation</a></li>
              <li><a href="#" class="text-gray-400 hover:text-indigo-400 transition">API Reference</a></li>
              <li><a href="#" class="text-gray-400 hover:text-indigo-400 transition">Status</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          &copy; 2023 PhantomTracker. For educational and demonstration purposes only. Not a real tracking system.
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
