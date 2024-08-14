export let assistantId = "asst_9dXhCNuA1cGszyCER5VRKlvG
"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
