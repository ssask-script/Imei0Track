<template>

    <!-- Main Content -->
    <main class="flex-1 container mx-auto px-4 py-8">
        <div class="max-w-5xl mx-auto">
            <!-- Hero Section -->
            <div class="text-center mb-16">
                <div
                    class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                <p class="text-xl text-gray-400 max-w-3xl mx-auto">
                    Find answers to the most common questions about PhantomTracker and IMEI tracking technology
                </p>
            </div>

            <!-- Search Section -->
            <div class="mb-12 max-w-2xl mx-auto">
                <div class="relative">
                    <input v-model="searchQuery" type="text" placeholder="Search questions..."
                        class="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-xl pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400" />
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 absolute left-4 top-4"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <p class="text-gray-400 text-sm mt-2 text-center">
                    Can't find what you're looking for? <a href="/contact"
                        class="text-indigo-400 hover:underline">Contact our support team</a>
                </p>
            </div>

            <!-- FAQ Categories -->
            <div class="mb-12">
                <h2 class="text-2xl font-bold mb-6">Browse by Category</h2>
                <div class="flex flex-wrap gap-3">
                    <button v-for="category in categories" :key="category.id" @click="selectedCategory = category.id"
                        :class="[
                            'px-5 py-2 rounded-full text-sm font-medium transition',
                            selectedCategory === category.id
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        ]">
                        {{ category.name }}
                    </button>
                </div>
            </div>

            <!-- Filtered Questions -->
            <div class="space-y-6 mb-16">
                <div v-for="question in filteredQuestions" :key="question.id"
                    class="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
                    :class="{ 'border-indigo-500': expandedQuestion === question.id }">
                    <button @click="toggleQuestion(question.id)"
                        class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-700 transition"
                        :class="expandedQuestion === question.id ? 'bg-gray-700' : ''">
                        <h3 class="text-lg font-semibold">{{ question.question }}</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 transition-transform"
                            :class="{ 'rotate-180': expandedQuestion === question.id }" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div v-show="expandedQuestion === question.id" class="px-6 pb-6 pt-2 border-t border-gray-700">
                        <p class="text-gray-300 leading-relaxed">{{ question.answer }}</p>
                        <div v-if="question.related" class="mt-4 pt-4 border-t border-gray-700">
                            <h4 class="text-sm font-medium text-gray-400 mb-2">Related Questions:</h4>
                            <ul class="space-y-1">
                                <li v-for="(related, index) in question.related" :key="index"
                                    class="text-sm text-indigo-400 hover:text-indigo-300 cursor-pointer"
                                    @click="jumpToQuestion(related.id)">
                                    • {{ related.question }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Still Have Questions Section -->
            <div
                class="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-10 text-center border border-indigo-700">
                <h2 class="text-3xl font-bold mb-4">Still have questions?</h2>
                <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Our support team is here to help you with any questions or concerns you might have about
                    PhantomTracker or IMEI tracking technology.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact"
                        class="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg">
                        Contact Support
                    </a>
                    <a href="/how-to-use"
                        class="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition transform hover:scale-105">
                        How to Use Guide
                    </a>
                </div>
            </div>

            <!-- Helpful? Feedback Section -->
            <div class="mt-16 bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 class="text-2xl font-bold mb-6 text-center">Was this FAQ helpful?</h2>
                <div class="flex justify-center space-x-6">
                    <button @click="submitFeedback('helpful')"
                        class="flex flex-col items-center px-6 py-4 bg-green-600 hover:bg-green-700 rounded-xl transition transform hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="font-medium">Yes, very helpful!</span>
                    </button>
                    <button @click="submitFeedback('somewhat')"
                        class="flex flex-col items-center px-6 py-4 bg-yellow-600 hover:bg-yellow-700 rounded-xl transition transform hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="font-medium">Somewhat helpful</span>
                    </button>
                    <button @click="submitFeedback('not')"
                        class="flex flex-col items-center px-6 py-4 bg-red-600 hover:bg-red-700 rounded-xl transition transform hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="font-medium">Not helpful</span>
                    </button>
                </div>
                <div v-if="showFeedbackInput" class="mt-6">
                    <p class="text-gray-400 mb-3">Help us improve by sharing more details:</p>
                    <textarea v-model="feedbackDetails"
                        placeholder="What could we improve? What questions are still unanswered?"
                        class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
                        rows="4"></textarea>
                    <div class="mt-4 flex justify-end">
                        <button @click="submitDetailedFeedback"
                            class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition">
                            Submit Feedback
                        </button>
                    </div>
                </div>
                <div v-if="feedbackSubmitted"
                    class="mt-4 p-4 bg-green-900 bg-opacity-50 border border-green-700 rounded-lg">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="text-green-300">Thank you for your feedback!</span>
                    </div>
                </div>
            </div>
        </div>
    </main>


</template>

<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@vueuse/head'
useHead({
    title: 'FAQ - PhantomTracker',
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
            content: 'FAQ - PhantomTracker'
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
            content: 'https://imeitracker.pages.dev/faq'
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
            content: 'FAQ - PhantomTracker'
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
            href: 'https://imeitracker.pages.dev/faq'
        }
    ]
})
// Reactive data
const searchQuery = ref('')
const selectedCategory = ref('all')
const expandedQuestion = ref(null)
const showFeedbackInput = ref(false)
const feedbackDetails = ref('')
const feedbackSubmitted = ref(false)
const feedbackType = ref('')

// FAQ data
const faqData = [
    {
        id: 1,
        question: "What is PhantomTracker?",
        answer: "PhantomTracker is a simulation tool designed to educate users about IMEI tracking technology. It provides a realistic interface that demonstrates how professional tracking systems might work, without actually connecting to any real databases or tracking actual devices. This platform is for educational purposes only.",
        category: "general",
        related: [
            { id: 2, question: "Is PhantomTracker a real tracking system?" },
            { id: 5, question: "Can I use this to track my lost phone?" }
        ]
    },
    {
        id: 2,
        question: "Is PhantomTracker a real tracking system?",
        answer: "No, PhantomTracker is not a real tracking system. It is a simulation designed for educational purposes only. The platform generates fictional data and does not connect to carrier databases, law enforcement systems, or any other real tracking infrastructure. Any location data, device information, or network details displayed are randomly generated or based on predefined examples.",
        category: "general",
        related: [
            { id: 1, question: "What is PhantomTracker?" },
            { id: 3, question: "Why does the system show realistic data if it's not real?" }
        ]
    },
    {
        id: 3,
        question: "Why does the system show realistic data if it's not real?",
        answer: "We generate realistic-looking data to provide an authentic educational experience. The goal is to help users understand what information might be available through legitimate tracking systems and how it might be presented. This approach helps users recognize the complexity of real tracking systems and appreciate the legal and technical safeguards that exist in legitimate applications.",
        category: "general",
        related: [
            { id: 2, question: "Is PhantomTracker a real tracking system?" },
            { id: 4, question: "How is the data generated?" }
        ]
    },
    {
        id: 4,
        question: "How is the data generated?",
        answer: "The data displayed in PhantomTracker is generated using one of two methods: 1) For specific sample IMEIs (like 356938035643809), we use predefined datasets that simulate realistic device information. 2) For any other 15-digit IMEI, we randomly generate data from pools of possible values for device models, manufacturers, locations, carriers, etc. No real user data is used, and no external databases are queried.",
        category: "technical",
        related: [
            { id: 3, question: "Why does the system show realistic data if it's not real?" },
            { id: 6, question: "What sample IMEIs can I use?" }
        ]
    },
    {
        id: 5,
        question: "Can I use this to track my lost phone?",
        answer: "No, you cannot use PhantomTracker to track a lost phone. This is a simulation tool for educational purposes only. To locate a lost device, use official services provided by the device manufacturer: Find My iPhone for Apple devices, Find My Device for Android devices, or similar official tracking services. These services require prior setup and authentication to protect user privacy.",
        category: "usage",
        related: [
            { id: 1, question: "What is PhantomTracker?" },
            { id: 15, question: "What are legitimate ways to track a lost device?" }
        ]
    },
    {
        id: 6,
        question: "What sample IMEIs can I use?",
        answer: "You can use any 15-digit number, but we have predefined data for these sample IMEIs: 356938035643809 (simulates an iPhone), 867530912345678 (simulates a Samsung device), and 123456789012345 (simulates a Google Pixel). Using these will show consistent results each time. Any other 15-digit number will generate random but realistic-looking data.",
        category: "usage",
        related: [
            { id: 4, question: "How is the data generated?" },
            { id: 7, question: "Why do I need to enter a 15-digit IMEI?" }
        ]
    },
    {
        id: 7,
        question: "Why do I need to enter a 15-digit IMEI?",
        answer: "Real IMEI numbers are always 15 digits long. By requiring a 15-digit input, we maintain realism in our simulation. The IMEI (International Mobile Equipment Identity) is a unique identifier assigned to every mobile device. In real tracking scenarios, this number would be used to identify the specific device in carrier databases. In our simulation, it serves as the input key for generating appropriate response data.",
        category: "technical",
        related: [
            { id: 6, question: "What sample IMEIs can I use?" },
            { id: 8, question: "What is an IMEI number and where can I find it?" }
        ]
    },
    {
        id: 8,
        question: "What is an IMEI number and where can I find it?",
        answer: "IMEI stands for International Mobile Equipment Identity. It's a 15-digit unique identifier assigned to every mobile device. You can typically find your device's IMEI by: 1) Dialing *#06# on your phone, 2) Checking the device settings (About Phone > Status), 3) Looking on the original packaging, or 4) Checking under the battery (on devices with removable batteries). The IMEI is used by carriers to identify devices on their network and can be used to block stolen devices.",
        category: "technical",
        related: [
            { id: 7, question: "Why do I need to enter a 15-digit IMEI?" },
            { id: 9, question: "Can someone track me using my IMEI?" }
        ]
    },
    {
        id: 9,
        question: "Can someone track me using my IMEI?",
        answer: "In most cases, no. Regular individuals cannot track a device using only its IMEI. Only law enforcement agencies working with mobile carriers can potentially locate a device using its IMEI, and this requires legal authorization such as a warrant. Mobile carriers have strict privacy policies and legal requirements that prevent unauthorized tracking. Apps that claim to track devices by IMEI alone are typically scams or malware.",
        category: "privacy",
        related: [
            { id: 8, question: "What is an IMEI number and where can I find it?" },
            { id: 10, question: "Is it safe to share my IMEI number?" }
        ]
    },
    {
        id: 10,
        question: "Is it safe to share my IMEI number?",
        answer: "Generally, you should treat your IMEI number as sensitive information. While it alone cannot be used by most people to track your device, it could potentially be misused in combination with other information or through social engineering attacks with carrier customer service. Only share your IMEI with trusted parties such as your mobile carrier, authorized repair services, or when selling a device to provide proof of legitimacy.",
        category: "privacy",
        related: [
            { id: 9, question: "Can someone track me using my IMEI?" },
            { id: 11, question: "What should I do if my phone is stolen?" }
        ]
    },
    {
        id: 11,
        question: "What should I do if my phone is stolen?",
        answer: "If your phone is stolen: 1) Use official tracking services (Find My iPhone, Find My Device) if previously set up, 2) Contact your carrier to report the theft and provide your IMEI to block the device, 3) File a police report, 4) Change passwords for important accounts, 5) Contact your bank if you used mobile banking. Do not attempt to retrieve the device yourself. Note: PhantomTracker cannot assist with finding stolen devices.",
        category: "usage",
        related: [
            { id: 5, question: "Can I use this to track my lost phone?" },
            { id: 15, question: "What are legitimate ways to track a lost device?" }
        ]
    },
    {
        id: 12,
        question: "Why does the terminal animation take so long?",
        answer: "The terminal animation is intentionally designed to simulate the time a real tracking system might take to query multiple databases, process triangulation data, and verify results. In reality, these operations would involve complex calculations and network requests. The animation enhances the educational experience by demonstrating the complexity involved in legitimate tracking systems, which helps discourage attempts at unauthorized tracking.",
        category: "technical",
        related: [
            { id: 13, question: "Can I skip the terminal animation?" },
            { id: 14, question: "What do the terminal messages mean?" }
        ]
    },
    {
        id: 13,
        question: "Can I skip the terminal animation?",
        answer: "Currently, there is no option to skip the terminal animation. This is by design, as the animation serves an educational purpose by demonstrating the complexity of real tracking systems. The deliberate pacing helps users understand that legitimate tracking is not instantaneous and involves multiple verification steps. We may consider adding a skip option in future updates based on user feedback.",
        category: "technical",
        related: [
            { id: 12, question: "Why does the terminal animation take so long?" },
            { id: 14, question: "What do the terminal messages mean?" }
        ]
    },
    {
        id: 14,
        question: "What do the terminal messages mean?",
        answer: "The terminal messages simulate the steps a real tracking system might perform: 'Initializing tracking sequence' (setting up the query), 'Connecting to global cellular network' (establishing connections to carrier databases), 'Accessing carrier databases' (querying for device records), 'Scanning for last known location' (retrieving cell tower connection data), 'Calculating GPS coordinates' (triangulating position), 'Verifying location accuracy' (assessing confidence level), and 'Generating tracking report' (compiling results). These are educational approximations, not actual system processes.",
        category: "technical",
        related: [
            { id: 12, question: "Why does the terminal animation take so long?" },
            { id: 13, question: "Can I skip the terminal animation?" }
        ]
    },
    {
        id: 15,
        question: "What are legitimate ways to track a lost device?",
        answer: "Legitimate ways to track a lost device include: 1) Apple's Find My iPhone/iPad/Mac services, 2) Google's Find My Device for Android, 3) Samsung's Find My Mobile, 4) Third-party apps like Cerberus or Prey that you installed and configured before losing the device. These services require prior setup, authentication, and respect user privacy. They cannot be activated remotely after a device is lost, which is why setting them up in advance is crucial.",
        category: "usage",
        related: [
            { id: 5, question: "Can I use this to track my lost phone?" },
            { id: 11, question: "What should I do if my phone is stolen?" }
        ]
    },
    {
        id: 16,
        question: "Who created PhantomTracker and why?",
        answer: "PhantomTracker was created by a team of developers and security professionals concerned about the misconceptions surrounding device tracking. Many people believe tracking is either impossible or as simple as entering a number into a website. The team wanted to create an educational tool that demonstrates the complexity of real tracking systems while emphasizing the legal and ethical boundaries that govern them.",
        category: "general",
        related: [
            { id: 1, question: "What is PhantomTracker?" },
            { id: 2, question: "Is PhantomTracker a real tracking system?" }
        ]
    },
    {
        id: 17,
        question: "Is PhantomTracker collecting my data?",
        answer: "No, PhantomTracker does not collect or store any personal data. The IMEI numbers you enter are processed locally in your browser and are not sent to any server. No tracking or analytics are performed on user activity. The application can even work offline once loaded. This approach aligns with our commitment to privacy education and ensures users can explore the simulation without privacy concerns.",
        category: "privacy",
        related: [
            { id: 9, question: "Can someone track me using my IMEI?" },
            { id: 10, question: "Is it safe to share my IMEI number?" }
        ]
    },
    {
        id: 18,
        question: "Can I use PhantomTracker for commercial purposes?",
        answer: "PhantomTracker is intended for personal, educational use only. If you're interested in using this simulation for commercial training, educational institutions, or corporate purposes, please contact us to discuss licensing options. We offer customized versions for professional training scenarios with additional features and support.",
        category: "general",
        related: [
            { id: 16, question: "Who created PhantomTracker and why?" },
            { id: 1, question: "What is PhantomTracker?" }
        ]
    }
]

// Categories
const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'usage', name: 'Usage' },
    { id: 'privacy', name: 'Privacy & Security' }
]

// Computed properties
const filteredQuestions = computed(() => {
    let filtered = faqData

    // Filter by category
    if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(q => q.category === selectedCategory.value)
    }

    // Filter by search query
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(q =>
            q.question.toLowerCase().includes(query) ||
            q.answer.toLowerCase().includes(query)
        )
    }

    return filtered
})

// Methods
const toggleQuestion = (id) => {
    expandedQuestion.value = expandedQuestion.value === id ? null : id
}

const jumpToQuestion = (id) => {
    expandedQuestion.value = id
    // Scroll to the question
    setTimeout(() => {
        const element = document.getElementById(`question-${id}`)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }, 100)
}

const submitFeedback = (type) => {
    feedbackType.value = type
    if (type === 'not') {
        showFeedbackInput.value = true
    } else {
        // Submit feedback directly
        submitDetailedFeedback()
    }
}

const submitDetailedFeedback = () => {
    // In a real app, this would send the feedback to a server
    console.log('Feedback submitted:', {
        type: feedbackType.value,
        details: feedbackDetails.value
    })

    feedbackSubmitted.value = true
    showFeedbackInput.value = false

    // Reset after 5 seconds
    setTimeout(() => {
        feedbackSubmitted.value = false
        feedbackDetails.value = ''
    }, 5000)
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>