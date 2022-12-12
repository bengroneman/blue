<form name="contact" class="grid grid-cols-1 gap-y-6" netlify>
  <div>
    <label for="full-name" class="sr-only">Full name</label>
    <input type="text" name="full-name" id="full-name" autocomplete="name" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Full name">
  </div>
  <div>
    <label for="email" class="sr-only">Email</label>
    <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Email">
  </div>
  <div>
    <label for="phone" class="sr-only">Phone</label>
    <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Phone">
  </div>
  <div>
    <label for="message" class="sr-only">Message</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      placeholder="Message"
    ></textarea>
  </div>
  <div>
    <button
        type="submit"
        id="submit"
        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >Submit</button>
  </div>
</form>
