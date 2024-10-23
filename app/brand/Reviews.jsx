import React from "react";

const Reviews = () => {
  return (
    <div className="p-8">
      <h1 className="text-6xl font-bold text-center">Reviews</h1>
      <div className="reviews grid grid-cols-3 gap-8 py-8">
        <div className="review">
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ipsa
            magnam distinctio atque at alias quod reiciendis aliquam aliquid
            perferendis? Nisi sequi praesentium minus modi maiores laboriosam
            autem distinctio rerum nesciunt nostrum sapiente corporis magnam
            accusamus necessitatibus eveniet assumenda corrupti, vitae id ad
            dolores nam nemo aperiam quae laudantium. Dignissimos.
          </p>
          <h2 className="font-bold text-xl mt-4">John Doe</h2>
          <span className="block text-sm italic">Nov 04, 2023</span>
        </div>
        <div className="review">
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ipsa
            magnam distinctio atque at alias quod reiciendis aliquam aliquid
            perferendis? Nisi sequi praesentium minus modi maiores laboriosam
            autem distinctio rerum nesciunt nostrum sapiente corporis magnam
            accusamus necessitatibus eveniet assumenda corrupti, vitae id ad
            dolores nam nemo aperiam quae laudantium. Dignissimos.
          </p>
          <h2 className="font-bold text-xl mt-4">John Doe</h2>
          <span className="block text-sm italic">Nov 04, 2023</span>
        </div>
        <div className="review">
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ipsa
            magnam distinctio atque at alias quod reiciendis aliquam aliquid
            perferendis? Nisi sequi praesentium minus modi maiores laboriosam
            autem distinctio rerum nesciunt nostrum sapiente corporis magnam
            accusamus necessitatibus eveniet assumenda corrupti, vitae id ad
            dolores nam nemo aperiam quae laudantium. Dignissimos.
          </p>
          <h2 className="font-bold text-xl mt-4">John Doe</h2>
          <span className="block text-sm italic">Nov 04, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
