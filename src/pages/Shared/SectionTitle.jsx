
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center my-20 mx-auto w-6/12">
      <p className="text-yellow-400 mb-5 text-xl font-mono"><i>...{subHeading}...</i></p>
      <h3 className="text-3xl border-y-4 uppercase p-5 font-bold">{heading}</h3>
    </div>
  );
};

export default SectionTitle;