import toast from "react-hot-toast";

export const addedItemToast = () => toast.success("Item added");
export const removedItemToast = () => toast.success("Item removed");

export const addedOneMoreItemToast = () => toast.success("Added One More");
export const removedOneItemToast = () => toast.success("Removed One");

export const cartIsEmpty = () =>
  toast.error("Cart is currently empty. Add more items.");
