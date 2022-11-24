import Button from 'src/components/Button/Button';

const Banner = () => {
  return (
    <div className="w-full">
      <img className="w-full" src={"/images/banner_1.webp"} alt={"banner"} />
      <div className="absolute top-0 left-0 h-full w-full">
        <img
          className="absolute h-24 w-24"
          src={"/images/capsule_corp_logo.png"}
          alt={"banner"}
        />
        <div className="mt-32 ml-auto w-[53%] p-3 text-left text-white">
          <span className="my-2 block text-5xl font-bold">
            Sky is the limit !
          </span>
          <span className=" text-md my-2 block font-semibold">
            Welcome to the place of endless possibilities. Our vision and
            mission is to explore the vast universe and uncover the mysteries.
          </span>
          <Button buttonType="success" className="float-right text-lg">
            Know more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
