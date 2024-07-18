const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="w-full border-b-[1px] border-t-[1px] py-8">
        <div className="mx-auto w-64 text-center">
          <p className="text-sm">See Personalized recommendations</p>
          <button className="w-full cursor-pointer rounded-md bg-yellow-400 py-2 font-semibold hover:bg-yellow-500 active:bg-yellow-700">
            Sign in
          </button>
          <p className="mt-1 text-xs">
            New customer?{" "}
            <span className="ml-1 cursor-pointer text-blue-600">
              Start here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
