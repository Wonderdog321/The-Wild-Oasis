import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCheckOut } from "./useCheckOut";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckOut();
  return (
    <Button
      $variation="danger"
      $size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      {isCheckingOut ? <SpinnerMini /> : "Check out"}
    </Button>
  );
}

export default CheckoutButton;
