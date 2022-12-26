import NewArrivalItem from "./NewArrivalItem";

const NewArrivals = () => {
  return (
    <div className="grid grid-cols-4 gap-12">
      <NewArrivalItem />
      <NewArrivalItem />
      <NewArrivalItem />
      <NewArrivalItem />
    </div>
  );
};

export default NewArrivals;
