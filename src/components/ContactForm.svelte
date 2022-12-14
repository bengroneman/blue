<form
  name="contact"
  class="grid grid-cols-1 gap-y-6"
  data-netlify="true"
  method="POST"
>
  <div>
    <label for="full-name" class="sr-only">Full name</label>
    <input
      type="text"
      name="full-name"
      id="full-name"
      autocomplete="name"
      class="form-input"
      placeholder="Full name"
    >
  </div>
  <div>
    <label for="email" class="sr-only">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      autocomplete="email"
      class="form-input" placeholder="Email">
  </div>
  <div>
    <label for="phone" class="sr-only">Phone</label>
    <input
      type="text"
      name="phone"
      id="phone"
      autocomplete="tel"
      class="form-input"
      placeholder="Phone"
    >
  </div>
  <div>
    <label for="message" class="sr-only">Message</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      class="form-textarea"
      placeholder="Message"
    ></textarea>
  </div>
  <div>
    <button
        type="submit"
        id="submit"
        class="btn-primary"
    >Submit</button>
  </div>
</form>
