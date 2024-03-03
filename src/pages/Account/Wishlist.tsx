/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/components/Common/Container";
import { Button } from "@/components/ui/button";
import { removeFromWishlist } from "@/redux/features/Global/globalSlice";
import { useAppDispatch } from "@/redux/hooks";

const Wishlist = () => {
  const celebrities = localStorage.getItem("wishlist");
  const dispatch = useAppDispatch();

  let parseData;
  if (celebrities) {
    parseData = JSON.parse(celebrities);
  }

  return (
    <Container className="my-10">
      <div className="grid grid-cols-4 gap-8">
        {parseData.length &&
          parseData?.map((item: any, index: number) => {
            const { imgUrl, celebrityName, hashtag } = item;

            return (
              <div className="relative" key={index}>
                <img
                  className="rounded-2xl  h-[480px] object-cover w-[344px]"
                  src={`http://localhost:5000/uploads/${imgUrl}`}
                  alt=""
                />
                <div className="absolute w-[330px] rounded-bl-2xl rounded-br-2xl bottom-0 bg-gradient-to-t from-[#A92DA9] to-transparent pt-28">
                  <div className="p-4">
                    <h2 className="text-4xl font-bold text-white">
                      {celebrityName}
                    </h2>
                    <div className="flex items-center justify-between">
                      {hashtag?.map((tag: string, index: number) => (
                        <small
                          className="text-white text-xl"
                          key={index}
                          style={{ fontFamily: "'Satisfy', cursive" }}
                        >
                          #{tag}
                        </small>
                      ))}
                      <Button
                        onClick={() => dispatch(removeFromWishlist(item._id))}
                        className="bg-white font-semibold hover:bg-white text-primary rounded-full px-6"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default Wishlist;
