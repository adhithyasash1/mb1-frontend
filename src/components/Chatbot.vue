<template>
  <section class="p-10">
    <h2 class="text-2xl font-semibold text-primary">Chatbot</h2>
    <div class="mt-4 space-y-4">
      <!-- Textarea -->
      <textarea
          v-model="userQuery"
          placeholder="Ask me a question about my resume..."
          class="w-full border rounded px-4 py-2 resize-none"
      ></textarea>
      <!-- Submit Button -->
      <button
          @click="askChatbot"
          class="mt-4 bg-accent text-white px-4 py-2 rounded w-full sm:w-auto"
      >
        Submit
      </button>
      <!-- Response Container -->
      <div v-if="response" class="mt-4 text-gray-700">
        <div class="bg-gray-100 p-4 rounded-md shadow-md max-h-60 overflow-auto">
          <p><strong>Response:</strong></p>
          <p>{{ response }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Chatbot",
  data() {
    return {
      userQuery: "",
      response: "",
    };
  },
  methods: {
    async askChatbot() {
      try {
        const res = await fetch("https://mb1-backend.onrender.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: this.userQuery }),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        this.response = data.response;
      } catch (err) {
        console.error("Response Error:", err);
        this.response = "An error occurred. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
/* Ensure that the chatbot doesn't distort the layout */
section {
  max-width: 900px;
  margin: 0 auto;
}

/* Add spacing around the textarea, button, and response */
textarea {
  max-height: 120px;
}

/* Button and response box for mobile */
button {
  width: 100%;
}

.response-container {
  max-height: 300px;
  overflow-y: auto;
}

.response-container p {
  margin-top: 10px;
}

/* Scrollable response box */
.max-h-60 {
  max-height: 240px;
  overflow-y: auto;
}
</style>
