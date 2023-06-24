export const handleTextareaHeight = (textarea: HTMLTextAreaElement | null) => {
  if (textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
    textarea.scrollTop = textarea.scrollHeight;
  }
};
