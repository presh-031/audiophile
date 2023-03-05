import { useRouter } from "next/router";
const BackBtn = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-[2.4rem] text-[1.5rem] font-medium leading-[2.5rem] text-[#000000] opacity-50"
    >
      Go Back
    </button>
  );
};

export default BackBtn;
