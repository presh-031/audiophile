import BackBtn from "@/components/BackBtn";

const checkout = () => {
  return (
    <div className="px-[2.4rem]">
      <BackBtn />
      <div>
        <div className="bg-[#FFFFFF] outline">
          <p className="mb-[3.2rem] text-[2.8rem] font-bold leading-[3.825rem] tracking-[0.1rem]">
            CHECKOUT
          </p>

          <form className="outline">
            <p className="mb-[1.6rem] text-[1.3rem] font-bold leading-[2.5rem] tracking-[0.093rem] text-[#d87d4a]">
              BILLING DETAILS
            </p>
            <div>
              <label
                htmlFor="name"
                className="mb-[0.9rem] block text-[1.2rem] font-bold leading-[1.639rem] tracking-[-0.021rem]"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Alexel Ward"
                id="name"
                className="mb-[2.4rem] block w-full border-[1px] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] font-bold leading-[1.912rem] tracking-[-0.025rem] text-[#000000] outline-none placeholder:opacity-40"
              />

              <label
                htmlFor="email"
                className="mb-[0.9rem] block text-[1.2rem] font-bold leading-[1.639rem] tracking-[-0.021rem]"
              >
                Email Address
              </label>
              <input
                className="mb-[2.4rem] block w-full border-[1px] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] font-bold leading-[1.912rem] tracking-[-0.025rem] text-[#000000] outline-none placeholder:opacity-40"
                type="text"
                placeholder="alexel@mail.com"
                id="email"
              />

              <label
                htmlFor="phone"
                className="mb-[0.9rem] block text-[1.2rem] font-bold leading-[1.639rem] tracking-[-0.021rem]"
              >
                Phone Number
              </label>
              <input
                className="mb-[2.4rem] block w-full border-[1px] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] font-bold leading-[1.912rem] tracking-[-0.025rem] text-[#000000] outline-none placeholder:opacity-40"
                type="phone"
                placeholder="+1 202-555-0136"
                id="phone"
              />
            </div>

            <p className="mt-[0.80rem] mb-[1.6rem]">SHIPPING INFO</p>
            <label
              htmlFor="address"
              className="mb-[0.9rem] block text-[1.2rem] font-bold leading-[1.639rem] tracking-[-0.021rem]"
            >
              Your Address
            </label>
            <input
              type="text"
              placeholder="1137 Williams Avenue"
              id="address"
              className="mb-[2.4rem] block w-full border-[1px] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] font-bold leading-[1.912rem] tracking-[-0.025rem] text-[#000000] outline-none placeholder:opacity-40"
            />

            <div>
              <label
                htmlFor="zip-code"
                className="mb-[0.9rem] block text-[1.2rem] font-bold leading-[1.639rem] tracking-[-0.021rem]"
              >
                Email Address
              </label>
              <input
                className="mb-[2.4rem] block w-full border-[1px] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] font-bold leading-[1.912rem] tracking-[-0.025rem] text-[#000000] outline-none placeholder:opacity-40"
                type="text"
                placeholder="10001"
                id="zip-code"
              />

              <label
                htmlFor="city"
                className="mb-[0.9rem] block text-[1.2rem] font-bold leading-[1.639rem] tracking-[-0.021rem]"
              >
                City
              </label>
              <input
                className="mb-[2.4rem] block w-full border-[1px] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] font-bold leading-[1.912rem] tracking-[-0.025rem] text-[#000000] outline-none placeholder:opacity-40"
                type="text"
                placeholder="New York"
                id="city"
              />

              <label
                htmlFor="country"
                className="mb-[0.9rem] block text-[1.2rem] font-bold leading-[1.639rem] tracking-[-0.021rem]"
              >
                Country
              </label>
              <input
                className="mb-[2.4rem] block w-full border-[1px] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] font-bold leading-[1.912rem] tracking-[-0.025rem] text-[#000000] outline-none placeholder:opacity-40"
                type="text"
                placeholder="United States"
                id="country"
              />
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
            <div>
              <div>
                <label
                  htmlFor="e-money-number"
                  className="mb-[0.9rem] block text-[1.2rem] font-bold leading-[1.639rem] tracking-[-0.021rem]"
                >
                  e-Money Number
                </label>
                <input
                  className="mb-[2.4rem] block w-full border-[1px] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] font-bold leading-[1.912rem] tracking-[-0.025rem] text-[#000000] outline-none placeholder:opacity-40"
                  type="number"
                  placeholder="238521993"
                  id="e-money-number"
                />
              </div>
              <div>
                <label
                  htmlFor="e-money"
                  className="mb-[0.9rem] block text-[1.2rem] font-bold leading-[1.639rem] tracking-[-0.021rem]"
                >
                  e-Money PIN
                </label>
                <input
                  className="mb-[2.4rem] block w-full border-[1px] border-[#CFCFCF] px-[2.4rem] py-[1.8rem] text-[1.4rem] font-bold leading-[1.912rem] tracking-[-0.025rem] text-[#000000] outline-none placeholder:opacity-40"
                  type="password"
                  placeholder="6891"
                  id="e-money-pin"
                />
              </div>
            </div>
          </form>
        </div>

        <div>
          <p>SUMMARY</p>
        </div>
      </div>
    </div>
  );
};

export default checkout;
