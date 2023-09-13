import { defineStore } from "pinia";
type Variant = "error" | "success" | "info" | "warning";

const useToastStore = defineStore("tost", () => {
  const open = useState("open", () => false);
  const text = useState("text", () => "");
  const variant = useState<Variant>("variant", () => "success");

  function fireTost(message: string, type: Variant) {
    variant.value = type;
    text.value = message;
    open.value = true;
  }

  function closeTost() {
    open.value = false;
    text.value = "";
  }

  return {
    open,
    fireTost,
    closeTost,
    text,
    variant,
  };
});

export default useToastStore;
