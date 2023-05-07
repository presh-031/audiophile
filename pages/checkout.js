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
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Alexel Ward" id="name" />

            <label htmlFor="email">Email Address</label>
            <input type="text" placeholder="alexel@mail.com" id="email" />

            <label htmlFor="phone">Phone Number</label>
            <input type="phone" placeholder="+1 202-555-0136" id="phone" />
          </div>

          <p>SHIPPING INFO</p>
          <label htmlFor="address">Your Address</label>
          <input type="text" placeholder="1137 Williams Avenue" id="address" />

          <div>
            <label htmlFor="zip-code">Email Address</label>
            <input type="text" placeholder="10001" id="zip-code" />

            <label htmlFor="city">City</label>
            <input type="text" placeholder="New York" id="city" />

            <label htmlFor="country">Country</label>
            <input type="text" placeholder="United States" id="country" />
          </div>

          <p>PAYMENT DETAILS</p>
          <div>
            <p>Payment Method</p>
            <div>
              <div>
                <input type="radio" id="e-money" />
                <label htmlFor="e-money">e-Money</label>
              </div>

              <div>
                <input type="radio" id="cash-on-delivery" />
                <label htmlFor="cash-on-delivery">Cash on Delivery</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default checkout;