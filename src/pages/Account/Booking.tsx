import priya from "@/assets/priya.png";
import sunny from "@/assets/sunny.png";
import Container from "@/components/Common/Container";

const data = [
  {
    img: sunny,
    name: "Sunny Leone",
    requestFor: "Recorder Video",
    bookingDate: "19 Oct, 2023",
    orderId: "630114",
    amount: "₹1,999",
  },
  {
    img: priya,
    name: "Priya Mani Raj",
    requestFor: "Recorder Video",
    bookingDate: "19 Oct, 2023",
    orderId: "630114",
    amount: "₹1,999",
  },
  {
    img: sunny,
    name: "Sunny Leone",
    requestFor: "Recorder Video",
    bookingDate: "19 Oct, 2023",
    orderId: "630114",
    amount: "₹1,999",
  },
  {
    img: priya,
    name: "Priya Mani Raj",
    requestFor: "Recorder Video",
    bookingDate: "19 Oct, 2023",
    orderId: "630114",
    amount: "₹1,999",
  },
];

const Booking = () => {
  return (
    <Container className="py-10">
      <div className="space-y-5">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="p-7 bg-[#202020] rounded-2xl flex items-center gap-5"
            >
              <div>
                <img
                  src={item.img}
                  className="w-[240px] h-[268px] object-cover rounded-2xl"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-between flex-1">
                <div>
                  <h3 className="text-4xl font-bold text-white">{item.name}</h3>
                  <div className="flex items-center space-x-8 mt-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-[50px]">
                        <p className="text-secondary font-semibold">
                          Request For
                        </p>
                        <p className="text-white font-semibold">
                          {item.requestFor}
                        </p>
                      </div>
                      <div className="flex items-center gap-[50px]">
                        <p className="text-secondary font-semibold">
                          19 Oct, 2023
                        </p>
                        <p className="text-white font-semibold">
                          {item.bookingDate}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-[50px]">
                        <p className="text-secondary font-semibold">
                          Order Id{" "}
                        </p>
                        <p className="text-white font-semibold">
                          {item.orderId}
                        </p>
                      </div>
                      <div className="flex items-center gap-[50px]">
                        <p className="text-secondary font-semibold">Amount </p>
                        <p className="text-white font-semibold">
                          {item.amount}{" "}
                          <span className="text-[8px] font-semibold text-secondary">
                            (INC. OF GSt)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-secondary">Booking For</p>
                  <p className="font-semibold text-white">Saurav gannguly</p>
                  <p className="font-semibold text-primary underline">
                    Need help?
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Booking;
