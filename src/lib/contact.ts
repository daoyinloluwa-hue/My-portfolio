export interface ContactMessage {
  name: string;
  email: string;
  project: string;
  message: string;
}

const CONTACT_EMAIL = "daoyinloluwa@gmail.com";

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export async function sendContactMessage(data: ContactMessage): Promise<void> {
  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`Submission failed (${res.status})`);
    }
    return;
  }

  const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\nProject type: ${data.project || "Not specified"}\n\n${data.message}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
