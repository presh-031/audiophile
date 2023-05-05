import BackBtn from "@/components/BackBtn";

const checkout = () => {
  return (
    <div>
      <BackBtn />
      <div className="outline">
        <p>CHECKOUT</p>

        <form>
          <p>BILLING DETAILS</p>
          <div>
            <label for="name">Name</label>
            <input type="text" placeholder="Alexel Ward" id="name" />

            <label for="email">Email Address</label>
            <input type="text" placeholder="alexel@mail.com" id="email" />

            <label for="phone">Phone Number</label>
            <input type="phone" placeholder="+1 202-555-0136" id="phone" />
          </div>

          <p>SHIPPING INFO</p>
          <label for="address">Your Address</label>
          <input type="text" placeholder="1137 Williams Avenue" id="address" />

          <div>
            <label for="zip-code">Email Address</label>
            <input type="text" placeholder="10001" id="zip-code" />

            <label for="city">City</label>
            <input type="text" placeholder="New York" id="city" />

            <label for="country">Country</label>
            <input type="text" placeholder="United States" id="country" />
          </div>

          <p>PAYMENT DETAILS</p>
        </form>
      </div>
    </div>
  );
};

export default checkout;
