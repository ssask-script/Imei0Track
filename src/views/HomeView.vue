<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@vueuse/head'
useHead({
  title: 'PhantomTracker - Advanced IMEI Tracking Simulation',
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
      content: 'PhantomTracker - Advanced IMEI Tracking Simulation'
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
      content: 'https://imeitracker.pages.dev/'
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
      content: 'PhantomTracker - Advanced IMEI Tracking Simulation'
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
      href: 'https://imeitracker.pages.dev/'
    }
  ]
})
// Reactive data
const imei = ref('')
const isTracking = ref(false)
const imeiError = ref('')
const showTerminal = ref(false)
const showResults = ref(false)
const showModal = ref(false)
const errorMessage = ref('')
const terminalLines = ref([])
const results = ref({
  imei: '',
  deviceModel: '',
  manufacturer: '',
  status: '',
  location: {
    coordinates: '',
    address: '',
    time: '',
    accuracy: 0
  },
  network: {
    carrier: '',
    country: '',
    cellId: '',
    signalStrength: 0
  },
  security: {
    lastAccess: '',
    riskLevel: ''
  }
})

// Terminal animation lines
const terminalCommands = [
  'Initializing tracking sequence...',
  'Connecting to global cellular network...',
  'Accessing carrier databases...',
  'Querying IMEI registry...',
  'Verifying device signature...',
  'Scanning for last known location...',
  'Analyzing cell tower triangulation data...',
  'Calculating GPS coordinates...',
  'Verifying location accuracy...',
  'Compiling network information...',
  'Running security protocols...',
  'Generating tracking report...',
  'Tracking sequence complete!'
]
// Device database (for demo purposes)
const deviceDatabase = {
  '356938035643809': {
    deviceModel: 'iPhone 14 Pro',
    manufacturer: 'Apple',
    status: 'Active',
    location: {
      coordinates: '37.7749° N, 122.4194° W',
      address: '123 Market St, San Francisco, CA',
      time: 'Today, 14:32:45',
      accuracy: 15
    },
    network: {
      carrier: 'AT&T',
      country: 'United States',
      cellId: '45001ABC',
      signalStrength: 87
    },
    security: {
      lastAccess: '2 minutes ago',
      riskLevel: 'Low'
    }
  },
  '867530912345678': {
    deviceModel: 'Samsung Galaxy S23 Ultra',
    manufacturer: 'Samsung',
    status: 'Active',
    location: {
      coordinates: '40.7128° N, 74.0060° W',
      address: '456 Broadway, New York, NY',
      time: 'Today, 13:18:22',
      accuracy: 23
    },
    network: {
      carrier: 'Verizon',
      country: 'United States',
      cellId: '89234XYZ',
      signalStrength: 76
    },
    security: {
      lastAccess: '5 minutes ago',
      riskLevel: 'Medium'
    }
  },
  '123456789012345': {
    deviceModel: 'Google Pixel 7 Pro',
    manufacturer: 'Google',
    status: 'Lost',
    location: {
      coordinates: '47.6062° N, 122.3321° W',
      address: '789 Pike St, Seattle, WA',
      time: 'Yesterday, 22:05:17',
      accuracy: 35
    },
    network: {
      carrier: 'T-Mobile',
      country: 'United States',
      cellId: '12876PQR',
      signalStrength: 65
    },
    security: {
      lastAccess: '1 day ago',
      riskLevel: 'High'
    }
  }
}

const getStatusColor = computed(() => {
  switch (results.value.status) {
    case 'Active':
      return 'text-green-400'
    case 'Lost':
      return 'text-yellow-400'
    case 'Stolen':
      return 'text-red-400'
    case 'Deactivated':
      return 'text-gray-400'
    default:
      return 'text-gray-300'
  }
})

const getRiskColor = computed(() => {
  switch (results.value.security.riskLevel) {
    case 'Low':
      return 'text-green-400'
    case 'Medium':
      return 'text-yellow-400'
    case 'High':
      return 'text-red-400'
    default:
      return 'text-gray-300'
  }
})


// Validate IMEI
const validateIMEI = (input) => {
  if (!input) {
    return 'IMEI is required'
  }

  if (!/^\d{15}$/.test(input)) {
    return 'IMEI must be exactly 15 digits'
  }

  return ''
}

const showDetailedResults = () => {
  showModal.value = false
  // Scroll to results section
  setTimeout(() => {
    const resultsElement = document.querySelector('.container')
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, 300)
}
// Scroll functions
const scrollToTracker = () => {
  const trackerSection = document.getElementById('tracker-section')
  if (trackerSection) {
    trackerSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToHowTo = () => {
  const howToSection = document.querySelector('.container')
  if (howToSection) {
    howToSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Track device function (simplified for home page)
const trackDevice = () => {
  // Reset errors and results
  errorMessage.value = ''
  imeiError.value = ''
  showResults.value = false

  // Validate IMEI
  const validationError = validateIMEI(imei.value)
  if (validationError) {
    imeiError.value = validationError
    return
  }

  // Show terminal and start animation
  showTerminal.value = true
  isTracking.value = true
  terminalLines.value = []

  // Simulate terminal typing effect
  let currentIndex = 0
  const terminalInterval = setInterval(() => {
    if (currentIndex < terminalCommands.length) {
      terminalLines.value.push(terminalCommands[currentIndex])
      currentIndex++

      // Auto-scroll to bottom
      setTimeout(() => {
        const terminal = document.querySelector('.bg-gray-900 .font-mono')
        if (terminal) {
          terminal.scrollTop = terminal.scrollHeight
        }
      }, 50)
    } else {
      clearInterval(terminalInterval)

      // After terminal completes, show results and modal
      setTimeout(() => {
        populateResults()
        showResults.value = true
        showModal.value = true
        isTracking.value = false

        // Hide terminal after a delay
        setTimeout(() => {
          showTerminal.value = false
        }, 1000)
      }, 1000)
    }
  }, 600)
}

const populateResults = () => {
  // Check if IMEI exists in our fake database
  if (deviceDatabase[imei.value]) {
    // Populate results with predefined data
    results.value = {
      imei: imei.value,
      ...deviceDatabase[imei.value]
    }
  } else {
    // Randomly generate data for unknown IMEIs
    const randomModels = ['iPhone 14', 'Samsung Galaxy S23', 'Google Pixel 7 Pro', 'OnePlus 11', 'Xiaomi 13']
    const randomManufacturers = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi']
    const randomStatuses = ['Active', 'Lost', 'Stolen', 'Deactivated']
    const randomAddresses = [
      { address: '123 Tech Blvd, San Jose, CA', coords: '37.3382° N, 121.8863° W' },
      { address: '456 Innovation Dr, Austin, TX', coords: '30.2672° N, 97.7431° W' },
      { address: '789 Startup Ave, Boston, MA', coords: '42.3601° N, 71.0589° W' },
      { address: '321 Digital Way, Seattle, WA', coords: '47.6062° N, 122.3321° W' },
      { address: '654 Mobile St, Miami, FL', coords: '25.7617° N, 80.1918° W' }
    ]
    const randomCarriers = ['AT&T', 'Verizon', 'T-Mobile', 'Sprint', 'MetroPCS']
    const randomCountries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'Australia']
    const randomRiskLevels = ['Low', 'Medium', 'High']

    const selectedAddress = randomAddresses[Math.floor(Math.random() * randomAddresses.length)]

    results.value = {
      imei: imei.value,
      deviceModel: randomModels[Math.floor(Math.random() * randomModels.length)],
      manufacturer: randomManufacturers[Math.floor(Math.random() * randomManufacturers.length)],
      status: randomStatuses[Math.floor(Math.random() * randomStatuses.length)],
      location: {
        coordinates: selectedAddress.coords,
        address: selectedAddress.address,
        time: new Date().toLocaleString(),
        accuracy: Math.floor(Math.random() * 50) + 10
      },
      network: {
        carrier: randomCarriers[Math.floor(Math.random() * randomCarriers.length)],
        country: randomCountries[Math.floor(Math.random() * randomCountries.length)],
        cellId: Math.random().toString(36).substring(2, 10).toUpperCase(),
        signalStrength: Math.floor(Math.random() * 40) + 60
      },
      security: {
        lastAccess: Math.floor(Math.random() * 60) + ' minutes ago',
        riskLevel: randomRiskLevels[Math.floor(Math.random() * randomRiskLevels.length)]
      }
    }
  }
}
</script>
<template>

  <!-- Hero Section -->
  <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
    <div class="absolute inset-0 bg-grid opacity-10"></div>
    <div class="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="z-10">
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500 bg-opacity-20 text-indigo-300 text-sm font-medium mb-6 border border-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clip-rule="evenodd" />
            </svg>
            Advanced IMEI Tracking Simulation
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Experience the Future of
            <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Device
              Tracking</span>
          </h1>
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            PhantomTracker provides a realistic simulation of IMEI tracking technology for educational purposes.
            Understand how device tracking works without compromising privacy or breaking laws.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button @click="scrollToTracker"
              class="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl transition transform hover:scale-105 shadow-lg">
              Start Tracking
            </button>
            <button @click="scrollToHowTo"
              class="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition">
              Learn More
            </button>
          </div>
          <div class="mt-8 flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <span>100% Educational • No Real Tracking • Privacy Focused</span>
          </div>
        </div>
        <div class="relative">
          <div
            class="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-20 animate-pulse">
          </div>
          <div class="relative bg-gray-800 rounded-3xl p-6 border border-gray-700 shadow-2xl">
            <div
              class="aspect-w-16 aspect-h-9 bg-gray-900 rounded-2xl p-6 border border-gray-700 flex items-center justify-center">
              <img src="" alt="PhantomTracker Interface" class="w-full h-full object-cover rounded-xl">
            </div>
            <div class="mt-6 grid grid-cols-3 gap-4 text-center">
              <div class="p-3 bg-gray-900 rounded-lg">
                <div class="text-2xl font-bold text-indigo-400">99%</div>
                <div class="text-sm text-gray-400">Accuracy Simulation</div>
              </div>
              <div class="p-3 bg-gray-900 rounded-lg">
                <div class="text-2xl font-bold text-purple-400">15s</div>
                <div class="text-sm text-gray-400">Avg. Tracking Time</div>
              </div>
              <div class="p-3 bg-gray-900 rounded-lg">
                <div class="text-2xl font-bold text-green-400">100+</div>
                <div class="text-sm text-gray-400">Sample Devices</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating elements for visual interest -->
    <div
      class="hidden lg:block absolute top-20 right-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob">
    </div>
    <div
      class="hidden lg:block absolute bottom-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000">
    </div>
    <div
      class="hidden lg:block absolute bottom-40 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000">
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-20 bg-gray-850">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose PhantomTracker?</h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          Our simulation platform offers unique educational benefits that help you understand device tracking technology
          responsibly
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-500 hover:transform hover:scale-105">
          <div
            class="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Educational Focus</h3>
          <p class="text-gray-300 mb-4">
            Designed specifically for learning, PhantomTracker teaches you how IMEI tracking systems work without
            compromising anyone's privacy.
          </p>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              Learn technical concepts
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              Understand limitations
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              Ethical considerations
            </li>
          </ul>
        </div>

        <div
          class="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:transform hover:scale-105">
          <div
            class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Realistic Simulation</h3>
          <p class="text-gray-300 mb-4">
            Experience a professional-grade interface that mimics real tracking systems with terminal animations and
            detailed reports.
          </p>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              Terminal-style animations
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              Comprehensive data reports
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              Popup summary modals
            </li>
          </ul>
        </div>

        <div
          class="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-500 hover:transform hover:scale-105">
          <div
            class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Privacy Protection</h3>
          <p class="text-gray-300 mb-4">
            Your privacy is our priority. PhantomTracker works entirely in your browser and doesn't collect or store any
            personal information.
          </p>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              No data collection
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              Client-side processing
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              Works offline
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">How PhantomTracker Works</h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          Our simulation follows a simple four-step process to provide an educational experience
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div class="relative">
          <div
            class="absolute -inset-1 bg-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
          </div>
          <div class="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div
              class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
              1</div>
            <h3 class="text-xl font-bold mb-3">Enter IMEI</h3>
            <p class="text-gray-400">
              Input any 15-digit IMEI number. Use our sample IMEIs for predefined results or any number for randomly
              generated data.
            </p>
            <div class="mt-4 p-3 bg-gray-900 rounded-lg">
              <p class="font-mono text-sm text-indigo-400">356938035643809</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute -inset-1 bg-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
          </div>
          <div class="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div
              class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
              2</div>
            <h3 class="text-xl font-bold mb-3">Initiate Tracking</h3>
            <p class="text-gray-400">
              Click the "Track Device" button to start the simulation. The system will begin the tracking sequence with
              terminal animations.
            </p>
            <div class="mt-4 flex justify-center">
              <button class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition">
                Track Device
              </button>
            </div>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute -inset-1 bg-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
          </div>
          <div class="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div
              class="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
              3</div>
            <h3 class="text-xl font-bold mb-3">Watch Terminal</h3>
            <p class="text-gray-400">
              Observe the terminal-style animation as the system simulates connecting to networks, accessing databases,
              and triangulating location.
            </p>
            <div class="mt-4 p-3 bg-gray-900 rounded-lg">
              <p class="font-mono text-xs text-green-400">Initializing tracking sequence...</p>
              <p class="font-mono text-xs text-green-400">Connecting to global cellular network...</p>
              <p class="font-mono text-xs text-green-400">Accessing carrier databases...</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute -inset-1 bg-green-600 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
          </div>
          <div class="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div
              class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
              4</div>
            <h3 class="text-xl font-bold mb-3">Review Results</h3>
            <p class="text-gray-400">
              Examine the detailed report showing device information, location data, network details, and security
              status in an easy-to-read format.
            </p>
            <div class="mt-4 p-3 bg-gray-900 rounded-lg">
              <p class="text-xs text-gray-400">Device: iPhone 14 Pro</p>
              <p class="text-xs text-gray-400">Location: San Francisco, CA</p>
              <p class="text-xs text-gray-400">Accuracy: ±15 meters</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <a @click="scrollToTracker"
          class="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition transform hover:scale-105 shadow-lg cursor-pointer">
          Try It Yourself
        </a>
      </div>
    </div>
  </section>

  <!-- Statistics Section -->
  <section class="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="p-6">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
          <div class="text-indigo-200">Simulations Run</div>
        </div>
        <div class="p-6">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
          <div class="text-indigo-200">Device Models</div>
        </div>
        <div class="p-6">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
          <div class="text-indigo-200">Countries Simulated</div>
        </div>
        <div class="p-6">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
          <div class="text-indigo-200">Privacy Protection</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Tracker Section -->
  <section id="tracker-section" class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Start Your Tracking Simulation</h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Enter an IMEI number below to experience our realistic tracking simulation
        </p>
      </div>

      <div class="max-w-4xl mx-auto bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
        <!-- Search Section -->
        <div class="p-8 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
          <h3 class="text-xl font-semibold mb-6 text-center">Enter IMEI to Begin Tracking Simulation</h3>
          <div class="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
            <input v-model="imei" type="text" placeholder="Enter 15-digit IMEI (e.g., 356938035643809)"
              class="flex-1 px-6 py-4 bg-gray-700 border border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/50 focus:border-transparent text-white placeholder-gray-400 text-lg"
              :class="imeiError ? 'border-red-500' : ''" />
            <button @click="trackDevice" :disabled="isTracking"
              class="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-bold rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-xl hover:shadow-indigo-500/25 text-lg">
              <span v-if="isTracking">
                <svg class="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                Initializing...
              </span>
              <span v-else>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clip-rule="evenodd" />
                </svg>
                Track Device
              </span>
            </button>
          </div>
          <p v-if="imeiError" class="mt-4 text-red-400 text-center">{{ imeiError }}</p>
        </div>
        <div v-if="showTerminal" class="h-64 bg-gray-900 p-4 overflow-hidden relative">
          <div class="absolute top-2 right-2 flex space-x-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div class="pt-6">
            <div class="font-mono text-sm text-green-400">
              <div v-for="(line, index) in terminalLines" :key="index" class="mb-1 animate-fade-in"
                :style="{ animationDelay: index * 0.1 + 's' }">
                {{ line }}
              </div>
              <div v-if="isTracking" class="blinking-cursor">_</div>
            </div>
          </div>
        </div>
        <div v-if="showResults" class="p-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Device Info -->
            <div class="bg-gray-900 rounded-lg p-5 border border-gray-700">
              <h4 class="text-lg font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clip-rule="evenodd" />
                </svg>
                Device Information
              </h4>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-400">IMEI:</span>
                  <span class="font-mono">{{ results.imei }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Model:</span>
                  <span>{{ results.deviceModel }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Manufacturer:</span>
                  <span>{{ results.manufacturer }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Status:</span>
                  <span :class="getStatusColor">{{ results.status }}</span>
                </div>
              </div>
            </div>

            <!-- Location Info -->
            <div class="bg-gray-900 rounded-lg p-5 border border-gray-700">
              <h4 class="text-lg font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-400" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd" />
                </svg>
                Location Data
              </h4>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-400">Coordinates:</span>
                  <span class="font-mono">{{ results.location.coordinates }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Address:</span>
                  <span class="text-right">{{ results.location.address }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Last Seen:</span>
                  <span>{{ results.location.time }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Accuracy:</span>
                  <span>±{{ results.location.accuracy }}m</span>
                </div>
              </div>
            </div>

            <!-- Network Info -->
            <div class="bg-gray-900 rounded-lg p-5 border border-gray-700">
              <h4 class="text-lg font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                Network Information
              </h4>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-400">Carrier:</span>
                  <span>{{ results.network.carrier }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Country:</span>
                  <span>{{ results.network.country }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Cell ID:</span>
                  <span class="font-mono">{{ results.network.cellId }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-400">Signal:</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-20 bg-gray-700 rounded-full h-2">
                      <div class="bg-green-500 h-2 rounded-full"
                        :style="{ width: results.network.signalStrength + '%' }"></div>
                    </div>
                    <span>{{ results.network.signalStrength }}%</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Security Info -->
            <div class="bg-gray-900 rounded-lg p-5 border border-gray-700">
              <h4 class="text-lg font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-red-400" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd" />
                </svg>
                Security Status
              </h4>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-400">Last Access:</span>
                  <span>{{ results.security.lastAccess }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Encryption:</span>
                  <span class="text-green-400">AES-256</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Protocol:</span>
                  <span class="text-indigo-400">v3.2.1</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Risk Level:</span>
                  <span :class="getRiskColor">{{ results.security.riskLevel }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Info Cards -->
        <div class="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gray-900 rounded-2xl p-6 border border-gray-700">
            <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="text-lg font-bold mb-2">Educational Tool</h4>
            <p class="text-gray-400 text-sm">
              This is a simulation for learning purposes only. No real devices are tracked.
            </p>
          </div>

          <div class="bg-gray-900 rounded-2xl p-6 border border-gray-700">
            <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="text-lg font-bold mb-2">Privacy Protected</h4>
            <p class="text-gray-400 text-sm">
              Your data stays in your browser. We don't collect or store any information.
            </p>
          </div>

          <div class="bg-gray-900 rounded-2xl p-6 border border-gray-700">
            <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path
                  d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <h4 class="text-lg font-bold mb-2">Realistic Interface</h4>
            <p class="text-gray-400 text-sm">
              Experience a professional-grade UI with terminal animations and detailed reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-20 bg-gray-850">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">What Users Say</h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          See what our educational users think about PhantomTracker
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              JD</div>
            <div>
              <h4 class="font-bold">James Davis</h4>
              <p class="text-gray-400 text-sm">Cybersecurity Student</p>
            </div>
          </div>
          <div class="flex mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-gray-300 italic">
            "PhantomTracker helped me understand how IMEI tracking works in a safe, legal environment. The terminal
            animation makes it feel real without crossing ethical boundaries."
          </p>
        </div>

        <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              SL</div>
            <div>
              <h4 class="font-bold">Sarah Lee</h4>
              <p class="text-gray-400 text-sm">Tech Educator</p>
            </div>
          </div>
          <div class="flex mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-gray-300 italic">
            "I use PhantomTracker in my technology ethics class. It's the perfect tool to demonstrate what's possible
            with device tracking while emphasizing the legal and ethical constraints."
          </p>
        </div>

        <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              MR</div>
            <div>
              <h4 class="font-bold">Marcus Rodriguez</h4>
              <p class="text-gray-400 text-sm">Privacy Advocate</p>
            </div>
          </div>
          <div class="flex mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-gray-300 italic">
            "Finally, a tool that demonstrates tracking technology responsibly. PhantomTracker shows the complexity
            involved in real systems, which helps dispel myths about easy surveillance."
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Experience PhantomTracker?</h2>
      <p class="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
        Start your educational journey into IMEI tracking technology today. No registration required, no data collected,
        100% privacy protected.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button @click="scrollToTracker"
          class="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
          Start Tracking Now
        </button>
        <a href="/how-to-use"
          class="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-indigo-600 transition transform hover:scale-105">
          Learn How to Use
        </a>
      </div>
      <p class="mt-8 text-indigo-200 text-sm">
        <span class="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
          100% Educational • No Real Tracking • Works in Your Browser
        </span>
      </p>
    </div>
  </section>

  <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
    <div
      class="bg-gray-800 rounded-xl max-w-md w-full p-6 border border-gray-700 shadow-2xl transform animate-scale-in">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-bold">Tracking Complete</h3>
        <button @click="showModal = false" class="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="mb-6">
        <div class="flex items-center mb-4 p-3 bg-green-900 bg-opacity-50 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mr-3" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
          <div>
            <p class="font-medium">Device successfully located</p>
            <p class="text-sm text-green-300">Accuracy: ±{{ results.location.accuracy }} meters</p>
          </div>
        </div>

        <div class="space-y-3 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-400">Device:</span>
            <span>{{ results.deviceModel }} ({{ results.manufacturer }})</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Location:</span>
            <span class="text-right">{{ results.location.address }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Last Seen:</span>
            <span>{{ results.location.time }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Network:</span>
            <span>{{ results.network.carrier }} ({{ results.network.country }})</span>
          </div>
        </div>
      </div>

      <div class="flex space-x-3">
        <button @click="showModal = false" class="flex-1 py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition">
          Close
        </button>
        <button @click="showDetailedResults"
          class="flex-1 py-2 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  </div>

</template>


<style scoped>
.blinking-cursor {
  display: inline-block;
  width: 8px;
  height: 18px;
  background-color: #4ade80;
  animation: blink 1s step-end infinite;
  margin-left: 4px;
}

@keyframes blink {

  from,
  to {
    opacity: 1
  }

  50% {
    opacity: 0
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s forwards;
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scale-in 0.3s ease-out;
}

/* Ensure terminal content doesn't overflow */
.font-mono {
  white-space: pre-wrap;
  word-break: break-all;
  line-height: 1.5;
  max-height: 200px;
  overflow-y: auto;
}

.bg-grid {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* Animation for floating blobs */
.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }

  33% {
    transform: translate(30px, -50px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }

  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

/* Tilt animation for cards */
.animate-tilt {
  animation: tilt 10s infinite linear;
}

@keyframes tilt {

  0%,
  50%,
  100% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(0.5deg);
  }

  75% {
    transform: rotate(-0.5deg);
  }
}

/* For the background in the hero section */
.bg-gray-850 {
  background-color: #141C2F;
}

/* Ensure the sticky header works properly */
.sticky {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(31, 41, 55, 0.8);
}
</style>