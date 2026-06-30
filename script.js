const form = document.getElementById("waitlist-form");
const note = document.getElementById("form-note");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  note.textContent = "Thank you for joining us. We’ll let you know when the first public preview is ready.";
  form.reset();
});
