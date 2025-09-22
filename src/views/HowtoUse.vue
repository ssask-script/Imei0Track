<template>

    <!-- Main Content -->
    <main class="flex-1 container mx-auto px-4 py-8">
        <div class="max-w-5xl mx-auto">
            <!-- Page Header -->
            <div class="text-center mb-12">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <h1 class="text-4xl font-bold mb-4">How to Use PhantomTracker</h1>
                <p class="text-xl text-gray-400">A step-by-step guide to using our IMEI tracking simulation</p>
            </div>

            <!-- Introduction Card -->
            <div class="bg-gray-800 rounded-xl p-8 mb-10 border border-gray-700">
                <div class="flex items-start mb-6">
                    <div
                        class="bg-yellow-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 mt-1">
                        !</div>
                    <div>
                        <h2 class="text-2xl font-bold mb-3">Important Notice</h2>
                        <p class="text-gray-300 leading-relaxed">
                            PhantomTracker is a <span class="text-indigo-400 font-medium">simulation tool</span>
                            designed for educational purposes only.
                            This system does not connect to real carrier databases or track actual devices.
                            Real IMEI tracking requires legal authorization and cooperation with mobile carriers.
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 p-4 bg-gray-900 rounded-lg">
                    <div class="text-center">
                        <div class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 class="font-semibold">Educational</h3>
                        <p class="text-sm text-gray-400">For learning purposes only</p>
                    </div>
                    <div class="text-center">
                        <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 class="font-semibold">Not Real</h3>
                        <p class="text-sm text-gray-400">Does not track actual devices</p>
                    </div>
                    <div class="text-center">
                        <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 class="font-semibold">Legal</h3>
                        <p class="text-sm text-gray-400">Complies with privacy laws</p>
                    </div>
                </div>
            </div>

            <!-- Step-by-Step Guide -->
            <div class="space-y-8 mb-12">
                <!-- Step 1 -->
                <div class="bg-gray-800 rounded-xl p-8 border border-gray-700" id="step1">
                    <div class="flex items-center mb-6">
                        <div
                            class="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                            1</div>
                        <h2 class="text-2xl font-bold">Enter the IMEI Number</h2>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <p class="text-gray-300 mb-4">
                                Start by entering a 15-digit IMEI number in the input field. This is typically found on
                                the device packaging,
                                under the battery, or by dialing <span
                                    class="bg-gray-700 px-2 py-1 rounded font-mono text-sm">*#06#</span> on the device.
                            </p>
                            <div class="bg-gray-900 p-4 rounded-lg mb-4">
                                <h4 class="font-semibold mb-2 text-indigo-400">Valid IMEI Formats:</h4>
                                <ul class="text-sm space-y-1 text-gray-300">
                                    <li>• 356938035643809 (iPhone)</li>
                                    <li>• 867530912345678 (Samsung)</li>
                                    <li>• 123456789012345 (Google Pixel)</li>
                                    <li>• Any 15-digit number</li>
                                </ul>
                            </div>
                            <p class="text-gray-400 text-sm">
                                <span class="text-yellow-400">Note:</span> The system will generate realistic data for
                                any valid 15-digit IMEI.
                            </p>
                        </div>
                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%231f2937'/%3E%3Crect x='20' y='80' width='360' height='40' rx='5' fill='%23374151'/%3E%3Ctext x='40' y='107' fill='%239ca3af' font-family='monospace' font-size='14'%3EEnter 15-digit IMEI number%3C/text%3E%3Ccircle cx='370' cy='100' r='12' fill='%238b5cf6'/%3E%3Ctext x='365' y='105' fill='white' font-family='Arial' font-size='12' font-weight='bold'%3E%26%238594%3B%3C/text%3E%3C/svg%3E"
                                alt="IMEI Input Field" class="w-full rounded">
                        </div>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="bg-gray-800 rounded-xl p-8 border border-gray-700" id="step2">
                    <div class="flex items-center mb-6">
                        <div
                            class="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                            2</div>
                        <h2 class="text-2xl font-bold">Initiate Tracking Sequence</h2>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 order-2 lg:order-1">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%231f2937'/%3E%3Crect x='20' y='20' width='360' height='210' rx='10' fill='%23111827'/%3E%3Ccircle cx='35' cy='35' r='5' fill='%23ef4444'/%3E%3Ccircle cx='50' cy='35' r='5' fill='%23f59e0b'/%3E%3Ccircle cx='65' cy='35' r='5' fill='%2310b981'/%3E%3Ctext x='30' y='70' fill='%2310b981' font-family='monospace' font-size='12'%3EInitializing tracking sequence...%3C/text%3E%3Ctext x='30' y='90' fill='%2310b981' font-family='monospace' font-size='12'%3EConnecting to global cellular network...%3C/text%3E%3Ctext x='30' y='110' fill='%2310b981' font-family='monospace' font-size='12'%3EAccessing carrier databases...%3C/text%3E%3Ctext x='30' y='130' fill='%2310b981' font-family='monospace' font-size='12'%3EScanning for last known location...%3C/text%3E%3Ctext x='30' y='150' fill='%2310b981' font-family='monospace' font-size='12'%3ECalculating GPS coordinates...%3C/text%3E%3Ctext x='30' y='170' fill='%2310b981' font-family='monospace' font-size='12'%3EVerifying location accuracy...%3C/text%3E%3Ctext x='30' y='190' fill='%2310b981' font-family='monospace' font-size='12'%3ETracking sequence complete!%3C/text%3E%3Crect x='30' y='205' width='8' height='18' fill='%2310b981'/%3E%3C/svg%3E"
                                alt="Terminal Animation" class="w-full rounded">
                        </div>
                        <div class="order-1 lg:order-2">
                            <p class="text-gray-300 mb-4">
                                Click the "Track Device" button to start the simulation. You'll see a terminal-style
                                animation that simulates
                                the system connecting to global networks and searching for the device.
                            </p>
                            <div class="bg-gray-900 p-4 rounded-lg mb-4">
                                <h4 class="font-semibold mb-2 text-green-400">What happens during tracking:</h4>
                                <ul class="text-sm space-y-2 text-gray-300">
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2 mt-1">•</span>
                                        <span>System initializes the tracking protocol</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2 mt-1">•</span>
                                        <span>Simulates connection to carrier databases</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2 mt-1">•</span>
                                        <span>Processes cell tower triangulation data</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-green-400 mr-2 mt-1">•</span>
                                        <span>Calculates approximate GPS coordinates</span>
                                    </li>
                                </ul>
                            </div>
                            <p class="text-gray-400 text-sm">
                                This process takes approximately 5-10 seconds to complete.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="bg-gray-800 rounded-xl p-8 border border-gray-700" id="step3">
                    <div class="flex items-center mb-6">
                        <div
                            class="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                            3</div>
                        <h2 class="text-2xl font-bold">Review Results in the Popup Modal</h2>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div class="order-2 lg:order-1">
                            <p class="text-gray-300 mb-4">
                                When the tracking process completes, a popup modal will appear summarizing the key
                                findings.
                                This modal provides a quick overview of the device's status, location, and network
                                information.
                            </p>
                            <div class="bg-gray-900 p-4 rounded-lg mb-4">
                                <h4 class="font-semibold mb-2 text-purple-400">Modal includes:</h4>
                                <ul class="text-sm space-y-2 text-gray-300">
                                    <li class="flex items-start">
                                        <span class="text-purple-400 mr-2 mt-1">•</span>
                                        <span>Device model and manufacturer</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-purple-400 mr-2 mt-1">•</span>
                                        <span>Last known location and address</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-purple-400 mr-2 mt-1">•</span>
                                        <span>Carrier and country information</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-purple-400 mr-2 mt-1">•</span>
                                        <span>Location accuracy (in meters)</span>
                                    </li>
                                </ul>
                            </div>
                            <p class="text-gray-400 text-sm">
                                You can close the modal or click "View Details" to see the complete report.
                            </p>
                        </div>
                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 order-1 lg:order-2">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231f2937'/%3E%3Crect x='50' y='40' width='300' height='220' rx='15' fill='%231f2937' stroke='%23374151' stroke-width='2'/%3E%3Crect x='70' y='70' width='260' height='120' rx='8' fill='%23065f46' fill-opacity='0.3'/%3E%3Ccircle cx='330' cy='60' r='10' fill='%236b7280'/%3E%3Ctext x='180' y='65' fill='%23ffffff' font-family='Arial' font-size='14' text-anchor='middle'%3ETracking Complete%3C/text%3E%3Cpath d='M325 55 L 335 65 M 325 65 L 335 55' stroke='%23ffffff' stroke-width='2'/%3E%3Ctext x='80' y='95' fill='%2310b981' font-family='Arial' font-size='14' font-weight='bold'%3EDevice successfully located%3C/text%3E%3Ctext x='80' y='115' fill='%2334d399' font-family='Arial' font-size='12'%3EAccuracy: ±15 meters%3C/text%3E%3Ctext x='80' y='145' fill='%23e5e7eb' font-family='Arial' font-size='12'%3EDevice: iPhone 14 Pro (Apple)%3C/text%3E%3Ctext x='80' y='165' fill='%23e5e7eb' font-family='Arial' font-size='12'%3ELocation: 123 Market St, San Francisco, CA%3C/text%3E%3Ctext x='80' y='185' fill='%23e5e7eb' font-family='Arial' font-size='12'%3ELast Seen: Today, 14:32:45%3C/text%3E%3Ctext x='80' y='205' fill='%23e5e7eb' font-family='Arial' font-size='12'%3ENetwork: AT%26T (United States)%3C/text%3E%3Crect x='70' y='230' width='120' height='35' rx='8' fill='%23374151'/%3E%3Crect x='210' y='230' width='120' height='35' rx='8' fill='%238b5cf6'/%3E%3Ctext x='130' y='253' fill='%23ffffff' font-family='Arial' font-size='14' text-anchor='middle'%3EClose%3C/text%3E%3Ctext x='270' y='253' fill='%23ffffff' font-family='Arial' font-size='14' text-anchor='middle'%3EView Details%3C/text%3E%3C/svg%3E"
                                alt="Results Modal" class="w-full rounded">
                        </div>
                    </div>
                </div>

                <!-- Step 4 -->
                <div class="bg-gray-800 rounded-xl p-8 border border-gray-700" id="step4">
                    <div class="flex items-center mb-6">
                        <div
                            class="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                            4</div>
                        <h2 class="text-2xl font-bold">Explore Detailed Information</h2>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231f2937'/%3E%3Crect x='20' y='20' width='180' height='120' rx='10' fill='%231f2937' stroke='%23374151'/%3E%3Crect x='200' y='20' width='180' height='120' rx='10' fill='%231f2937' stroke='%23374151'/%3E%3Crect x='20' y='150' width='180' height='120' rx='10' fill='%231f2937' stroke='%23374151'/%3E%3Crect x='200' y='150' width='180' height='120' rx='10' fill='%231f2937' stroke='%23374151'/%3E%3Ctext x='30' y='45' fill='%238b5cf6' font-family='Arial' font-size='14' font-weight='bold'%3EDevice Information%3C/text%3E%3Ctext x='210' y='45' fill='%2310b981' font-family='Arial' font-size='14' font-weight='bold'%3ELocation Data%3C/text%3E%3Ctext x='30' y='175' fill='%233b82f6' font-family='Arial' font-size='14' font-weight='bold'%3ENetwork Information%3C/text%3E%3Ctext x='210' y='175' fill='%23ef4444' font-family='Arial' font-size='14' font-weight='bold'%3ESecurity Status%3C/text%3E%3Ctext x='30' y='70' fill='%239ca3af' font-family='Arial' font-size='12'%3EIMEI: 356938035643809%3C/text%3E%3Ctext x='30' y='90' fill='%239ca3af' font-family='Arial' font-size='12'%3EModel: iPhone 14 Pro%3C/text%3E%3Ctext x='30' y='110' fill='%239ca3af' font-family='Arial' font-size='12'%3EStatus: %3C/tspan%3E%3Ctspan fill='%2310b981'%3EActive%3C/tspan%3E%3C/text%3E%3Ctext x='210' y='70' fill='%239ca3af' font-family='Arial' font-size='12'%3ECOORD: 37.7749° N, 122.4194° W%3C/text%3E%3Ctext x='210' y='90' fill='%239ca3af' font-family='Arial' font-size='12'%3EAddress: 123 Market St...%3C/text%3E%3Ctext x='210' y='110' fill='%239ca3af' font-family='Arial' font-size='12'%3EAccuracy: ±15m%3C/text%3E%3C/svg%3E"
                                alt="Detailed Results" class="w-full rounded">
                        </div>
                        <div>
                            <p class="text-gray-300 mb-4">
                                After closing the modal or clicking "View Details", you'll see the complete report with
                                four detailed sections:
                            </p>
                            <div class="space-y-4 mb-4">
                                <div class="flex items-start p-3 bg-gray-900 rounded-lg">
                                    <div
                                        class="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                                        1</div>
                                    <div>
                                        <h4 class="font-semibold text-indigo-400">Device Information</h4>
                                        <p class="text-sm text-gray-400">Model, manufacturer, and current status of the
                                            device</p>
                                    </div>
                                </div>
                                <div class="flex items-start p-3 bg-gray-900 rounded-lg">
                                    <div
                                        class="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                                        2</div>
                                    <div>
                                        <h4 class="font-semibold text-green-400">Location Data</h4>
                                        <p class="text-sm text-gray-400">GPS coordinates, address, and accuracy of the
                                            location</p>
                                    </div>
                                </div>
                                <div class="flex items-start p-3 bg-gray-900 rounded-lg">
                                    <div
                                        class="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                                        3</div>
                                    <div>
                                        <h4 class="font-semibold text-blue-400">Network Information</h4>
                                        <p class="text-sm text-gray-400">Carrier, country, cell tower ID, and signal
                                            strength</p>
                                    </div>
                                </div>
                                <div class="flex items-start p-3 bg-gray-900 rounded-lg">
                                    <div
                                        class="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                                        4</div>
                                    <div>
                                        <h4 class="font-semibold text-red-400">Security Status</h4>
                                        <p class="text-sm text-gray-400">Last access time, encryption, and risk level
                                            assessment</p>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-400 text-sm">
                                You can track additional devices by entering a new IMEI number at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tips & Best Practices -->
            <div class="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl p-8 mb-10 border border-indigo-700">
                <h2 class="text-2xl font-bold mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd" />
                    </svg>
                    Tips & Best Practices
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-black bg-opacity-30 p-5 rounded-lg">
                        <h3 class="font-semibold text-lg mb-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-yellow-400"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd" />
                            </svg>
                            For Best Results
                        </h3>
                        <ul class="space-y-2 text-gray-300">
                            <li class="flex items-start">
                                <span class="text-yellow-400 mr-2 mt-1">•</span>
                                <span>Use the sample IMEIs provided for consistent results</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-yellow-400 mr-2 mt-1">•</span>
                                <span>Allow the terminal animation to complete for full immersion</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-yellow-400 mr-2 mt-1">•</span>
                                <span>Review both the modal summary and detailed sections</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-yellow-400 mr-2 mt-1">•</span>
                                <span>Try different IMEIs to see various device types and locations</span>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-black bg-opacity-30 p-5 rounded-lg">
                        <h3 class="font-semibold text-lg mb-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-red-400"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd" />
                            </svg>
                            Important Reminders
                        </h3>
                        <ul class="space-y-2 text-gray-300">
                            <li class="flex items-start">
                                <span class="text-red-400 mr-2 mt-1">•</span>
                                <span>This is a simulation tool for educational purposes only</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-red-400 mr-2 mt-1">•</span>
                                <span>Real IMEI tracking requires legal authorization</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-red-400 mr-2 mt-1">•</span>
                                <span>Never attempt to track a device without permission</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-red-400 mr-2 mt-1">•</span>
                                <span>Respect privacy laws in your jurisdiction</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 class="text-2xl font-bold mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd" />
                    </svg>
                    Frequently Asked Questions
                </h2>
                <div class="space-y-6">
                    <div class="border-b border-gray-700 pb-6">
                        <h3 class="text-lg font-semibold mb-2">What is an IMEI number?</h3>
                        <p class="text-gray-400">
                            IMEI (International Mobile Equipment Identity) is a 15-digit number unique to each mobile
                            device.
                            It's used by carriers to identify valid devices and can be used to block a stolen phone from
                            their network.
                        </p>
                    </div>
                    <div class="border-b border-gray-700 pb-6">
                        <h3 class="text-lg font-semibold mb-2">Can I use this to track my lost phone?</h3>
                        <p class="text-gray-400">
                            No, this is a simulation tool for educational purposes only. To track a lost phone,
                            use official services like Find My iPhone (Apple) or Find My Device (Android).
                        </p>
                    </div>
                    <div class="border-b border-gray-700 pb-6">
                        <h3 class="text-lg font-semibold mb-2">Why does the terminal animation take so long?</h3>
                        <p class="text-gray-400">
                            The animation is designed to simulate a real tracking process and enhance the user
                            experience.
                            In a real system, these operations would take time to complete.
                        </p>
                    </div>
                    <div class="border-b border-gray-700 pb-6">
                        <h3 class="text-lg font-semibold mb-2">Is the data generated by this tool accurate?</h3>
                        <p class="text-gray-400">
                            The data is randomly generated or based on predefined examples to create a realistic
                            simulation.
                            It does not reflect real-world device locations or statuses.
                        </p>
                    </div>
                    <div class="pb-6">
                        <h3 class="text-lg font-semibold mb-2">How can I learn more about real device tracking?</h3>
                        <p class="text-gray-400">
                            For legitimate device tracking, research official services provided by device manufacturers
                            and mobile carriers. Always ensure you have proper authorization before attempting to track
                            any device.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>


</template>

<script setup>
import { useHead } from '@vueuse/head'
useHead({
    title: 'How to use - PhantomTracker',
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
            content: 'How to use - PhantomTracker'
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
            content: 'https://imeitracker.pages.dev/how-to-use'
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
            content: 'How to use - PhantomTracker'
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
            href: 'https://imeitracker.pages.dev/how-to-use'
        }
    ]
})
</script>

<style scoped>
/* Add any additional custom styles here */
</style>