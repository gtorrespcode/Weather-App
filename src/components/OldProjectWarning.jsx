
const OldProjectWarning = () => {
  return (
    <div className=" bg-[#035682] text-center text-white h-screen flex flex-col gap-y-6 justify-center items-center">
      <h1 className="font-bold text-4xl">Old Project</h1>
      <p className=" text-xl w-2/4">
        This project is no longer receiving data due to some changes in the API,
        making further requests would require payment. Therefore, as this is a
        simple project, I will keep it as it is.
      </p>
      <p className="text-2xl">Thank You!!! ❤</p>
      <a href="https://github.com/gtorrespcode" target="_blank"><button className=" text-lg uppercase bg-white border-2 border-white text-[#035682] px-4 py-2 rounded-md hover:text-white hover:bg-transparent hover:scale-110">Go to the Github Page</button></a>
    </div>
  );
};

export default OldProjectWarning;
