
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("RAY WEBHOOK ACTIVO");
  }

  try {
    const respuesta = await fetch(
      "https://script.google.com/macros/s/AKfycbx_ObhIyuiSKFhTOJJIdSfU_RkxALqZ2PPSjJF8Y_1i6m71DoNMcQVZpLwjZTevhO8vDg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      }
    );

    if (!respuesta.ok) {
      throw new Error("Google Apps Script respondió: " + respuesta.status);
    }

    return res.status(200).send("OK");

  } catch (error) {
    console.error("ERROR RAY:", error);
    return res.status(500).send("ERROR");
  }
}
