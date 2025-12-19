"use client";

type foodCard = {
  image: string;
  price: string;
  overview: string;
  title: string;
};

export const FoodCard = ({ image, title, overview, price }: foodCard) => {
  return (
    <div className="w-99.5 h-87 rounded-20 p-4 bg-[#FFFFFF] flex flex-col gap-5">
      <img
        src={image}
        alt=""
        className="w-91.5 h-52.5 object-cover rounded-20"
      />
      <div className="flex flex-row justify-between">
        <p className="text-[#EF4444] text-2xl font-semibold">{title}</p>
        <p className="text-[#09090B] text-[18px] font-semibold">{price}</p>
      </div>
      <p className="text-[#09090B] text-[14px] font-normal">{overview}</p>
    </div>
  );
};
