import { useRouter } from "next/router";
const BackBtn = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-[2.4rem] mt-[1.90rem] text-[1.5rem]  font-medium leading-[2.5rem] text-[#000000] opacity-50 sm:mt-[3.3rem] lg:mb-[5.6rem] lg:mt-[7.9rem]"
    >
      Go Back
    </button>
  );
};

export default BackBtn;
