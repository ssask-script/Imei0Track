<template>

  <!-- Main Content -->
  <main class="flex-1 container mx-auto px-4 py-8">
    <div class="max-w-6xl mx-auto">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About PhantomTracker</h1>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          A cutting-edge simulation platform designed to educate users about IMEI tracking technology and its
          applications
        </p>
      </div>

      <!-- Mission Statement -->
      <div
        class="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-2xl p-10 mb-16 border border-indigo-700 shadow-2xl">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
          <p class="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
            To provide an educational platform that demystifies mobile device tracking technology while emphasizing
            the
            importance of privacy, legal compliance, and ethical considerations. We believe in transparency and
            education
            as the foundation for responsible technology use.
          </p>
        </div>
      </div>

      <!-- Company Overview -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div class="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h2 class="text-2xl font-bold mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-indigo-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clip-rule="evenodd" />
            </svg>
            What is PhantomTracker?
          </h2>
          <p class="text-gray-300 mb-4">
            PhantomTracker is a sophisticated simulation tool that demonstrates how IMEI tracking systems might work
            in a professional environment.
            It provides a realistic user interface and workflow without connecting to any real databases or tracking
            actual devices.
          </p>
          <p class="text-gray-300 mb-4">
            Our platform is designed for educational purposes, allowing users to understand the capabilities and
            limitations of device tracking technology
            in a safe, legal, and ethical environment.
          </p>
          <div class="mt-6 p-4 bg-gray-900 rounded-lg">
            <h3 class="font-semibold mb-3 text-indigo-400">Key Features:</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-start">
                <span class="text-indigo-400 mr-2 mt-1">•</span>
                <span>Realistic terminal-style tracking animation</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-400 mr-2 mt-1">•</span>
                <span>Detailed device information display</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-400 mr-2 mt-1">•</span>
                <span>Network and location data simulation</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-400 mr-2 mt-1">•</span>
                <span>Security status assessment</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h2 class="text-2xl font-bold mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-purple-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clip-rule="evenodd" />
            </svg>
            Why We Created This
          </h2>
          <p class="text-gray-300 mb-4">
            The inspiration for PhantomTracker came from observing how little most people understand about mobile
            device tracking.
            Many believe it's either impossible or as simple as entering a number into an app. The reality is far more
            complex.
          </p>
          <p class="text-gray-300 mb-4">
            We wanted to create a tool that would:
          </p>
          <div class="mt-6 p-4 bg-gray-900 rounded-lg">
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start">
                <div
                  class="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                  1</div>
                <div>
                  <span class="font-medium">Educate</span> users about the technical aspects of IMEI tracking
                </div>
              </li>
              <li class="flex items-start">
                <div
                  class="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                  2</div>
                <div>
                  <span class="font-medium">Demonstrate</span> the complexity involved in legitimate tracking systems
                </div>
              </li>
              <li class="flex items-start">
                <div
                  class="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                  3</div>
                <div>
                  <span class="font-medium">Highlight</span> the legal and ethical considerations surrounding device
                  tracking
                </div>
              </li>
              <li class="flex items-start">
                <div
                  class="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                  4</div>
                <div>
                  <span class="font-medium">Discourage</span> attempts at unauthorized tracking by showing how complex
                  real systems are
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Technology Section -->
      <div class="bg-gray-800 rounded-xl p-8 mb-16 border border-gray-700">
        <h2 class="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center p-4">
            <div class="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Vue.js 3</h3>
            <p class="text-gray-400 text-sm">Frontend framework for building interactive user interfaces</p>
          </div>
          <div class="text-center p-4">
            <div class="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cyan-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Tailwind CSS</h3>
            <p class="text-gray-400 text-sm">Utility-first CSS framework for rapid UI development</p>
          </div>
          <div class="text-center p-4">
            <div class="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 5.707a1 1 0 00-1.414-1.414L10 10.586 8.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="font-semibold mb-2">JavaScript</h3>
            <p class="text-gray-400 text-sm">Programming language powering the simulation logic</p>
          </div>
          <div class="text-center p-4">
            <div class="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path
                  d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <h3 class="font-semibold mb-2">SVG Graphics</h3>
            <p class="text-gray-400 text-sm">Scalable vector graphics for icons and illustrations</p>
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl p-8 border border-blue-700">
            <div class="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Education First</h3>
            <p class="text-gray-300">
              We prioritize learning and understanding over sensationalism. Our goal is to inform, not to impress.
            </p>
          </div>
          <div class="bg-gradient-to-br from-green-900 to-emerald-900 rounded-xl p-8 border border-green-700">
            <div class="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Ethical Responsibility</h3>
            <p class="text-gray-300">
              We emphasize legal compliance and ethical considerations in all aspects of our simulation.
            </p>
          </div>
          <div class="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-8 border border-purple-700">
            <div class="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">User Empowerment</h3>
            <p class="text-gray-300">
              We believe in empowering users with knowledge to make informed decisions about their digital privacy.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-10 text-center border border-indigo-700">
        <h2 class="text-3xl font-bold mb-4">Have Questions or Feedback?</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          We'd love to hear from you. Whether you have suggestions for improvement or questions about our platform,
          our team is here to help.
        </p>
        <a href="/contact"
          class="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg">
          Contact Us
        </a>
      </div>
    </div>
  </main>

</template>

<script setup>
import { useHead } from '@vueuse/head'
useHead({
  title: 'About - PhantomTracker',
  meta: [
    {
      name: 'description',
      content: 'Experience a realistic IMEI tracking simulation for educational purposes. Learn how device tracking works without compromising privacy or breaking laws.'
    },
    {
      name: 'keywords',
      content: 'imei tracker, device tracking, phone tracking, simulation, educational tool, privacy, cybersecurity'
    },
    {
      name: 'author',
      content: 'PhantomTracker Team'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph tags for social sharing
    {
      property: 'og:title',
      content: 'About - PhantomTracker'
    },
    {
      property: 'og:description',
      content: 'Experience a realistic IMEI tracking simulation for educational purposes.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://imeitracker.pages.dev/about'
    },
    {
      property: 'og:image',
      content: 'https://imeitracker.pages.dev/images/phantomtracker-og.jpg'
    },
    {
      property: 'og:site_name',
      content: 'PhantomTracker'
    },
    // Twitter Card tags
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'About - PhantomTracker'
    },
    {
      name: 'twitter:description',
      content: 'Experience a realistic IMEI tracking simulation for educational purposes.'
    },
    {
      name: 'twitter:image',
      content: 'https://imeitracker.pages.dev/images/phantomtracker-twitter.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://imeitracker.pages.dev/about'
    }
  ]
})
</script>

<style scoped>
/* Add any additional custom styles here */
</style>