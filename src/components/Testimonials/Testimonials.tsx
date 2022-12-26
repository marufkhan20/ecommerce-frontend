import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <div className="grid grid-cols-3 gap-9">
      <TestimonialItem
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          cumque hic. Deleniti perspiciatis, voluptatem perferendis possimus
          totam tenetur natus impedit assumenda, enim beatae quos mollitia
          quibusdam ipsam sunt. Ad, beatae."
        status="Head Of Idea"
        name="James C. Anderson"
        image="image-1"
      />
      <TestimonialItem
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          cumque hic. Deleniti perspiciatis, voluptatem perferendis possimus
          totam tenetur natus impedit assumenda, enim beatae quos mollitia
          quibusdam ipsam sunt. Ad, beatae."
        status="Head Of Idea"
        name="James C. Anderson"
        image="image-1"
      />
      <TestimonialItem
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          cumque hic. Deleniti perspiciatis, voluptatem perferendis possimus
          totam tenetur natus impedit assumenda, enim beatae quos mollitia
          quibusdam ipsam sunt. Ad, beatae."
        status="Head Of Idea"
        name="James C. Anderson"
        image="image-1"
      />
    </div>
  );
};

export default Testimonials;
